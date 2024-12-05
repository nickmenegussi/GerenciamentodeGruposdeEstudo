import Header from "../../components/Header";
import styles from "../Novo Grupo/NovoGrupo.module.css"

function Adicionargrupo() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <div className={styles.card}>
            <h1>Adicionar Novo Grupo de Estudo</h1>
            <form>
              <div className="mb-3">
                <label className="form-label">Título do Grupo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o título"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Descrição do livro"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Imagem</label>
                <input type="file" className="form-control" />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Salvar
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Adicionargrupo;
