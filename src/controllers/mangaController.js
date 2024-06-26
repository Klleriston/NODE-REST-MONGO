import { author } from "../models/Author.js";
import manga from "../models/Mangas.js"

class MangaController {

    static async listMangas(req, res) {
        try {
            const listManga = await manga.find({})
            res.status(200).json(listManga);
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };

    static async listMangaById(req, res) {
        try {
            const id = req.params.id;
            const mangaFind = await manga.findById(id)
            res.status(200).json(mangaFind);
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };

    static async createMangas(req, res) {
        const nManga = req.body;

        try {
            const fAuthor = await author.findById(nManga.author);
            const fullManga = { ...nManga, author: { ...fAuthor._doc} };
            const createdManga = await manga.create(fullManga);
            res.status(201).json(
                {
                    message: "Sucess :p",
                    manga: nManga
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };


    static async updateManga(req, res) {
        try {
            const id = req.params.id;
            await manga.findByIdAndUpdate(id, req.body);
            res.status(200).json(
                {
                    message: "Updated !! :p",
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };

    static async deleteManga(req, res) {
        try {
            const id = req.params.id;
            await manga.findByIdAndDelete(id);
            res.status(200).json(
                {
                    message: "Deleted !! :p"
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    }
};

export default MangaController;