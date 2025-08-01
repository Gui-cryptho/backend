import CatalogoService from "../services/CatalogoService.js";

class CatalogoController {
  async getAll(req, res) {
    const filmes = await CatalogoService.listarTodos();
    res.json(filmes);
  }

  async getFavoritos(req, res) {
    try {
      const data = await CatalogoService.listarFavoritos();
      res.json(data);
    } catch (e) {
      res.status(500).json({ erro: "Erro interno do servidor." });
    }
  }

  async buscarPorTitulo(req, res) {
    const { titulo } = req.query;
    if (!titulo) return res.status(400).json({ erro: "Título é obrigatório." });

    try {
      const data = await CatalogoService.buscarPorTitulo(titulo);
      res.json(data);
    } catch (e) {
      res.status(500).json({ erro: "Erro interno." });
    }
  }

  async buscarPorCategoria(req, res) {
    const { categoria } = req.params;
    const filmes = await CatalogoService.buscarPorCategoria(categoria);
    res.json(filmes);
  }

  async buscarFavoritoPorId(req, res) {
    const { id } = req.params;
    const favorito = await CatalogoService.getFavoritoStatus(Number(id));
    res.json({ favorito });
  }

  async criar(req, res) {
    try {
      const novo = await CatalogoService.criar(req.body);
      res.status(201).json(novo);
    } catch (e) {
      res.status(500).json({ erro: "Erro ao salvar o filme." });
    }
  }

  async alternarFavorito(req, res) {
    const { id } = req.params;
    const data = await CatalogoService.trocarFavorito(Number(id));
    res.json(data);
  }

  async deletar(req, res) {
    const { id } = req.params;
    const data = await CatalogoService.deletar(Number(id));
    res.json(data);
  }
}

export default new CatalogoController();
