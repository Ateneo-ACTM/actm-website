import React from "react"
import {
    AboutContainer, 
    // Who
    Who,
    WhoContent,
    WhoHeader,
    WhoText,
    // What
    What,
    WhatTitle,
    WhatContainer,
    WhatWrapper,
    WhatContent,
    WhatHeader,
    HeaderSpan,
    WhatText,
    // Acads
    Acads,
    AcadsContainer,
    AcadsContent,
    AcadsHeader,
    AcadsSub,
    AcadsText,
    AcadsButton,
    AcadsImg
} from "./styles"

import what from "../../templates/about-page/assets/images/about_2.svg"
import what2 from "../../templates/about-page/assets/images/about_3.svg"

function About() {
    return(
        <AboutContainer>
            <Who>
                <WhoContent>
                    <WhoHeader>Who we are</WhoHeader>
                    <WhoText>ACTM is the home organization for BS Communications Technology Management majors. Powered by its members, ACTM builds a community of Integrated Marketing Communications experts that advocate strategic planning and creativity in business. In ACTM, not only do its members find a home, but they are constantly driven to move beyond ideas in everything else that they do.</WhoText>
                </WhoContent>
            </Who>

            <What>
            <WhatTitle>What We Stand For</WhatTitle>
            <WhatContainer>
                <WhatWrapper>
                    <WhatContent className="left">
                        <WhatHeader>We believe that there is a
                            <HeaderSpan>{`\n`}solid space for creativity{`\n`}</HeaderSpan>
                            in the world of business.</WhatHeader>
                        <WhatText>ACTM strives to uphold an environment that motivates creative thinkers, and is safe for whatever creative ideas they might produce. New ideas are what drive us all forward, and allow us to constantly improve the way we approach our work.</WhatText>
                    </WhatContent>
                    <WhatContent style={{backgroundImage: `url(${what})`}} />
                </WhatWrapper>
                <WhatWrapper>
                    <WhatContent style={{backgroundImage: `url(${what2})`}} />
                        <WhatContent className="right">
                            <WhatHeader>We believe in the
                                <HeaderSpan>{`\n`}importance of empathy.</HeaderSpan></WhatHeader>
                            <WhatText>ACTM goes the extra mile to understand the feelings and context of our members, as well as the target market of the projects we promote. We strive to promote an environment that trains empathetic, socially responsible practitioners of Integrated Marketing Communications, who have the ability to frame ideas into stories that inform and inspire.</WhatText>
                        </WhatContent>
                </WhatWrapper>
            </WhatContainer>
            </What>

            <Acads>
                <AcadsContainer>
                    <AcadsContent>
                        <AcadsHeader>Academics</AcadsHeader>
                        <AcadsSub>BS COMTECH Program</AcadsSub>
                        <AcadsText>Bachelor of Science in Communications Technology Management is a 4-year undergraduate program in the John Gokongwei School of Management. The curriculum is patterned after the BS Management Program, with an integration of subjects in communications and information technology. Through the program, students are exposed to both managerial and creative processes that equip them with the necessary skills and knowledge to work in multiple industries. Graduates of the course are known to enter the different fields of marketing, communications, media, advertising, and information technology.</AcadsText>
                        <AcadsButton to="">Learn More</AcadsButton>
                    </AcadsContent>
                    <AcadsContent><AcadsImg /></AcadsContent>
                </AcadsContainer>
            </Acads>
        </AboutContainer>
    )
}

export default About