import React from 'react'
import Layout from '../components/layouts/Layout'
import Servicescontactcenter from '../modules/sections/services/Servicescontactcenter'
import ITSection from '../modules/sections/services/ITSection'
import LeadGeneration from '../modules/sections/services/LeadGeneration'
import BuisnessSection from '../modules/sections/services/BuisnessSection'

export const Outbound = () => {
  return (
    <div>
      <Layout>
              <Servicescontactcenter></Servicescontactcenter>
              <ITSection></ITSection>
                            <LeadGeneration></LeadGeneration>
                            <BuisnessSection></BuisnessSection>


      </Layout>
    </div>
  )
}
