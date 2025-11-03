import { FaMagic } from 'react-icons/fa';

export default function HowItWorksSection({ handleDashboardClick }: { handleDashboardClick: (e: React.MouseEvent) => void }) {
  // SVG data URLs for each step
  const stepImages = [
    // Upload step (simple upload icon with person silhouette)
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='%23ffffff'%3E%3Ccircle cx='50' cy='35' r='15' stroke-width='2'/%3E%3Cpath d='M30 60c0-10 5-20 20-20s20 10 20 20' stroke-width='2'/%3E%3Cpath d='M35 50l15-15 15 15M50 35v30' stroke-width='2'/%3E%3C/svg%3E",
    
    // Selection step (clothing items)
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='%23ffffff'%3E%3Cpath d='M30 30l10 20 10-20 10 20 10-20' stroke-width='2'/%3E%3Crect x='25' y='60' width='50' height='30' rx='5' stroke-width='2'/%3E%3Crect x='35' y='70' width='10' height='10' fill='%23ffffff'/%3E%3Crect x='55' y='70' width='10' height='10' fill='%23ffffff'/%3E%3C/svg%3E",
    
    // Results step (person with checkmark)
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' fill='none' stroke='%23ffffff'%3E%3Ccircle cx='50' cy='35' r='15' stroke-width='2'/%3E%3Cpath d='M30 60c0-10 5-20 20-20s20 10 20 20' stroke-width='2'/%3E%3Cpath d='M65 45l10 10-20 20-10-10' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E"
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-[#1d1d1d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white">How VirtualTry Works</h2>
          <p className="text-base md:text-xl text-white max-w-3xl mx-auto">
            Get started in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "Upload Your Photo", 
              description: "Simply upload a clear photo of yourself. For best results, wear form-fitting clothes or use a swimsuit." 
            },
            { 
              title: "Select Outfits", 
              description: "Browse our extensive catalog and choose the items you want to try on virtually." 
            },
            { 
              title: "See Instant Results", 
              description: "Our AI processes your image and shows you wearing the selected items in realistic detail." 
            }
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="bg-[#2a2a2a] w-full aspect-square rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 overflow-hidden border-2 border-gray-700 group-hover:border-purple-500 transition-all duration-300 p-3 md:p-4">
                <img 
                  src={stepImages[index]} 
                  alt={step.title}
                  className="w-2/3 md:w-3/4 h-2/3 md:h-3/4 object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 md:mt-16 text-center">
          <button
            onClick={handleDashboardClick}
            className="bg-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-medium hover:bg-purple-700 transition duration-300 inline-flex items-center"
          >
            <FaMagic className="mr-2" /> Generate Now
          </button>
        </div>
      </div>
    </section>
  );
}