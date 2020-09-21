import React from "react"
import { CardContainer, CardImage, CardBody, CardTitle, CardInfo } from "./styles"

function Stories() {
    const stories = [
        {
            category: "Category",
            title: "Lorem ipsum dolo sit amet, consectetur adipscing elit",
            author: "Writer",
            date: "September 12, 2020"
        },
        {
            category: "Yawa",
            title: "Lorem Ipsum dolo sit amet",
            author: "Juan",
            date: "September 16, 2020"
        },
        {
            category: "Yawa",
            title: "Lorem Ipsum",
            author: "Josh",
            date: "September 21, 2020"
        },
    ]
    
    return (
        stories.map((story, index) => {
            return (
                <CardContainer key={index}>
                    <CardImage src="" />
                    <CardBody>
                        <CardInfo> {story.category} </CardInfo>
                        <CardTitle> {story.title} </CardTitle>
                        <CardInfo>By {story.author} | { story.date } </CardInfo>
                    </CardBody>
                </CardContainer>
            )
        })
    )
}

export default Stories