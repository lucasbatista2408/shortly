import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from '../src/routes/userRoute.js'


const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors());
dotenv.config();

//ROUTES
app.use(userRoute);


app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`)
})