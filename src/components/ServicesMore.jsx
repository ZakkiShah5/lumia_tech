import future from '../assets/futuristic.jpg'

const services = [
  {
    title: 'Digital Transformation in Energy',
    description:
      'Implementing AI-powered analytics, predictive maintenance, and smart grid systems for more sustainable energy operations.'
  },
  {
    title: 'Sustainable Urban Development',
    description:
      'Promoting IoT-enabled infrastructure, intelligent traffic management, and eco-friendly construction for smarter cities.'
  },
  {
    title: 'Next-Gen Manufacturing',
    description:
      'Helping factories adopt robotics, 3D printing, and digital twin technologies for agile and customized production.'
  },
  {
    title: 'AgriTech Innovation',
    description:
      'Deploying drones, AI-driven crop monitoring, and automated irrigation systems to increase agricultural efficiency and sustainability.'
  },
  {
    title: 'Clean Water Technologies',
    description:
      'Introducing smart purification systems and real-time water quality monitoring to safeguard essential resources.'
  },
  {
    title: 'Climate Resilience & Environmental Monitoring',
    description:
      'Utilizing sensor networks to track air, soil, and biodiversity data — enabling proactive, data-driven ecological management.'
  }
]

const ServicesMore = () => {
  return (
    <div id='services' className='py-10 px-4 max-w-7xl mx-auto'>
      <div className='title'>
        <h1 className='text-center text-4xl title-before font-semibold'>
          Our Services
        </h1>
        <p className='text-center italic text-lg mx-auto max-w-3xl mt-4'>
          Lumia Technologies Group is committed to driving innovation and
          sustainability across strategic industries in the Caspian region and
          beyond. We apply emerging technologies to reshape the future of
          business, cities, and the environment.
        </p>
      </div>
      <div className='flex md:flex-row flex-col my-20 gap-5'>
        <div className='flex-1 img-shade'>
          <img
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='500'
            src={future}
            alt='futuro'
          />
        </div>
        <div className='flex-1'>
          <div className='grid md:grid-cols-2 gap-8'>
            {services.map((service, index) => (
              <div
                key={index}
                data-aos='zoom-in'
                data-aos-easing='linear'
                data-aos-duration='600'
                className='p-6 border-l-4 border-[#2E8B57] hover:border-black bg-[#A3D9A5] cursor-pointer hover:bg-[#2E8B57] hover:text-white transition-all duration-300 rounded-lg'
              >
                <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
                <p className=''>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesMore
