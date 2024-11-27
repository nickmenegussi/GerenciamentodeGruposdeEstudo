import { Link } from "react-router-dom";
import styles from "../Pagina404/Page404.module.css"

function PaginaErro(){
    return (
        <div className={styles.errorPage}>
            <h1 className={styles.errorTitle}>404</h1>
            <p className={styles.errorMessage}>Pagina Não Encontrada.</p>
            <Link to={"/"}>
                Voltar para a página inicial
            </Link>
        </div>

    )
}

export default PaginaErro