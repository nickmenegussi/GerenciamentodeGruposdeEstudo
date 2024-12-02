import { Navigate, useNavigate } from "react-router-dom";


function RotaProtegida({children}) {
    const dadosLocalStorage = JSON.parse(localStorage.getItem("login"));
    if (!dadosLocalStorage) {
        alert('Você não está autenticado! Por favor, realize o seu cadastro ou login.')
      return <Navigate to={'/login'} replace />

    } 
    return children
}

export default RotaProtegida