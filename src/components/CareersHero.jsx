import bgvideo from '../assets/bgvids/careers.mp4'

const CareersHero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <video
        className='absolute top-0 left-0 w-full h-full object-cover'
        src={bgvideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Text Content */}
      <div className='relative z-10 flex flex-col items-start justify-center h-full text-center text-white px-4'>
        <h1
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1000'
          className='text-4xl md:text-5xl font-bold mb-4 border-l-4 pl-2 border-[#2E8B57] text-left'
        >
          Careers at Lumia
        </h1>
        <p
          data-aos='fade-up'
          data-aos-easing='linear'
          data-aos-duration='1000'
          className='text-2xl md:text-2xl max-w-2xl text-left ml-4'
        >
          Nurture Potential. Create Together. Shape the Future.
        </p>
        <button
          data-aos='fade-up-left'
          data-aos-easing='linear'
          data-aos-duration='1000'
          className='ml-4 mt-5 font-semibold cursor-pointer px-4 py-2 bg-[#A3D9A5] duration-200 text-black translate-y-1.5 hover:text-white hover:bg-[#2E8B57]'
        >
          <a href='#careers'>Read More...</a>
        </button>
      </div>
    </div>
  )
}

export default CareersHero
