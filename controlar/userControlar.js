import bcrypt from "bcrypt";
import User from "../models/User.js";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
//
/// User Create
export const signUp = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 11);
    const { username, email, password, profile } = req.body;
    const user = await User.create({
      username,
      email,
      password,
      profile,
    });
    res.status(201).json({
      message: `Hello! ${username} acount has been created!`,
      user,
    });
  } catch (err) {
    next(err);
  }
};

// Login User
export const logIn = async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return next(createError(404, "User not found"));

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) return next(createError(404, "Password wrong"));

    const token = jwt.sign({ id: user._id }, process.env.KEY);

    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        message:"Login Success",
      });
  } catch (err) {
    next(err);
  }
};
// Update User
export const userUpdate = async(req,res,next)=>{
    const userId = req.params.id
    try {
        const user = await User.findById(userId);
    if(!user)return next(createError(404,"Wrong User"))

    req.body.password = await bcrypt.hash(req.body.password, 11);

      const updateUser = await User.findByIdAndUpdate(
        userId,
        { $set: req.body },
        {new:true}
      )

      res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}
// Get single User
export const singUser = async(req,res,next)=>{
    const userId = req.params.id
    try {
       const user = await User.findById(userId) 
       if(!user) return next(createError(404,"No User"))
       res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
// Get All User
export const getAll = async(req,res,next)=>{
    try {
        const user = await User.find()
        if(!user) return next(createError(404,"User Not Found"))

        res.status(200).json(user)
    } catch (err) {
        
    }
}