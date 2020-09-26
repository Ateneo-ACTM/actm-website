import React from "react"
import Exclusive from "../../components/Exclusive"
import Stories from "../../components/Stories"
import Layout from "../../components/Layout/"

const StoriesPage = () => {
  const seo = {
    siteTitle: 'Hello',
    siteDescription: 'World'
  }

  return (
    <Layout path="/Stories" seo={seo}>
      <Exclusive />
      <Stories />
    </Layout>
  )
}

export default StoriesPage
