import { Router } from "express";

import createCategoryController from "../modules/cars/useCases/createCategory";
// import { useCase as ListCategoryUseCase } from "../modules/cars/useCases/listCategory";
import listCategoryController from "../modules/cars/useCases/listCategory";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  console.log("[POST] create category:", req.body);
  createCategoryController().handle(req, res);
});

categoriesRoutes.get("/", (req, res) => {
  console.log("[GET] list category:", req.body);
  listCategoryController().handle(req, res);
});

export { categoriesRoutes };
