import React, { Fragment } from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

import HeroSection from "./components/hero-section"
import PhotoSection from "./components/photo-section"
import QuoteSection from "./components/quote-section"
import StoriesSection from "./components/stories-section"
import MADSection from "./components/mad-section"

export const HomePageTemplate = ({
  heroSection,
  photoSection,
  quoteSection,
  madSection,
}) => (
  <Fragment>
    <HeroSection
      title={heroSection.title}
      tagline={heroSection.tagline}
      image={heroSection.image}
    />
    <PhotoSection
      images={photoSection.images}
      background={photoSection.background}
    />
    <QuoteSection quote={quoteSection.quote} image={quoteSection.image} />
    <StoriesSection />
    <MADSection
      tagline={madSection.tagline}
      image={madSection.image}
      buttonText={madSection.buttonText}
      buttonVisible={madSection.buttonVisible}
    />
  </Fragment>
)

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    slug,
    seo,
    heroSection,
    photoSection,
    quoteSection,
    madSection,
  } = frontmatter
  return (
    <Layout seo={seo} slug={slug}>
      <HomePageTemplate
        {...{ heroSection, photoSection, quoteSection, madSection }}
      />
    </Layout>
  )
}

export default HomePage

export const HomePageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        seo {
          siteTitle
          siteDescription
        }
        heroSection {
          title
          tagline
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 90) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
        }
        photoSection {
          background {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 90) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
          images {
            image {
              childImageSharp {
                fluid(maxWidth: 1440, quality: 90) {
                  src
                  srcSet
                  aspectRatio
                  sizes
                  base64
                }
              }
            }
          }
        }
        quoteSection {
          quote
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 90) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
        }
        madSection {
          tagline
          image {
            childImageSharp {
              fluid(maxWidth: 1440, quality: 90) {
                src
                srcSet
                aspectRatio
                sizes
                base64
              }
            }
          }
          buttonVisible
          buttonText
        }
      }
    }
  }
`
