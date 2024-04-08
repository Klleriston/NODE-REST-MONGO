import express from "express";
import mangas from "./mangasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Node curso"));
    app.use(express.json(), mangas);
};

export default routes;