import express from "express";
import { addProduct } from "../controller/blogcontroller.js";
import upload from "../middleware/mutlter.js";

const blogRouter = express.Router();

blogRouter.post(
  "/add",
  upload.fields([{ name: "image1", maxCount: 1 }]),
  addProduct
);

export default blogRouter;
