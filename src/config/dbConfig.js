import { MongoClient } from "mongodb";

export default async function dbConnect(stringConexao) {
  try {
    const mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do banco de dados...");
    await mongoClient.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!");
    return mongoClient;
  } catch (erro) {
    console.error("Falha na conexão com o MongoDB!", erro);
    process.exit();
  }
}
