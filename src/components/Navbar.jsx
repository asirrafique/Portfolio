import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const hireMeMailto = `mailto:asirrafique1@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello Asir Rafique,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ALooking forward to hearing from you.%0D%0ABest Regards,`;

  const handleNavClick = (link, event) => {
    if (link === 'Home') {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#ff2a2a] py-4'
          : isScrolled 
            ? 'bg-transparent py-4' 
            : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center whitespace-nowrap text-[1.3rem] font-black tracking-[0.16em] text-white uppercase transition-all duration-300 hover:tracking-[0.22em]"
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transition-all duration-300 group-hover:from-white group-hover:via-orange-100 group-hover:to-white">
              {personalInfo.brandName}
            </span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
              onClick={(event) => handleNavClick(link, event)}
              className="group relative rounded-full px-3.5 py-2 text-sm font-semibold tracking-[0.18em] uppercase text-white/90 transition-all duration-300 hover:text-white hover:bg-white/12 hover:shadow-[0_8px_24px_rgba(0,0,0,0.16)]"
            >
              <span className="relative z-10">{link}</span>
              <span className="absolute bottom-1.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-white transition-all duration-300 group-hover:w-[70%]" />
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/20 bg-gradient-to-r from-white/15 via-white/10 to-white/20 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_8px_25px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/25 hover:shadow-[0_12px_35px_rgba(255,255,255,0.12)]"
          >
            <span className="relative z-10">Hire Me</span>
            <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#ff2a2a] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={link === 'Home' ? '#' : `#${link.toLowerCase()}`}
              onClick={(event) => handleNavClick(link, event)}
              className="text-white hover:text-black font-bold text-lg border-b border-white/20 pb-2 transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#ff2a2a] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;