import React from 'react'
import Header from '../components/Header'
import WhoHero from '../components/WhoHero'
import WhoMore from '../components/WhoMore'
import TestimonialCarousel from '../components/TestimonialCarousel'

const Who = () => {
  return (
    <div>
        <Header headerbg={''} />
        <WhoHero />
        <WhoMore />
        <TestimonialCarousel />
    </div>
  )
}

export default Who