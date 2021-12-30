import { Request, Response } from "express";

import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  useCase: ListSpecificationUseCase;

  constructor(useCase: ListSpecificationUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const specifications = await this.useCase.execute();
      return res.json(specifications);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListSpecificationController };
