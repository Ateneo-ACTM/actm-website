import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  MainCard,
  MainContainer,
  MainImage,
  MainBody,
  MainTitle,
  MainInfo,
  MainContent,
  MainLink,
} from "./styles"

function Exclusive({ data }) {
  return data.map((datum, index) => {
    const {
      slug,
      image,
      title,
      description,
      author,
      datetime,
    } = datum.node.frontmatter
    return title === "Going Online with ACTM" ? (
      <MainCard key={index}>
        <MainContainer>
          <MainImage
            image={
              image && !!image.childImageSharp
                ? image.childImageSharp.fluid.src
                : image
            }
          />
          <MainBody>
            {/* <MainInfo> {category} </MainInfo> */}
            <MainTitle> {title} </MainTitle>
            <MainInfo>
              By {author} | {datetime}{" "}
            </MainInfo>
            <MainContent> {description} </MainContent>
            <MainLink to={slug}>Read More</MainLink>
          </MainBody>
        </MainContainer>
      </MainCard>
    ) : null
  })
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
      return <Exclusive data={data.allMarkdownRemark.edges} {...props} />
    }}
  />
)
