import React from "react"
import CMS, { init } from "netlify-cms-app"
import CSSInjector from "../components/CSSInjector"
import HomePagePreview from "./preview-templates/HomePagePreview"

// Manually initialize CMS
// if (process.env.GATSBY_IS_CMS === 'true') {
//     init()
// }
window.___loader = { enqueue: () => {}, hovering: () => {} }

init()

CMS.registerPreviewTemplate("index", (props) => (
  <CSSInjector>
    <HomePagePreview {...props} />
  </CSSInjector>
))
