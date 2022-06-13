const express=require('express');
const userController=require('../controllers/userController');

const userRouter=express.Router();
userRouter.use(express.json());

userRouter.post("/signup",userController.signup);

userRouter.post("/login",userController.login);

module.exports= userRouter;