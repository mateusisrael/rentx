import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationsRoutes = Router();
const specifications = new SpecificationRepository();

specificationsRoutes.post("/", (req, res) => {
  const { name, description } = req.body;
  try {
    new CreateSpecificationService(specifications).execute({
      name,
      description,
    });
    res.status(201).send();
  } catch (error) {
    res.status(401).send();
  }
});

export { specificationsRoutes };
