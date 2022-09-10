import * as Joi from 'joi';

export const validateEnv = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .default('development'),
  PORT: Joi.number().default(3000),
  LOKI_HOST: Joi.string(),
  AMQP_URL: Joi.string(),
  TMDB_ADDRESS: Joi.string(),
  TMDB_API_KEY: Joi.string(),
  TMDB_IMAGE_ADDRESS: Joi.string(),
});
