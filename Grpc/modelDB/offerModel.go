package modelDB

import (
	"article/libraries"
	"article/proto"
	"database/sql"
	"log"
	"time"
)

type OfferModel struct {
}

func (then *OfferModel) CreateOffer(db *sql.DB, rq *proto.OfferServiceCreateRQ) (id int64, error error) {
	now := time.Now()
	sql := "INSERT INTO offers(title,description,fk_user_id,created_at,updated_at, offer, start_at, end_at) VALUES($1,$2,$3,$4,$5, $6, $7, $8) returning id"
	error = db.QueryRow(sql,
		rq.GetTitle(),
		rq.GetDescription(),
		rq.GetUser(),
		now,
		now,
		rq.GetPrice(),
		rq.GetStartAt(),
		rq.GetEndAt(),
	).Scan(&id)

	if error != nil {
		//println("No se ha podido guardar el usuario", err.Error())
		return
	}
	return
}

func (then *OfferModel) Assign(db *sql.DB, articles []*proto.OfferServiceAssignArticle, offerId int64) error {
	tx, _ := db.Begin()
	orm := new(libraries.ORMDelete)
	orm.From("offers_articles")
	orm.Where("fk_offer_id", "=", offerId)
	orm.Build()
	toSQL, i := orm.ToSQL()
	_, e := tx.Exec(toSQL, i...)
	if e != nil {
		_ = tx.Rollback()
		return e
	}
	for _, article := range articles {
		if article.Selected {
			orm := new(libraries.ORMInsert)
			orm.From("offers_articles")
			orm.Add("fk_offer_id", offerId)
			orm.Add("fk_article_id", article.Id)
			orm.Build()
			toSQL, data := orm.ToSQL()
			_, err := tx.Exec(toSQL, data...)
			if err != nil {
				_ = tx.Rollback()
				return err
			}
		} else {
			orm := new(libraries.ORMDelete)
			orm.From("offers_articles")
			orm.WhereAnd("fk_offer_id", "=", offerId)
			orm.Where("fk_article_id", "=", article.Id)
			orm.Build()
			toSQL, data := orm.ToSQL()
			_, err := tx.Exec(toSQL, data...)
			if err != nil {
				_ = tx.Rollback()
				return err
			}
		}
	}
	err := tx.Commit()
	if err != nil {
		log.Fatal(err)
		return err
	}

	return nil
}
