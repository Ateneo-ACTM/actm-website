import React from "react"
import Exclusive from "../../components/Exclusive"
import Stories from "../../components/Stories"
import StoriesHero from "../../components/StoriesHero"
import Layout from "../../components/Layout/"

const StoriesPage = () => {
  const seo = {
    siteTitle: "Stories",
    siteDescription:
      "This is the official website of Ateneo Association of Commuication Technology Management!",
  }

  return (
    <Layout path="/Stories" seo={seo}>
      <StoriesHero />
      <Exclusive />
      <Stories />
    </Layout>
  )
}

export default StoriesPage
