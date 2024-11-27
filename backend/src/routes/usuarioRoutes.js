const express = require("express")
const router = express.Router()
const {
  visualizarLogin,
  criarCadastro,
  criarLogin,
  alterarLogin,
  deletarLogin,
} = require("../controllers/usuarioController")

router.get("/visualizar", visualizarLogin)

router.post("/criarCadastro", criarCadastro)

router.post("/criarLogin", criarLogin)

// router.put('/alterar:id', alterarLogin)

// router.delete('/deletar/:id', deletarLogin)

module.exports = router
