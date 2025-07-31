import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
   await prisma.catalogo.createMany({
  data: [{
    Titulo: "Trem Bala",
    ano: 2022,
    diretor: "David Leitch",
    avaliacao: 5,
    categoria: "action",
    descricao:
      "Trem-Bala é um filme de ação e comédia com Brad Pitt como um assassino azarado...",
    imagem:
      "https://a-static.mlcdn.com.br/1500x1500/poster-cartaz-trem-bala-a-pop-arte-poster/poparteskins2/15916755085/b6ff9acc510e85b4ee0286968043a8ac.jpeg",
  },
  {
    Titulo: "Shrek",
    ano: 2001,
    diretor: "Andrew Adamson",
    avaliacao: 3,
    categoria: "comedy",
    descricao:
      "O filme Shrek conta a história de um ogro solitário que tem sua vida pacata em um pântano...",
    imagem:
      "https://i.imgflip.com/8ptp2n.png?a486960",
  },
],
});

}

seed().then(() => prisma.$disconnect());