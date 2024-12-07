import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardExibir from "./CardEstudo";
import "../styles/caroseulCard.css";
import { useState, useEffect } from "react";
import api from "../services/api";
import Carregando from "./Carregando";

function CaroseulCards() {
  const [ContentCard, setContentCard] = useState([]);
  const DadosJson = JSON.parse(localStorage.getItem("@Auth:user"));

  useEffect(() => {
    const axiosContent = async () => {
      const response = await api.get(
        `http://localhost:3001/estudos/visualizar/${DadosJson.id_user}`
      );
      setContentCard(response.data.body);
    };
    axiosContent();
  }, [])

  const settings = {
    infinite: ContentCard.length > 3,
    centerMode: true,
    speed: 500,
    slidesToShow: 3, // Define o número de slides dinamicamente
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Ajuste para telas pequenas
        },
      },
    ],
  };

  return (
    <div className="slider-container mt-3">
      <Slider {...settings}>
        {ContentCard.length > 0 ? (
          ContentCard.map((content) => (
            <div key={content.id_estudo} className="slick-item">
              <CardExibir
                title={content.categoria}
                cardText={content.descricao}
                img={content.img}
              />
            </div>
          ))
        ) : (
          <Carregando />
        )}
      </Slider>
    </div>
  );
}

export default CaroseulCards;
