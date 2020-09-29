import styled from "styled-components";
import '../Layout/styles.css';

export const Container = styled.section``

export const CategoriesList = styled.div`
    display: flex;
    flex-direction: row;
    height: 50px;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
    background: #F0F0F0;
`

export const Categories = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 90%;
`

export const Category = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    cursor: pointer;
    width: 15%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    background: #F0F0F0;
    color: #002D3D;
    font-size: 1rem;
    font-weight: normal;

    &:hover {
        background: #002D3D;
        color: #F0F0F0;
        font-weight: bold;
    }

    &.active {
        background: #002D3D;
        color: #F0F0F0;
        font-weight: bold;
    }
`