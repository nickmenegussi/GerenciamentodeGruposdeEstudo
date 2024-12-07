import { useRef } from "react"
import Header from "../../components/Header"
import styles from "../Novo Grupo/NovoGrupo.module.css"
import api from "../../services/api"

function Adicionargrupo() {
  const token = localStorage.getItem("@Auth:token")
  const dados = JSON.parse(localStorage.getItem('@Auth:user'))

  const InputName = useRef()
  const InputDescription = useRef()
  const InputImage = useRef()
  const InputCategoria = useRef()

  console.log(InputImage)


  async function cadsatrarGrupo(event)  {
    event.preventDefault()

    try {

      const nome = InputName.current.value
      const descricao = InputDescription.current.value
      const imagem = InputImage.current.files[0]
      const categoria = InputCategoria.current.value
      const UsuarioId = dados.id_user
          
      console.log(imagem)

      const formData = new FormData()
      formData.append("nome", nome)
      formData.append("descricao", descricao)
      formData.append("imagem", imagem)
      formData.append("categoria", categoria)
      formData.append("UsuarioId", UsuarioId)
      console.log(formData)
      const response = await api.post(
        "http://localhost:3001/estudos/criar",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
          }
        }
      )
      if (response.data.success) {
        alert(response.data.message)
      }
    } catch (error) {
      console.log(`Erro: `, error)

      if (error.response) {
        alert(`Erro: Erro ao se conectar com o servidor`);
      }
    }
  }

  return (
    <>
      <Header />
      <main>
        <section className={styles.container}>
          <div className={styles.card}>
            <h1>Adicionar Novo Grupo de Estudo</h1>
            <form onSubmit={cadsatrarGrupo} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label">Título do Grupo</label>
                <input
                  ref={InputName}
                  type="text"
                  className="form-control"
                  placeholder="Digite o título"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Descrição</label>
                <textarea
                  ref={InputDescription}
                  className="form-control"
                  rows="3"
                  placeholder="Descrição do livro"
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">Categoria</label>
                <input
                  ref={InputCategoria}
                  type="text"
                  className="form-control"
                  placeholder="Descrição do livro"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label">Imagem</label>
                <input type="file" className="form-control imagem" name="imagem"  ref={InputImage}  />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Salvar
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}

export default Adicionargrupo