import React from "react"
import { Foot, Container, FooterLine, FooterLogo, FooterMenu, FooterItem, FooterLink, FooterIcon, FooterMenu2 } from "./styles"

const Footer = () => (
    <Foot>
        <FooterLine />
        <Container>
            <FooterLogo>ATENEO<b>ACTM</b></FooterLogo>
            <FooterMenu>
                <FooterItem>
                    <FooterLink to="#">About</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to="#">Org Culture</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to="#">Services</FooterLink>
                </FooterItem>
                <FooterItem>
                    <FooterLink to="#">Contact Us</FooterLink>
                </FooterItem>
            </FooterMenu>
            <FooterMenu2>
                <FooterIcon />
                <FooterIcon />
                <FooterIcon />
            </FooterMenu2>
        </Container>
    </Foot>
)

export default Footer