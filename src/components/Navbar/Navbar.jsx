import React from "react"
import { Link } from "gatsby"
import { Nav } from "./styles"

const Navbar = ({ slug }) => (
  <Nav>
    <div className='navbar-container'>
      <Link to="#" className='navbar-logo'>
        ACTM
      </Link>
      <div className='menu-icon'></div>
      <ul className='nav-menu'>
        <li className='nav-item'>
          <Link to='#' className='nav-links'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='#' className='nav-links'>
            About
          </Link>
        </li>
      </ul>
    </div>
  </Nav>
)

export default Navbar
