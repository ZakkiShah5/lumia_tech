import logo1 from '../assets/partners/1.png'
import logo2 from '../assets/partners/2.png'
import logo3 from '../assets/partners/3.png'
import logo4 from '../assets/partners/4.png'
import logo5 from '../assets/partners/5.png'
import logo6 from '../assets/partners/6.png'
import logo7 from '../assets/partners/7.png'
import logo8 from '../assets/partners/8.png'
import logo9 from '../assets/partners/9.png'
import logo10 from '../assets/partners/10.png'
import logo11 from '../assets/partners/11.png'
import logo12 from '../assets/partners/12.webp'
import logo13 from '../assets/partners/13.png'
import logo14 from '../assets/partners/14.jpg'  
import logo15 from '../assets/partners/15.png'
import logo16 from '../assets/partners/16.png'

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16]

const LogoCarousel = () => {
  return (
    <div className='w-full max-w-7xl mx-auto overflow-hidden py-10 py-6 px-4  bg-white'>
      <div className='animate-scroll flex whitespace-nowrap gap-10 items-center'>
        {logos.concat(logos).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className='h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300'
          />
        ))}
      </div>
    </div>
  )
}

export default LogoCarousel
