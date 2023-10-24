// import BlogPost from "../Model/post.js"
import user from "../Model/user.js";
import BlogPost from "../Model/post.js";
import mongoose from "mongoose";

export const getblog = async(req,res)=>{
    try {
      const getdata = await BlogPost.find()
      res.status(201).json(getdata);

    } catch (error) {
      res.status(500).json(error);
    }
    
}
export const addblog = async(req,res)=>{
  const { title, categories, content, thumbnail, userId } = req.body;
    try {
        const newBlogPost = new BlogPost({
            title,
            categories, // Use an array for categories
            content,
            thumbnail,
            user: userId, // Convert the user ID to ObjectId
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
    const postId = req.params.id; // Extract the blog post ID from the URL

    // Find the blog post by its ID
    const blogPost = await BlogPost.findById(postId);

    if (!blogPost) {
      return res.status(404).json({ error: 'Blog post not found' });
    }

    // Extract the updated data from the request body
    const { title, categories, details, thumbnail } = req.body;

    // Update the blog post with the new data
    blogPost.title = title || blogPost.title;
    blogPost.categories = categories || blogPost.categories;
    blogPost.details = details || blogPost.details;
    blogPost.thumbnail = thumbnail || blogPost.thumbnail;

    // Save the updated blog post
    const updatedBlogPost = await blogPost.save();

    res.json(updatedBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }




    
}
export const deleteblog = ()=>{
    
}
export const getblogId = ()=>{
    
}