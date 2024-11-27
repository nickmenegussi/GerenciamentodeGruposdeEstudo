const connection = require('../config/db')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../front/uploads/') // Define a pasta onde as imagens serão salvas
    },
    filename: (request, file, cb) => {
        const fileName = request.body.nomeArquivo ? request.body.nomeArquivo : file.originalname

        cb(null, fileName + path.extname(file.originalname)) // Define o nome do arquivo salvo
    }
})

const upload = multer({
    storage: storage,
})


exports.visualizarEstudo = (req, res) => {
    const query = 'SELECT * FROM Estudo'
    connection.query(query, (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        } else {
            return res.status(200).json({
                message: 'Sucesso ao exibir os grupo de estudo.',
                success: true,
                body: result
            })
        }
    })
}


exports.criarEstudo = upload.single('imagem'), (req, res) => {
    const imagem = req.file ? req.file.filename : null
    const {nome, descricao, categoria, UsuarioId} = req.body

    const params = Array(
        nome, descricao, imagem, categoria,UsuarioId
    )

    connection.query('INSERT INTO Estudo(nome, descricao, imagem, categoria, UsuarioId', params, (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        } else {
            return res.status(200).json({
                message: 'Sucesso ao criar um novo grupo.',
                success: true,
                body: result
            })
        }
    })
}

exports.alterarEstudo = (req, res) => {
    const id_estudo = req.params.id
    connection.query('SELECT * FROM Estudo where id_estudo = ?', id_estudo, (err, result) => {
        if(err){
            return res.status(500).json({
                message: 'Erro ao se conectar com o servidor.',
                success: false,
                body: err
            })
        }

        if(result.length === 0){
            return response.status(400).json({
                message: `Erro ao encontrar o grupo de Estudo com o id ${id_estudo} no nosso Sistema.`,
                success: false,
                data: err
            })
        }
        const {nome, descricao, categoria} = req.body

        connection.query('Update Estudo set nome = ?, set descricao = ? and categoria = ? where id_estudo = ?', [nome,descricao, categoria, id_estudo] ,(err,result) => {
            if(err){
                return res.status(500).json({
                    message: `Erro ao atualizar item com o id ${id_estudo}.`,
                    success: false,
                    body: err
                })
            }
            else {
                return res.status(200).json({
                    message: 'Sucesso ao alterar item.',
                    success: true,
                    body: result
                })
            }

        })

    })
}

exports.deletarEstudo = (req, res) => {
    
}