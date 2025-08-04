import bgvideo from '../assets/bgvids/partners.mp4'
const PartnersHero = () => {
  return (
    <div>
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
            Our Partners
          </h1>
          <p
            data-aos='fade-up'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='text-xl md:text-xl max-w-2xl text-left ml-4'
          >
            We work closely with forward-thinking enterprises, government
            entities, and domain experts across China, Europe, and the Caspian
            region. Together, we co-create scalable innovations and unlock
            regional and global growth opportunities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PartnersHero
