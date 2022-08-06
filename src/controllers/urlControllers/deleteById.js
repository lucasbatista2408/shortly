import client from "../../../database/database.js";
import { checkTokenQuery, getByIdQuery } from "../../../Queries/urlQueries.js";


export default async function deleteById(req,res){

  const {id} = req.params;
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  const {rows: user} = await client.query(checkTokenQuery, [token])
  const userId = user[0].userId;

  const {rowCount} = await client.query(getByIdQuery, [id]);

  if(rowCount === 0) return res.sendStatus(404);
  
  const values = [userId, id]

  const deleteByIdQuery = 'DELETE FROM "shortUrl" WHERE "userId"=$1 AND id=$2;'
  
  try {
    await client.query(deleteByIdQuery, values);
    res.sendStatus(204)
  } catch (error) {
    console.error(error);
    res.sendStatus(500)
  }

}