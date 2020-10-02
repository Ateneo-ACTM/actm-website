import React from "react"
import About from "../../components/About"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const AboutPage = () => {
  const seo = {
    siteTitle: "About",
    siteDescription:
      "This is the official website of Ateneo Association of Commuication Technology Management!",
  }

  return (
    <>
      <Navbar slug="/About" />
      <About />
      <Footer />
    </>
  )
}

export default AboutPage
