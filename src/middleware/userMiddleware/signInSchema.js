import joi from "joi";


export default function signInSchema(req,res,next){

  const {email, password} = req.body;

  const user = {email, password}

  const schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required(),
  })

  try {
    const {error} = schema.validate(user,{abortEarly: false});

    if (error) {
      return res.sendStatus(400);
    }

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }

  next()
}