import manga from "../models/mangas.js"

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
        try {
            const nManga = await manga.create(req.body);
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
                    manga: mangaFind
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