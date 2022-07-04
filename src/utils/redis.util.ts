import { createClient } from "redis";
import config from "config";

export const RedisClient = createClient({
  url: `redis://localhost:${config.get<number>("redis_port")}`,
});

export const ConnectRedis = async () => {
  try {
    await RedisClient.connect();
    RedisClient.set("try", "Hello Welcome to Express with TypeORM");
    return true;
  } catch (error) {
    console.log(error);
    setTimeout(ConnectRedis, 5000);
  }
}
