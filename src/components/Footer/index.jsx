import React from 'react';
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrapper, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FolderElements';

import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export default function Footer() {
  const year = new Date().getFullYear();
  
  const toggleHome = () => {
    scroll.scrollToTop();
  }
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to='/signin'>How it works</FooterLink>
                <FooterLink to='/signin'>Testemonials</FooterLink>
                <FooterLink to='/signin'>Career</FooterLink>
                <FooterLink to='/signin'>Investors</FooterLink>
                <FooterLink to='/signin'>Terms of Services</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to='/signin'>Contact</FooterLink>
                <FooterLink to='/signin'>Support</FooterLink>
                <FooterLink to='/signin'>Destinations</FooterLink>
                <FooterLink to='/signin'>Sponcerships</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to='/signin'>Submit Video</FooterLink>
                <FooterLink to='/signin'>Ambassadors</FooterLink>
                <FooterLink to='/signin'>Agency</FooterLink>
                <FooterLink to='/signin'>Influencers</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to='/signin'>Instagram</FooterLink>
                <FooterLink to='/signin'>Facebook</FooterLink>
                <FooterLink to='/signin'>Youtube</FooterLink>
                <FooterLink to='/signin'>Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to='/' onClick={toggleHome}>
                  dolla
              </SocialLogo>
              <WebsiteRights>dolla &copy; {year} All Rights Reserved</WebsiteRights>
              <SocialIcons>
                <SocialIconLink href='/' target='_blank' aria-label='facebook'>
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrapper>
      </FooterContainer>
    </>
  )
}
