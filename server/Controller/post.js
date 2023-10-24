// import BlogPost from "../Model/post.js"
import user from "../Model/user.js";
import BlogPost from "../Model/post.js";
import mongoose from "mongoose";

export const getblog = async(req,res)=>{
    try {
      const getdata = await BlogPost.find().populate({path:'user',select: '-password'})
      res.status(201).json(getdata);

    } catch (error) {
      res.status(500).json(error);
    }
    
}
export const addblog = async(req,res)=>{
  const { title, categories, content, thumbnail, user } = req.body;
    try {
        const newBlogPost = new BlogPost({
            title,
            categories, 
            content,
            thumbnail,
            user: user, 
          });
     
          const savedBlogPost = await newBlogPost.save();
          console.log(savedBlogPost);
          res.status(201).json(savedBlogPost);
        } catch (error) {
          res.status(500).json(error);
        }
      
}
export const updateblog = async(req,res)=>{

  try {
    const postId = req.params.id;
    const updatedData = req.body;
    const updatedBlogPost = await BlogPost.findByIdAndUpdate(postId, updatedData, { new: true });

    if (!updatedBlogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    res.json(updatedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
   
}
export const deleteblog = ()=>{
    
}
export const getblogId = ()=>{
    
}