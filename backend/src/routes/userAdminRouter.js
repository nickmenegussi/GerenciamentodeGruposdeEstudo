const express = require("express")
const router = express.Router()
const {
  criarUserAdmin,
  alterarAdmin,
  deletarAdmin,
} = require("../controllers/userAdminController")
const {autenticacao}= require('../controllers/AuthController')

router.post("/criarCadastroAdmin", criarUserAdmin)
router.post("/autenticacao", autenticacao)
router.put('/alterar/userAdmin/:id',alterarAdmin)
router.delete('/deletar/userAdmin/:id', deletarAdmin)

module.exports = router
