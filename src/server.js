import express from "express";

const app = express();
app.use(express.json());

const posts = [
  {
    id: 1,
    descricao: "Uma foto de gato",
    imagem: "https://placecats.com/neo/300/200",
  },
  {
    id: 2,
    descricao: "Uma paisagem deslumbrante",
    imagem: "https://placecats.com/neo/300/200",
  },
  {
    id: 3,
    descricao: "Um prato delicioso de comida",
    imagem: "https://placecats.com/neo/300/200",
  },
  {
    id: 4,
    descricao: "Uma ilustração criativa",
    imagem: "https://placecats.com/neo/300/200",
  },
  {
    id: 5,
    descricao: "Um meme engraçado",
    imagem: "https://placecats.com/neo/300/200",
  },
  {
    id: 6,
    descricao: "Um gif animado de um animal fofo",
    imagem: "https://placecats.com/neo/300/200",
  },
];

function getPostByID(id) {
  return posts.find((post) => post.id === id);
}

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
  const post = getPostByID(req.params.id);

  res.status(200).json(post);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000...");
});
