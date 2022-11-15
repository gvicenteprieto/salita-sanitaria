import express from "express";
import {
  getAllBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
const routeBlog = express.Router();

routeBlog.get("/", getAllBlogs);
routeBlog.get("/:id", getBlog);
routeBlog.post("/", createBlog);
routeBlog.put("/:id", updateBlog);
routeBlog.delete("/:id", deleteBlog);

export default routeBlog;
