import styled from "styled-components";
import desktop from "../../templates/stories-page/assets/images/desktopcover.svg";
import tablet from "../../templates/stories-page/assets/images/tabletcover.svg";
import mobile from "../../templates/stories-page/assets/images/mobilecover.svg";
import '../Layout/styles.css';

export const Hero = styled.section`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-image: url(${desktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 60vh;
    width: 100vw;

    @media screen and (max-width: 768px) {
        height: 30vh;
        background-image: url(${tablet});
    }

    @media screen and (max-width: 375px) {
        height: 25vh;
        background-image: url(${mobile});
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
`

export const ContentHeader = styled.h1`
    display: flex;
    text-align: center;
    font-size: 3rem;
    font-weight: 600;
    margin: 10px;

    @media screen and (max-width: 960px) {
        font-size: 2.5rem;
        margin: 8px;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.75rem;
        margin: 5px;
    }
`

export const ContentText = styled.p`
    display: flex;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;

    @media screen and (max-width: 960px) {
        font-size: 1rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 0.75rem;
    }
`