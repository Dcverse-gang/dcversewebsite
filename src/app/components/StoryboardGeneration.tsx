import React from 'react';

const StoryboardGeneration = () => {
  return (
    <div className="panel-gradient rounded-xl p-6 retro-border scanlines mb-6">
      <h2 className="text-xl font-bold font-mono text-retroPurple mb-6 flex items-center">
        <i className="fas fa-images mr-3"></i> STORYBOARD GENERATION
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-panelBg rounded-lg p-4 border border-cyberBlue border-opacity-30 h-64 flex flex-col">
            <div className="border-2 border-dashed border-neonPink rounded flex-1 flex items-center justify-center">
              <i className="fas fa-image text-3xl text-neonPink opacity-50"></i>
            </div>
            <input type="file" className="mt-2 text-xs" accept="image/*" />
          </div>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <button className="retro-btn px-6 py-2 bg-darkBg text-cyberBlue rounded-md font-bold border border-cyberBlue hover:bg-cyberBlue hover:text-white">
          <i className="fas fa-random mr-2"></i> AI Generate Images
        </button>
        <button className="retro-btn px-6 py-2 bg-retroPurple text-white rounded-md font-bold border-b-2 border-neonPink hover:bg-opacity-90">
          <i className="fas fa-film mr-2"></i> Proceed to Video
        </button>
      </div>
    </div>
  );
};

export default StoryboardGeneration;