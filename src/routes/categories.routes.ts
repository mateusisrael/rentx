import { Router } from "express";

import createCategoryController from "../modules/cars/useCases/createCategory";
// import { useCase as ListCategoryUseCase } from "../modules/cars/useCases/listCategory";
// import { ListCategoryController } from "../modules/cars/useCases/listCategory/ListCategoryController";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  console.log("[POST] create category:", req.body);
  createCategoryController().handle(req, res);
});

// categoriesRoutes.get("/", (req, res) => {
//   new ListCategoryController(ListCategoryUseCase).handle(req, res);
// });

export { categoriesRoutes };
