const connection = require('../config/db')
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcrypt')


exports.autenticacao = async (req, res) => {
    const {email, senha} = req.body

    if (!email || !senha){
        return res.status(400).json({
            success: false,
            message: "Preencha todos os campos de cadastro",
            
        })
    }

    connection.query('SELECT * from Usuario where email = ? ', [email], async (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        }

        if(result.length === 0 ){
            return res.status(400).json({
                message: 'Usuário não existe.',
                success: false
            })
        } 

        const user = result[0]
        const isHashPawword = await bcrypt.compare(senha, user.senha)

        if(!isHashPawword){
            return res.status(400).json({
                message: 'Email ou senha estão incorretos.',
                success: false,
                body: err
            })
        } 

        // criando um token e passando os valores que ficarao dentro desse token que estão em {}
        const token = jwt.sign({id: user.id_user, email: user.email, status_permissao: user.status_permissao}, process.env.JWT_SECRET, {
            expiresIn: '1d'
        })
                
        return res.status(200).json({
            message: "Login realizado com sucesso",
            success: true,
            body: {user: user, token}
        })
        
    })
}

