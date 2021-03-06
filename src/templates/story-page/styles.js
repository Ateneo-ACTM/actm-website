import styled from "styled-components"

export const Height = styled.main`
  min-height: 100vh;
`

export const Cover = styled.section`
  background-image: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 540px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: ${props => `url(${props.image})`};
  padding: 0 0 90px 0px;
`

export const Card = styled.div`
  background: #fffcf8;
  border-radius: 30px;
  padding: 30px 45px;
  width: 65%;
  margin: -120px auto auto auto;

  @media screen and (max-width: 768px) { width: 85%; padding: 30px; }
  @media screen and (max-width: 480px) { width: 90%; padding: 30px 15px; }
`

export const BackWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
`

export const BackContainer = styled.div`
  & img {
    margin-right: 8px;
  }

  & span {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;

    color: #000000;

    &:hover {
      text-decoration-line: underline;
    }
  }
`
export const Title = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 60px;
  margin: 0 0 0 16px 0;
  color: #000000;
  text-align: center;

  @media screen and (max-width: 480px) { font-size: 2.5rem; line-height: 50px; }
`

export const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`

export const Category = styled.div`
  background: #fac001;
  border-radius: 36px;
  padding: 8px 24px;
  font-size: 1rem;
  color: #000000;
  text-transform: uppercase;
`

export const Subtitle = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  color: #062b3a;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (max-width: 480px) { font-size: 0.9rem; }
`
export const Container = styled.div`
  padding: 30px 60px;

  @media screen and (max-width: 480px) { padding: 15px; }
`

export const Body = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 35px;
  text-indent: 50px;

  color: #000000;

  & img { margin: 30px 0; }
  
  @media screen and (max-width: 480px) { font-size: 0.9rem; line-height: 24px; }
`

export const SocmedWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 60px 0;

  & .react-share__ShareButton {
    margin: 0 16px;
  }
`
