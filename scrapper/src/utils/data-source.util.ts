import dotenv from "dotenv"
import "reflect-metadata"
import {DataSource} from "typeorm";
import {env} from "./validate.util"

dotenv.config();

export const AppDataSource = new DataSource({
    host: env.PSQL_DB_URL,
    port: env.PSQL_DB_PORT,
    username: env.PSQL_DB_USER_NAME,
    password: env.PSQL_DB_PASSWORD,
    database: env.PSQL_DB_NAME,
    type: "postgres",
    synchronize: false,
    logging: false,
    migrationsRun: false,
    entities: ["src/entities/**/*.entity{.ts,.js}"],
    migrations: ["src/migrations/**/*{.ts,.js}"],
    subscribers: ["src/subscribers/**/*{.ts,.js}"],
})



