import pg from 'pg';
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pg;

const db_uri = process.env.DATABASE_URI
console.log(db_uri)

const databaseConfig = {
  connectionString: db_uri,
  ssl: {
      rejectUnauthorized: false
  }
}

const client = new Pool (databaseConfig);

export default client;

