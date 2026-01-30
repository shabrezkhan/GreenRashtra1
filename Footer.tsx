
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e3a1d] text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#a8d5ba] rounded-full flex items-center justify-center p-2">
                 <i className="fa-solid fa-leaf text-[#2d5a27] text-xl"></i>
              </div>
              <span className="font-bold text-xl tracking-wider">GREEN RASHTRA</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Leading the way in responsible e-waste management in India. Connecting Nation to Nature through sustainable practices and certified recycling.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map(platform => (
                <a key={platform} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#a8d5ba] hover:text-[#2d5a27] transition-all">
                  <i className={`fa-brands fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Asset Disposal</li>
              <li>Data Destruction</li>
              <li>EPR Compliance</li>
              <li>Material Recovery</li>
              <li>CSR Partnerships</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <i className="fa-solid fa-location-dot mt-1 text-[#a8d5ba]"></i>
                <span>Registered HQ, Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-phone text-[#a8d5ba]"></i>
                <span>+91 1800-RECYCLE-NOW</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-[#a8d5ba]"></i>
                <span>info@greenrashtra.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} GreenRashtra Recycling Private Limited. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>CPCB Authorized</span>
            <span>ISO 14001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
