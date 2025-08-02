import bgvideo from '../assets/bgvids/bgvid.mp4'
import Header from './Header'

const HeroSection = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <Header />
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Text Content */}
      <div className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'>
        <h1
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1000'
          className='text-4xl md:text-5xl font-bold mb-4'
        >
          Lumia Technologies Group
        </h1>
        <p
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
          className='text-2xl md:text-2xl max-w-2xl'
        >
          Innovate. Connect. Accelerate.
        </p>
      </div>
    </div>
  )
}

export default HeroSection
