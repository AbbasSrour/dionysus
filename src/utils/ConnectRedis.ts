import { createClient } from 'redis';

const redisUrl = 'redis://localhost:6379';

export const RedisClient = createClient({
  url: redisUrl,
});

export const ConnectRedis = async () => {
  try {
    await RedisClient.connect();
    console.log('Redis client connected successfully');
    RedisClient.set('try', 'Hello Welcome to Express with TypeORM');
  } catch (error) {
    console.log(error);
    setTimeout(ConnectRedis, 5000);
  }
};

