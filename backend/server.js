import express from "express";
import cors from "cors";
import userRouter from "./router/userRouer.js";
import blogRouter from "./router/blogroute.js";

import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/mongodb.js";

const app = express();

connectCloudinary();
connectDB();
const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/product", blogRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
