import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  private useCase: CreateSpecificationUseCase;

  constructor(useCase) {
    this.useCase = useCase;
  }

  handle(req: Request, res: Response): Response {
    const { name, description } = req.body;
    try {
      this.useCase.execute({
        name,
        description,
      });
      return res.status(201).send();
    } catch (error) {
      return res.status(401).send();
    }
  }
}

export { CreateSpecificationController };
