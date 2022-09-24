import * as Joi from 'joi';

export const validateEnv = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .default('development'),
  PORT: Joi.number().default(3000),
  REDIS_STORE_HOST: Joi.string(),
  REDIS_HOST: Joi.string(),
  REDIS_PORT: Joi.number(),
  REDIS_CACHE_EXPIRATION: Joi.number(),
  HERCULES_DB_URL: Joi.string(),
  ORIGIN: Joi.string(),
  LOKI_HOST: Joi.string(),
  AMQP_URL: Joi.string(),
  RABBIT_MQ_HERCULES_QUEUE: Joi.string(),
  JWT_ACCESS_TOKEN_PRIVATE_KEY: Joi.string(),
  JWT_ACCESS_TOKEN_PUBLIC_KEY: Joi.string(),
  ACCESS_TOKEN_EXPIRATION: Joi.number(),
  JWT_REFRESH_TOKEN_PRIVATE_KEY: Joi.string(),
  JWT_REFRESH_TOKEN_PUBLIC_KEY: Joi.string(),
  REFRESH_TOKEN_EXPIRATION: Joi.number(),
  EMAIL_SERVICE: Joi.string(),
  EMAIL_USER: Joi.string().email(),
  EMAIL_PASS: Joi.string(),
  ENC_KEY: Joi.string(),
});
