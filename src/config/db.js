import { createPool } from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});
