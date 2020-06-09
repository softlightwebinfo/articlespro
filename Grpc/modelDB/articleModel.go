package modelDB

import (
	"article/proto"
	"database/sql"
	"time"
)

type ArticleModel struct {
}

func (then *ArticleModel) CreateArticle(db *sql.DB, rq *proto.ArticleServiceCreateRq) (id int64, error error) {
	now := time.Now()
	sql := "INSERT INTO articles(title,description,fk_user_id,fk_category_id, price, offer,created_at,updated_at) VALUES($1,$2,$3,$4,$5,$6,$7,$8) returning id"
	error = db.QueryRow(sql,
		rq.GetTitle(),
		rq.GetDescription(),
		rq.GetFkUserId(),
		rq.GetFkCategoryId(),
		rq.GetPrice(),
		rq.GetOffer(),
		now,
		now,
	).Scan(&id)

	if error != nil {
		//println("No se ha podido guardar el usuario", err.Error())
		return
	}
	return
}
