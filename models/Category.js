import mongoose from "mongoose";


const categorySchema = new mongoose.Schema({
  title:{
    type:String,
    require: true
  }
},{timestamps:true})

export default mongoose.model("Citatory",categorySchema)