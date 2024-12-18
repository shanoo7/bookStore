import { signUp,logIn } from "../controllers/userController.js";
import express from "express";

export const router = express.Router()


router.post("/signup",signUp)
router.post("/login",logIn)