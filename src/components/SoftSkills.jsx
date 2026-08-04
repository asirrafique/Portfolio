import React from 'react';
import { softSkillsList } from '../data/portfolioData';

const SoftSkillCard = ({ skill, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 100}
    className="group relative flex min-h-[230px] flex-col items-center justify-between overflow-hidden rounded-[30px] border border-gray-200/90 bg-white/90 p-6 text-center shadow-[0_10px_35px_rgba(0,0,0,0.04)] backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:border-[#ff2a2a]/30 hover:bg-gradient-to-br hover:from-[#fff8f5] hover:via-white hover:to-[#fff1f1] hover:shadow-[0_24px_60px_rgba(255,42,42,0.16)]"
  >
    <div className="flex flex-col items-center">
      <div className="mb-4 rounded-2xl bg-gradient-to-br from-gray-100 via-[#fff7f2] to-[#ffe8e8] p-3 text-4xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] transition-all duration-300 group-hover:scale-110 group-hover:from-[#ff2a2a]/15 group-hover:via-[#fff1e8] group-hover:to-[#ffe0e0]">
        {skill.icon}
      </div>
      <h3 className="mb-2 text-lg font-black uppercase tracking-[0.08em] text-gray-900">
        {skill.name}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">
        {skill.desc}
      </p>
    </div>
  </div>
);

const SoftSkills = () => {
  return (
    <section className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Top paper divider (torn SVG transition from dark section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
              <div className="mb-6 inline-flex rounded-full border border-[#ff2a2a]/15 bg-gradient-to-r from-[#fff7f2] via-white to-[#fff1f1] px-5 py-1.5 text-sm font-bold uppercase tracking-[0.2em] text-gray-700 shadow-[0_6px_20px_rgba(255,42,42,0.08)]">
            Core Competencies
          </div>
          <h2 className="mb-4 bg-gradient-to-r from-gray-900 via-gray-800 to-[#a33b3b] bg-clip-text text-4xl font-black uppercase tracking-[0.04em] text-transparent md:text-5xl">
            Professional Soft Skills
          </h2>
          <p className="mx-auto max-w-lg text-base leading-relaxed text-gray-600 md:text-lg">
            Essential traits that make me an effective engineer, coordinator, and communicator.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsList.map((skill, index) => (
            <SoftSkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default SoftSkills;