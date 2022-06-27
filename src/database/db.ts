import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const db = new Pool({
  user: process.env.DB_USER_NAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_URL,
  port: parseInt(process.env.DB_PORT || "5000"),
  database: process.env.DB_NAME,
});

export default db;
