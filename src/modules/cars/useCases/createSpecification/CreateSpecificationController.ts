import { Request, Response } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  private useCase: CreateSpecificationUseCase;

  constructor(useCase: CreateSpecificationUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;
    try {
      await this.useCase.execute({
        name,
        description,
      });
      return res.status(201).send();
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err });
    }
  }
}

export { CreateSpecificationController };
