const express = require('express')
const router = express.Router()
const {visualizarEstudo, criarEstudo, alterarEstudo, deletarEstudo} = require('../controllers/estudosController')

// Rota para criar um novo estudo

router.get('/visualizar', visualizarEstudo)

router.post('/criar', criarEstudo)

router.put('/alterar/:id', alterarEstudo)

router.delete('/deletar/:id', deletarEstudo)

module.exports = router
