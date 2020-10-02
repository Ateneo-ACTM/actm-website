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
    AcadsWrapper,
    AcadsContent,
    AcadsHeader,
    AcadsSub,
    AcadsText,
    AcadsButton,
    AcadsImg,
    AcadsImgMobile
} from "./styles"

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
                    <WhatContent className="a" />
                    <WhatContent className="left left-m">
                        <WhatHeader className="left-m">We believe that there is a
                            <HeaderSpan>{`\n`}solid space for creativity{`\n`}</HeaderSpan>
                            in the world of business.</WhatHeader>
                        <WhatText className="left-m">ACTM strives to uphold an environment that motivates creative thinkers, and is safe for whatever creative ideas they might produce. New ideas are what drive us all forward, and allow us to constantly improve the way we approach our work.</WhatText>
                    </WhatContent>
                </WhatWrapper>
                <WhatWrapper>
                    <WhatContent className="b" />
                    <WhatContent className="right right-m">
                        <WhatHeader className="right-m">We believe in the
                            <HeaderSpan>{`\n`}importance of empathy.</HeaderSpan></WhatHeader>
                        <WhatText className="right-m">ACTM goes the extra mile to understand the feelings and context of our members, as well as the target market of the projects we promote. We strive to promote an environment that trains empathetic, socially responsible practitioners of Integrated Marketing Communications, who have the ability to frame ideas into stories that inform and inspire.</WhatText>
                    </WhatContent>
                </WhatWrapper>
            </WhatContainer>
            </What>

            <Acads>
                <AcadsContainer>
                <AcadsHeader>Academics</AcadsHeader>
                    <AcadsWrapper>
                        <AcadsContent>
                            <AcadsSub>BS COMTECH Program</AcadsSub>
                            <AcadsImgMobile />
                            <AcadsText>Bachelor of Science in Communications Technology Management is a 4-year undergraduate program in the John Gokongwei School of Management. The curriculum is patterned after the BS Management Program, with an integration of subjects in communications and information technology. Through the program, students are exposed to both managerial and creative processes that equip them with the necessary skills and knowledge to work in multiple industries. Graduates of the course are known to enter the different fields of marketing, communications, media, advertising, and information technology.</AcadsText>
                            <AcadsButton 
                            href="https://ateneo.edu/ls/jgsom/bachelor-science-communications-technology-management"
                            target="_blank">
                                Learn More
                            </AcadsButton>
                        </AcadsContent>
                        <AcadsContent><AcadsImg /></AcadsContent>
                    </AcadsWrapper>
                </AcadsContainer>
            </Acads>
        </AboutContainer>
    )
}

export default About