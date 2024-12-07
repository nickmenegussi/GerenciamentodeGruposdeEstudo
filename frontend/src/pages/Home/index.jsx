import CardReflexao from "../../components/CardReflexao";
import CaroseulCards from "../../components/CaroseulGruposAcessados"
import CarrosselGruposDisponiveis from "../../components/CaroseulGruposDisponiveis"
import Header from "../../components/Header";
import "../../styles/home.css";
import Imagem from "../../assets/images/1351417.png";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const contentReflexao = [
    {
      id: 1,
      title: "Titulo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error non nulla modi doloremque distinctio. Dignissimos, delectus accusamus? Ut minima maiores odio, quaerat voluptates vitae nihil nobis ipsa laudantium omnis natus.",
      whoAdd: "Adicionado por josé",
    },
    {
      id: 2,
      title: "Titulo",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error non nulla modi doloremque distinctio. Dignissimos, delectus accusamus? Ut minima maiores odio, quaerat voluptates vitae nihil nobis ipsa laudantium omnis natus.",
      whoAdd: "Adicionado por carlos",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <section className="container content-container">
          <img src={Imagem} alt="Logo" style={{ width: "35vw" }} />
          <div>
            <h1>Quem somos nós?</h1>
            <p className="text-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              laudantium minima quasi esse totam ex quisquam? Quidem quia
              repellat quis fugiat voluptate facilis laudantium. Ipsa, fugiat.
              Voluptate et maiores perspiciatis!
            </p>
          </div>
        </section>

        <section className="container ">
          <div className="Header-container">
            <h1>Grupos que você Participa</h1>
            <a href="#" className="navbar-brand">
              Ver mais
            </a>
          </div>
          <CaroseulCards />
        </section>

        <section className="container">
          <div className="Header-container">
            <h1>Grupos disponiveis</h1>
            <Link className="navbar-brand">Ver mais</Link>
          </div>
          <CarrosselGruposDisponiveis />
        </section>

        <section className="container">
          <div className="Header-container">
            <h1>Reflexões</h1>
            <Link className="navbar-brand" to={"/reflexoes"}>
              Ver mais
            </Link>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 m-0">
            {contentReflexao.map((content) => (
              <div key={content.id} className="col">
                <CardReflexao
                  title={content.title}
                  description={content.description}
                  whoAdd={content.whoAdd}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;
