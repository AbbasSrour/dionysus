import { cleanEnv, port, str, num } from "envalid";
import dotenv from "dotenv";

dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  REDIS_PORT: port(),
  REDIS_HOST: str(),
  ENC_KEY: str(),
  JWT_ACCESS_TOKEN_PRIVATE_KEY: str(),
  JWT_ACCESS_TOKEN_PUBLIC_KEY: str(),
  JWT_REFRESH_TOKEN_PRIVATE_KEY: str(),
  JWT_REFRESH_TOKEN_PUBLIC_KEY: str(),
  EMAIL_USER: str(),
  EMAIL_PASS: str(),
  EMAIL_HOST: str(),
  EMAIL_PORT: port(),
  ORIGIN: str(),
  ACCESS_TOKEN_EXPIRATION: num(),
  REFRESH_TOKEN_EXPIRATION: num(),
  REDIS_CACHE_EXPIRATION: num(),
  LOKI_HOST: str(),
});

const ValidateEnv = () => {
  env;
};

export default ValidateEnv;
