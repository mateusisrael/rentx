import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/categoryRepository";
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  try {
    new CreateCategoryService(categories).execute({ name, description });
    return res.status(201).send();
  } catch (err) {
    return res.status(400).json({ error: err });
  }
});

categoriesRoutes.get("/", (req, res) => {
  res.json(categories.list());
});

export { categoriesRoutes };
