const multer = require("multer")
const path = require("path");


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

module.exports = upload