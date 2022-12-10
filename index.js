import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import multer from "multer";
import userRoute from "./router/userRoute.js";
import postRoute from "./router/postRoute.js";
import cetagoryRoute from "./router/cetagoryRoute.js";

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
dotenv.config();
app.use(cookieParser());

// middleware route
app.use('/api', userRoute)
app.use('/api/post',postRoute)
app.use("/api/category", cetagoryRoute)



// Error handler
app.use((err, req, res, next) => {
    const errorStatus = err.status;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


// mongoose config
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connect");
  } catch (error) {
    throw error;
  }
};
mongoose.set("strictQuery", true);
mongoose.connection.on("disconnected", () => {
  console.log("Database disconnect 🙂");
});

const PROT = process.env.PROT || 5000;

app.listen(PROT, () => {
  connect();
  console.log(`App listening on port ${PROT}`);
});
