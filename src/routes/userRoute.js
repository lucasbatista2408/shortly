import { Router } from 'express'
import postUser from '../controllers/userControllers/postUser.js';
import existsUserSignUp from '../middleware/userMiddleware/existsUserSignUp.js';
import userSchema from '../middleware/userMiddleware/userSchema.js';
import signInUser from '../controllers/userControllers/signInUser.js';
import signInSchema from '../middleware/userMiddleware/signInSchema.js';
import existsUserSignIn from '../middleware/userMiddleware/existsUserSignIn.js';

const router = Router();

// creates a new customer
router.post('/signup', userSchema, existsUserSignUp, postUser)

// signs customer in
router.post('/signin', signInSchema, existsUserSignIn, signInUser)


export default router;