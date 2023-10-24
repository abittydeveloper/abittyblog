import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRote from "./router/user.js";
import postRote from "./router/post.js";
 
const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/user" ,userRote)
app.use("/api/blog" ,postRote)

const connect = async () => {
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/bloguser");
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };
  
  app.listen(8000,()=>{
    connect(); 
    console.log("connected to server");
  })