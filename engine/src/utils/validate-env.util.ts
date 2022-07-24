import { cleanEnv, port, str } from "envalid";

export const env = cleanEnv(process.env, {
  NODE_ENV: str(),
  PORT: port(),
  API_KEY: str(),
  ENC_KEY: str(),
  ORIGIN: str(),
  LOKI_HOST: str(),
});

const ValidateEnv = () => {
  env;
};

export default ValidateEnv;
