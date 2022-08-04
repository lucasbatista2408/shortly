import { Router } from 'express'
import postUser from '../controllers/userControllers/postUser.js';


const router = Router();

// creates a new customer
router.post('/signup', postUser)

export default router;