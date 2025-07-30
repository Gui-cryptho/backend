import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/view", async (req, res) => {
  const users = await prisma.catalogo.findMany({});
  res.json(users);
});

app.get("/search", async (req, res) => {

});

app.get("/category", async (req, res) => {

});

app.post("/publicar", async (req, res) => {

});

app.put("/favorito", (req, res) => {

});

app.delete("/users", async (_, res) => {
  const deletedUsers = await prisma.catalogo.deleteMany();
  res.json(deletedUsers);
});


app.listen(4000, () => {
  console.log("Server running on port 4000");
});