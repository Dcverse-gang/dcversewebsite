'use client';

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQuestionCircle, faRobot } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-10">
      <div className="flex items-center">
        {/* <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neonPink to-cyberBlue flex items-center justify-center mr-4">
      <FontAwesomeIcon icon={faRobot} className="text-2xl text-white" /> 
        </div> */}
        <h1 className="text-3xl font-bold font-mono text-white ml-10 flex items-center">
          <Image src="/Dcverse_logo.png" alt="DCVERSE" width={60} height={60} />
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="retro-btn px-6 py-2 bg-retroPurple text-white rounded-md font-bold border-b-2 border-cyberBlue hover:bg-opacity-90">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          My Account
        </button>
        <button className="retro-btn px-6 py-2 bg-matrixGreen text-white rounded-md font-bold border-b-2 border-cyberBlue hover:bg-opacity-90">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />
          Help
        </button>
      </div>
    </header>
  );
};

export default Header;
