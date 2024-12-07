import Slider from "react-slick";
import CardExibir from "./CardEstudo";
import "../styles/caroseulCard.css";
import { useState } from "react";
import { useEffect } from "react";
import api from "../services/api";

function CarrosselGruposDisponiveis() {
    const [gruposDisponiveis, setgruposDisponiveis] = useState([])

    useEffect(() => {
        const fetchGrupo = async () => {
            const response = await api.get('http://localhost:3001/estudos/visualizar')
            setgruposDisponiveis(response.data.body)

            if(response.success){
                alert(response.data)
            }
        }
        fetchGrupo()
    }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="slider-container mt-3">
      <Slider {...settings}>
        {gruposDisponiveis.length > 0 ? (
          gruposDisponiveis.map((content) => (
            <div key={content.id_estudo} className="slick-item">
              <CardExibir title={content.categoria} cardText={content.descricao} img={content.img} />
            </div>
          ))
        ) : (
          <p>Não há grupos disponíveis no momento.</p>
        )}
      </Slider>
    </div>
  );
}

export default CarrosselGruposDisponiveis;
