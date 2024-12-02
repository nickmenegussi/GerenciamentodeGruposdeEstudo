import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adicionargrupo from "./pages/Novogrupo";
import Reflexoes from "./pages/Reflexoes";
import EstudoEsde from "./pages/Estudos/Estudo mediunico";
import Esde from "./pages/Estudos/Esde";
import Ciede from "./pages/Estudos/Ciede";
import PaginaErro from "./pages/Pagina404";
import CadastroUsuario from "./pages/Cadastro";
import Login from "./pages/Login";

function AppRoutes(){
    return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-livro" element={<Adicionargrupo />} />
          <Route path="/reflexoes" element={<Reflexoes />} />
          <Route path="/estudo/mediunidade" element={<EstudoEsde />} />
          <Route path="/estudo/iniciante" element={<Ciede />} />
          <Route path="/estudo/intermediario&avancado" element={<Esde />} />
          <Route path="/cadastro" element={<CadastroUsuario />} />
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<PaginaErro />} />
        </Routes>
      </Router>
    )
}

export default AppRoutes