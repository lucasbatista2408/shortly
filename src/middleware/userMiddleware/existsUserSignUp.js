import client from "../../../database/database.js";
import { existsUserQuery } from "../../../Queries/userQueries.js";

export default async function existsUserSignUp(req,res,next){

  const {email} = req.body

  try {
    const values = [email]

    const {rowCount: checkEmail} = await client.query(existsUserQuery, values);

    checkEmail === 0 ? next() : res.sendStatus(409)

  } catch (error) {
    console.error(error)
  }

}