import { createPool } from 'mysql2/promise'; // async await
import dotenv from 'dotenv';
dotenv.config();

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});
