import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  comment: { type: String, required: true },
  image: [{ type: String, required: true }],
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
