import express from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/view", async (req, res) => {
  const users = await prisma.catalogo.findMany({});
  res.json(users);
});
//Vai buscar os filmes com o valor de FAvorito como True
app.get("/favoritos", async (req, res) => {
  try {
    const filmesFavoritos = await prisma.catalogo.findMany({
      where: {
        favorito: true,
      },
    });

    res.status(200).json(filmesFavoritos);
  } catch (error) {
    console.error("Erro ao buscar filmes favoritos:", error);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});

//Barra de pesquisa
app.get("/search", async (req, res) => {
  console.log("Requisição recebida em /search com query:", req.query);

  const { titulo } = req.query;

  if (!titulo || titulo.trim() === "") {
    console.log("Título vazio ou ausente");
    return res.status(400).json({ erro: "Parâmetro 'titulo' é obrigatório." });
  }

  try {
    const filmes = await prisma.catalogo.findMany({
      where: {
        Titulo: {
          contains: titulo,
          //mode: "insensitive",
        },
      },
    });
    console.log(`Foram encontrados ${filmes.length} filmes`);
    res.status(200).json(filmes);
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});

app.get("/favorito/:id", async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ mensagem: "ID não fornecido." });
  }

  try {
    const filme = await prisma.catalogo.findUnique({
      where: { id: Number(id) },
      select: {
        favorito: true, // seleciona só o campo favorito
      },
    });

    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado." });
    }

    res.status(200).json({ favorito: filme.favorito });
  } catch (error) {
    console.error("Erro ao buscar favorito:", error);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});

app.get("/category/:categoria", async (req, res) => {
  const categoria = req.params.categoria;

  if (!categoria) {
    return res.status(400).json({ error: "Categoria não informada." });
  }

  try {
    const filmes = await prisma.catalogo.findMany({
      where: { categoria: categoria }
    });

    res.json(filmes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar filmes." });
  }
});


//Adiciona um novo filme no banco de dados
app.post("/newMovie", async (req, res) => {
  try {
    const { Titulo, ano, diretor, avaliacao, categoria, descricao, imagem } = req.body;

    // Validar campos essenciais (ajuste conforme seu schema)
    if (!Titulo || !ano || !diretor) {
      return res.status(400).json({ error: "Título, ano e diretor são obrigatórios." });
    }

    // Converter tipos se necessário
    const anoNumber = Number(ano);
    const avaliacaoNumber = avaliacao !== undefined ? Number(avaliacao) : null;

    const newMovie = await prisma.catalogo.create({
      data: {
        Titulo,
        ano: anoNumber,
        diretor,
        avaliacao: avaliacaoNumber,
        categoria,
        descricao,
        imagem
      }
    });

    res.status(201).json(newMovie);
  } catch (error) {
    console.error("Erro ao salvar o filme:", error);
    res.status(500).json({ error: "Erro interno no servidor" });
  }
});

//Requisição de favoritar filme
app.put("/favoritar/:id", async (req, res) => {
  const { id } = req.params; // agora pega o id da URL

  if (!id) {
    return res.status(400).json({ mensagem: "ID não fornecido." });
  }

  try {
    // Buscar o filme pelo ID
    const filme = await prisma.catalogo.findUnique({
      where: { id: Number(id) },
    });

    if (!filme) {
      return res.status(404).json({ mensagem: "Filme não encontrado." });
    }
    // Inverter o valor atual de favorito
    const novoFavorito = !filme.favorito;

    // Atualizar o banco com o novo valor
    const filmeAtualizado = await prisma.catalogo.update({
      where: { id: Number(id) },
      data: { favorito: novoFavorito },
    });

    res.status(200).json({
      mensagem: `Favorito alterado para ${novoFavorito}`,
      filme: filmeAtualizado,
    });
  } catch (error) {
    console.error("Erro ao atualizar favorito:", error);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});


//Deletar Usuario 
app.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await prisma.catalogo.delete({
      where: {
        id: Number(id),
      },
    });

    res.json(deletedMovie);  // retorna o filme deletado
  } catch (error) {
    console.error("Erro ao deletar filme:", error);
    res.status(500).json({ erro: "Erro interno do servidor." });
  }
});



app.listen(4000, () => {
  console.log("Server running on port 4000");
});