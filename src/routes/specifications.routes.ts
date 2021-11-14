import { Router } from "express";

import { useCase as CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification";
import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (req, res) => {
  new CreateSpecificationController(CreateSpecificationUseCase).handle(
    req,
    res
  );
});

export { specificationsRoutes };
