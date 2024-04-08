import express from "express";
import AuthorController from "../controllers/authorController.js";

const routes = express.Router();

routes.get("/authors", AuthorController.listAuthor);
routes.get("/author/:id", AuthorController.listAuthorById);
routes.post("/author/create", AuthorController.createAuthor);
routes.put("/author/update/:id", AuthorController.updateAuthor);
routes.delete("/author/delete/:id", AuthorController.deleteAuthor);

export default routes;