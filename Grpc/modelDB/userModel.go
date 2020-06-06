package modelDB

import (
	"article/libraries"
	"article/proto"
	"article/settings"
	"database/sql"
	"log"
	"time"
)

type UserModel struct {
}

func (then *UserModel) AddPhone(phone string, fkUserId int64) (error error) {
	orm := new(libraries.ORMInsert)
	orm.From("users_phones")
	orm.Add("fk_user_id", fkUserId)
	orm.Add("phone", phone)
	build := orm.Build()
	_, _, err := build.Save(settings.Db)
	if err != nil {
		log.Print(err.Error())
		return err
	}
	return
}

func (then *UserModel) CreateUser(db *sql.DB, rq *proto.UserServiceCreateRq) (id int64, error error) {
	now := time.Now()
	sql := "INSERT INTO users(email, password, created_at, updated_at, active, name) VALUES($1,$2,$3,$4,$5,$6) returning id"
	error = db.QueryRow(sql,
		rq.GetEmail(),
		rq.GetPassword(),
		now,
		now,
		true,
		rq.GetName()).Scan(&id)

	if error != nil {
		//println("No se ha podido guardar el usuario", err.Error())
		return
	}
	return
}

func (then *UserModel) ExistUser(db *sql.DB, email string) (existUser bool) {
	orm := new(libraries.ORM)
	data, args := orm.Select("id").
		From("users").
		Where("email", "=", email).
		Build().ToSql()

	e := settings.Db.QueryRow(data, args...).Scan(
		&email,
	)

	if e != nil {
		return true
	}
	return false
}

func (then *UserModel) Login(email, password string) (user *proto.UserServiceLoginRs, error error) {
	orm := new(libraries.ORM)
	model := proto.UserServiceLoginRs{}
	data, args := orm.Select("id, email, updated_at, name").
		From("users").
		WhereAnd("active", "=", true).
		WhereAnd("email", "=", email).
		Where("password", "=", password).
		Build().ToSql()
	tim := time.Time{}
	model.User = &proto.UserServiceModel{}
	err := settings.Db.QueryRow(data, args...).Scan(
		&model.User.Id,
		&model.User.Email,
		&tim,
		&model.User.Name,
	)
	model.User.UpdatedAt = tim.Format("2006-01-02 15:04:05")
	if err != nil {
		println("Error: ", err.Error())
		return nil, err
	}
	model.Token = "token-jwt-" + string(model.User.Id)
	return &model, nil
}
