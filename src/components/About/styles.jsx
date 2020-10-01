import styled from "styled-components";
import { Link } from "gatsby"
import who from "../../templates/about-page/assets/images/about_1.svg"
import '../Layout/styles.css';

export const AboutContainer = styled.div`
    width: 100%;
    height: 100%;
`

export const Who = styled.section`
    width: 100vw;
    min-height: 90vh;
    background-image: url(${who});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const WhoContent = styled.div`
    position: absolute;
    top: 50%;
    right: 30%;
    transform: translate(50%, 30%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: center;
    align-items: center;
`

export const WhoHeader = styled.h1`
    text-align: left;    
    font-size: 2.5rem;
    font-weight: 400;
    margin: 0 0 25px 0;
    width: 550px;
`

export const WhoText = styled.p`
    text-align: left;
    font-size: 0.8rem;
    width: 550px;
`

export const What = styled.section`
    width: 100vw;
    min-height: 200vh;
    background: #062B3A;
`

export const WhatTitle = styled.h2`
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding: 100px 0 50px 0;
    width: 100%;
    color: white;
`

export const WhatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const WhatWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 50px 0;
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
`

export const WhatHeader = styled.h1`
    width: 280px;
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 40px;
    text-align: center;
    color: white;
`

export const HeaderSpan = styled.span`
    font-weight: 600;
    color: #FEC200;
    white-space: pre-wrap;
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
`

export const Acads = styled.section`
    width: 100vw;
    min-height: 100vh;
`

export const AcadsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    min-height: 80vh;
`

export const AcadsContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: center;
    width: 40vw;
    min-height: inherit;
`

export const AcadsHeader = styled.h1`
    font-size: 2rem;
    font-weight: 400;
`

export const AcadsSub = styled.h2`
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    padding: 50px 0 40px 0;
`

export const AcadsText = styled.p`
    font-size: 0.8rem;
    font-weight: 400;
    line-height: 175%;
    text-align: justify;
    width: 500px;
`

export const AcadsButton = styled(Link)`
    appearance: button;
    margin-top: 50px;
    padding: 5px 20px;
    background: linear-gradient(90deg, #3FE0E0 0%, #21B1CF 100%);
    border-radius: 8px;
    color: white;
`

export const AcadsImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 100%;
    height: 400px;
    background: #E5E5E5;
    border: 1px solid rgba(0,0,0,0.3);
    border-radius: 30px;
`