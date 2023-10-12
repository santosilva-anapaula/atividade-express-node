const usuarios = [
    {
        id: 1,
        nome: "usuario 1",
        dataNascimento: "12/12/2000",
        email: "email@email.com",
        senha: "senha123"
    },
    {
        id: 2,
        nome: "usuario 2",
        dataNascimento: "11/11/2000",
        email: "email@email.com",
        senha: "senha123"
    },
    {
        id: 3,
        nome: "usuario 3",
        dataNascimento: "10/10/2000",
        email: "email@email.com",
        senha: "senha123"
    }
]

const find = (req, res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function (valor) {
        if (valor.id == id) {
            found = true;
            return res.send(valor);
        }
    });

    if (!found) {
        res.status(404).send({message: "Usuário não encontrado"});
    }
}

const findAllUsuarios = (req, res) => {
    res.send(usuarios);
}

const createUsuario = (req, res) => {
    const usuario = req.body;

    if (Object.keys(usuario).length === 0) {
        return res.status(400).send({menssage: "O corpo da mensagem está vazio"});
    }

    if (!usuario.id) {
        return res.status(400).send({menssage: "O campo 'id' não foi encontrado"});
    }

    if (!usuario.nome) {
        return res.status(400).send({menssage: "O campo 'nome' não foi encontrado"});
    }

    if (!usuario.dataNascimento) {
        return res.status(400).send({menssage: "O campo 'dataNascimento' não foi encontrado"});
    }

    if (!usuario.email) {
        return res.status(400).send({menssage: "O campo 'email' não foi encontrado"});
    }

    if (!usuario.senha) {
        return res.status(400).send({menssage: "O campo 'senha' não foi encontrado"});
    }

    usuarios.push(usuario);
    res.status(201).send(usuarios);        
}

const updateUsuario = (req, res) => {
    const id = req.params.id;
    const usuario = req.body;
    let found = false;

    if (Object.keys(usuario).length === 0) {
        return res.status(400).send({menssage: "O corpo da imagem está vazio"});
    }

    if (!usuario.id) {
        return res.status(400).send({menssage: "O campo 'id' não foi encontrado"});
    }

    if (!usuario.nome) {
        return res.status(400).send({menssage: "O campo 'nome' não foi encontrado"});
    }

    if (!usuario.dataNascimento) {
        return res.status(400).send({menssage: "O campo 'dataNascimento' não foi encontrado"});
    }

    if (!usuario.email) {
        return res.status(400).send({menssage: "O campo 'email' não foi encontrado"});
    }

    if (!usuario.senha) {
        return res.status(400).send({menssage: "O campo 'senha' não foi encontrado"});
    }

    usuarios.map(function (valor, index) {
        if (valor.id == id) {
            found = true;
            usuarios[index] = usuario;
            return res.send(usuarios[index]);
        }
    });

    if (!found) {
        res.status(404).send({message: "Usuário não encontrado"});
    }
}

const deleteUsuario = (req, res) => {
    const id = req.params.id;
    let found = false;

    usuarios.map(function (valor, index) {
        if (valor.id == id) {
            found = true;
            usuarios.splice(index, 1);
            return res.send(valor);
        }
    });

    if (!found) {
        res.status(404).send({message: "Usuário não encontrado"});
    }
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}