import React, { Fragment } from "react"
import Layout from "../../components/Layout/"
import { graphql } from "gatsby"

export const HomePageTemplate = () => (
  <Fragment>
    <h1>This is the home page</h1>
  </Fragment>
)

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { slug, seo } = frontmatter
  return (
    <Layout seo={seo} slug={slug}>
      <HomePageTemplate />
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
      }
    }
  }
`
