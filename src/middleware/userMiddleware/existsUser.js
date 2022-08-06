import client from "../../../database/database.js";
import { existsUserQuery } from "../../../Queries/userQueries.js";

export default async function existsUser(req,res,next){

  const {email} = req.body

  try {
    const values = [email]

    const {rowCount: checkEmail} = await client.query(existsUserQuery, values);

    checkEmail > 0 ? res.sendStatus(409) : next()

  } catch (error) {
    console.error(error)
  }

}