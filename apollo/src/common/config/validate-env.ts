import * as Joi from "joi";


export const validateEnv = Joi.object({
  NODE_ENV: Joi.string().valid("development", "production", "testing").default("development"),
  PORT: Joi.number().default(3000),
  APOLLO_DB_PORT: Joi.number(),
  APOLLO_DB_NAME : Joi.string(),
  APOLLO_DB_USER_NAME: Joi.string(),
  APOLLO_DB_PASSWORD: Joi.string(),
  ORIGIN: Joi.string(),
  LOKI_HOST: Joi.string(),
  AMQP_URL: Joi.string(),
  TMDB_API_KEY: Joi.string(),
  TMDB_ADDRESS: Joi.string()
})