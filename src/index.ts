import express from "express";
import "reflect-metadata";

import { categoriesRoutes } from "./routes/categories.routes";
import { importRoutes } from "./routes/import.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();
const SERVER_PORT = process.env.SERVER_PORT_NUMBER || 3333;

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);
app.use("/import", importRoutes);

app.listen(SERVER_PORT, () => console.log(`Server on ${SERVER_PORT}`));
