import React from "react"
import { Link } from "gatsby"
import { Section, Tagline, Container, ButtonWrapper, Button } from "./styles"

const MADSection = ({ tagline, image, buttonText, buttonVisible }) => {
  return (
    <Section
      image={
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      }
    >
      <Container>
        <Tagline>{tagline}</Tagline>
        {buttonVisible ? (
          <ButtonWrapper>
            <Link to="/mad">
              <Button>{buttonText}</Button>
            </Link>
          </ButtonWrapper>
        ) : null}
      </Container>
    </Section>
  )
}

export default MADSection
