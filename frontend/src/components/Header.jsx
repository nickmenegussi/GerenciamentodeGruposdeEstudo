import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "../styles/App.css"
import { CircleUserRound } from "lucide-react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-2">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/novo-livro"
                >
                  Adicionar Grupo
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Estudos
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/estudo/mediunidade"}>
                      Mediunidade
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/estudo/intermediario&avancado"}>
                      Esde
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={"/estudo/iniciante"}>
                      Ciede
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to={""}>
                      Grupos Disponíveis
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/reflexoes">
                  Reflexões
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={"/cadastro"}>
                    <CircleUserRound />
                  </Link>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
