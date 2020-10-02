import React from "react"
import About from "../../components/About"
import Layout from "../../components/Layout/"

const AboutPage = () => {
  const seo = {
    siteTitle: "About",
    siteDescription:
      "This is the official website of Ateneo Association of Commuication Technology Management!",
  }

  return (
    <Layout path="/About" seo={seo}>
      <About />
    </Layout>
  )
}

export default AboutPage
