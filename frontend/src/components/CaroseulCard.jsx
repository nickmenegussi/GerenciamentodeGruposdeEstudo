import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import CardExibir from "./CardEstudo"
import "../styles/caroseulCard.css"
import { useState } from "react"

function CaroseulCards() {
  const contentCard = [{
     id: 1,
     title: 'Grupo de mediunidade',
     cardText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, perspiciatis! Cupiditate id expedita incidunt repudiandae voluptatibus modi? Beatae, commodi officia maiores sapiente corporis quo voluptates blanditiis magnam veniam praesentium dolorem.',
     img: 'Testando'
  },{
    id: 2,
     title: 'Grupo Ciede',
     cardText: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, perspiciatis! Cupiditate id expedita incidunt repudiandae voluptatibus modi? Beatae, commodi officia maiores sapiente corporis quo voluptates blanditiis magnam veniam praesentium dolorem.',
     img: 'Testando'
  }]
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
      {contentCard.map((card) => (
        <div className="slick-item" key={card.id}>
          <CardExibir title={card.title} cardText={card.cardText} />
        </div>
      ))}
        
      </Slider>
    </div>
  )
}

export default CaroseulCards
