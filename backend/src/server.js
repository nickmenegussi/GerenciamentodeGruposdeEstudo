const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv')
const port = 3001;
const estudosRoutes = require("./routes/estudosRoutes");
const admin = require("./routes/userAdminRouter");
const usuarioRoutes = require("./routes/usuarioRoutes");
const authMiddleware = require('./middleware/authMiddleware')


const app = express();

app.use(cors());
app.use(express.json());
dotenv.config()
app.use(express.urlencoded({ extended: true }));
app.use("/estudos", authMiddleware ,estudosRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/admin", authMiddleware ,admin)

app.listen(port, () => console.log(`Rodando na porta ${port}`));
