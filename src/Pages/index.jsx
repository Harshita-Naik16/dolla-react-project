import React, { useState } from 'react'
import HeroSection from '../components/Hero';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(prev => !prev);
  
  return (
    <>
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <Services />
      <InfoSection {...homeObjThree}/>
      <Footer />
    </>
  )
}
