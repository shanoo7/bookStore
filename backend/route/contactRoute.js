import express from 'express'
import { contactUs } from "../controllers/contactController.js";
export const router = express.Router()

router.post("/",contactUs)
