const express = require("express")
const authMiddleware = require('../middleware/authMiddleware')
const router = express.Router()
const {
  visualizarLogin,
  criarCadastro,
  criarLogin,
  alterarLogin,
  deletarLogin,
} = require("../controllers/usuarioController")

router.get("/visualizar", authMiddleware ,visualizarLogin)

router.post("/criarCadastro", criarCadastro)

router.post("/criarLogin", criarLogin)

router.put('/alterar:id',authMiddleware, alterarLogin)

router.delete('/deletar/:id', authMiddleware, deletarLogin)

module.exports = router
