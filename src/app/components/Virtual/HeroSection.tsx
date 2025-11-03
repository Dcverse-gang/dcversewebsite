import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface HeroSectionProps {
  handleDashboardClick: (e: React.MouseEvent) => void;
}

const HeroSection = ({ handleDashboardClick }: HeroSectionProps) => {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-8 md:mb-12 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">DIGITAL FASHION REVOLUTION</h1>
            <p className="text-base md:text-xl mb-6 md:mb-8 opacity-90">
              Experience clothing in the digital realm. Our neural networks construct precise simulations to visualize garments on your form.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleDashboardClick}
                className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-none text-base md:text-lg font-medium tracking-wider hover:bg-gray-200"
              >
                BEGIN SESSION
              </button>
              <Link href="#how-it-works" className="bg-transparent border border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-none text-base md:text-lg font-medium tracking-wider hover:bg-[#1d1d1d] text-center">
                PROTOCOL
              </Link>
            </div>
          </div>
          <div className="relative mt-8 md:mt-0">
            <div className="border border-gray-700 w-full aspect-video bg-[#1d1d1d] flex items-center justify-center">
              <div className="text-center">
                <FontAwesomeIcon icon={faPlay} className="text-3xl md:text-4xl text-gray-500 mb-2" />
                <p className="text-gray-400 text-sm md:text-base">Demo Video</p>
              </div>
            </div>
            <div className="absolute -bottom-4 md:-bottom-6 left-1/2 transform -translate-x-1/2 bg-white text-purple-600 px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg text-xs md:text-sm">
              <FontAwesomeIcon icon={faPlay} className="mr-1 md:mr-2" /> Watch Demo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;