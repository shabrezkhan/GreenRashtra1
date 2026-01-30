
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-[#2d5a27] font-bold text-sm uppercase tracking-widest mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive E-Waste Management</h3>
          <p className="text-gray-600 text-lg">
            We provide end-to-end solutions for corporate, industrial, and residential e-waste, 
            ensuring maximum material recovery and zero environmental impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-[#a8d5ba] hover:bg-white hover:shadow-2xl hover:shadow-[#a8d5ba]/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#f0fdf4] text-[#2d5a27] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#2d5a27] group-hover:text-white transition-all duration-300">
                <i className={`fa-solid ${service.icon} text-2xl`}></i>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a href="#" className="text-[#2d5a27] font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                Learn More <i className="fa-solid fa-arrow-right text-sm"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
