import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(public useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { user } = req.body;
      await this.useCase.execute(user);
      return res.status(201).json();
    } catch (error) {
      return res.status(400).json({});
    }
  }
}

export { CreateUserController };
