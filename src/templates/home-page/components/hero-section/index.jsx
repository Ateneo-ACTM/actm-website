import React from "react"
import {
  Section,
  Container,
  Title,
  Tagline,
  Banner,
  ArrowWrapper,
} from "./styles"
import { Link } from "gatsby"
import arrow from "../../../../assets/icons/arrow-down.svg"

const HeroSection = ({ title, image, tagline }) => {
  console.log(tagline)
  return (
    <Section>
      <Container>
        <Banner
          image={
            image && !!image.childImageSharp
              ? image.childImageSharp.fluid.src
              : image
          }
        />
        <Title>{title}</Title>
        <Tagline>
          Move beyond <span>ideas</span>.
        </Tagline>
        <ArrowWrapper>
          <Link to="/#photos">
            <img src={arrow} alt="arrow" />
          </Link>
        </ArrowWrapper>
      </Container>
    </Section>
  )
}

export default HeroSection
