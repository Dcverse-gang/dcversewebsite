"use client";

// import {SplitText} from "@/components/split-text";
import { TypewriterEffect } from "@/app/components/TypeWriter";

function Features() {
  const features = [
    {
      title: "Faster Production",
      description: "Reduce content creation time significantly",
    },
    {
      title: "Increase in Engagement",
      description: "Higher interaction rate with AI-powered content",
    },
  ];
 
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');

};


  return (
    <div className="bg-black text-white mx-4 sm:mx-[10%] lg:mx-[20%] border-2 border-white mb-0">
      {/* Features Section */}
      <div >
      {/* <SplitText
        text="OUR FEATURES"
        className="text-2xl md:text-4xl lg:text-4xl font-bold text-center text-white ml-[5%] lg:ml-[35%] "
        delay={50}
        animationFrom={{ opacity: 0, transform: 'translate3d(0, 30px, 0)' }} 
        animationTo={{ opacity: 1, transform: 'translate3d(0, 0, 0)' }}
       
        threshold={0.3} 
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      /> */} 
      <div className="flex items-center w-full  justify-center text-center">
        <TypewriterEffect
          words={[{ text: "MEASURABLE" }, { text: "RESULTS" }]}
          className="text-2xl md:text-3xl text-center lg:text-4xl font-bold text-white text-center p-4"
        />
      </div>
      </div>
      <hr className="h-px bg-white border-0" />
      <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 p-4 sm:p-6 md:p-10 mb-6 sm:mb-10">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex-1 p-4 sm:p-6 rounded-md relative transition-all transform group 
                       border border-white hover:shadow-[4px_0_10px_0_rgba(0,255,255,0.3)]"
          >
            {/* arrow icon */}
            <div className="flex items-center mb-3 sm:mb-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#06d6d6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 sm:w-6 h-5 sm:h-6 mr-2 transition-transform group-hover:rotate-45 group-hover:stroke-cyan-400 group-hover:filter group-hover:drop-shadow-[0_0_5px_cyan]"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-cyan-400 transition-all">
                {item.title}
              </h2>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-2 group-hover:text-gray-200 transition-all font-sans">
              {item.description}
            </p>

            {/* Holographic glow bar at bottom */}
            <div
              className="absolute bottom-0 left-0 w-full h-1 
                         transform scale-x-0 group-hover:scale-x-100 
                         transition-transform duration-500 origin-left"
            ></div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Features;