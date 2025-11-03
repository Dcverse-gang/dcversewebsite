import { faTwitter, faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-6 md:pb-8">
      <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center mx-4 md:mx-8">
        <p className="text-white text-xs md:text-sm mb-3 md:mb-0">© 2023 VirtualTry. All rights reserved.</p>
        <div className="flex space-x-4 md:space-x-6">
          {[faTwitter, faFacebookF, faInstagram, faLinkedinIn].map((icon, index) => (
            <a key={index} href="#" className="text-white hover:text-white text-sm md:text-base">
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;