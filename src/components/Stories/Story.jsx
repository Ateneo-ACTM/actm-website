import React from "react"
import { Card, CardContainer, CardImage, CardBody, CardTitle, CardInfo } from "./styles"

function Stories() {
    const stories = [
        {
            category: "Category",
            title: "Lorem ipsum dolo sit amet, consectetur adipscing elit",
            author: "Writer",
            date: "September 12, 2020"
        },
    ]
    
    return (
        stories.map((story, index) => {
            return (
                <Card key={index}>
                    <CardContainer> 
                        <CardImage src="" />
                        <CardBody>
                            <CardInfo> {story.category} </CardInfo>
                            <CardTitle> {story.title} </CardTitle>
                            <CardInfo>By {story.author} | { story.date } </CardInfo>
                        </CardBody>
                    </CardContainer>
                </Card>
            )
        })
    )
}

export default Stories