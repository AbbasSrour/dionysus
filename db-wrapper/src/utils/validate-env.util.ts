import { cleanEnv, port, str } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  API_KEY: str(),
  ORIGIN: str(),
  ENC_KEY: str(),
  PSQL_DB_URL: str(),
  PSQL_DB_NAME: str(),
  PSQL_DB_USER_NAME: str(),
  PSQL_DB_PASSWORD: str(),
  PSQL_DB_PORT: port(),
  LOKI_HOST: str(),
});

const ValidateEnv = () => {
  env;
};
export default ValidateEnv;
