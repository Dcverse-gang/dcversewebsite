import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

interface TestimonialsSectionProps {
  renderStars: (count: number) => JSX.Element[];
}

export default function TestimonialsSection({ renderStars }: TestimonialsSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">What Our Users Say</h2>
          <p className="text-base md:text-xl text-white max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              name: "Sarah Johnson", 
              role: "Fashion Blogger", 
              quote: "The most realistic virtual try-on I've ever used!", 
              image: "women/32", 
              rating: 5 
            },
            // ... other testimonials
          ].map((testimonial, index) => (
            <div key={index} className="bg-[#1d1d1d] p-6 md:p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1d1d1d] overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    {testimonial.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3 md:ml-4">
                  <h4 className="font-bold text-sm md:text-base">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs md:text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">"{testimonial.quote}"</p>
              <div className="flex">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}