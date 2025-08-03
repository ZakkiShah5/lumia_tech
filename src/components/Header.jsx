import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Header = ({headerbg}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); // ✅ new state

  const toggleMenu = () => setMenuOpen(prev => !prev);

  // ✅ Effect to track scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full bg-[${headerbg}] text-white z-50`}>
      {/* Header Top */}
      <div className={`flex justify-between items-center py-4 px-6 transition-all duration-300 ease-in-out ${
        scrolled || menuOpen ? 'bg-[#2E8B57]' : 'bg-transparent'
      }`}>
        <div className='max-w-7xl'>
          <img src={logo} alt='logo' className='w-24' />
        </div>

        <div className='bars border border-white p-1'>
          {menuOpen ? (
            <IoCloseSharp className='text-2xl relative z-10 cursor-pointer' onClick={toggleMenu} />
          ) : (
            <FaBars className='relative z-10 text-2xl cursor-pointer' onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Expandable Menu */}
      <div
        className={`overflow-hidden transition-all duration-200 ease-in-out bg-[#2E8B57] text-white text-lg ${
          menuOpen ? 'max-h-[600px] py-4 px-2' : 'max-h-0'
        }`}
      >
        <div className='flex flex-col md:justify-center md:px-4 md:text-4xl gap-4 py-20'>
          <Link className='link' to='/' onClick={toggleMenu}>Home</Link>
          <Link className='link' to='/whoweare' onClick={toggleMenu}>Who We Are</Link>
          <Link className='link' to='/whatwedo' onClick={toggleMenu}>What We Do</Link>
          <Link className='link' to='/' onClick={toggleMenu}>Our Partners</Link>
          <Link className='link' to='/' onClick={toggleMenu}>Careers at Lumia</Link>
          <Link className='link' to='/' onClick={toggleMenu}>Get in Touch</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
