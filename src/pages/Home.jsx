import React from 'react'
import Layout from '../components/layouts/Layout'
import HeroSection from '../modules/sections/home/HeroSection'
import ServiceSection from '../modules/sections/home/ServiceSection'
import  {AdvantageSection}  from '../modules/sections/home/AdvantageSection'
import Services from '../modules/sections/home/Services'
import StateSection from '../modules/sections/home/StateSection'
import ContactInfoSection from '../modules/sections/home/ContactInfoSection'
const Home = () => {
  return (
    <div className='p-0 m-0'>
      <Layout>
      <HeroSection></HeroSection>
      <ServiceSection></ServiceSection>
      <AdvantageSection></AdvantageSection>
      <Services></Services>
      <StateSection></StateSection>
      <ContactInfoSection></ContactInfoSection>
    </Layout>
    

    </div>
  )
}

export default Home
