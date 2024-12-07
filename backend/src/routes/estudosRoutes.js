const express = require('express')
const router = express.Router()
const {visualizarEstudo, criarEstudo, alterarEstudo, deletarEstudo} = require('../controllers/estudosController')
const authMiddleware = require('../middleware/authMiddleware')
const upload = require("../config/multer/multerConfig")
// Rota para criar um novo estudo

router.get('/visualizar', authMiddleware ,visualizarEstudo)

router.post('/criar', authMiddleware, upload.single('imagem') ,criarEstudo)

router.put('/alterar/:id', authMiddleware ,alterarEstudo)

router.delete('/deletar/:id', authMiddleware ,deletarEstudo)

module.exports = router
