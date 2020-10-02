import React from "react"
import Exclusive from "../../components/Exclusive"
import Stories from "../../components/Stories"
import StoriesHero from "../../components/StoriesHero"
import { Section } from "./styles"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Helmet from "react-helmet"
import image from "../../assets/images/cover.png"

const StoriesPage = () => {
  const seo = {
    siteTitle: "Stories",
    siteDescription:
      "This is the official website of Ateneo Association of Commuication Technology Management!",
  }

  return (
    <>
      <Helmet
        title={seo.siteTitle}
        titleTemplate={` %s | Ateneo ACTM`}
        meta={[
          {
            name: `description`,
            content: seo.siteDescription,
          },
          {
            property: `og:title`,
            content: seo.siteTitle,
          },
          {
            property: `og:description`,
            content: seo.siteDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: `ACTM`,
          },
          {
            name: `twitter:title`,
            content: seo.siteTitle,
          },
          {
            name: `twitter:description`,
            content: seo.siteDescription,
          },
          {
            name: `og:url`,
            content: `https://ateneoactm.org/`,
          },
          {
            name: `og:image`,
            content: image,
          },
        ]}
      />
      <Navbar slug="/stories" />
      <StoriesHero />
      <Section>
        <Exclusive />
        <Stories />
      </Section>
      <Footer />
    </>
  )
}

export default StoriesPage
