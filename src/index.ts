import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();
const SERVER_PORT = process.env.SERVER_PORT_NUMBER || 3333;

app.use(express.json());
app.use(categoriesRoutes);

app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`));
