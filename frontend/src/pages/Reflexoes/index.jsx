import CardReflexao from "../../components/CardReflexao";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "../Reflexoes/Reflexao.module.css"

function Reflexoes() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.Reflexoes}>
            <h1>Reflexoes</h1>
            <CardReflexao/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Reflexoes;
