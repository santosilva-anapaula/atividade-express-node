const express = require("express");

const app = express();

const usuario = require("./router/usuario.router");

const port = 3000;

app.use(express.json());

app.use("/usuario", usuario);

app.get("/", (req, res) => {
    res.send("Bem vindo usuário");
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});