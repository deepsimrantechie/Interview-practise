import express from "express";
import cors from "cors";
import userRouter from "./router/userRouer.js";

const app = express();
const port = 4000;

app.use(cors());

app.use(express.json());
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
