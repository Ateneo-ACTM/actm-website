import React, { Fragment } from "react"
import Layout from "../../components/Layout"
import { graphql } from "gatsby"

import HeroSection from "./components/hero-section"
import QuoteSection from "./components/quote-section"
import StoriesSection from "./components/stories-section"
import MADSection from "./components/mad-section"

export const HomePageTemplate = ({ heroSection, quoteSection, madSection }) => (
  <Fragment>
    <HeroSection
      title={heroSection.title}
      tagline={heroSection.tagline}
      image={heroSection.image}
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
  const { slug, seo, heroSection, quoteSection, madSection } = frontmatter
  return (
    <Layout seo={seo} slug={slug}>
      <HomePageTemplate {...{ heroSection, quoteSection, madSection }} />
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
