const connection = require('../config/db')
const jwt = require('jsonwebtoken')
// Usuario e login (CRUD)

exports.criarCadastro = (req,res) => {
    const {nome, email, senha} = req.body

    if (!nome || !email || !senha){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos de cadastro",
            
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
        } 
        
        const data = result[0]
        const token = jwt.sign({id: data.id_user, email: data.email}, process.env.JWT_SECRET, {
            expiresIn: '1h'
        })
        
            return res.status(200).json({
                message: "Login realizado com sucesso",
                success: true,
                data: token
            })
        
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

exports.alterarLogin = (req, res) => {
    const id_user = req.params.id 

    if(!id_user){
        return res.status(400).json({
            message: 'O ID do usuario é obrigatório.',
            success: false,
        });
    }

    connection.query('SELECT id_user from Usuario where id_user', [id_user], (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        }

        if(result.length === 0){
            return res.status(400).json({
                message: `Falha ao encontrar o id ${id_user} do usuario. Por isso, não é possível alterar os dados.`,
                success: false,
                body: err
            })
        } else {
            const {nome, email, senha} = req.body

            if(!nome || !email || !senha){
                return res.status(400).json({
                    message: 'Preencha todos os campos.',
                    success: false,
                })
            }

            connection.query('UPDATE Usuario SET nome = ?, SET email = ? and SET senha = ? WHERE id_user = ?', [nome, email, senha, id_user], (err, result) => {
                if(err){
                    return res.status(500).json({
                        message: 'Erro ao se conectar com o servidor.',
                        success: false,
                        body: err
                    })
                }

                if(result.affectedRows > 0){
                    return res.status(200).json({
                        message: `Successo ao alterar o usuario com o id ${id_user}`,
                        success: true,
                        body: result
                    })
                } else {
                    return res.status(400).json({
                        message: 'Erro inesperado. Por favor, digite novamente.',
                        success: false,
                        body: err
                    })
                }
            })
        }
    })
}
exports.deletarLogin = (req, res) => {
    const id_user = req.params.id 

    if(!id_user){
        return res.status(400).json({
            message: 'O ID do usuario é obrigatório.',
            success: false,
        })
    }
    
    connection.query('SELECT * FROM Usuario WHERE id_user = ?', [id_user], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err,
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                message: `O usuario com ID ${id_user} não foi encontrado.`,
                success: false,
            });
        }

        // Consulta para deletar o estudo
        const deleteQuery = 'DELETE FROM Usuario WHERE id_user = ?';
        connection.query(deleteQuery, [id_user], (err, result) => {
            if (err) {
                return res.status(500).json({
                    message: `Erro ao tentar deletar o usuario ID ${id_user}.`,
                    success: false,
                    body: err,
                });
            }

            return res.status(200).json({
                message: `Usuario com ID ${id_estudo} foi deletado com sucesso.`,
                success: true,
                body: result,
            });
        })
    })

}