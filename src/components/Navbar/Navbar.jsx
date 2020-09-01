import React from "react"
import { Link } from "gatsby"
import { Nav, Container, MenuIcon, NavLogo, NavMenu, NavItem, NavLink } from "./styles"
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

const Navbar = ({ slug }) => (
  <Nav>
    <Container>
      <NavLogo>ACTM<i className='fas fa-location-arrow' /></NavLogo>
      <MenuIcon><Burger Component="button" type="button" /></MenuIcon>
      <NavMenu>
        <NavItem>
          <NavLink to="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#">About</NavLink>
        </NavItem>
      </NavMenu>
    </Container>
  </Nav>
)

export default Navbar
