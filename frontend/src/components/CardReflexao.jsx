import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import foto from "../assets/images/1351417.png";
import styles from "../pages/Reflexoes/Reflexao.module.css";

function CardReflexao({ title, description, whoAdd }) {
  return (
    <div className={styles.card}>
      <div className="card-body">
        <h5 className={styles.cardtitle}>{title}</h5>
        <p className={styles.cardtext}>{description}</p>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.linha} ></div>
        <small className={styles.cardtext}>{whoAdd}</small>
      </div>
    </div>
  );
}

export default CardReflexao;
