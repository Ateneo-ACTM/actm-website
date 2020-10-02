import styled from "styled-components"

export const Section = styled.section`
  background: #ffffff;
  padding: 90px 60px;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `url(${props.image})`}, rgba(253, 193, 0, 0.4);
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
`

export const Quote = styled.h2`
  width: 75%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #062b3a;
  max-width: 75%;
  margin: auto;

  @media (max-width: 1280px) {
    font-size: 28px;
    line-height: 30px;
  }

  @media (max-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }

  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 16px;
    font-weight: 500;
  }
`
