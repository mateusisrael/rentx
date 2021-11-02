import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { useCase } from "../modules/cars/useCases/createCategory";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

const categoriesRoutes = Router();
const categories = new CategoryRepository();

categoriesRoutes.post("/", (req, res) => {
  new CreateCategoryController(useCase).handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  res.json(categories.list());
});

export { categoriesRoutes };
