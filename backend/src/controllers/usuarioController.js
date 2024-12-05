const connection = require("../config/db")
const bcrypt = require("bcrypt")

// Usuario e login (CRUD)

exports.criarCadastro = async (req, res) => {
  const { nome, email, senha } = req.body

  if (!nome || !email || !senha) {
    return res.status(400).json({
      success: false,
      message: "Preencha todos os campos de cadastro",
    })
  }

  // criptografar a senha do user.
  const hash_password = await bcrypt.hash(senha, 10)
  const query =
    "INSERT INTO Usuario(nome, email, senha, status_permissao) VALUES(?, ?, ?, ?)"
  connection.query(
    query,
    [nome, email, hash_password, "USER"],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erro ao se conectar com o servidor.",
          success: false,
          body: err,
        })
      } else {
        return res.status(200).json({
          success: true,
          message: "Usuário cadastrado com sucesso",
          data: result,
        })
      }
    }
  )
}

exports.visualizar = (req, res) => {
  const query = "SELECT * FROM Usuario"
  const usuarioData = req.data
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Erro ao se conectar com o servidor.",
        success: false,
        body: err,
      })
    } else {
      return res.status(200).json({
        message: "Sucesso ao exibir os usuarios.",
        success: true,
        body: result,
      })
    }
  })
}

exports.alterarLogin = (req, res) => {
  const id_user = req.params.id

  if (!id_user) {
    return res.status(400).json({
      message: "O ID do usuario é obrigatório.",
      success: false,
    })
  }

  connection.query(
    "SELECT id_user from Usuario where id_user",
    [id_user],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erro ao se conectar com o servidor.",
          success: false,
          body: err,
        })
      }

      if (result.length === 0) {
        return res.status(400).json({
          message: `Falha ao encontrar o id ${id_user} do usuario. Por isso, não é possível alterar os dados.`,
          success: false,
          body: err,
        })
      } else {
        const { nome, email } = req.body

        if (!nome || !email) {
          return res.status(400).json({
            message: "Preencha todos os campos.",
            success: false,
          })
        }

        connection.query(
          "UPDATE Usuario SET nome = ?, email = ?  WHERE id_user = ?",
          [nome, email, id_user],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                message: "Erro ao se conectar com o servidor.",
                success: false,
                body: err,
              })
            }

            if (result.affectedRows > 0) {
              connection.query(
                "SELECT * FROM Usuario WHERE id_user = ?",
                [id_user],
                (err, result) => {
                  if (err) {
                    return res.status(500).json({
                      message: "Erro ao buscar dados atualizados do usuário.",
                      success: false,
                      body: err,
                    })
                  }

                  if (result.length === 0) {
                    return res.status(404).json({
                      message: "Usuário não encontrado.",
                      success: false,
                    })
                  } else {
                    return res.status(200).json({
                      message: `Successo ao alterar o usuario com o id ${id_user}`,
                      success: true,
                      body: result,
                    })
                  }
                }
              )
            } else {
              return res.status(400).json({
                message: "Nenhuma alteração foi realizada.",
                success: false,
                body: err,
              })
            }
          }
        )
      }
    }
  )
}
exports.deletarLogin = (req, res) => {
  const id_user = req.params.id

  if (!id_user) {
    return res.status(400).json({
      message: "O ID do usuario é obrigatório.",
      success: false,
    })
  }

  connection.query(
    "SELECT * FROM Usuario WHERE id_user = ?",
    [id_user],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erro ao se conectar com o servidor.",
          success: false,
          body: err,
        })
      }

      if (result.length === 0) {
        return res.status(404).json({
          message: `O usuario com ID ${id_user} não foi encontrado.`,
          success: false,
        })
      }

      // Consulta para deletar o estudo
      const deleteQuery = "DELETE FROM Usuario WHERE id_user = ?"
      connection.query(deleteQuery, [id_user], (err, result) => {
        if (err) {
          return res.status(500).json({
            message: `Erro ao tentar deletar o usuario ID ${id_user}.`,
            success: false,
            body: err,
          })
        }

        return res.status(200).json({
          message: `Usuario com ID ${id_estudo} foi deletado com sucesso.`,
          success: true,
          body: result,
        })
      })
    }
  )
}

exports.dados = (req, res) => {
    const usuario = req.data

    return res.status(200).json({
        success: true,
        message: 'Dados do usuário recuperados com sucesso.',
        data: usuario, // Aqui estão os dados decodificados do token
    })
}