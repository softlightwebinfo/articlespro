package controllers

import (
	"article/libraries"
	"article/proto"
	"article/settings"
	"context"
	"log"
)

type ContactController struct {
}

func (u ContactController) Send(c context.Context, r *proto.ContactServiceSendRq) (*proto.ContactServiceBool, error) {
	orm := new(libraries.ORMInsert)
	orm.From("contact")
	orm.Add("name", r.GetName())
	orm.Add("email", r.GetEmail())
	orm.Add("phone", r.GetPhone())
	orm.Add("subject", r.GetSubject())
	orm.Add("message", r.GetMessage())

	build := orm.Build()
	_, a, err := build.Save(settings.Db)
	if err != nil {
		log.Print(err.Error())
		return nil, err
	}
	return &proto.ContactServiceBool{
		Success: a == 1,
	}, nil
}
