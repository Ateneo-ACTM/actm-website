import React, { Fragment } from "react"
import Layout from "../../components/Layout"
import { graphql, Link } from "gatsby"
import remark from "remark"
import recommended from "remark-preset-lint-recommended"
import remarkHtml from "remark-html"
import {
  Height,
  Cover,
  Wrapper,
  Container,
  BackWrapper,
  BackContainer,
  CategoryWrapper,
  Category,
  Title,
  Subtitle,
  Body,
  Card,
  SocmedWrapper,
} from "./styles"
import background from "./assets/images/background.svg"
import back from "./assets/icons/back.svg"
import moment from "moment"

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailIcon,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share"

export const StoryPageTemplate = ({
  title,
  body,
  category,
  author,
  datetime,
  image,
  slug,
}) => (
  <Fragment>
    <Height>
      <Cover
        image={
          image && !!image.childImageSharp
            ? image.childImageSharp.fluid.src
            : image
        }
      />
      <Wrapper image={background}>
        <Card>
          <BackWrapper>
            <BackContainer>
              <Link to="/stories">
                <img src={back} alt="back" />
                <span>Back to Stories</span>
              </Link>
            </BackContainer>
          </BackWrapper>
          <Container>
            <CategoryWrapper>
              <Category>{category}</Category>
            </CategoryWrapper>
            <Title>{title}</Title>
            <Subtitle>
              By {author} | {moment(datetime).format("LLL")}
            </Subtitle>
            <SocmedWrapper>
              <FacebookShareButton url={`https://ateneo.com${slug}`}>
                <FacebookIcon size={32} round />
              </FacebookShareButton>
              <TwitterShareButton url={`https://kuwentongpambata.com${slug}`}>
                <TwitterIcon size={32} round />
              </TwitterShareButton>
              <LinkedinShareButton url={`https://kuwentongpambata.com${slug}`}>
                <LinkedinIcon size={32} round />
              </LinkedinShareButton>
              <EmailShareButton url={`https://kuwentongpambata.com${slug}`}>
                <EmailIcon size={32} round />
              </EmailShareButton>
            </SocmedWrapper>
            <Body
              dangerouslySetInnerHTML={{
                __html: remark()
                  .use(recommended)
                  .use(remarkHtml)
                  .processSync(body)
                  .toString(),
              }}
            />
          </Container>
        </Card>
      </Wrapper>
    </Height>
  </Fragment>
)

const StoryPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const {
    slug,
    title,
    description,
    body,
    category,
    author,
    datetime,
    image,
  } = frontmatter

  const seo = {
    siteTitle: title,
    siteDescription: description,
  }

  return (
    <Layout seo={seo} slug={slug}>
      <StoryPageTemplate
        {...{ title, body, category, author, datetime, image, slug }}
      />
    </Layout>
  )
}

export default StoryPage

export const StoryPageQuery = graphql`
  query StoryPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        slug
        title
        description
        category
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
        body
      }
    }
  }
`
