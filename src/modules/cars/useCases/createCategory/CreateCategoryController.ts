import { Request, Response } from "express";

import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

class CreateCategoryController {
  private createCategoryUseCase: CreateCategoryUseCase;

  constructor(createCategoryUseCase: CreateCategoryUseCase) {
    this.createCategoryUseCase = createCategoryUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, description } = req.body;

    try {
      await this.createCategoryUseCase.execute({ name, description });
      return res.status(201).send();
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export { CreateCategoryController };
