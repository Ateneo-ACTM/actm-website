import React from "react"
import { Section, Quote, Container } from "./styles"

const QuoteSection = ({ quote, image }) => {
  return (
    <Section
      image={
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      }
    >
      <Container>
        <Quote>{quote}</Quote>
      </Container>
    </Section>
  )
}

export default QuoteSection
