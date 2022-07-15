import { cleanEnv, port, str, num } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  REDIS_PORT: port(),
  REDIS_HOST: str(),
  PSQL_DB_URL: str(),
  PSQL_DB_NAME: str(),
  PSQL_DB_USER_NAME: str(),
  PSQL_DB_PASSWORD: str(),
  PSQL_DB_PORT: port(),
  ENC_KEY: str(),
  JWT_ACCESS_TOKEN_PRIVATE_KEY: str(),
  JWT_ACCESS_TOKEN_PUBLIC_KEY: str(),
  JWT_REFRESH_TOKEN_PRIVATE_KEY: str(),
  JWT_REFRESH_TOKEN_PUBLIC_KEY: str(),
  EMAIL_USER: str(),
  EMAIL_PASS: str(),
  EMAIL_HOST: str(),
  EMAIL_PORT: port(),
  LOKI: str(),
  LOKI_HOST:str(),
  LOKI_API: str(),
  ORIGIN: str(),
  ACCESS_TOKEN_EXPIRATION: num(),
  REFRESH_TOKEN_EXPIRATION: num(),
  REDIS_CACHE_EXPIRATION: num(),
});

const ValidateEnv = () => {
  env;
};

export default ValidateEnv;
