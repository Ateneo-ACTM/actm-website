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

  
  @media (max-width: 1280px) {
   width: 85%;
  }

  @media (max-width: 1024px) {
    width: 95%;
   }

   @media (max-width: 900px) {
    width: 100%;
    padding: 60px 30px;
   }
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const FeaturedStory = styled.div`
  position: relative;
  font-family: Pangram, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: ${props => `url(${props.image})`}, rgba(0, 45, 61, 0.8);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 500px;
  height: 500px;
  margin: 30px;

  @media (max-width: 1280px) {
    width: 420px;
    height: 420px;
  }

  & .bottom-left {
    position: absolute;
    bottom: 24px;
    left: 16px;
  }
`

export const StoryCard = styled.div`
  display: flex;
  margin: 30px 0;

  & .wrapper {
    display: flex;
    align-items: center;
    width: 50%;

    @media (max-width: 900px) {
      justify-content: space-between;
    }
  }

  & h3 {
    font-family: Pangram, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    margin-bottom: 8px;
  }

  & p {
    font-family: Work Sans, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 175%;
    color: #000000;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 24px;
  }

  & a {
    font-family: Montserrat, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    color: #062b3a;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`

export const Image = styled.div`
  background: ${props => `url(${props.image})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 30px;
  width: 240px;
  height: 240px;

  @media (max-width: 1280px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 900px) {
    width: 320px;
    height: 320px;
  }

  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 600px) {
    width: 240px;
    height: 240px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 375px) {
    width: 180px;
    height: 180px;
  }
`

export const Mobile = styled.div`
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`

export const Web = styled.div`
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`
