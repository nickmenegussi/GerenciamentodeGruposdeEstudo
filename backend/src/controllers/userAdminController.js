const connection = require("../config/db")
const bcrypt = require('bcrypt')


exports.criarUserAdmin = (req, res) => {
    const {nome, email, senha} = req.body

    if (!nome || !email || !senha){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos de cadastro",
            
        })
    }

    connection.query(`SELECT * FROM Usuario where status_permissao = 'ADMIN' `, async (err,result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        } 

        if(result.length > 0){
            return res.status(403)
             .json({
                 success: false,
                 message: 'Já existe um administrador no sistema'
             })
        }
        const hash_password = await bcrypt.hash(senha, 10)
        connection.query('INSERT INTO Usuario(nome, email, senha, status_permissao) VALUES(?, ?, ?, ?)', [nome, email, hash_password, 'ADMIN'], (err, result) => {
            if(result){
                return res
                .status(201)
                .json({
                        success: true,
                        message: "Administrador cadastrado com sucesso",
                        data: result
                    })
                   
            } else {
                return res
                    .status(400)
                    .json({
                        success: false,
                        message: "Erro ao cadastrar Administrador",
                        data: err
                    })
            }
        })
    })
}
exports.alterarAdmin = (req, res) => {
    const {nome, email} = req.body
    const id_user = req.params.id

    const query = `UPDATE Usuario
        SET nome = ?, email = ? WHERE id_usuario = ? AND status_permissao = 'ADMIN'
    `
    connection.query(query, [nome,email, id_user], (err, result) => {
        if (err){
            return res 
            .status(400)
            .json({success: false, message: 'Erro ao atualizar as informações', body: err})
        } 
        
        else {
            return res
            .status(201)
            .json({
                sucess: true,
                message: 'Sucesso ao atualizar as informações.'
            })
        }
    }) 
}

exports.deletarAdmin = (req, res) => {
    let id = req.params.id 

    if (!id){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos."
        })
    }
    
    const query = `DELETE FROM Usuario WHERE id_usuario = ? AND status_permissao = 'ADMIN'`
    connection.query(query, [id], (err, result) => {
        if (err){
            return res.status(500).json({
                message: 'Erro ao procurar o Usuário no nosso sistema',
                success: false,
                data: err
            })
        }

        if (result.affectedRows === 0){
            return res.status(400).json({
                message: `O usuário com o id ${id} não foi encontrado no nosso sitema.`,
                success: false,
                data: err
            })
        } else{
            res
            .status(200)
            .json({
                message: `Sucesso ao deletar o administrador com o id: ${id}.`,
                success: true,
                data: result
            })
        }
    })
}