import { Router } from 'express'
import postUser from '../controllers/userControllers/postUser.js';
import existsUser from '../middleware/userMiddleware/existsUser.js';
import userSchema from '../middleware/userMiddleware/userSchema.js';
import signInUser from '../controllers/userControllers/signInUser.js';
import signInSchema from '../middleware/userMiddleware/signInSchema.js';


const router = Router();

// creates a new customer
router.post('/signup', userSchema, existsUser, postUser)

// signs customer in
router.post('/signin', signInSchema, existsUser, signInUser)


export default router;