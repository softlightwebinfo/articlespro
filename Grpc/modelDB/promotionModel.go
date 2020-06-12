package modelDB

import (
	"article/proto"
	"database/sql"
	"time"
)

type PromotionModel struct {
}

func (then *PromotionModel) CreatePromotion(db *sql.DB, rq *proto.PromotionServiceCreateRQ) (id int64, error error) {
	now := time.Now()
	sql := "INSERT INTO promotions(title,description,fk_user_id,created_at,updated_at) VALUES($1,$2,$3,$4,$5) returning id"
	error = db.QueryRow(sql,
		rq.GetTitle(),
		rq.GetDescription(),
		rq.GetUser(),
		now,
		now,
	).Scan(&id)

	if error != nil {
		//println("No se ha podido guardar el usuario", err.Error())
		return
	}
	return
}
