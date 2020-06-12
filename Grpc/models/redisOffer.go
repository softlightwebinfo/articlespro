package models

import "github.com/go-redis/redis"

type RedisOffer struct {
}

func (then *RedisOffer) DeleteCache(redis *redis.Client) {
	iter := redis.Scan(0, "offers*", 0).Iterator()
	for iter.Next() {
		err := redis.Del(iter.Val()).Err()
		if err != nil {
			panic(err)
		}
	}
}
