import { author } from "../models/Author.js"

class AuthorController {

    static async listAuthor(req, res) {
        try {
            const listAuthor = await author.find({})
            res.status(200).json(listAuthor);
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };

    static async listAuthorById(req, res) {
        try {
            const id = req.params.id;
            const authorFind = await author.findById(id)
            res.status(200).json(authorFind);
        } catch (error) {
            res.status(500).json(
                {
                    message: `Deu ruim - ${error.message}`
                }
            );
        }
    };

    static async createAuthor(req, res) {
        try {
            const nAuthor = await author.create(req.body);
            res.status(201).json(
                {
                    message: "Sucess :p",
                    manga: nAuthor
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


    static async updateAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndUpdate(id, req.body);
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

    static async deleteAuthor(req, res) {
        try {
            const id = req.params.id;
            await author.findByIdAndDelete(id);
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

export default AuthorController;