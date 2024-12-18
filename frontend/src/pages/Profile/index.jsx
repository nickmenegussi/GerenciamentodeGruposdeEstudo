import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import styles from "../Profile/profile.module.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import api from "../../services/api";

function Profile() {
  const { logout, updateUser } = useContext(AuthContext)
  const tokenStorage = localStorage.getItem("@Auth:token")
  const dataStorage = JSON.parse(localStorage.getItem("@Auth:user"))

  const [showModal, setShowModal] = useState(false)
  const novoNomeInput = useRef();
  const novoEmailInput = useRef();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const NewInformations = async () => {
    const data = {
      nome: novoNomeInput.current.value,
      email: novoEmailInput.current.value
    }
    await updateUser(data)
  }

  return (
    <>
      <Header />
      <main className={styles.contentMain}>
        <section>
          <div className={styles.cardProfile}>
            <div className="card-header">
              <h4 className="text-center">Informações do Usuário</h4>
            </div>
            <div className="card-body">
              {dataStorage ? (
                <ul className={styles.userList}>
                  <li>
                    <strong>Nome:</strong> {dataStorage.nome}
                  </li>
                  <li>
                    <strong>Email:</strong> {dataStorage.email}
                  </li>
                  <li>
                    <strong>Senha:</strong> {dataStorage.senha}
                  </li>
                  <li>
                    <strong>Status_Permissao:</strong>
                    {dataStorage.status_permissao}
                  </li>
                  {/* <li><strong>Data de Registro:</strong> {user.registrationDate}</li> */}
                </ul>
              ) : (
                <p>carregando</p>
              )}
              <div className="d-flex justify-content-between">
                <button
                  onClick={logout}
                  className="btn btn-primary mb-2"
                  style={{ width: "45%" }}
                >
                  Log Out
                </button>
                <button
                  onClick={openModal}
                  className="btn btn-primary mb-2"
                  style={{ width: "45%" }}
                >
                  Alterar Informações
                </button>
                {/* { (variavel)  && ()} isso serve para dizer se a variavel que vem antes dela for verdadeira executa oq está em () */}
                {showModal && (
                  <div
                    className="modal show"
                    style={{
                      display: "block",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                    }}
                    tabIndex="-1"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Alterar Informações</h5>
                          <button
                            type="button"
                            className="btn-close"
                            onClick={closeModal}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="card-body">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  ref={novoEmailInput}
                                  type="email"
                                  className={styles.formcontrol}
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                  placeholder="Digite o seu novo email"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="exampleInputNome1"
                                  className="form-label"
                                >
                                  Nome
                                </label>
                                <input
                                  ref={novoNomeInput}
                                  type="text"
                                  className={styles.formcontrol}
                                  id="exampleInputNome1"
                                  placeholder="Digite a sua nova senha"
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={closeModal}
                          >
                            Fechar
                          </button>
                          <button type="button" className="btn btn-primary" onClick={NewInformations}>
                            Salvar mudanças
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
export default Profile;
