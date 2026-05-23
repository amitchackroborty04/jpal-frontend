import AboutSection from '@/components/web/AboutSection'
import Hero from '@/components/web/Hero'
import Navbar from '@/components/web/Navbar'
import PhasesSection from '@/components/web/PhasesSection'
import ProcessSection from '@/components/web/ProcessSection'
import StatsBar from '@/components/web/StatsBar'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <StatsBar/>
      <AboutSection/>
      <ProcessSection/>
      <PhasesSection/>
    </div>
  )
}

export default page
