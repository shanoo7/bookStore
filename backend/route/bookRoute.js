import express from 'express'
import { getBook } from '../controllers/bookController.js';



export const router = express.Router();

router.get('/',getBook)

// export default router;
