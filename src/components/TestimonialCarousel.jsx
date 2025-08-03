import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Matty Kevins',
    title: 'Sweden',
    quote: "The creative vibe at Lumia really sparks my inspiration every day.",
  },
  {
    name: 'Li Na',
    title: 'China',
    quote: "Being part of a global team where ideas flow freely helps me grow both professionally and personally.",
  },
  {
    name: 'Arman Iskandarov',
    title: 'Kazakhstan',
    quote: "Their global mindset and flexible approach helped us reach new markets smoothlyI love how I can juggle exciting projects and still make time for my family — Lumia’s flexibility is a game changer.",
  },
  {
    name: 'Daria Petrova',
    title: 'Georgia',
    quote: "Honestly, it just feels good to be heard. At Lumia, even the wildest ideas get a chance.",
  },
  {
    name: 'Arman Iskandarov',
    title: 'Kazakhstan',
    quote: "Their global mindset and flexible approach helped us reach new markets smoothlyI love how I can juggle exciting projects and still make time for my family — Lumia’s flexibility is a game changer.",
  },
  
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-16 px-4">
      <h2 className="after-title text-2xl md:text-4xl uppercase font-semibold text-center mx-auto mb-12 text-gray-800">Voices From Our Team</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        modules={[Autoplay]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            centeredSlides: false,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
        className="max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`transition-all duration-500 ease-in-out transform ${
              index === activeIndex
                ? 'scale-105 bg-[#A3D9A5] blur-0 opacity-100'
                : 'scale-90 opacity-50 bg-amber-50'
            }`}
          >
            <div className="rounded-xl p-6 text-center h-[260px] flex flex-col justify-center mx-2">
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <h4 className="text-gray-900 font-semibold">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
