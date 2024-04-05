import express from "express";

const app = express();
app.use(express.json());
const mangas = [
    {
        id: 1,
        title: "One piece"
    },
    {
        id: 2,
        title: "Naruto"
    }
]
function findManga(id) {
    return mangas.findIndex(manga => {
        return manga.id === Number(id);
    })
}
app.get("/", (req, res) => {
    res.status(200).send("Home")
});
app.get('/mangas', (req, res) => {
    res.status(200).json(mangas);
});
app.get('/mangas/:id', (req, res) => {
    try {
        const index = findManga(req.params.id);
        res.status(200).json(mangas[index]);
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
