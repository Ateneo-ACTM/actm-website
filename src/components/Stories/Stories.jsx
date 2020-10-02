import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  Card,
  CardContainer,
  CardImage,
  CardBody,
  CardTitle,
  CardInfo,
  Section,
} from "./styles"

function Stories({ data }) {
  return (
    <Section>
      {data.map((datum, index) => {
        const { slug, image, title, author, datetime } = datum.node.frontmatter
        return title !== "Going Online with ACTM" ? (
          <Card key={index} to={slug}>
            <CardContainer>
              <CardImage
                image={
                  image && !!image.childImageSharp
                    ? image.childImageSharp.fluid.src
                    : image
                }
              />
              <CardBody>
                {/* <CardInfo> {story.category} </CardInfo> */}
                <CardTitle> {title} </CardTitle>
                <CardInfo>
                  By {author} | {datetime}{" "}
                </CardInfo>
              </CardBody>
            </CardContainer>
          </Card>
        ) : null
      })}
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
                author
                datetime
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
      return <Stories data={data.allMarkdownRemark.edges} {...props} />
    }}
  />
)
