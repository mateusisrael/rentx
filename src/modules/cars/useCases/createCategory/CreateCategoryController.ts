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
      if (err === 400)
        return res.status(400).json({ message: "Category already exists" });

      return res.status(500).send();
    }
  }
}

export { CreateCategoryController };
