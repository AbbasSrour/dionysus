import { createClient } from "redis";
import { env } from "./validate-env.util";
import log from "./logger.util";

export const RedisClient = createClient({
  url: `redis://${env.REDIS_HOST}:${env.REDIS_PORT}`,
});

export const ConnectRedis = async () => {
  try {
    await RedisClient.connect();
    await RedisClient.set("try", "Redis is working just fine");
    return true;
  } catch (error) {
    log.error(error);
    setTimeout(ConnectRedis, 5000);
  }
};
