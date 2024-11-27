import CaroseulCards from "../../../components/CaroseulCard";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import styles from "../Ciede/Ciede.module.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap



function Ciede() {
  return (
    <>
      <Header />
      <main className="mb-5">
        <section>
          <div className={styles.conteudoMessage}>
            <h1>ESDE - Estudo Sistematizado da Doutrina Espírita</h1>
            <p>
              O ESDE é um programa de estudo que busca oferecer aos
              participantes um conhecimento profundo e organizado sobre os
              fundamentos da Doutrina Espírita, abordando temas como a natureza
              do Espírito, o mundo espiritual, e os princípios morais do
              Espiritismo.
            </p>
          </div>
          <div className={styles.containerContent}>
            <div className="row row-cols-2 g-3 m-0">
              <div className="col">
                <div className="card card-mediunico">
                  <div className="card-body">
            
                    <p className="card-text">
                      Escrita mediúnica, onde o médium escreve mensagens
                      recebidas de espíritos.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-mediunico">
                  <div className="card-body">
            
                    <p className="card-text">
                      Material de apoio baseado nas obras fundamentais do
                      Espiritismo.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-mediunico">
                  <div className="card-body ">
        
                    <p className="card-text">
                      Estudo em grupo com debates e reflexões. e mais
                    </p>
                    
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card card-mediunico">
                  <div className="card-body">
                    <p className="card-text">
                      Reuniões semanais com facilitadores capacitados
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
            <h1 className="text-center mt-5">Cursos Disponíveis do ESDE</h1>
            <CaroseulCards />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Ciede;
