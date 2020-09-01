import React from "react"
import { Link } from "gatsby"
// import { Nav } from "./styles"
import './styles.css'

const Navbar = ({ slug }) => (
  <>
    <nav className='navbar'>
      <div className='navbar-container'>
        <Link to="#" className='navbar-logo'>ACTM</Link>
        <div className='menu-icon'></div>
        <ul className='nav-menu'>
          <li className='nav-item'>
            <Link to='#' className='nav-links'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='#' className='nav-links'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default Navbar
