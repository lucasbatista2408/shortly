import client from "../../../database/database.js";
import { checkTokenQuery } from "../../../Queries/urlQueries.js";


export default async function existsSession(req,res,next){

  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  if(!token) return res.sendStatus(401);

  const values = [token]

  const {rowCount} = await client.query(checkTokenQuery, values);
            
  if (rowCount === 0) {
      return res.sendStatus(401);
  }

  next()

}