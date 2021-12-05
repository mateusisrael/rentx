import { Router } from "express";

import { useCase as CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { useCase as ListSpecificationUseCase } from "../modules/cars/useCases/listSpecification";
import { ListSpecificationController } from "../modules/cars/useCases/listSpecification/ListSpecificationController";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  new CreateSpecificationController(CreateSpecificationUseCase).handle(
    req,
    res
  );
});

specificationsRoutes.get("/", (req, res) => {
  new ListSpecificationController(ListSpecificationUseCase).handle(req, res);
});

export { specificationsRoutes };
