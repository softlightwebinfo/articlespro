package controllers

import (
	"article/libraries"
	"article/modelDB"
	"article/models"
	"article/proto"
	"article/settings"
	"context"
	sql2 "database/sql"
	"encoding/json"
	"fmt"
	"github.com/lib/pq"
	"time"
)

type OfferController struct {
}

func (u *OfferController) GetAllUsers(c context.Context, request *proto.OfferServiceGetAllUsersRQ) (*proto.OfferServiceGetAllUsersRS, error) {
	limit := "0"
	offset := "0"
	orm := new(libraries.ORM)

	orm.
		Select("a.id, a.title, a.description, a.updated_at, start_at, end_at, offer, (select c.image from offers_images c WHERE a.id=c.fk_offer_id ORDER BY random() LIMIT 1) as image").
		From("offers a").WhereAnd("fk_user_id", "=", request.GetUser()).
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
	redisKey := fmt.Sprintf("offers:all:users:%s:%s:%d", offset, limit, request.GetUser())
	get := settings.Redis.Get(redisKey)
	valRedis, errRedis := get.Result()
	if errRedis == nil {
		var r = &proto.OfferServiceGetAllUsersRS{}
		_ = json.Unmarshal([]byte(valRedis), r)
		return r, nil
	}
	data, args := orm.Build().ToSql()
	rows, err := settings.Db.Query(data, args...)
	if err != nil {
		println("Error: ", err.Error())
		return nil, err
	}
	var result []*proto.OfferUserServiceModel
	{
	}
	var image sql2.NullString
	for rows.Next() {
		model := proto.OfferUserServiceModel{}
		tim := time.Time{}
		start := pq.NullTime{}
		end := pq.NullTime{}
		e := rows.Scan(
			&model.Id,
			&model.Title,
			&model.Description,
			&tim,
			&start,
			&end,
			&model.Offer,
			&image,
		)
		model.Image = image.String
		_ = start.Scan(&model.StartAt)
		_ = end.Scan(&model.EndAt)
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
	res := &proto.OfferServiceGetAllUsersRS{
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
func (s *OfferController) Create(_ context.Context, request *proto.OfferServiceCreateRQ) (*proto.OfferServiceRS, error) {
	model := modelDB.OfferModel{}
	id, e := model.CreateOffer(settings.Db, request)
	if e != nil {
		println("Error: ", e.Error())
		return nil, e
	}
	if len(request.GetFileNames()) > 0 {
		for _, file := range request.GetFileNames() {
			orm := new(libraries.ORMInsert)
			orm.From("offers_images")
			orm.Add("fk_offer_id", id)
			orm.Add("image", file)
			_, _, e := orm.Build().Save(settings.Db)
			if e != nil {
				println("Error", e.Error())
				return nil, e
			}
		}
	}

	if id > 0 {
		art := models.RedisOffer{}
		art.DeleteCache(settings.Redis)
	}
	return &proto.OfferServiceRS{
		Success: id > 0,
	}, nil
}
func (s *OfferController) Assign(_ context.Context, request *proto.OfferServiceAssignRQ) (*proto.OfferServiceRS, error) {
	model := modelDB.OfferModel{}
	assign := model.Assign(settings.Db, request.Articles, request.Offer)
	if assign != nil {
		return &proto.OfferServiceRS{
			Success: false,
		}, nil
	}
	return &proto.OfferServiceRS{
		Success: true,
	}, nil
}
func (s *OfferController) Assigned(_ context.Context, request *proto.OfferServiceAssignedRQ) (*proto.OfferServiceAssignedRS, error) {
	orm := new(libraries.ORM)
	build := orm.
		Select("fk_offer_id, fk_article_id").
		From("offers_articles").
		Where("fk_offer_id", "=", request.GetOffer()).
		Build()
	sql, i := build.ToSql()
	rows, e := settings.Db.Query(sql, i...)
	if e != nil {
		return nil, e
	}
	result := &proto.OfferServiceAssignedRS{}
	for rows.Next() {
		model := &proto.OfferServiceAssignedModelRS{}
		e := rows.Scan(
			&model.OfferId,
			&model.ArticleId,
		)
		result.Result = append(result.Result, model)
		if e != nil {
			return nil, e
		}
	}

	return result, nil
}
