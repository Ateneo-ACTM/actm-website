import React from "react"
import Exclusive from "../../components/Exclusive"
import Layout from "../../components/Layout/"

const StoriesPage = () => {
  const seo = {
    siteTitle: 'Hello',
    siteDescription: 'World'
  }

  return (
    <Layout path="/Stories" seo={seo}>
      <Exclusive />
    </Layout>
  )
}

export default StoriesPage