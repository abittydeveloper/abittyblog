import express from "express";
import { addblog, deleteblog, getblog, getblogId, updateblog } from "../Controller/post.js";

const router = express.Router()

router.get("/getblog" , getblog)
router.post("/addblog" , addblog)
router.put("/updateblog/:id" , updateblog)
router.delete("/deleteblog" , deleteblog)
router.get("/getblog/:id" , getblogId)

export default router;