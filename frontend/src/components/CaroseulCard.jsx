import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import CardExibir from "./CardEstudo"
import Carregando from "./Carregando"
import "../styles/caroseulCard.css"

function CaroseulCards() {
  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <div className="slider-container mt-3">
      <Slider {...settings}>
        <div className="slick-item">
          <CardExibir />
        </div>
        <div className="slick-item">
          <CardExibir />
        </div>
        <div className="slick-item">
          <CardExibir />
        </div>
        <div className="slick-item">
          <CardExibir />
        </div>
        <div className="slick-item">
          <Carregando />
        </div>
      </Slider>
    </div>
  )
}

export default CaroseulCards
