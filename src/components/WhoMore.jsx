import innovationImage from '../assets/innovation.jpg'
import students from '../assets/students.jpg'
import partnershipImage from '../assets/partnership.jpg'
import remote from '../assets/remote.jpg'
const WhoMore = ({}) => {
  return (
    <div id='who' className='py-6 px-4 max-w-7xl mx-auto'>
      <div className='mb-5 flex justify-between flex-col md:flex-row gap-5 items-center'>
        <div className='flex-1'>
          <h1
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-2 border-[#2E8B57]'
          >
            Innovation at the Core
          </h1>
          <p
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='md:text-xl mt-4 md:mt-10'
          >
            At Lumia, we go beyond facilitating — we create. With a strong focus
            on creation and strategic partnerships, we deliver impactful,
            cross-border solutions that help businesses scale. Everything we do
            is driven by speed, precision, and purpose — enabling our partners
            to stay ahead in an ever-evolving tech landscape.
          </p>
        </div>
        <div className='img-shade-right flex-1 flex justify-end items-right'>
          <img
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
            src={innovationImage}
            className=''
            alt='inno'
          />
        </div>
      </div>
      <div className='my-5 flex justify-between flex-col md:flex-row-reverse gap-5 items-center'>
        <div className='flex-1'>
          <h1
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-2 border-[#2E8B57]'
          >
            A Global Team
          </h1>
          <p
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='md:text-xl mt-4 md:mt-10'
          >
            Our team is made up of tech experts, cultural explorers, and problem
            solvers from across the globe. This rich diversity fuels creative
            thinking and powerful cross-cultural collaboration. We believe that
            true innovation happens when different perspectives come together —
            which is why we build bridges, not silos.
          </p>
        </div>
        <div className='img-shade-left flex-1 flex justify-start items-left'>
          <img
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
            src={students}
            className=''
            alt='inno'
          />
        </div>
      </div>
      <div className='md:my-5 flex justify-between flex-col md:flex-row gap-5 items-center'>
        <div className='flex-1'>
          <h1
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-2 border-[#2E8B57]'
          >
            Partnership First
          </h1>
          <p
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='md:text-xl mt-4 md:mt-10'
          >
            We see every relationship — whether internal or external — as a
            partnership. We foster a culture of trust, inclusion, and mutual
            growth, where every contribution matters. Collaboration isn’t just
            encouraged — it’s embedded in how we operate, creating space for
            shared ownership, creativity, and lasting impact.
          </p>
        </div>
        <div className='img-shade-right flex-1 flex justify-end items-right'>
          <img
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
            src={partnershipImage}
            className=''
            alt='inno'
          />
        </div>
      </div>
      <div className='my-5 flex justify-between flex-col md:flex-row-reverse gap-5 items-center'>
        <div className='flex-1'>
          <h1
            data-aos='fade-down'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='text-2xl md:text-3xl font-semibold uppercase border-l-4 pl-2 border-[#2E8B57]'
          >
            Work Your Way
          </h1>
          <p
            data-aos='fade-left'
            data-aos-easing='linear'
            data-aos-duration='1000'
            className='md:text-xl mt-4 md:mt-10'
          >
            Flexibility is part of who we are. Whether remote or hybrid, our
            people have the freedom to choose the work environment that suits
            them best. By supporting work-life alignment, we unlock stronger
            engagement, deeper creativity, and more impactful results.
          </p>
        </div>
        <div className='img-shade-left flex-1 flex justify-start items-left'>
          <img
            data-aos='fade-right'
            data-aos-easing='linear'
            data-aos-duration='1000'
            src={remote}
            className=''
            alt='inno'
          />
        </div>
      </div>
    </div>
  )
}

export default WhoMore
