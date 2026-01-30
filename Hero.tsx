
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=2000" 
          alt="Recycling electronic parts" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#a8d5ba]/20 text-[#a8d5ba] px-4 py-2 rounded-full border border-[#a8d5ba]/30 mb-6 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#a8d5ba] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#a8d5ba]"></span>
            </span>
            <span className="text-sm font-semibold tracking-wider uppercase">India's Lead in E-Waste Management</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Sustainable <span className="text-[#a8d5ba]">E-Waste</span> Solutions for a Greener Bharat
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed">
            GreenRashtra Recycling is dedicated to modernizing electronic waste management. 
            From secure data destruction to eco-friendly asset recovery, we help you connect 
            your digital lifestyle back to nature.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#pickup" 
              className="bg-[#2d5a27] hover:bg-[#1e3a1d] text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl shadow-[#2d5a27]/30 text-center"
            >
              Start Recycling Now
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-xl text-lg font-bold transition-all text-center"
            >
              Our Services
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img 
                  key={i} 
                  className="w-12 h-12 rounded-full border-2 border-[#1e3a1d] object-cover" 
                  src={`https://picsum.photos/100/100?random=${i}`} 
                  alt="Client" 
                />
              ))}
            </div>
            <p className="text-white/80 text-sm">
              <span className="font-bold text-white block">10,000+ Contributions</span>
              Trusted by individuals & enterprises nationwide
            </p>
          </div>
        </div>
      </div>

      {/* Stats floating on right (desktop) */}
      <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-64">
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl space-y-8">
          <div>
            <span className="text-4xl font-bold text-[#a8d5ba] block">500+</span>
            <span className="text-white/60 text-sm uppercase tracking-widest">Tons Recycled</span>
          </div>
          <div>
            <span className="text-4xl font-bold text-white block">100%</span>
            <span className="text-white/60 text-sm uppercase tracking-widest">Data Security</span>
          </div>
          <div>
            <span className="text-4xl font-bold text-white block">24/7</span>
            <span className="text-white/60 text-sm uppercase tracking-widest">Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
