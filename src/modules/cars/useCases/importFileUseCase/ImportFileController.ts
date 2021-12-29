import { Request, Response } from "express";

import { ImportFileUseCase } from "./ImportFileUseCase";

class ImportFileController {
  private useCase: ImportFileUseCase;

  constructor(useCase: ImportFileUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { file } = req;
      await this.useCase.execute(file);
      return res.status(200).send();
    } catch (error) {
      return res.status(500).send();
    }
  }
}

export { ImportFileController };
