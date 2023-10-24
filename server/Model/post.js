import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  categories: {
      type: String,
  },
  categories: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
},
{ timestamps: true }
);

export default mongoose.model("BlogPost",blogPostSchema)
