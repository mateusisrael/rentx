import { Router } from "express";

import { CategoryRepository } from "../repositories/categoryRepository";

const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  const categoryAlreadyExists = categories.findByName(name);
  if (categoryAlreadyExists) {
    return res.status(400).json({ error: "Category already exists" });
  }

  categories.create({ name, description });
  return res.status(201).send();
});

categoriesRoutes.get("/", (req, res) => {
  res.json(categories.list());
});

export { categoriesRoutes };
