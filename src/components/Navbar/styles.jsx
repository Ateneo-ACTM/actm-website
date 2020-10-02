import styled from "styled-components"
import { Link } from "gatsby"
import "../Layout/styles.css"

export const Nav = styled.nav`
  display: flex;
  background: var(--navbar);
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 100vw;

  @media (max-width: 768px) {
    width: auto;
  }
`

export const NavLogo = styled(Link)`
  position: relative;
  color: var(--navbar-text);
  left: 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: normal;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(10%, 60%);
  }
`

export const MenuIcon = styled.div`
  color: var(--navbar-text);
  display: none;

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before {
    background-color: black;
  }

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    cursor: pointer;
  }

  .burger {
    font-size: 10px;
  }
`

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 25px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 1.5rem;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 92vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
  }
`

export const NavItem = styled.li`
  display: table-cell;
  position: relative;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: block;
    height: auto;
    top: auto;
    transform: auto;
  }
`

export const NavLink = styled(Link)`
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 0.875rem;
  color: var(--navbar-text);
  padding: 0rem 1rem;
  height: 100%;
  font-weight: ${props => (props.active ? "bold" : "normal")};

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: black;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%;
    left: 0;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    justify-content: center;
  }
`

export const NavMobile = styled.ul`
  display: none;
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin-top: 90px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

export const NavWeb = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
