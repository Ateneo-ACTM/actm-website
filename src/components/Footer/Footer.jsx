import React from "react"

import {
  Foot,
  Container,
  FooterLine,
  FooterLogo,
  FooterMenu,
  FooterItem,
  FooterLink,
  FooterMenu2,
} from "./styles"
import { SocialIcon } from "react-social-icons"
import logo from "./assets/logo.svg"

const Footer = () => (
  <Foot>
    <FooterLine />
    <Container>
      <FooterLogo src={logo} alt="logo" />
      <FooterMenu>
        <FooterItem>
          <FooterLink to="/">Home</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/about">About</FooterLink>
        </FooterItem>
        <FooterItem>
          <FooterLink to="/stories">Stories</FooterLink>
        </FooterItem>
      </FooterMenu>
      <FooterMenu2>
        <SocialIcon url="https://facebook.com/AteneoACTM " />
        <SocialIcon url="https://instagram.com/AteneoACTM" />
        <SocialIcon url="https://twitter.com/AteneoACTM" />
      </FooterMenu2>
    </Container>
  </Foot>
)

export default Footer
