import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from '../src/routes/userRoute.js'
import urlRoute from '../src/routes/urlRoute.js'


const app = express();
// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 5000
app.use(express.json());
app.use(cors());
dotenv.config();

//ROUTES
app.use(userRoute);
app.use(urlRoute);


app.listen(PORT, () => {
  console.log(`SERVER ON PORT ${PORT}`)
})