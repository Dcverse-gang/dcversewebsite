'use client';
import { useState } from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTshirt, faBars, faBolt, faRobot, faLock, 
  faCloudUploadAlt, faMagic, faCrown, faDownload, 
  faStar, faStarHalfAlt, faCheck, faTimes, faCoins, faPlay, faFileAlt
} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter, faFacebookF, faInstagram, 
  faLinkedinIn, faGithub, faYoutube 
} from '@fortawesome/free-brands-svg-icons';

// Make sure all these imports are properly exported from their files
import Header from '@/app/components/Virtual/Header-Virtual';
import HeroSection from '@/app/components/Virtual/HeroSection';
import FeaturesSection from '@/app/components/Virtual/FeaturesSection';
import HowItWorksSection from '@/app/components/Virtual/HowItWorksSection';
import TestimonialsSection from '@/app/components/Virtual/TestimonialsSection';
import PricingSection from '@/app/components/Virtual/PricingSection';
import UploadArea from '@/app/components/Virtual/UploadArea';
import ClothingSelector from '@/app/components/Virtual/ClothingSelector';
import AdvancedOptions from '@/app/components/Virtual/AdvancedOptions';
import ResultsGrid from '@/app/components/Virtual/ResultsGrid';
import FeedbackModal from '@/app/components/Virtual/FeedbackModal';
import CreditsModal from '@/app/components/Virtual/CreditsModal';
import Footer from '@/app/components/Virtual/Footer-Virtual';

export default function VirtualTryOn() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [showCreditsModal, setShowCreditsModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [generateClicks, setGenerateClicks] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDashboardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDashboard(true);
    window.scrollTo(0, 0);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleGenerateClick = () => {
    const newClicks = generateClicks + 1;
    setGenerateClicks(newClicks);
    
    if (newClicks >= 3) {
      setShowCreditsModal(true);
      setGenerateClicks(0);
    }
  };

  const handleRatingClick = (stars: number) => {
    setRating(stars);
    setShowFeedbackModal(true);
  };

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FontAwesomeIcon 
        key={i} 
        icon={i < count ? faStar : faStarHalfAlt} 
        className={i < count ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="font-mono bg-black text-white min-h-screen">
      <Head>
        <title>VirtualTry - AI-Powered Virtual Try-On</title>
        <meta name="description" content="Experience clothing in the digital realm with our AI-powered virtual try-on" />
      </Head>

      <Header 
        mobileMenuOpen={mobileMenuOpen} 
        toggleMobileMenu={toggleMobileMenu} 
        handleDashboardClick={handleDashboardClick} 
      />

      {!showDashboard ? (
        <div id="landing-page">
          <HeroSection handleDashboardClick={handleDashboardClick} />
          
          <section className="py-8 md:py-12 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-white mb-6 md:mb-8 text-sm md:text-base">
                Trusted by leading fashion brands worldwide
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-center">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-10 md:h-12 bg-black text-white border-white border rounded flex items-center justify-center opacity-60 hover:opacity-100 transition duration-300">
                    <span className="text-xs md:text-sm">Brand {i+1}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FeaturesSection />
          <HowItWorksSection handleDashboardClick={handleDashboardClick} />
          <TestimonialsSection renderStars={renderStars} />
          <PricingSection />
        </div>
      ) : (
        <div id="dashboard" className="min-h-screen bg-black">
          <nav className="bg-black shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-14 md:h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center">
                    <FontAwesomeIcon icon={faTshirt} className="text-purple-500 text-xl md:text-2xl mr-2" />
                    <span className="text-lg md:text-xl font-bold text-white">VirtualTry</span>
                  </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-2 md:space-x-4">
                  <div className="relative">
                    <button className="flex items-center text-sm rounded-full focus:outline-none">
                      <span className="sr-only">Open user menu</span>
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1d1d1d] flex items-center justify-center text-gray-300 text-xs md:text-sm">
                        SK
                      </div>
                      <span className="ml-1 md:ml-2 text-gray-300 font-medium text-xs md:text-sm">Sarah K.</span>
                    </button>
                  </div>
                  <div className="bg-orange-100 text-orange-800 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium flex items-center">
                    <FontAwesomeIcon icon={faCoins} className="mr-1" />
                    <span>2,450 credits</span>
                  </div>
                  <button className="bg-orange-500 text-white px-3 py-1 md:px-4 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-orange-600 transition duration-300 flex items-center">
                    <FontAwesomeIcon icon={faCrown} className="mr-1" />
                    <span>Upgrade</span>
                  </button>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                  <button 
                    type="button" 
                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
                    onClick={toggleMobileMenu}
                  >
                    <span className="sr-only">Open main menu</span>
                    <FontAwesomeIcon icon={faBars} />
                  </button>
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
              <div className="w-full md:w-1/3 lg:w-1/4 space-y-4 md:space-y-6">
                <UploadArea selectedFile={selectedFile} handleFileChange={handleFileChange} />
                <ClothingSelector />
                <AdvancedOptions handleGenerateClick={handleGenerateClick} />
              </div>

              <div className="w-full md:w-2/3 lg:w-3/4">
                <ResultsGrid handleRatingClick={handleRatingClick} />
              </div>
            </div>
          </div>
        </div>
      )}

      <FeedbackModal 
        show={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
        initialRating={rating}
        feedback={feedback}
        setFeedback={setFeedback}
      />

      <CreditsModal 
        show={showCreditsModal}
        onClose={() => setShowCreditsModal(false)}
      />

      <Footer />
    </div>
  );
}