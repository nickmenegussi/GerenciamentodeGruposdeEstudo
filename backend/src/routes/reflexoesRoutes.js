const express = require('express')
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const {visualizarReflexao, criarReflexao, alterarReflexao, deletarReflexao} = require('../controllers/reflexoesController')

router.get('/visualizar', authMiddleware , visualizarReflexao )

router.post('/criarReflexao', authMiddleware ,criarReflexao)

router.put('/alterar/:id', authMiddleware ,alterarReflexao)

router.delete('/deletar/:id', authMiddleware ,deletarReflexao)