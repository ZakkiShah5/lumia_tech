import React from 'react'
import roboabt from '../assets/mannrobo.jpg'
import scene from '../assets/scene.jpg'
const About = () => {
  return (
    <div className='max-w-7xl px-4 flex flex-col items-center md:flex-row mx-auto pt-0'>
      <div className='flex-1 flex justify-center items-center'>
        <div className='py-10 p-5 flex flex-col gap-4'>
          <p className='text-lg md:text-lg'>
            <b className='md:text-2xl'>Lumia Technologies Group</b> is a
            future-focused technology company headquartered in Europe. Founded
            in 2012, we’ve grown from a regional connector into a trusted
            innovation partner across continents.
          </p>

          <div className='md:flex justify-center items-center gap-20'>
            <p className='text-lg'>
              We enable seamless cross-border collaboration across the Caspian
              region, into China, and throughout Europe — spanning technology,
              sustainability, cross-border trade, and industrial modernization.{' '}
              <br />
              Built on a foundation of strategic insight, cultural fluency, and
              deep technical expertise, we empower governments, businesses, and
              industries to navigate complexity and unlock new growth. At Lumia,
              we believe in building bridges — not just between markets, but
              between ideas, people, and futures.
            </p>
          </div>
        </div>
      </div>
      <div data-aos='fade-up-right' className='flex-1'>
        <img
          data-aos='fade-up-left'
          className=' w-fit object-contain'
          src={scene}
          alt=''
        />
      </div>
    </div>
  )
}

export default About
