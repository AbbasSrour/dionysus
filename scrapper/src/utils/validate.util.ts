import {cleanEnv, port, str, num} from "envalid";

export const env = cleanEnv(process.env, {
    NODE_ENV: str(),
    PORT: port(),
    PSQL_DB_URL: str(),
    PSQL_DB_NAME: str(),
    PSQL_DB_USER_NAME: str(),
    PSQL_DB_PASSWORD: str(),
    PSQL_DB_PORT: port(),
    ORIGIN: str(),
});

const ValidateEnv = () => {
    env;
};

export default ValidateEnv;