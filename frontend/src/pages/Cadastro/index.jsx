import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import styles from "../Cadastro/PageCadastro.module.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../services/api";

function CadastroUsuario() {
  // hook para pegar os valores dos inputs
  const inputName = useRef()
  const inputEmail = useRef()
  const inputSenha = useRef()


  async function createCadastro(){
    try {
      const response = await api.post('/usuario/criarCadastro', {
        nome: inputName.current.value,
        email: inputEmail.current.value,
        senha: inputSenha.current.value
      })
      alert(response.data.message)
      inputSenha.current.value = ''
      inputEmail.current.value = ''
      inputName.current.value = ''
    } catch (error){
      console.error('Erro ao criar um novo usuárop', error)
      if(error.response){
        alert(`Erro: ${error.response.data.message}`)
      }
    }
  }

  return (
    <>
      <main className={styles.contentMain}>
        <section className={styles.containerContent}>
          <div className={styles.card} style={{ width: "25rem" }}>
            <div className="card-body">
              <h3 className="text-center mb-3">Criar um nova conta</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputName1" className="form-label">
                    Nome
                  </label>
                  <input
                    ref={inputName}
                    type="name"
                    className={styles.formcontrol}
                    id="exampleInputname"
                    aria-describedby="name"
                    placeholder="Digite o seu nome"
                  />
                </div>
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
                onClick={createCadastro}
                  type="button"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
                <div className="mt-3 text-center">
                  <p>
                    Já tem uma conta? <Link className={styles.linklogin} to={'/login'}>Clique aqui</Link>
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

export default CadastroUsuario;
