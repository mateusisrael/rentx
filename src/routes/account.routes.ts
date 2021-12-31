import { Router, Request, Response } from "express";

import createUserController from "../modules/account/useCases/createUser";

const accountRouter = Router();

accountRouter.get("/", (req: Request, res: Response) => {
  res.status(404).json({ message: "not implemented" });
});

accountRouter.post("/", (req: Request, res: Response) => {
  createUserController().handle(req, res);
});

export { accountRouter };
