import { cleanEnv, port, str } from "envalid";
import dotenv from "dotenv";
dotenv.config();

export const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  API_KEY: str(),
  ENC_KEY: str(),
  ORIGIN: str(),
  LOKI_HOST: str(),
  DB_WRAPPER: str(),
});

const ValidateEnv = () => {
  env;
};

export default ValidateEnv;
