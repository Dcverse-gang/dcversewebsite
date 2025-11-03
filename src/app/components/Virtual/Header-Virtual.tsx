'use client';
import { faTshirt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

interface HeaderProps {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  handleDashboardClick: (e: React.MouseEvent) => void;
}

export const Header = ({ mobileMenuOpen, toggleMobileMenu, handleDashboardClick }: HeaderProps) => {
  return (
    <nav className="bg-black fixed w-full z-10 border-b border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 md:h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <FontAwesomeIcon icon={faTshirt} className="text-white text-xl md:text-2xl mr-2" />
              <span className="text-lg md:text-xl font-bold text-white tracking-widest">AI-tryon</span>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4 md:space-x-8">
            {['Features', 'How It Works', 'Pricing'].map((item) => (
              <Link 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-white hover:text-purple-300 px-2 md:px-3 py-2 text-xs md:text-sm font-medium"
              >
                {item}
              </Link>
            ))}
            <a href="/signin">
              <button className="bg-purple-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-medium hover:bg-purple-700 transition duration-300">
                Try It Now
              </button>
            </a>
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

      {/* Mobile menu */}
      <div className={`sm:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="pt-2 pb-3 space-y-1 bg-[#1d1d1d]">
          {['Features', 'How It Works', 'Pricing'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="block px-3 py-2 text-sm font-medium text-white hover:bg-[#1d1d1d]"
            >
              {item}
            </Link>
          ))}
          <a href='/signin'>
            <button className="block w-full text-left px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700">
              Try It Now
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Header;