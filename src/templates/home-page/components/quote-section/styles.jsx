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
`

export const Container = styled.div`
  width: 50%;
  margin: auto;
`

export const Quote = styled.h2`
  font-family: Pangram, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 43px;
  text-align: center;
  color: #062b3a;
`
