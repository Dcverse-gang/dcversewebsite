import React from 'react';
import {
  FaBolt,
  FaRunning,
  FaDragon,
  FaMagic,
  FaFilm,
  FaChevronDown
} from 'react-icons/fa';

const videoModels = [
  {
    id: '1',
    name: 'Veo3',
    description: 'High-quality video generation',
    Icon: FaBolt,
    color: 'bg-retroPurple',
    details: 'Produces cinematic quality videos with excellent motion and detail. Best for professional content.',
    resolution: '1080p',
    feature: 'Fast generation',
  },
  {
    id: '2',
    name: 'RunwayML',
    description: 'Creative video styles',
    Icon: FaRunning,
    color: 'bg-cyberBlue',
    details: 'Offers artistic control with various styles and effects. Great for experimental content.',
    resolution: '720p-4K',
    feature: 'Multiple styles',
  },
  {
    id: '3',
    name: 'Kling',
    description: 'Anime & stylized content',
    Icon: FaDragon,
    color: 'bg-neonPink',
    details: 'Specializes in anime and stylized video generation. Perfect for animated content.',
    resolution: '720p',
    feature: 'Anime focus',
  },
  {
    id: '4',
    name: 'PikaLabs',
    description: 'Experimental generation',
    Icon: FaMagic,
    color: 'bg-matrixGreen text-white',
    details: 'Cutting-edge experimental video generation with unique effects and transitions.',
    resolution: '480p-1080p',
    feature: 'Experimental',
  },
];

const VideoModelSelection = () => {
  return (
    <div className="panel-gradient rounded-xl p-6 retro-border scanlines">
      <h2 className="text-xl font-bold font-mono text-matrixGreen mb-6 flex items-center">
        <FaFilm className="mr-3" /> SELECT VIDEO MODEL
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {videoModels.map((model) => (
          <div key={model.id} className="bg-panelBg rounded-lg p-4 border border-cyberBlue border-opacity-30">
            <div className="flex items-start mb-3">
              <div className={`w-12 h-12 ${model.color} rounded-lg flex items-center justify-center mr-3`}>
                <model.Icon className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{model.name}</h3>
                <p className="text-xs text-cyberBlue">{model.description}</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">{model.details}</p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-neonPink">Resolution: {model.resolution}</span>
              <span className="text-matrixGreen">{model.feature}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {/* <label className="block text-sm font-medium mb-2">Select your preferred video model:</label>
        <div className="relative">
          <select className="w-full bg-[#1d1d1d] border border-cyberBlue text-white px-4 py-3 pr-8 rounded focus:outline-none focus:ring-2 focus:ring-neonPink">
            {videoModels.map((model) => (
              <option key={model.id}>
                {model.name} {model.id === '1' ? '(Recommended)' : ''}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
             <FaChevronDown className="text-cyberBlue" /> 
          </div>*/}
        {/* </div>  */}
       <button className="retro-btn px-6 py-2 bg-retroPurple text-white self-center  center ml-[45%] rounded-md font-bold border-b-2 border-neonPink hover:bg-opacity-90">
          <i className="fas fa-film mr-2"></i> Generate
        </button>
      </div>
    </div>
  );
};

export default VideoModelSelection;
