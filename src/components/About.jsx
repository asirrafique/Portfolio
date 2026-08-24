import React from 'react';
import stackImage from '../assets/about/asir-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-14 h-14 md:w-16 md:h-16"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#3776AB"
        d="M64 10c-27 0-25 12-25 12v12h25v4H29S10 37 10 64c0 27 17 26 17 26h10V76s-1-17 17-17h28s16 0 16-15V25s2-15-26-15H64zm-14 9a5 5 0 110 10 5 5 0 010-10z"
      />
      <path
        fill="#FFD43B"
        d="M64 118c27 0 25-12 25-12V94H64v-4h35s19 1 19-26c0-27-17-26-17-26H91v14s1 17-17 17H46S30 69 30 84v19s-2 15 26 15h8zm14-9a5 5 0 110-10 5 5 0 010 10z"
      />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      Python
    </span>
  </div>
);

const JavaScriptIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-14 h-14 md:w-16 md:h-16"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="128" height="128" rx="18" fill="#F7DF1E" />

      <text
        x="64"
        y="84"
        textAnchor="middle"
        fontSize="52"
        fontWeight="900"
        fill="#000"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        JS
      </text>
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      JavaScript
    </span>
  </div>
);

const MernIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      {/* Central React Atom */}
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
      {/* MongoDB Leaf overlap overlay in bottom left */}
      <path fill="#439934" d="M36 84c-3-6-4-15 0-22 3 7 9 10 10 15 2 1.5 1 3-2 5l-8 2zm4-25c2 4 4 11 0 16-1-5-6-8-7-12-2-1-1-3 2-4l5 0z" opacity="0.9" />
      {/* Node.js Hexagon in top right */}
      <path fill="#339933" d="M98 32l-12-7-12 7v14l12 7 12-7V32zm-12 1.5l8 4.6v9.3l-8 4.6-8-4.6v-9.3l8-4.6z" opacity="0.9" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">MERN Stack</span>
  </div>
);

const AiAgentsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-14 h-14 md:w-16 md:h-16"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="64" cy="64" r="52" fill="#6A5ACD" />
      <circle cx="64" cy="64" r="30" fill="#0a0a0a" />

      <circle cx="52" cy="56" r="6" fill="#ffffff" />
      <circle cx="76" cy="56" r="6" fill="#ffffff" />

      <path
        d="M48 76 Q64 88 80 76"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="64" cy="12" r="6" fill="#6A5ACD" />
      <circle cx="116" cy="64" r="6" fill="#6A5ACD" />
      <circle cx="64" cy="116" r="6" fill="#6A5ACD" />
      <circle cx="12" cy="64" r="6" fill="#6A5ACD" />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      AI Agents
    </span>
  </div>
);

const RagIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg
      className="w-14 h-14 md:w-16 md:h-16"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="18" y="18" width="92" height="92" rx="18" fill="#8A2BE2" />

      <rect
        x="36"
        y="34"
        width="56"
        height="42"
        rx="6"
        fill="#0a0a0a"
      />

      <path
        d="M44 46h40M44 56h32M44 66h24"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <circle cx="48" cy="92" r="7" fill="#ffffff" />
      <circle cx="64" cy="92" r="7" fill="#ffffff" />
      <circle cx="80" cy="92" r="7" fill="#ffffff" />
    </svg>

    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">
      RAG
    </span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Asir Rafique — Full Stack & AI Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

        <div className="flex items-center gap-8 md:gap-10 mt-8 flex-wrap">

  <div
    data-aos="zoom-in"
    data-aos-delay="300"
    className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
  >
    <PythonIcon />
  </div>

  <div
    data-aos="zoom-in"
    data-aos-delay="450"
    className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
  >
    <JavaScriptIcon />
  </div>

  <div
    data-aos="zoom-in"
    data-aos-delay="600"
    className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
  >
    <MernIcon />
  </div>

  <div
    data-aos="zoom-in"
    data-aos-delay="750"
    className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
  >
    <AiAgentsIcon />
  </div>

  <div
    data-aos="zoom-in"
    data-aos-delay="900"
    className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl"
  >
    <RagIcon />
  </div>

</div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;