import React from 'react';

const Sidebar = () => {
  return (
    <div className="lg:col-span-1">
      <div className="panel-gradient rounded-xl p-6 retro-border scanlines h-full">
        <h2 className="text-xl font-bold font-mono text-cyberBlue mb-6 flex items-center">
          <i className="fas fa-compass mr-3"></i> CREATION FLOW
        </h2>
        <ul className="space-y-4">
          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg bg-retroPurple bg-opacity-30 border-l-4 border-neonPink font-bold flex items-center">
              <i className="fas fa-user-astronaut mr-3"></i> 1. Select Avatar
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-retroPurple hover:bg-opacity-30 border-l-4 border-transparent font-medium flex items-center opacity-70">
              <i className="fas fa-scroll mr-3"></i> 2. Upload Script
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-retroPurple hover:bg-opacity-30 border-l-4 border-transparent font-medium flex items-center opacity-70">
              <i className="fas fa-images mr-3"></i> 3. Generate Storyboard
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-retroPurple hover:bg-opacity-30 border-l-4 border-transparent font-medium flex items-center opacity-70">
              <i className="fas fa-film mr-3"></i> 4. Create Video
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-retroPurple hover:bg-opacity-30 border-l-4 border-transparent font-medium flex items-center opacity-70">
              <i className="fas fa-rocket mr-3"></i> 5. Publish & Share
            </button>
          </li>
        </ul>
        
        <div className="mt-10">
          <h3 className="text-sm uppercase tracking-wider text-cyberBlue mb-3">Recent Projects</h3>
          <div className="space-y-2">
            <div className="flex items-center p-2 rounded hover:bg-panelBg cursor-pointer">
              <div className="w-8 h-8 bg-neonPink rounded mr-3"></div>
              <div>
                <p className="text-sm font-medium">Cosmic Travel Guide</p>
                <p className="text-xs opacity-60">2 days ago</p>
              </div>
            </div>
            <div className="flex items-center p-2 rounded hover:bg-panelBg cursor-pointer">
              <div className="w-8 h-8 bg-cyberBlue rounded mr-3"></div>
              <div>
                <p className="text-sm font-medium">Tech Review 2084</p>
                <p className="text-xs opacity-60">1 week ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;