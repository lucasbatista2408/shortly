import pg from 'pg';
import dotenv from "dotenv"

dotenv.config();

const databaseConfig = {
  connectionString: process.env.DATABASE_URI,
  ssl: {
      rejectUnauthorized: false
  }
}

const client = new Pool(databaseConfig);

// const { Pool } = pg;

// const user = process.env.USER;
// const password = process.env.PASSWORD;
// const hostname = process.env.HOST;
// const port = process.env.PORT_DB;
// const database = process.env.DATABASE;

// const client = new Pool({
//   user,
//   password,
//   hostname,
//   port,
//   database
// });

export default client;

