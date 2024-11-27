const connection = require('../config/db')

// Usuario e login (CRUD)

exports.criarCadastro = (req,res) => {
    const {nome, email, senha} = req.body

    if (!nome || !email || !senha){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos de cadastro",
            body: console.error()
        })
    }

    const query = 'INSERT INTO Usuario(nome, email, senha) VALUES(?, ?, ?)'
    connection.query(query, [nome, email, senha], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "Usuário cadastrado com sucesso",
                data: result
            })
        }
    })
}

exports.criarLogin = (req, res) => {
    const {email, senha} = req.body

    if (!email || !senha){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos de cadastro",
            body: console.error()
        })
    }

    connection.query('SELECT * from Usuario where email = ? and senha = ?', [email, senha], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        }

        if(result.length === 0){
            return res.status(400).json({
                message: 'Email ou senha estão incorretos.',
                success: false,
                body: err
            })
        } else {
            return res.status(201).json({
                message: "Login realizado com sucesso",
                success: true,
                data: result
            })
        }
    })
}

exports.visualizarLogin = (req, res) => {
    const query = 'SELECT * FROM Usuario'
    connection.query(query, (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        } else {
            return res.status(200).json({
                message: 'Sucesso ao exibir os usuarios.',
                success: true,
                body: result
            })
        }
    })
}

// exports.alterarLogin = ''

// exports.deletarLogin = ''
