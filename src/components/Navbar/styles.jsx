import styled from "styled-components"

const Nav = styled.nav `
  display: flex;
  background: transparent;
  height: 10vh;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  :root {
    --primary: yellow;
    --secondary: blue;
    --tertiary: skyblue;
    --navbar: white;
    --navbar-text: black;
    --border: darkblue;
    --shadow: rgba(0,0,0,0.2).
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 100%;
  }

  .navbar-logo {
    color: var(--navbar-text)
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  .nav-item { height: 10vh; }

  .nav-links {
    color: var(--navbar-text)
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    width: 100%;
  }

  .nav-links:hover {
    border-bottom: 4px solid var(--border);
    transition: all 0.3s ease;
  }

`

export const Nav = styled.nav``
