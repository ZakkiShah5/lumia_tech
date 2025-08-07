import logo from '../assets/logo.png' // adjust path as needed
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-[#2E8B57] text-white'>
      <div className='max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Logo & Slogan */}
        <div className='flex flex-col items-center'>
          <img src={logo} alt='Lumia Logo' className='w-24 mb-3' />
          <p className='italic text-sm text-right'>
            Innovate. Connect. Accelerate.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className='text-xl font-semibold mb-3'>Quick Links</h2>
          <ul className='space-y-2'>
            <li>
              <Link to='/' className='hover:underline'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/whoweare' className='hover:underline'>
                Who We Are
              </Link>
            </li>
            <li>
              <Link to='/whatwedo' className='hover:underline'>
                What We Do
              </Link>
            </li>
            <li>
              <Link to='/partners' className='hover:underline'>
                Our Partners
              </Link>
            </li>
            <li>
              <Link to='/careers' className='hover:underline'>
                Careers at Lumia
              </Link>
            </li>
            <li>
              <Link to='/contact' className='hover:underline'>
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h2 className='text-xl font-semibold mb-3'>Contact</h2>
          <p className='mb-1'>Waagner Biro Straße 47/1</p>
          <p className='mb-1'>Graz 8020, Austria</p>
          <p className='mt-3'>
            Email:{' '}
            <a href='mailto:team@lumiatech-group.com' className=''>
              team@lumiatech-group.com
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className=' border-t-2 text-center py-4 text-sm'>
        © 2025 Lumia Technologies Group™. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
