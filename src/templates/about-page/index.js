import React from "react"
import About from "../../components/About"
import Layout from "../../components/Layout/"

const AboutPage = () => {
  const seo = {
    siteTitle: 'Hello',
    siteDescription: 'World'
  }

  return (
    <Layout path="/About" seo={seo}>
      <About />
    </Layout>
  )
}

export default AboutPage