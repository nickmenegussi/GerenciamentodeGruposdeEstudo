import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import styles from "../Login/PageLogin.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/auth";

function Login() {
  const { login, user } = useContext(AuthContext);

  // hook para pegar valores do input
  const inputEmail = useRef();
  const inputSenha = useRef();

  async function Entrar() {
    try {
      const email = inputEmail.current.value;
      const senha = inputSenha.current.value;

      await login(email, senha);

      inputEmail.current.value = "";
      inputSenha.current.value = "";

      alert("Login realizado com sucesso");
      
    } catch (error) {
      console.error("Erro:", error);

      if (error.response) {
        alert(`Erro: ${error.response.data.message}`);
      }
    }
  }

  if(user){
    return <Navigate to="/home" />
  }
  
  return (
    <>
      <main className={styles.contentMain}>
        <section>
          <div className={styles.card} style={{ width: "25rem" }}>
            <div className="card-body">
              <h3 className="text-center mb-3">Login</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    ref={inputEmail}
                    type="email"
                    className={styles.formcontrol}
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Digite o seu email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Senha
                  </label>
                  <input
                    ref={inputSenha}
                    type="password"
                    className={styles.formcontrol}
                    id="exampleInputPassword1"
                    placeholder="Digite a sua senha"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button
                  onClick={Entrar}
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Entrar
                </button>
                <div className="mt-3 text-center">
                  <p>
                    Esqueceu a senha?{" "}
                    <Link className={styles.linklogin} to={"/login"}>
                      Clique aqui
                    </Link>
                  </p>
                  <p>
                    Não tem uma conta? <span>Cadastre-se </span>
                    <Link className={styles.linklogin} to={"/cadastro"}>
                      Clique aqui
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
