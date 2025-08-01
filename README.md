# 🎬 Catálogo de Filmes - API RESTful

API criada com **Node.js**, **Express** e **Prisma ORM** para gerenciar um catálogo de filmes. Permite listar, buscar, filtrar por categoria, favoritar, adicionar, remover e alterar o status de filmes.

---

## 🚀 Tecnologias utilizadas

- Node.js
- Express
- Prisma ORM
- MySQL (rodando em **localhost**)
- CORS habilitado

---

## 🛠️ Pré-requisitos

Antes de iniciar o projeto, verifique se você tem os seguintes itens instalados:

- Node.js e Yarn
- MySQL rodando em `localhost` (crie um banco e configure a URL no `.env`)
- Docker (opcional, caso deseje usar containers)
- Prisma CLI: `npm install -g prisma`

---

## ⚙️ Configuração inicial

1. **Clone o repositório:**

```bash
git clone https://github.com/Gui-cryptho/backend.git
cd backend
```

2. **Instale as dependências:**

```bash
yarn install
```

3. **Configure o banco de dados:**

- Crie um banco MySQL local, por exemplo `catalogo_filmes`.
- No arquivo `.env`, defina a variável `DATABASE_URL`, exemplo:

```env
DATABASE_URL="mysql://usuario:senha@localhost:3306/catalogo_filmes"
```

4. **Crie as tabelas (migrations):**

```bash
npx prisma migrate dev --name init
```

5. **Execute a seed para inserir dados de exemplo:**

```bash
npx prisma db seed
```

6. **Inicie o servidor:**

```bash
yarn run dev
```

O servidor estará rodando em `http://localhost:4000`.

---

## 📚 Endpoints da API

- 🔍 `GET /view`  
  Retorna todos os filmes do catálogo.

- ❤️ `GET /favoritos`  
  Retorna todos os filmes marcados como favoritos (`favorito: true`).

- 🔎 `GET /search?titulo=nome`  
  Busca filmes por título (parcial ou completo).

- 🎯 `GET /category/:categoria`  
  Retorna todos os filmes com a categoria especificada.

- 🔁 `GET /favorito/:id`  
  Retorna o status de favorito de um filme específico.

- ➕ `POST /newMovie`  
  Adiciona um novo filme ao catálogo.

- ⭐ `PUT /favoritar/:id`  
  Alterna o status de favorito de um filme (de `true` para `false` ou vice-versa).

- ❌ `DELETE /delete/:id`  
  Remove um filme do catálogo pelo ID.

---

## 🧑‍💻 Autor

**Guilherme Brito**  
🔗 [LinkedIn](https://www.linkedin.com/in/guilherme-brito-utfpr)  
🐱 [GitHub](https://github.com/Gui-cryptho)