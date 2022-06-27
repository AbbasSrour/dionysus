import { cleanEnv, port, str } from 'envalid';

const ValidateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    PSQL_DB_URL: str(),
    PSQL_DB_PORT: port(),
    PSQL_DB_USER_NAME: str(),
    PSQL_DB_PASSWORD: str(),
    PSQL_DB_NAME: str(),
    JWT_ACCESS_TOKEN_PRIVATE_KEY: str(),
    JWT_ACCESS_TOKEN_PUBLIC_KEY: str(),
    JWT_REFRESH_TOKEN_PRIVATE_KEY: str(),
    JWT_REFRESH_TOKEN_PUBLIC_KEY: str(),
  });
};

export default ValidateEnv;
