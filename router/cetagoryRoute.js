import express from "express";
import { createCetagory, getAllCategory } from "../controlar/catagoryCo.js";

const cetagoryRoute = express.Router();

cetagoryRoute.post("/create/category", createCetagory);
cetagoryRoute.get("/all", getAllCategory);

export default cetagoryRoute;
