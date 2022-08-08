import pg from 'pg';
import dotenv from "dotenv"

dotenv.config();

const { Pool } = pg;

// const host = process.env.HOST;
// const username = process.env.USERNAME;
// const password = process.env.PASSWORD;
// const port = process.env.PORT_DB;
// const database = process.env.DATABASE;

// const client = new Pool (
//   {username,
//   password,
//   host,
//   port,
//   database,}
// )

const db_uri = process.env.DATABASE_URL
console.log(db_uri)

const databaseConfig = {
  connectionString: db_uri,
  ssl: {
      rejectUnauthorized: false
  }
}

const client = new Pool (databaseConfig);

export default client;

