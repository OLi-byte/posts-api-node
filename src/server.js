import routes from "./routes/postsRoutes.js";
import express, { json } from "express";

const app = express();
app.use(express.json());

routes(app);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000...");
});
