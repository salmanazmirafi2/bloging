import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: false,
  },
  username: {
    type: String,
    require: true,
  },
  categories: {
    type: Array,
    require: false,
  },
  updated: { type: Date, default: Date.now },
  
},{
  timestamps:true
});

export default mongoose.model("Post", postSchema);
