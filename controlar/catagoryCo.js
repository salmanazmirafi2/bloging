import Category from "../models/category.js";

export const createCetagory = async (req, res, next) => {
  try {
    const create = new Category(req.body);
    const saves = await create.save();
    res.status(201).json(saves);
  } catch (err) {
    next(err);
  }
};

export const getAllCategory = async (req, res, next) => {
  try {
    const all = await Category.find();
    res.status(200).json(all);
  } catch (err) {
    next(err);
  }
};
