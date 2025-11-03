import { faBolt, faRobot, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-12 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Powerful Features for Your Virtual Wardrobe</h2>
          <p className="text-base md:text-xl text-white max-w-3xl mx-auto">
            Our platform offers everything you need to revolutionize your shopping experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              icon: faBolt,
              title: "INSTANT RENDER",
              description: "Photorealistic virtual try-on results in nanoseconds with our optimized neural pipeline."
            },
            {
              icon: faRobot,
              title: "AI STYLIST",
              description: "Our AI suggests perfect outfits based on your body shape, skin tone and personal style."
            },
            {
              icon: faLock,
              title: "PRIVACY GUARANTEED",
              description: "Your images are processed securely with AWS encryption and automatically deleted after generation."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-[#1d1d1d] p-4 md:p-8 rounded-xl border border-gray-800 hover:border-white transition duration-300">
              <div className="w-10 h-10 md:w-14 md:h-14 border border-gray-700 flex items-center justify-center mb-4 md:mb-6">
                <FontAwesomeIcon icon={feature.icon} className="text-white text-xl md:text-2xl" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 tracking-wider">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;