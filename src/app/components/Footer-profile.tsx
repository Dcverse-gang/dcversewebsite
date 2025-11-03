import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-12 pt-6 border-t border-cyberBlue border-opacity-20">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-neonPink to-cyberBlue flex items-center justify-center mr-3">
            <i className="fas fa-robot text-white text-sm"></i>
          </div>
          <p className="text-sm opacity-70">© 2025 Dcverse. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-cyberBlue hover:text-neonPink"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-cyberBlue hover:text-neonPink"><i className="fab fa-discord"></i></a>
          <a href="#" className="text-cyberBlue hover:text-neonPink"><i className="fab fa-github"></i></a>
          <a href="#" className="text-cyberBlue hover:text-neonPink"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;