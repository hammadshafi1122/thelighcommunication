import React from 'react'
import Layout from '../components/layouts/Layout'
import ServiceSection from '../modules/sections/home/ServiceSection'
import  AdvantageSection  from '../modules/sections/home/AdvantageSection'
import Services from '../modules/sections/home/Services'
import StateSection from '../modules/sections/home/StateSection'
import ContactInfoSection from '../modules/sections/home/ContactInfoSection'
import ImpactSection from '../modules/sections/home/ImpactSection'
import CompaignSection from '../modules/sections/home/CompaignSection'
import CallSection from '../modules/sections/home/CallCenterSection'
const Home = () => {
  return (
    <div className='p-0 m-0'>
      <Layout>
      <CompaignSection></CompaignSection>
      <ServiceSection></ServiceSection>
      <AdvantageSection></AdvantageSection>
      <Services></Services>
      <ImpactSection/>
      {/* <StateSection></StateSection> */}
      <CallSection></CallSection>
      <ContactInfoSection></ContactInfoSection>
    </Layout>
    

    </div>
  )
}

export default Home
