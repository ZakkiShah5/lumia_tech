import React from 'react'
import roboabt from '../assets/mannrobo.jpg'
import scene from '../assets/scene.jpg'
const About = () => {
  return (
    <div className='max-w-7xl flex flex-col md:flex-row mx-auto pt-0'>
      {/* <div data-aos="fade-up-right" className='flex-1'>
        <img
          className='max-h-screen p-5 pb-0 md:p-0 md:object-contain'
          src={roboabt}
          alt='robo'
        />
      </div> */}
      <div className='flex-1/3 flex justify-center items-center'>
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
            <img
              data-aos='fade-up-left'
              className='h-52 w-fit object-contain'
              src={scene}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
