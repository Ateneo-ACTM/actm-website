import styled from "styled-components";
import who from "../../templates/about-page/assets/images/about_1.svg"
import who_m from "../../templates/about-page/assets/images/about_1_m.svg"
import who_t from "../../templates/about-page/assets/images/about_1_t.svg"
import what from "../../templates/about-page/assets/images/about_2.svg"
import what_1_m from "../../templates/about-page/assets/images/about_2_m.svg"
import what_1_t from "../../templates/about-page/assets/images/about_2_t.svg"
import what_2 from "../../templates/about-page/assets/images/about_3.svg"
import what_2_m from "../../templates/about-page/assets/images/about_3_m.svg"
import what_2_t from "../../templates/about-page/assets/images/about_3_t.svg"
import '../Layout/styles.css';

export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const Who = styled.section`
    width: 100vw;
    min-height: 100vh;
    background-image: url(${who});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 768px) {
        margin-top: 80px;
        min-height: 105vh; 
        background-image: url(${who_t});
        background-size: cover;
        background-position: center;
        border-radius: 0px 40px 0px 0px;
    }  

    @media screen and (max-width: 375px) {
        min-height: 100vh; 
        background-image: url(${who_m});
        background-size: cover;
        background-position: center;
        border-radius: 0px 40px 0px 0px;
    }   
`

export const WhoContent = styled.div`
    position: absolute;
    top: 50%;
    right: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        top: 0;
        right: -12.5%;
        width: 100%;
        height: 90%;
        justify-content: flex-end;
        align-items: flex-start;
    }

    @media screen and (max-width: 375px) {
        top: 5%;
        right: -10%;
        width: 100%;
        height: 90%;
        justify-content: flex-end;
        align-items: flex-start;
    }
`

export const WhoHeader = styled.h1`
    font-family: 'Montserrat', sans-serif;
    text-align: left;    
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 25px 0;
    width: 550px;

    @media screen and (max-width: 480px) {
        margin: 0;
        font-size: 2rem;
        width: 360px;
    }
`

export const WhoText = styled.p`
    font-family: "Work Sans", sans-serif;
    text-align: left;
    font-size: 0.8rem;
    line-height: 175%;
    width: 550px;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
        width: 430px;
    }

    @media screen and (max-width: 375px) {
        margin: 15px 0 0 0;
        font-size: 0.75rem;
        width: 280px;
    }
`

export const What = styled.section`
    width: 100vw;
    min-height: 150vh;
    background: #062B3A;
`

export const WhatTitle = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding-top: 100px;
    width: 100%;
    color: white;
`

export const WhatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    padding: 10vh 0;
    
    @media screen and (max-width: 768px) { padding: 5vh 0; }

`

export const WhatWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 50px 0;

    &:nth-child(1) {
        flex-direction: row-reverse;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin: 0;

        &:nth-child(1) {
            flex-direction: column;
        }
    }

    @media screen and (max-width: 375px) {
        width: 100%; 
        flex-direction: column;
        margin: 25px 0;
    }
`

export const WhatContent = styled.div`
    width: 50vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;

    &.left { padding-left: 30px; }
    &.right { padding-right: 30px; }
    &.a { background-image: url(${what}) }
    &.b { background-image: url(${what_2}) }

    @media screen and (max-width: 768px) {
        width: 100vw;
        height: 50vw;
        background-size: contain;
        
        &.left { padding-left: 0; }
        &.right { padding-right: 0; }
        &.left-m { align-items: flex-start; padding-left: 10vw; } 
        &.right-m { align-items: flex-start;  padding-left: 10vw; }
        &.a { background-image: url(${what_1_t}); width: 80vw; }
        &.b { background-image: url(${what_2_t}); width: 80vw; }
    }

    @media screen and (max-width: 375px) { 
        width: 100%;
        min-height: 80vw;
        background-size: contain;
        
        &.right-m { align-items: flex-end;  padding-right: 10vw; }
        &.a { background-image: url(${what_1_m}) }
        &.b { background-image: url(${what_2_m}) }
    }
`

export const WhatHeader = styled.h1`
    width: 280px;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;
    color: white;
    line-height: 120%;

    @media screen and (max-width: 768px) {
        width: 75vw;
        font-weight: 600;

        &.left-t { text-align: left; }
        &.left-m { text-align: left; }
        &.right-m { text-align: left; }
    } 

    @media screen and (max-width: 375px) {
        &.right-m { text-align: right; }
    } 
`

export const HeaderSpan = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    color: #FEC200;
    white-space: pre-wrap;

    @media screen and (max-width: 375px) { font-weight: 900; }
`

export const WhatText = styled.p`
    font-weight: normal;
    font-size: 0.8rem;
    line-height: 175%;
    display: flex;
    align-items: center;
    text-align: left;
    width: 380px;
    color: white;

    @media screen and (max-width: 768px) { 
        font-size: 0.75rem; 
        width: 50vw; 
        
        &.left-m { text-align: left; }
        &.right-m { text-align: left; }
    }

    @media screen and (max-width: 375px) { 
        font-size: 0.75rem; 
        width: 80vw; 
        
        &.left-m { text-align: left; }
        &.right-m { text-align: right; }
    }
`

export const Acads = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
`

export const AcadsHeader = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    padding: 100px 0 40px 0;
    width: 80%;
    color: black;
`

export const AcadsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    width: 100%;
`

export const AcadsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 768px) { flex-direction: column; }
`

export const AcadsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-content: center;
    height: 320px;
    width: 40vw;

    @media screen and (max-width: 768px) { 
        height: 100%;
        width: 80vw; 
        justify-content: center;
        align-items: center;
    }
`

export const AcadsSub = styled.h2`
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    display: flex;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        width: 100%;
    }
`

export const AcadsText = styled.p`
    font-family: 'Work Sans', sans-serif;
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 175%;
    text-align: justify;
    width: 500px;

    @media screen and (max-width: 768px) { width: 100%; }
`

export const AcadsButton = styled.a`
    appearance: button;
    font-family: 'Work Sans', sans-serif;
    padding: 5px 20px;
    background: linear-gradient(90deg, #3FE0E0 0%, #21B1CF 100%);
    border-radius: 8px;
    color: white;
    cursor: pointer;

    @media screen and (max-width: 768px) { margin: 10vh 0 15vh 0; }
`

export const AcadsImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 100%;
    background: #E5E5E5;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 30px;

    @media screen and (max-width: 768px) { display: none; }
`

export const AcadsImgMobile = styled.img`
    display: none;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 25vh;
    background: #E5E5E5;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 15px;
    margin: 30px 0;

    @media screen and (max-width: 768px) { display: flex; margin: 50px 0; }
`