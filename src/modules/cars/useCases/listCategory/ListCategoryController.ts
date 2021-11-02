import { Request, Response } from "express";

import { ListCategoryUseCase } from "./ListCateogryUseCase";

class ListCategoryController {
  private useCase: ListCategoryUseCase;

  constructor(useCase: ListCategoryUseCase) {
    this.useCase = useCase;
  }

  handle(req: Request, res: Response): Response {
    try {
      const categories = this.useCase.execute();
      return res.json(categories);
    } catch (error) {
      return res.status(500);
    }
  }
}

export { ListCategoryController };
