const connection = require("../config/db")

exports.visualizarEstudo = (req, res) => {
  const query = "SELECT * FROM Estudo"
  connection.query(query, (err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Erro ao se conectar com o servidor.",
        success: false,
        body: err,
      })
    } else {
      return res.status(200).json({
        message: "Sucesso ao exibir os grupo de estudo.",
        success: true,
        body: result,
      })
    }
  })
}

exports.visualizarEstudoPorUser = (req, res) => {
  const UsuarioId = req.params.id
  const query = "SELECT * FROM Estudo where UsuarioId = ?"
  connection.query(query, [UsuarioId] ,(err, result) => {
    if (err) {
      return res.status(500).json({
        message: "Erro ao se conectar com o servidor.",
        success: false,
        body: err,
      })
      
    } 
    
    if(result.length === 0){
      return res.status(400).json({
        message: `O usuario ${UsuarioId} digitado não existe no nosso sistema.`,
        success: false,
        data: err,
      })
    }
    else {
      return res.status(200).json({
        message: "Sucesso ao exibir os grupo de estudo.",
        success: true,
        body: result,
      })
    }
  })
}

exports.criarEstudo = (req, res) => {
  const imagem = req.file ? req.file.filename : null
  const { nome, descricao, categoria, UsuarioId } = req.body

  if (!nome || !descricao || !categoria || !UsuarioId) {
    return res.status(400).json({
      message: "Preencha todos os campos.",
      success: false,
    })
  }

  const params = [nome, descricao, imagem, categoria, UsuarioId]

  connection.query('SELECT id_user FROM Usuario where id_user = ?', [UsuarioId] ,(err,result) => {
    if(err){
      return res.status(500).json({
        message: "Erro ao se conectar com o servidor.",
        success: false,
        data: err,
      })
    }

    if(result.length === 0){
        return res.status(400).json({
          message: `O usuario ${UsuarioId} digitado não existe no nosso sistema.`,
          success: false,
          data: err,
        })
    } else {
      connection.query(
        "INSERT INTO Estudo(nome, descricao, imagem, categoria, UsuarioId) VALUES (?, ?, ?, ?, ?)",
        params,
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: "Erro ao se conectar com o servidor.",
              success: false,
              data: err,
            })
          } else {
            return res.status(200).json({
              message: "Sucesso ao criar um novo grupo.",
              success: true,
              data: result,
            })
          }
        }
      )
    }

  })
}

exports.alterarEstudo = (req, res) => {
  const id_estudo = req.params.id

  if (!id_estudo) {
    return res.status(400).json({
      message: "O ID do estudo é obrigatório.",
      success: false,
    })
  }

  connection.query(
    "SELECT * FROM Estudo where id_estudo = ?",
    id_estudo,
    (err, result) => {
      if (err) {
        return res.status(500).json({
          message: "Erro ao se conectar com o servidor.",
          success: false,
          body: err,
        })
      }

      if (result.length === 0) {
        return response.status(400).json({
          message: `Erro ao encontrar o grupo de Estudo com o id ${id_estudo} no nosso Sistema.`,
          success: false,
          data: err,
        })
      }
      const { nome, descricao, categoria } = req.body

      connection.query(
        "Update Estudo set nome = ?, descricao = ?, categoria = ? where id_estudo = ?",
        [nome, descricao, categoria, id_estudo],
        (err, result) => {
          if (err) {
            return res.status(500).json({
              message: `Erro ao atualizar item com o id ${id_estudo}.`,
              success: false,
              body: err,
            })
          } else {
            return res.status(200).json({
              message: "Sucesso ao alterar item.",
              success: true,
              body: result,
            })
          }
        }
      )
    }
  )
}

exports.deletarEstudo = (req, res) => {
  const id_estudo = req.params.id

  if (!id_estudo) {
    return res.status(400).json({
      message: "O ID do estudo é obrigatório.",
      success: false,
    })
  }
  connection.query(
    "SELECT * FROM Estudo WHERE id_estudo = ?"[id_estudo],
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
          message: `O grupo de estudo com ID ${id_estudo} não foi encontrado.`,
          success: false,
        })
      }

      // Consulta para deletar o estudo
      const deleteQuery = "DELETE * FROM Estudo WHERE id_estudo = ?"
      connection.query(deleteQuery, [id_estudo], (err, result) => {
        if (err) {
          return res.status(500).json({
            message: `Erro ao tentar deletar o grupo de estudo com ID ${id_estudo}.`,
            success: false,
            body: err,
          })
        }

        return res.status(200).json({
          message: `Grupo de estudo com ID ${id_estudo} foi deletado com sucesso.`,
          success: true,
          body: result,
        })
      })
    }
  )
}
