import styled from "styled-components";
import '../Layout/styles.css';

export const Card = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: 2rem;
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 480px;
    width: 340px;
    background: #FCFCFC;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    transition: all 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    }
`

export const CardImage = styled.img`
    flex-basis: 65%;
    width: 100%;
    height: 100%;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 35%;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.75rem 1.5rem;
`

export const CardTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 27.5px;
    padding: 2.5px 0px;
    width: 100%;
`

export const CardInfo = styled.h2`
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0,0,0,.4);
`