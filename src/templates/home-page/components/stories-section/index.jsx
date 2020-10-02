import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import {
  Section,
  Container,
  StoryCard,
  FeaturedStory,
  Image,
  Mobile,
  Web,
} from "./styles"

const StoriesSection = ({ data }) => {
  return (
    <Section>
      <Container>
        {data.map((datum, index) => {
          const { slug, image, title, description } = datum.node.frontmatter
          return title === "Going Online with ACTM" ? (
            <div>
              <Web>
                <Link to={slug} key={index}>
                  <FeaturedStory
                    image={
                      image && !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    }
                  >
                    <div className="bottom-left">{title}</div>
                  </FeaturedStory>
                </Link>
              </Web>

              <Mobile>
                <StoryCard key={index}>
                  <Image
                    image={
                      image && !!image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                    }
                  />
                  <div className="wrapper">
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <Link to={slug}>Continue reading</Link>
                    </div>
                  </div>
                </StoryCard>
              </Mobile>
            </div>
          ) : null
        })}
        <div>
          {data.map((datum, index) => {
            const { slug, image, title, description } = datum.node.frontmatter
            return title !== "Going Online with ACTM" ? (
              <StoryCard key={index}>
                <Image
                  image={
                    image && !!image.childImageSharp
                      ? image.childImageSharp.fluid.src
                      : image
                  }
                />
                <div className="wrapper">
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <Link to={slug}>Continue reading</Link>
                  </div>
                </div>
              </StoryCard>
            ) : null
          })}
        </div>
      </Container>
    </Section>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "story-page" } } }
        ) {
          edges {
            node {
              frontmatter {
                slug
                title
                description
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
          }
        }
      }
    `}
    render={data => {
      return <StoriesSection data={data.allMarkdownRemark.edges} {...props} />
    }}
  />
)
