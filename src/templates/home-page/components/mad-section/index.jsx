import React from "react"
// import { Link } from "gatsby"
import { Section, Tagline, ButtonWrapper, Button } from "./styles"

const MADSection = ({ tagline, image, buttonText, buttonVisible }) => {
  const toggleComingSoon = () => alert("Coming Soon!")
  return (
    <Section
      image={
        image && !!image.childImageSharp
          ? image.childImageSharp.fluid.src
          : image
      }
    >
      <div>
        <Tagline>{tagline}</Tagline>
        {buttonVisible ? (
          <ButtonWrapper>
            <Button onClick={toggleComingSoon}>{buttonText}</Button>
          </ButtonWrapper>
        ) : null}
      </div>
    </Section>
  )
}

export default MADSection
