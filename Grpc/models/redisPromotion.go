package models

import "github.com/go-redis/redis"

type RedisPromotion struct {
}

func (then *RedisPromotion) DeleteCache(redis *redis.Client) {
	iter := redis.Scan(0, "promotions*", 0).Iterator()
	for iter.Next() {
		err := redis.Del(iter.Val()).Err()
		if err != nil {
			panic(err)
		}
	}
}
