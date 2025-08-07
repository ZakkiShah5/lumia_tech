import React from 'react'
import { Link } from 'react-router-dom'
const CareersMore = () => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-10'>
      <div id='careers' className='max-w-4xl overflow-x-hidden mx-auto text-lg leading-relaxed text-gray-700 border-[#2E8B57] border-l-4 pl-4'>
        <p data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'>
          Lumia is driven by a globally diverse team of innovators who are
          passionate about making a real-world impact. We foster a flexible and
          inclusive work environment where talent thrives — offering remote and
          hybrid options, exposure to international projects, and meaningful
          opportunities for professional growth. <Link to='/contact'><strong>Join us</strong></Link> as we shape the future
          of technology together.
        </p>
      </div>
    </div>
  )
}

export default CareersMore
