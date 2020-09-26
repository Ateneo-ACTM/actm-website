import styled from "styled-components";
import { Link } from "gatsby";
import '../Layout/styles.css';

export const Foot = styled.footer`
    display: flex;
    flex-direction: column;
    background: var(--footer);
    height: 420px;
    justify-content: center;
    align-items: center;
    align-content: center;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: auto;
    width: 100vw;
`

export const FooterLine = styled.hr`
    width: 80vw;
    display: block;
    height: 3px;
    background: #f0f0f0;
    border: none;
`

export const FooterLogo = styled(Link)`
    position: relative;
    color: black;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: normal;
    padding: 5rem 0 0 0;
`

export const FooterMenu = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    list-style: none;
    text-align: center;
    width: 450px;
    padding: 2.5rem 0 0 0;

    @media screen and (max-width: 768px) {
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
    }
`

export const FooterItem = styled.li`
    display: table-cell;
    position: relative;
    height: 50px;
    top: 50%;
    transform: translateY(-50%);

    @media screen and (max-width: 768px) {
        top: 0;
        transform: translate(0);
    }
`

export const FooterLink = styled(Link)`
    position: relative;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1rem;
    color: #c4c4c4;
    transition: all 0.4s ease-in-out;

    &:hover {
        color: var(--primary);
    }
`

export const FooterMenu2 = styled.ul`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
    list-style: none;
    text-align: center;
    width: 180px;
`

export const FooterIcon = styled.div`
    background: #f0f0f0;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(115%);
    }
`