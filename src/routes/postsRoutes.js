import express from "express";
import { listAllPosts } from "../controllers/postsController.js";

const routes = (app) => {
  app.get("/posts", listAllPosts);
};

export default routes;
