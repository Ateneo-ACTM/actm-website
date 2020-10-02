import styled from "styled-components"

export const Background = styled.section`
  padding: 90px 60px;
  min-height: 100vh;
  background: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 1280px) {
    width: 85%;
  }

  @media (max-width: 1024px) {
    width: 95%;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 60px 30px;
    min-height: 50vh;
  }

  & img {
    width: 100%;
    height: 100%;
  }
`

export const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
`
