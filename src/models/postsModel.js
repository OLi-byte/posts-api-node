import dbConnect from "../config/dbConfig.js";

const connect = await dbConnect(process.env.STRING_CONNECTION);

export async function getAllPosts() {
  const db = connect.db("instabytes");
  const collection = db.collection("posts");
  return collection.find().toArray();
}
