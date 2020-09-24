import React from "react"
import { 
    MainCard, 
    MainContainer, 
    MainImage, 
    MainBody, 
    MainTitle,
    MainInfo,
    MainContent,
    MainLink
 } from "./styles"

function Exclusive() {
    const exclusive = [
        {
            category: "Category",
            title: "Lorem ipsum dolo sit amet, consectetur adipscing elit",
            author: "Writer",
            date: "September 12, 2020",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec luctus dui. Donec sapien justo, euismod eget nisi eget, convallis varius nisi. Praesent nec finibus mauris, at pharetra elit.",
            link: "#"
        },
    ]
    
    return (
        exclusive.map((exclusive, index) => (
            <MainCard key={index}>
                <MainContainer> 
                    <MainImage src="" />
                    <MainBody>
                        <MainInfo> {exclusive.category} </MainInfo>
                        <MainTitle> {exclusive.title} </MainTitle>
                        <MainInfo>By {exclusive.author} | { exclusive.date } </MainInfo>
                        <MainContent> {exclusive.content} </MainContent>
                        <MainLink to={exclusive.link}>Read More</MainLink>
                    </MainBody>
                </MainContainer>
            </MainCard>
        ))
    )
}

export default Exclusive