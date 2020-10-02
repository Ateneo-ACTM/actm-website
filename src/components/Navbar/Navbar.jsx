import React, { useState } from "react"
import {
  Nav,
  Container,
  MenuIcon,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  NavMobile,
} from "./styles"
import Burger from "@animated-burgers/burger-squeeze"
import "@animated-burgers/burger-squeeze/dist/styles.css"

const Navbar = ({ slug }) => {
  const [navStatus, setNavStatus] = useState(false)

  const toggleMobileNavigation = () => setNavStatus(!navStatus)

  return (
    <Nav>
      <Container>
        <NavLogo to="/">
          ATENEO<b>ACTM</b>
        </NavLogo>
        <MenuIcon>
          <Burger onClick={toggleMobileNavigation} isOpen={navStatus} />
        </MenuIcon>
        <NavMenu>
          <NavItem>
            <NavLink to="/" active={slug === "/"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" active={slug === "/about"}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/stories" active={slug === "/stories"}>
              Stories
            </NavLink>
          </NavItem>
        </NavMenu>
      </Container>
      {navStatus && (
        <NavMobile>
          <NavItem>
            <NavLink to="/" active={slug === "/"}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" active={slug === "/about"}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/stories" active={slug === "/stories"}>
              Stories
            </NavLink>
          </NavItem>
        </NavMobile>
      )}
    </Nav>
  )
}

export default Navbar
