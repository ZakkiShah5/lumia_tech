import React from 'react'
import CareersHero from '../components/CareersHero'
import Header from '../components/Header'
import CareersMore from '../components/CareersMore'
import CareerOpenings from '../components/CareerOpenings'

const Careers = () => {
  return (
    <div>
        <Header/>
        <CareersHero/>
        <CareersMore/>
        <CareerOpenings />
    </div>
  )
}

export default Careers