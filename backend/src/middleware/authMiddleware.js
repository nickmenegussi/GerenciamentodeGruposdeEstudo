// arquivo responsavel para proteger as rotas, verificando se o usuario está autenticado
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            success: false,
            message: 'Token não fornecido. Acesso negado.'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // Decodifica o token
        req.data = decoded
        next()
    } catch(err){
        return res.status(401).json({
            success: false,
            message: 'Token inválido ou expirado.',
        })
    }
}

module.exports = authMiddleware