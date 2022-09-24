import * as Joi from 'joi';

export const validateEnv = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .default('development'),
  PORT: Joi.number().default(3000),
  APOLLO_DB_URL: Joi.string(),
  ORIGIN: Joi.string(),
  LOKI_HOST: Joi.string(),
  AMQP_URL: Joi.string(),
  RABBIT_MQ_APOLLO_QUEUE: Joi.string(),
});
