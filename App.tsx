
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Impact from './components/Impact';
import PickupRequest from './components/PickupRequest';
import EcoAssistant from './components/EcoAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        
        {/* Why Recycle Section */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#a8d5ba]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#2d5a27]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
                <img 
                  src="https://images.unsplash.com/photo-1591955506264-3f5a6834570a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Motherboard and waste" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-[#2d5a27] font-bold text-sm uppercase tracking-widest mb-4">Our Mission</h2>
                <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Protecting India's Environment from the Digital Crisis
                </h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  With technology moving at light speed, electronic waste has become the fastest-growing waste stream in the world. India is one of the top producers, and GreenRashtra was founded to ensure that our progress doesn't come at the cost of our planet.
                </p>
                <div className="space-y-4">
                  {[
                    "Ethical Recycling Practices",
                    "Advanced Material Recovery Tech",
                    "Certified Data Sanitization",
                    "Supporting Circular Economy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-[#f0fdf4] rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-check text-[#2d5a27] text-xs"></i>
                      </div>
                      <span className="font-medium text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
                <button className="mt-10 bg-[#2d5a27] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1e3a1d] transition-colors shadow-lg shadow-[#2d5a27]/20">
                  Read Our Story
                </button>
              </div>
            </div>
          </div>
        </section>

        <Services />
        <Impact />
        <PickupRequest />

        {/* Call to Action Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="green-gradient rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
               <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to make a difference?</h2>
                 <p className="text-white/80 text-lg mb-10">
                   Join thousands of responsible citizens and corporations who trust GreenRashtra for their e-waste needs.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#pickup" className="bg-white text-[#2d5a27] px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Schedule a Pickup
                    </a>
                    <a href="tel:+911800-RECYCLE" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                      Call Toll Free
                    </a>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <EcoAssistant />
    </div>
  );
};

export default App;
