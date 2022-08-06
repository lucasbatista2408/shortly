import { Router } from 'express'
import existsSession from '../middleware/urlMiddleware/existsSessions.js';
import postUrl from '../controllers/urlControllers/postUrl.js';
import getById from '../controllers/urlControllers/getById.js';
import redirectById from '../controllers/urlControllers/redirectById.js';
import deleteById from '../controllers/urlControllers/deleteById.js';

const router = Router();

// posts a new URL
router.post('/urls/shorten', existsSession, postUrl)

// gets url by id
router.get('/urls/:id', getById)

//opens the shorturl link
router.get('/urls/open/:shortUrl', redirectById)

//deletes a shorturl link
router.delete('/urls/:id', existsSession, deleteById)


export default router;