import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  useCase: ListSpecificationUseCase;

  constructor(useCase: ListSpecificationUseCase) {
    this.useCase = useCase;
  }

  handle(req: Request, res: Response): Response {
    try {
      const specifications = this.useCase.execute();
      return res.json(specifications);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListSpecificationController };
