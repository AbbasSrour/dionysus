import { createClient } from "redis";
import { env } from "./validate-env.util";

export const RedisClient = createClient({
  url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
});

export const ConnectRedis = async () => {
  try {
    await RedisClient.connect();
    await RedisClient.set("try", "Hello Welcome to Express with TypeORM");
    return true;
  } catch (error) {
    console.log(error);
    setTimeout(ConnectRedis, 5000);
  }
};
