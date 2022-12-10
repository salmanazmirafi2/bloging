import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  profile: {
    type: String,
    required: true,
  },
  post:{
    type:[],

  },
  updated: { type: Date, default: Date.now },
  
},{
  timestamps:true
});

export default mongoose.model("User", userSchema);
