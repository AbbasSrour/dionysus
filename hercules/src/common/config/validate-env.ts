import * as Joi from 'joi';

export const validateEnv = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .default('development'),
  PORT: Joi.number().default(3000),
  REDIS_STORE_HOST: Joi.string(),
  REDIS_HOST: Joi.string(),
  REDIS_PORT: Joi.number(),
  ORIGIN: Joi.string(),
  LOKI_HOST: Joi.string(),
  AMQP_URL: Joi.string(),
});
