import joi from "joi";


export default function userSchema(req,res,next){

  const {name, email, password, confirm_password} = req.body;

  const user = {name, email, password, confirm_password}

  const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirm_password: joi.ref('password').required()
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