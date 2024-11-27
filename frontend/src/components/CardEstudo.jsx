import "bootstrap/dist/css/bootstrap.min.css"; // Importando o Bootstrap

function CardExibir({title, cardText, img}) {
  return (
    <div className="card" >
      <img src="https://via.placeholder.com/400" className="card-img-top h-50" alt="Imagem do Card" />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Acessar
        </a>
      </div>
    </div>
  );
}

export default CardExibir;
