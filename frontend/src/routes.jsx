import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adicionargrupo from "./pages/Novo Grupo/Novogrupo";
import Reflexoes from "./pages/Reflexoes";
import EstudoEsde from "./pages/Estudos/Estudo mediunico";
import Esde from "./pages/Estudos/Esde";
import Ciede from "./pages/Estudos/Ciede";
import PaginaErro from "./pages/Pagina404";
import CadastroUsuario from "./pages/Cadastro";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/novo-livro"
          element={
            <PrivateRoute>
              <Adicionargrupo />
            </PrivateRoute>
          }
        />
        <Route
          path="/reflexoes"
          element={
            <PrivateRoute>
              <Reflexoes />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudo/mediunidade"
          element={
            <PrivateRoute>
              <EstudoEsde />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudo/iniciante"
          element={
            <PrivateRoute>
              <Ciede />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudo/intermediario&avancado"
          element={
            <PrivateRoute>
              <Esde />
            </PrivateRoute>
          }
        />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<PaginaErro />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
