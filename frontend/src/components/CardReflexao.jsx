import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap
import foto from "../assets/images/1351417.png"
import "../pages/Reflexoes/index.css"

function CardReflexao({title, description, author, whoAdd}){
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-2 m-0">
          <div className="col" >
            <div className="card h-100 card-reflexao">
              <div className="card-body">
                <h5 className="card-title">Titulo da reflexão</h5>
                <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis doloremque laborum debitis asperiores quia, nobis earum tenetur soluta eaque blanditiis provident alias aspernatur pariatur maxime labore ea! Rerum, facilis sunt?" <b> Author - lorem</b> </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">Adicionado por @ no dia: mm/hh/year</small>
              </div>
            </div>
          </div>
      
      </div>
    )
}

export default CardReflexao