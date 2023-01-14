import React from 'react';
import { Button } from '../ButtonElement';
import video from '../../../video/video.mp4'
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg
} from './HeroElements.js'

export default function HeroSection() {
  const [hover, setHover] = React.useState(false)

  function handleHover() {
    setHover(prev => !prev)
  }

  return (
    <>
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoplay muted loop>
                    <source src={video} type='video/mp4'></source>
                    not supported
                </VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>Sign up for a new account today and recieve $250 in credit towards your next payment.</HeroP>
                 <HeroBtnWrapper >
                    <Button to='signup' onMouseOver={handleHover} onMouseLeave={handleHover}
                        primary dark
                        >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button> 
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    </>
  )
}
