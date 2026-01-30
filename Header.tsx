
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#a8d5ba] rounded-full flex items-center justify-center p-2 shadow-inner">
               <i className="fa-solid fa-leaf text-[#2d5a27] text-2xl"></i>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none ${isScrolled ? 'text-[#2d5a27]' : 'text-white'}`}>
                GREEN RASHTRA
              </span>
              <span className={`text-[10px] tracking-widest font-medium ${isScrolled ? 'text-gray-500' : 'text-gray-200'}`}>
                CONNECTING NATION TO NATURE
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-[#a8d5ba] transition-colors ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#pickup" 
              className="bg-[#2d5a27] hover:bg-[#1e3a1d] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-[#2d5a27]/20"
            >
              Request Pickup
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} ${isScrolled ? 'text-gray-900' : 'text-white'}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in fade-in slide-in-from-top-4">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-800 text-lg font-medium border-b border-gray-100 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#pickup" 
              className="bg-[#2d5a27] text-white text-center py-3 rounded-lg font-semibold mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Pickup
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
