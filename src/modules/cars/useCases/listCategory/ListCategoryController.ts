import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCateogryUseCase";

class ListCategoryController {
  private useCase: ListCategoryUseCase;

  constructor(useCase: ListCategoryUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const categories = await this.useCase.execute();
      return res.json(categories);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListCategoryController };
