import React from "react"
import Exclusive from "../../components/Exclusive"
import Stories from "../../components/Stories"
import StoriesHero from "../../components/StoriesHero"
import { Section } from "./styles"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const StoriesPage = () => {
  const seo = {
    siteTitle: "Stories",
    siteDescription:
      "This is the official website of Ateneo Association of Commuication Technology Management!",
  }

  return (
    <>
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
