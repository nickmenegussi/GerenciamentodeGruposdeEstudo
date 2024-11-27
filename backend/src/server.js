const express = require("express");
const cors = require("cors");
const port = 3001;
const estudosRoutes = require("./routes/estudosRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/estudos", estudosRoutes);
app.use("/usuario", usuarioRoutes);

app.listen(port, () => console.log(`Rodando na porta ${port}`));
