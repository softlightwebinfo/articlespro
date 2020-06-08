package controllers

import (
	"article/libraries"
	"article/modelDB"
	"article/models"
	"article/proto"
	"article/settings"
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"time"
)

type UserController struct {
}

func (u UserController) Update(c context.Context, rq *proto.UserServiceUpdateRq) (*proto.UserServiceBool, error) {
	orm := new(libraries.ORMUpdate)
	orm.From("users")
	orm.Add("email", rq.GetEmail())
	orm.Add("password", rq.GetPassword())
	orm.Add("updated_at", time.Now())
	orm.Add("active", rq.GetActive())
	orm.Add("name", rq.GetName())
	orm.Where("id", "=", rq.GetId())
	b := orm.Build()
	_, a, e := b.Save(settings.Db)
	if e != nil {
		println("Error", e.Error())
		return nil, e
	}
	if a == 1 {
		art := models.RedisUser{}
		art.DeleteCache(settings.Redis)
	}
	return &proto.UserServiceBool{
		Success: a == 1,
	}, nil
}
func (u UserController) Get(c context.Context, rq *proto.UserServiceGetRq) (*proto.UserServiceGetRs, error) {
	orm := new(libraries.ORM)
	redisKey := fmt.Sprintf("users:get:%d", rq.GetId())
	redisKeyRs, redisKeyErr := settings.Redis.Get(redisKey).Result()
	model := proto.UserServiceGetRs{}
	if redisKeyErr == nil {
		_ = json.Unmarshal([]byte(redisKeyRs), &model)
		return &model, nil
	}
	data, args := orm.Select("id, email, updated_at, name, description").
		From("users").
		WhereAnd("active", "=", true).
		Where("id", "=", rq.GetId()).
		Build().ToSql()
	tim := time.Time{}

	err := settings.Db.QueryRow(data, args...).Scan(
		&model.Id,
		&model.Email,
		&tim,
		&model.Name,
		&model.Description,
	)
	model.UpdatedAt = tim.Format("2006-01-02 15:04:05")
	if err != nil {
		println("Error: ", err.Error())
		return nil, err
	}
	redisSet, _ := json.Marshal(model)
	settings.Redis.Set(redisKey, redisSet, time.Duration(settings.MinuteSaveRedis))
	return &model, nil
}
func (u UserController) Login(c context.Context, rq *proto.UserServiceLoginRq) (*proto.UserServiceLoginRs, error) {
	userModel := modelDB.UserModel{}
	return userModel.Login(rq.GetEmail(), rq.GetPassword())
}

func (u UserController) GetAll(c context.Context, rq *proto.UserServiceGetAllRq) (*proto.UserServiceGetAllRs, error) {
	orm := new(libraries.ORM)
	orm.Select("id, email, updated_at, name")
	orm.From("users")
	orm.Where("active", "=", true)
	orm.Order("updated_at", "desc")
	orm.Limit(rq.GetLimit())
	orm.Offset(rq.GetOffset())
	redisKey := fmt.Sprintf("users:all:%s:%s", rq.GetOffset(), rq.GetLimit())
	sql, i := orm.Build().ToSql()
	get := settings.Redis.Get(redisKey)
	valRedis, errRedis := get.Result()
	if errRedis == nil {
		var r = &proto.UserServiceGetAllRs{}
		_ = json.Unmarshal([]byte(valRedis), r)
		return r, nil
	}
	rows, err := settings.Db.Query(sql, i...)
	if err != nil {
		println("Error: ", err.Error())
		return nil, err
	}
	var result []*proto.UserServiceModel
	for rows.Next() {
		model := proto.UserServiceModel{}
		tim := time.Time{}
		e := rows.Scan(
			&model.Id,
			&model.Email,
			&tim,
			&model.Name,
		)
		model.UpdatedAt = tim.Format("2006-01-02 15:04:05")
		if e != nil {
			println("Error 2", e.Error())
			return nil, e
		}
		result = append(result, &model)
	}
	orm.ClearSelect()
	orm.Select("count(id) as total")
	orm.ClearLimit()
	orm.ClearOffset()
	orm.ClearOrderBy()
	sql, args2 := orm.Build().ToSql()
	var totalCount int64 = 0
	e := settings.Db.QueryRow(sql, args2...).Scan(&totalCount)
	if e != nil {
		return nil, e
	}
	rs := &proto.UserServiceGetAllRs{
		Result: result,
		Count:  totalCount,
	}
	p, err := json.Marshal(rs)
	errSet := settings.Redis.Set(redisKey, p, time.Duration(settings.MinuteSaveRedis)).Err()
	if errSet != nil {
		return nil, errSet
	}
	return rs, nil
}

func (u UserController) Delete(c context.Context, rq *proto.UserServiceDeleteRq) (*proto.UserServiceBool, error) {
	orm := new(libraries.ORMDelete)
	orm.From("users")
	orm.Where("id", "=", rq.GetId())
	b := orm.Build()
	_, a, e := b.Save(settings.Db)
	if e != nil {
		println("Error", e.Error())
		return nil, e
	}
	if a == 1 {
		art := models.RedisUser{}
		art.DeleteCache(settings.Redis)
	}
	return &proto.UserServiceBool{
		Success: a == 1,
	}, nil
}

func (u UserController) Create(c context.Context, r *proto.UserServiceCreateRq) (*proto.UserServiceLoginRs, error) {
	userModel := modelDB.UserModel{}
	existUser := userModel.ExistUser(settings.Db, r.GetEmail())

	if !existUser {
		return nil, errors.New("Ya existe el usuario en nuestro sistema")
	}
	id, errorCreateUser := userModel.CreateUser(settings.Db, r)
	if errorCreateUser != nil {
		log.Print(errorCreateUser.Error())
		return nil, errorCreateUser
	}

	for _, phone := range r.GetPhone() {
		errPhone := userModel.AddPhone(phone, id)
		if errPhone != nil {
			log.Print(errPhone.Error())
			return nil, errPhone
		}
	}

	if id > 0 {
		redisDel := models.RedisUser{}
		redisDel.DeleteCache(settings.Redis)
	}

	return userModel.Login(r.GetEmail(), r.GetPassword())
}

func (u UserController) Start(c context.Context, rq *proto.UserServiceGetRq) (*proto.UserServiceLoginRs, error) {
	userModel := modelDB.UserModel{}
	orm := new(libraries.ORM)

	data, args := orm.Select("id, email, password").
		From("users").
		WhereAnd("active", "=", true).
		Where("id", "=", rq.GetId()).
		Build().ToSql()

	var id int64
	var email, password string

	err := settings.Db.QueryRow(data, args...).Scan(
		&id,
		&email,
		&password,
	)

	if err != nil {
		log.Print("No se ha encontrado el usuario")
		return nil, err
	}

	return userModel.Login(email, password)
}
