import express, { Response } from "express";

const app = express();
const SERVER_PORT = process.env.SERVER_PORT_NUMBER || 3333;

app.get("/", (req, res: Response) => {
  const responseMessage = { message: "hello" };
  res.json(responseMessage);
});

app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`));
