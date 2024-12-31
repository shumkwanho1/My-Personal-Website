import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pgClient = new Client({
  database: process.env.DB_NAME,
});

pgClient.connect()