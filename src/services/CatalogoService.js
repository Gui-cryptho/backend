import prisma from "../prisma/client.js";

class CatalogoService {
  async listarTodos() {
    return prisma.catalogo.findMany();
  }

  async listarFavoritos() {
    return prisma.catalogo.findMany({ where: { favorito: true } });
  }

  async buscarPorTitulo(titulo) {
    return prisma.catalogo.findMany({
      where: { Titulo: { contains: titulo } }
    });
  }

  async buscarPorCategoria(categoria) {
    return prisma.catalogo.findMany({ where: { categoria } });
  }

  async getFavoritoStatus(id) {
    const filme = await prisma.catalogo.findUnique({ where: { id } });
    return filme?.favorito ?? false;
  }

  async criar(dados) {
    const { Titulo, ano, diretor, avaliacao, categoria, descricao, imagem } = dados;
    return prisma.catalogo.create({
      data: {
        Titulo,
        ano: Number(ano),
        diretor,
        avaliacao: avaliacao ? Number(avaliacao) : null,
        categoria,
        descricao,
        imagem
      }
    });
  }

  async trocarFavorito(id) {
    const filme = await prisma.catalogo.findUnique({ where: { id } });
    const novoFavorito = !filme.favorito;
    const atualizado = await prisma.catalogo.update({
      where: { id },
      data: { favorito: novoFavorito }
    });
    return { mensagem: "Favorito atualizado", filme: atualizado };
  }

  async deletar(id) {
    return prisma.catalogo.delete({ where: { id } });
  }
}

export default new CatalogoService();
