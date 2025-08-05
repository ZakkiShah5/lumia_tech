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
];

export default function PartnersTestimonial() {
  return (
    <div className="w-full py-16 px-4">
      <h2 className="after-title text-2xl md:text-4xl uppercase font-semibold text-center mx-auto mb-12 text-gray-800">
        Voices From Our Partners
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        {testimonials.map((item, index) => {
          const isCenter = index === 1; // middle card
          return (
            <div
              key={index}
              className={`
                rounded-xl p-6 text-center h-[260px] flex flex-col justify-center mx-2 transition-all duration-500 ease-in-out
                ${isCenter ? 'bg-[#A3D9A5] scale-105' : 'bg-white scale-95 opacity-70'}
                w-full md:w-1/3
              `}
            >
              <p className="text-gray-700 italic mb-4">"{item.quote}"</p>
              <h4 className="text-gray-900 font-semibold">{item.name}</h4>
              <p className="text-gray-500 text-sm">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
