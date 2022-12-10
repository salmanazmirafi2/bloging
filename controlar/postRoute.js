import Post from "../models/Post.js";
import User from "../models/User.js";
import { createError } from "../utils/error.js";

// Post Create
export const createPost = async (req, res, next) => {
  try {
    const newPost = new Post(req.body);
    const savePost = await newPost.save();
    res.status(201).json(savePost);
  } catch (err) {
    next(err);
  }
};
// Post Update
export const updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
          const postUpdate = await Post.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(postUpdate)
    }else{
        next(createError(404,"You can Update your post"))
    }
  
    }
   catch (err) {
    next(err);
  }
};
// Post Delete 

export const deletePost = async(req,res,next)=>{
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
              const postUpdate = await Post.deleteOne();
          res.status(200).json(postUpdate)
        }else{
            next(createError(404,"You can Delete your post"))
        }
    } catch (err) {
        next(err)
    }
}
// Single Post
export const getSingle = async(req,res,next)=>{
    try {
        const get = await Post.findById(req.params.id)
        res.status(200).json(get)
    } catch (err) {
        next(err)
    }
}
// All Post
export const allPost = async(req,res,next)=>{
    try {
        const get = await Post.find()
        res.status(200).json(get)
    } catch (err) {
        next(err)
    }
}