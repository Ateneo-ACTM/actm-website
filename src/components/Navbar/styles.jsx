import styled from "styled-components";
import { Link } from "gatsby";
import '../Layout/styles.css';

export const Nav = styled.nav`
  display: flex;
  background: black;
  border: 1px solid #000;
  height: 80px;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
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
`

export const NavLogo = styled(Link)`
  color: white;
  margin-left: 0px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  align-items: center;
`

export const MenuIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.5rem;
  cursor: pointer;

  .burger .burger-lines,
  .burger .burger-lines:after,
  .burger .burger-lines:before { background-color: black; }
`

export const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(2,auto);
  grid-gap: 25px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: end;
  margin-right: 1rem;
`

export const NavItem = styled.li`
  height: 80px;
`

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  width: 100%;

  &:hover {
    border-bottom: 4px solid white;
    transition: all 0.3s ease;
  }
`
