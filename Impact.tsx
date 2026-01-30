
import React from 'react';
import { STATS } from '../constants';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-24 bg-[#1e3a1d] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#a8d5ba]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2d5a27]/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[#a8d5ba] font-bold text-sm uppercase tracking-widest mb-4">Our Footprint</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Creating a Tangible Impact on Mother Nature
            </h3>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed">
              At GreenRashtra, every single gram of waste we process contributes to a cleaner environment. 
              We track our carbon offset and material recovery rates to ensure complete transparency 
              and measurable positive change.
            </p>

            <div className="grid grid-cols-2 gap-8">
              {STATS.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`fa-solid ${stat.icon} text-[#a8d5ba] text-xl`}></i>
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                    <span className="text-[#a8d5ba] font-bold text-xl">{stat.suffix}</span>
                  </div>
                  <span className="text-gray-400 font-medium uppercase text-xs tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
              alt="Nature restoration" 
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#2d5a27] rounded-full flex items-center justify-center text-white">
                  <i className="fa-solid fa-earth-asia"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-tight">Project Status</p>
                  <p className="text-gray-900 font-bold">Pan-India Network Active</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
