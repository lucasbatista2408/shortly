import client from "../../../database/database.js";
import { checkTokenQuery, postUrlQuery } from "../../../Queries/urlQueries.js";
import { nanoid } from 'nanoid'



export default async function postUrl(req,res){

  const {url} = req.body;
  const shortUrl = nanoid(10);
  const { authorization } = req.headers;
  const token = authorization?.replace('Bearer ', '');

  const {rows: user, rowCount: userCount} = await client.query(checkTokenQuery, [token])

  if(userCount === 0) return res.sendStatus(404)

  const values = [user[0].userId, url, shortUrl]

  try {
    await client.query(postUrlQuery, values)
    res.send({shortUrl}).status(201)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

}