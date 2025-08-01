import express from "express";
import cors from "cors";
import catalogoRoutes from "./routes/catalogo.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", catalogoRoutes);

export default app;
