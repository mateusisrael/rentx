import { Request, Response } from "express";

class CreateUserController {
  useCase: any;
  constructor(useCase: any) {
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
