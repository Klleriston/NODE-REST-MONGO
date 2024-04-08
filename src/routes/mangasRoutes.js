import express from "express";
import MangaController from "../controllers/mangaController.js";

const routes = express.Router();

routes.get("/mangas", MangaController.listMangas);
routes.get("/manga/:id", MangaController.listMangaById);
routes.post("/mangas/create", MangaController.createMangas);
routes.put("/mangas/update/:id", MangaController.updateManga);
routes.delete("/mangas/delete/:id", MangaController.deleteManga);

export default routes;