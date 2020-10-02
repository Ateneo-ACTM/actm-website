import React from "react"
import { Section, Quote } from "./styles"

const QuoteSection = ({ quote, image }) => {
  return (
    <Section
      image={
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      }
    >
      <Quote>{quote}</Quote>
    </Section>
  )
}

export default QuoteSection
