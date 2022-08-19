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
  API_KEY_TD: str(),
  TD_ADDRESS: str(),
  TD_IMAGE_ADDRESS: str(),
});

const ValidateEnv = () => {
  env;
};

export default ValidateEnv;
