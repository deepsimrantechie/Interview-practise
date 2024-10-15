import express from "express";
import { loginuser, RegisterUser } from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/register", RegisterUser);
userRouter.post("/login", loginuser);

export default userRouter;
