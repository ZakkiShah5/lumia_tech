import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Anastasia Ivanova',
    title: 'Russia',
    quote: "Working with Lumia has truly accelerated our regional expansion. Their expertise and open communication make collaboration effortless.",
  },
  {
    name: 'Lukas Müller',
    title: 'Switzerland',
    quote: "The innovative approach and professionalism at Lumia create a perfect environment for successful projects.",
  },
  {
    name: 'Ayan Bekzhanov',
    title: 'Kazakhstan',
    quote: "The team’s deep understanding of local markets combined with global vision is impressive.",
  },
  {
    name: 'Lukas Müller',
    title: 'Switzerland',
    quote: "The innovative approach and professionalism at Lumia create a perfect environment for successful projects.",
  },
  
];

export default function PartnersTestimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-16 px-4">
      <h2 className="after-title text-2xl md:text-4xl uppercase font-semibold text-center mx-auto mb-12 text-gray-800">Voices From Our Partners</h2>

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
