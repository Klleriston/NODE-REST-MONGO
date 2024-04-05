import http from "http";

const PORT = 3000;
const routes = {
    "/":"Hello world !",
    "/livros": "esses sao os livros",
    "/autores": "esses sao os autores"
};
const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log(`server on http://localhost:${PORT}`)
});