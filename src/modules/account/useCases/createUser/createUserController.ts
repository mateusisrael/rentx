import { Request, Response } from "express";

import { CreateUserUseCase } from "./createUserUseCase";

class CreateUserController {
  constructor(public useCase: CreateUserUseCase) {
    this.useCase = useCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const { user } = req.body;

    try {
      await this.useCase.execute(user);
      return res.status(201).json();
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export { CreateUserController };
