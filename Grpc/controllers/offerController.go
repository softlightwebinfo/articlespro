package controllers

import (
	"article/libraries"
	"article/modelDB"
	"article/models"
	"article/proto"
	"article/settings"
	"context"
	"encoding/json"
	"fmt"
	sql2 "database/sql"
	"time"
)

type PromotionController struct {
}

func (u PromotionController) GetAllUsers(c context.Context, request *proto.PromotionServiceGetAllUsersRQ) (*proto.PromotionServiceGetAllUsersRS, error) {
	limit := "0"
	offset := "0"
	orm := new(libraries.ORM)

	orm.
		Select("a.id, a.title, a.description, a.updated_at,  (select c.image from promotions_images c WHERE a.id=c.fk_promotion_id ORDER BY random() LIMIT 1) as image").
		From("promotions a").WhereAnd("fk_user_id", "=", request.GetUser()).
		Where("a.deleted_at", "nil", "is null")
	orm.Order("a.updated_at", "desc")
	if request.GetLimit() != "" {
		orm.Limit(request.GetLimit())
		limit = request.GetLimit()
	} else {
		orm.Limit(string(settings.Limit))
		limit = string(settings.Limit)
	}
	if request.GetOffset() != "" {
		orm.Offset(request.GetOffset())
		offset = request.GetOffset()
	}
	redisKey := fmt.Sprintf("promotions:all:users:%s:%s:%d", offset, limit, request.GetUser())
	get := settings.Redis.Get(redisKey)
	valRedis, errRedis := get.Result()
	if errRedis == nil {
		var r = &proto.PromotionServiceGetAllUsersRS{}
		_ = json.Unmarshal([]byte(valRedis), r)
		return r, nil
	}
	data, args := orm.Build().ToSql()
	rows, err := settings.Db.Query(data, args...)
	if err != nil {
		println("Error: ", err.Error())
		return nil, err
	}
	var image sql2.NullString
	var result []*proto.PromotionUserServiceModel
	{
	}
	for rows.Next() {
		model := proto.PromotionUserServiceModel{}
		tim := time.Time{}
		e := rows.Scan(
			&model.Id,
			&model.Title,
			&model.Description,
			&tim,
			&image,
		)
		model.Image = image.String
		model.UpdatedAt = tim.Format("2006-01-02 15:04:05")
		if e != nil {
			println("Error 2", e.Error())
			return nil, e
		}
		result = append(result, &model)
	}
	orm.ClearSelect()
	orm.Select("count(a.id) as total")
	orm.ClearLimit()
	orm.ClearOffset()
	orm.ClearOrderBy()
	sql, args2 := orm.Build().ToSql()
	var totalCount int64 = 0
	e := settings.Db.QueryRow(sql, args2...).Scan(&totalCount)
	if e != nil {
		return nil, e
	}
	res := &proto.PromotionServiceGetAllUsersRS{
		Result: result,
		Count:  totalCount,
	}
	p, _ := json.Marshal(res)
	errSet := settings.Redis.Set(redisKey, p, settings.MinuteSaveRedis).Err()
	if errSet != nil {
		return nil, errSet
	}
	return res, nil
}
func (s *PromotionController) Create(_ context.Context, request *proto.PromotionServiceCreateRQ) (*proto.PromotionServiceRS, error) {
	model := modelDB.PromotionModel{}
	id, e := model.CreatePromotion(settings.Db, request)
	if e != nil {
		println("Error: ", e.Error())
		return nil, e
	}
	if len(request.GetFileNames()) > 0 {
		for _, file := range request.GetFileNames() {
			orm := new(libraries.ORMInsert)
			orm.From("promotions_images")
			orm.Add("fk_promotion_id", id)
			orm.Add("image", file)
			_, _, e := orm.Build().Save(settings.Db)
			if e != nil {
				println("Error", e.Error())
				return nil, e
			}
		}
	}

	if id > 0 {
		art := models.RedisPromotion{}
		art.DeleteCache(settings.Redis)
	}
	return &proto.PromotionServiceRS{
		Success: id > 0,
	}, nil
}
