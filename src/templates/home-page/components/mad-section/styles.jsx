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
`

export const Container = styled.div`
  width: 50%;
  margin: auto;
`

export const Tagline = styled.h2`
  font-family: Pangram, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: white;
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px auto;
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
`
