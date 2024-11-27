import Header from "../../../components/Header";
import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import "./index.css";
import CaroseulCards from "../../../components/CaroseulCard";
import Footer from "../../../components/Footer";

function EstudoEsde() {
  return (
    <>
      <Header />
      <main>
        <section className="container my-5" id="mediunidade">
          <h1 className="text-center text-primary mb-4">
            O que é Mediunidade?
          </h1>

          <div className="row">
            <div className="col-lg-8 mx-auto">
              <p className="lead text-justify text-muted">
                A mediunidade é um fenômeno que envolve a comunicação entre o
                mundo material e o espiritual, sendo um conceito fundamental
                dentro do Espiritismo, conforme descrito por Allan Kardec. Ela é
                considerada uma capacidade natural que algumas pessoas possuem
                de se comunicar com espíritos de diferentes níveis, podendo ser
                percebida de diversas formas, como através de visões,
                impressões, sons, e até mesmo em um estado de transe.
              </p>

              <p className="lead text-justify text-muted">
                Dentro da doutrina espírita, a mediunidade é vista como uma
                faculdade que pode ser desenvolvida por qualquer pessoa, mas que
                requer discernimento, equilíbrio e responsabilidade para ser
                utilizada de forma ética e benéfica. Kardec, em suas obras, fala
                da mediunidade como uma ferramenta para o aprimoramento moral e
                para a educação espiritual, sendo essencial no processo de
                evolução das almas.
              </p>

              <h2 className="text-primary my-4">Tipos de Mediunidade</h2>

              <p className="lead text-justify text-muted">
                Existem diversas formas de mediunidade, cada uma com suas
                características específicas. Alguns exemplos incluem:
              </p>

              <div class="container ">
                <div class="row row-cols-2 g-3">
                  <div class="col">
                    <div className="card card-mediunico">
                      <div className="card-body">
                        <h5 className="card-title">Psicografia</h5>
                        <p className="card-text">
                        Escrita mediúnica, onde o médium
                        escreve mensagens recebidas de espíritos.
                        </p>
                        <a href="#" className="btn btn-info">
                          Acessar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Clariaudiência</h5>
                        <p className="card-text">
                        Capacidade de ouvir vozes ou
                        mensagens de espíritos, mesmo sem que haja som físico.
                        </p>
                        <a href="#" className="btn btn-info">
                          Acessar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body ">
                        <h5 className="card-title">Vidência</h5>
                        <p className="card-text">
                        Percepção visual de espíritos ou
                        acontecimentos não visíveis aos olhos humanos comuns.
                        </p>
                        <a href="#" className="btn btn-info">
                          Acessar
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Transcomunicação</h5>
                        <p className="card-text">
                        Comunicação com espíritos
                        através de dispositivos eletrônicos, como gravações de voz.
                        </p>
                        <a href="#" className="btn btn-info">
                          Acessar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="lead text-justify text-muted mt-3">
                A mediunidade é uma ferramenta poderosa, que pode ser utilizada
                para o bem ou para o mal, dependendo da intenção e do preparo do
                médium. O espiritismo, em sua base, defende que a mediunidade
                deve ser cultivada com zelo, amor e respeito, buscando sempre a
                evolução do ser humano e o auxílio ao próximo.
              </p>

              <h2 className="text-primary my-4">
                Como Desenvolver a Mediunidade?
              </h2>
              <p className="lead text-justify text-muted">
                O desenvolvimento da mediunidade deve ser feito com prudência,
                orientação e estudo constante. Não é algo que deve ser buscado
                superficialmente, mas sim com o objetivo de auxiliar na evolução
                espiritual. Alguns passos incluem:
              </p>

              <div class="container ">
                <div class="row row-cols-2 g-3">
                  
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Participação em grupos de estudos</h5>
                        <p className="card-text">
                        A troca de
                  experiências com outros médiuns e o aprendizado em grupo são
                  essenciais.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Prece e equilíbrio emocional</h5>
                        <p className="card-text">
                         Manter a mente
                  e o espírito em harmonia é fundamental para um bom
                  desenvolvimento mediúnico.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Prece e equilíbrio emocional</h5>
                        <p className="card-text">
                         Manter a mente
                  e o espírito em harmonia é fundamental para um bom
                  desenvolvimento mediúnico.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  <div class="col">
                    <div className="card card-mediunico">
                      
                      <div className="card-body">
                        <h5 className="card-title">Estudo contínuo</h5>
                        <p className="card-text">
                        Compreender as bases do
                  Espiritismo e do comportamento espiritual. asadsadasdasdasdasd
                        </p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mb-5">
          <h1>Grupo de Estudo sobre Mediunidade</h1>
          <CaroseulCards />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EstudoEsde;
