import styled from "styled-components"
import { Link } from "gatsby"
import "../Layout/styles.css"

export const MainCard = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding: 2rem;
`
export const MainContainer = styled.div`
  display: flex;
  height: 75vh;
  width: 85vw;
  justify-content: center;
  align-items: center;
  align-content: center;
  background: #fcfcfc;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`

export const MainImage = styled.div`
  flex-basis: 65%;
  width: 100%;
  height: 100%;
  background: ${props => `url(${props.image})`}, rgba(253, 193, 0, 0.4);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

export const MainBody = styled.div`
  flex-basis: 35%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem 2rem;
`

export const MainTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 40px;
  padding: 0 1rem 0 0;
`
export const MainInfo = styled.h2`
  font-size: 0.85rem;
  font-weight: 500;
  text-transform: uppercase;
  padding: 0.75rem 0;
  color: rgba(0, 0, 0, 0.4);
`

export const MainContent = styled.div`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 150%;
  padding: 1rem 0;
  color: black;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const MainLink = styled(Link)`
    font-size: 0.85rem;
    text-decoration: underline;
    cursor: pointer;
    padding 1rem 0;
    color: black;
    transition: all 0.4s ease;

    &:hover {
        color: blue;
    }
`
