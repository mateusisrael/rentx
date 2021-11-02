import { Router } from "express";

import { CategoryRepository } from "../modules/cars/repositories/CategoryRepository";
import { useCase as CreateCategoryUseCase } from "../modules/cars/useCases/createCategory";
import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { useCase as ListCategoryUseCase } from "../modules/cars/useCases/listCategory";
import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  new CreateCategoryController(CreateCategoryUseCase).handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  new ListCategoryController(ListCategoryUseCase).handle(req, res);
});

export { categoriesRoutes };
