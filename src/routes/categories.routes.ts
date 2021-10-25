import { Router } from "express";

import { Category } from "../model/Category";
import { CategoryRepository } from "../repositories/categoryRepository";

const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  categories.create({ name, description });

  return res.status(200).json({ created: categories.list() });
});

categoriesRoutes.get("/", (req, res) => {
  res.json(categories.list());
});

export { categoriesRoutes };
