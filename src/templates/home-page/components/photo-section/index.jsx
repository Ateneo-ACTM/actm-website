import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Background, Container } from "./styles"

const PhotoSection = ({ images, background }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Background
      image={
        background && !!background.childImageSharp
          ? background.childImageSharp.fluid.src
          : background
      }
      id="photos"
    >
      <Container>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div>
              <img
                src={
                  image.image && !!image.image.childImageSharp
                    ? image.image.childImageSharp.fluid.src
                    : image.image
                }
                alt={`actm-${index}`}
              />
            </div>
          ))}
        </Slider>
      </Container>
    </Background>
  )
}

export default PhotoSection
