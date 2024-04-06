import express from "express";
import connect from "./config/db.js"
import manga from "./models/mangas.js"

const c = await connect();
c.on("error", (e) => {
    console.error(e)
});
c.once("open", () => {
    console.log("sucess!")
})
const app = express();
app.use(express.json());
function findManga(id) {
    return mangas.findIndex(manga => {
        return manga.id === Number(id);
    })
}
app.get("/", (req, res) => {
    res.status(200).send("Home")
});
app.get('/mangas', async (req, res) => {
    const manga = await manga.find({})
    res.status(200).json(manga);
});
app.get('/mangas/:id', (req, res) => {
    try {
        const index = findManga(req.params.id);
        res.status(200).json(manga[index]);
    } catch (error) {
        console.error(error);
    }
})
app.post('/mangas/create', (req, res) => {
    mangas.push(req.body);
    res.status(201).send("sucess!! :P")
});
app.put('/mangas/update/:id', (req, res) => {
    try {
        const index = findManga(req.params.id);
        mangas[index].title = req.body.title;
        console.log("Found manga at index:", index);
        console.log("Manga object before update:", mangas[index]);
        res.status(200).json({ sucess: mangas[index] });
    } catch (error) {
        console.error(error)
        res.status(400).json({ error: error.message })
    }
});
app.delete('/manga/delete/:id', (req, res) => {
    try {
        const index = findManga(req.body.id);
        mangas.splice(index, 1);
        res.status(204).send("deleted !")
    } catch (error) {
        console.error(error);
        res.status(404).send(error)
    }
})

export default app;
