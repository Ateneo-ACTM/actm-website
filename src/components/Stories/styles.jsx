import styled from "styled-components";
import '../Layout/styles.css';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid black;
    height: 100%;
    width: 340px;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const CardImage = styled.img`
    width: 340px;
    height: 325px;
`

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-content: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    padding: 0.75rem 1.5rem;
`

export const CardTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 1.15rem;
    font-weight: 600;
    line-height: 20px;
    padding: 5px 0px;
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