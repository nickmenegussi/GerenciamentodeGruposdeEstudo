const express = require("express")
const router = express.Router()
const {
  dados,
  visualizar,
  criarCadastro,
  alterarLogin,
  deletarLogin,
} = require("../controllers/usuarioController")
const {autenticacao}= require('../controllers/AuthController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/dados', authMiddleware ,dados)
router.get("/visualizar", authMiddleware ,visualizar)
router.post("/criarCadastro", criarCadastro)
router.post("/autenticacao", autenticacao)
router.put('/alterar/:id', authMiddleware,alterarLogin)
router.delete('/deletar/:id', authMiddleware, deletarLogin)

module.exports = router
