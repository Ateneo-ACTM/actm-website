import styled from "styled-components"

export const Section = styled.section`
  background: #ffffff;
  padding: 90px 60px;
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => `url(${props.image})`}, rgba(0, 191, 209, 0.6);
  background-repeat: no-repeat;
  background-position: top;
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

export const Tagline = styled.h2`
  width: 100%;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: white;

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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
  cursor: pointer;

  @media (max-width: 900px) {
    margin: 30px auto 0 auto;
  }

  @media (max-width: 540px) {
    margin: 16px auto 0 auto;
  }
`

export const Button = styled.div`
  padding: 12px 24px;
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  background: #fec200;
  border-radius: 10px;

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
  }
`
