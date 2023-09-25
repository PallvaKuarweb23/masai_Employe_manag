const express=require("express")

const {registerControl}=require("../CONTROLLER/user.add")
const {loginUser}=require("../CONTROLLER/login")


const userRouter = express.Router();

userRouter.post("/signup",registerControl);

userRouter.post("/login",loginUser)










module.exports={
    userRouter
}