
import React, { useState } from 'react';

const PickupRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    category: 'residential',
    address: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '', phone: '', email: '', category: 'residential', address: '', description: '',
      });
    }, 1500);
  };

  const handleGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData(prev => ({
          ...prev,
          address: `Auto-detected: Lat ${position.coords.latitude.toFixed(4)}, Long ${position.coords.longitude.toFixed(4)}`
        }));
      });
    }
  };

  return (
    <section id="pickup" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 overflow-hidden flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-16 bg-[#2d5a27] text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Schedule Your Pickup</h2>
            <p className="text-white/80 text-lg mb-10">
              Fill out this form to request a professional e-waste collection. Our team will contact you within 24 hours to coordinate the logistics.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <i className="fa-solid fa-check text-[#a8d5ba]"></i>
                </div>
                <div>
                  <h4 className="font-bold">Eco-Certified Processing</h4>
                  <p className="text-white/60 text-sm">Every gram is handled with environmental care.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <i className="fa-solid fa-lock text-[#a8d5ba]"></i>
                </div>
                <div>
                  <h4 className="font-bold">Data Privacy Guaranteed</h4>
                  <p className="text-white/60 text-sm">Physical destruction of all sensitive drives.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 bg-white/10 p-2 rounded-lg">
                  <i className="fa-solid fa-certificate text-[#a8d5ba]"></i>
                </div>
                <div>
                  <h4 className="font-bold">Green Certificate</h4>
                  <p className="text-white/60 text-sm">Official disposal certificate for compliance.</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/2 p-8 md:p-16">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mb-6">
                  <i className="fa-solid fa-circle-check"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-8">Thank you for your contribution to a greener nation. Our eco-team will reach out shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-[#2d5a27] text-white px-8 py-3 rounded-xl font-bold"
                >
                  New Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" required value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input 
                      type="tel" required value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none"
                      placeholder="+91-0000000000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" required value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                  <select 
                    value={formData.category}
                    onChange={e => setFormData({...formData, category: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none appearance-none"
                  >
                    <option value="residential">Residential / Personal</option>
                    <option value="corporate">Corporate / Office</option>
                    <option value="industrial">Industrial Facility</option>
                    <option value="educational">Educational Institution</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="block text-sm font-semibold text-gray-700">Pickup Address</label>
                    <button 
                      type="button" 
                      onClick={handleGeoLocation}
                      className="text-[#2d5a27] text-xs font-bold flex items-center gap-1 hover:underline"
                    >
                      <i className="fa-solid fa-location-crosshairs"></i> Use Current Location
                    </button>
                  </div>
                  <textarea 
                    required value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none h-24"
                    placeholder="Enter full address for pickup"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Describe E-Waste Items</label>
                  <textarea 
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#2d5a27] focus:ring-2 focus:ring-[#2d5a27]/10 transition-all outline-none h-24"
                    placeholder="e.g., 2 Laptops, 1 Printer, 5 Mobile Phones"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-[#2d5a27] hover:bg-[#1e3a1d] disabled:bg-gray-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-[#2d5a27]/20 transition-all"
                >
                  {isSubmitting ? <i className="fa-solid fa-spinner fa-spin mr-2"></i> : null}
                  Confirm Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickupRequest;
