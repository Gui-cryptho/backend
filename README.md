# 🎬 Catálogo de Filmes - API RESTful

Esta é uma API criada com Node.js, Express e Prisma ORM que permite o gerenciamento de um catálogo de filmes, incluindo funcionalidades de listagem, busca, filtro por categoria, favoritos, adição, remoção e alteração de status de favorito.

---

## 🚀 Tecnologias

- Node.js
- Express
- Prisma ORM
- MySQL (ou outro banco relacional suportado pelo Prisma)
- Dockers
- CORS habilitado

---

## Comando de criar a migrate

npx prisma migrate dev --name init

## Comando para usar a seed

npx prisma db seed

## Comando para iniciar a API

yarn run dev

📚 Endpoints da API
🔍 GET /view
Retorna todos os filmes do catálogo.

❤️ GET /favoritos
Retorna todos os filmes marcados como favoritos (favorito: true).

🔎 GET /search?titulo=nome
Busca filmes por título (parcial ou completo).

🎯 GET /category/:categoria
Retorna todos os filmes com a categoria especificada.

🔁 GET /favorito/:id
Retorna o status de favorito de um filme específico.

➕ POST /newMovie
Adiciona um novo filme ao catálogo.

⭐ PUT /favoritar/:id
Inverte o status de favorito de um filme (true → false ou false → true).

❌ DELETE /delete/:id
Remove um filme do catálogo pelo ID.

🧑‍💻 Autor
Guilherme Brito — Linkedin: www.linkedin.com/in/guilherme-brito-utfpr| GitHub: Gui-cryptho


