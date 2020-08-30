import React from "react"
import { Nav } from "./styles"

const Navbar = ({ slug }) => (
  <Nav>
    <h1>This is the navbar</h1>
    <h2>You are in {slug} page</h2>
  </Nav>
)

export default Navbar
