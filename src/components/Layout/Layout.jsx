/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import SEO from "../SEO"
import PropTypes from "prop-types"
import "normalize.css"
import "./styles.css"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children, seo, slug }) => {
  const { siteTitle, siteDescription } = seo
  return (
    <>
      <Navbar slug={slug} />
      <SEO title={siteTitle} description={siteDescription} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
