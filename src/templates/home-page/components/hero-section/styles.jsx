import styled from "styled-components"

export const Section = styled.section`
  background: #ffffff;
  padding: 90px 0;
  width: 75%;
  margin auto;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  width: 100%;
`
export const Banner = styled.div`
  margin: 0 0 30px 0;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.image})`};
  height: 360px;
`
export const Title = styled.h5`
  font-family: Work Sans, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: #444444;
  text-align: center;
`

export const Tagline = styled.h3`
  font-family: Pangram, sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 43px;
  margin: 24px 0;
  text-align: center;

  color: #000000;

  & span {
    color: #fac001;
  }
`

export const ArrowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
