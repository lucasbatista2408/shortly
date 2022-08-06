import client from "../../../database/database.js";


export default async function deleteById(req,res){
  const userId = req.userId
  const {id} = req.params;
  

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