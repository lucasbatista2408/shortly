import client from "../../../database/database.js";
import { getByIdQuery } from "../../../Queries/urlQueries.js";


export default async function deleteById(req,res){
  const userId = req.userId
  const {id} = parseInt(req.params);

  if(typeof id !== 'number') return res.sendStatus(400)

  const {rowCount} = await client.query(getByIdQuery, [id])

  if(rowCount === 0) return res.sendStatus(404)

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