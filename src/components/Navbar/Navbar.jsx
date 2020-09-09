import React from "react"
import { Nav, Container, MenuIcon, NavLogo, NavMenu, NavItem, NavLink } from "./styles"
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

const Navbar = ({ slug }) => (
  <Nav>
    <Container>
      <NavLogo>ATENEO<b>ACTM</b></NavLogo>
      <MenuIcon><Burger /></MenuIcon>
      <NavMenu>
        <NavItem>
          <NavLink to="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Org Culture</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Stories</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">Contact Us</NavLink>
        </NavItem>
      </NavMenu>
    </Container>
  </Nav>
)

export default Navbar
