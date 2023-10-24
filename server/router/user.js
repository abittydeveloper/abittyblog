import express from "express";
import { loginuser, registeruser } from "../Controller/user.js";

const router = express.Router()

router.post("/register" , registeruser)
router.post("/login" , loginuser)

export default router;