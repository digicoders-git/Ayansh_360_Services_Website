import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const jobType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: jobType,
    message: ''
  });

  useEffect(() => {
    if (jobType) {
      setFormData(prev => ({ ...prev, topic: jobType }));
    }
  }, [jobType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry submitted:', formData);
    setFormData({ name: '', email: '', phone: '', topic: '', message: '' });
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="Enquiry background"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-sm">SEND YOUR QUERY</span>
            <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight text-black font-bold">
              ENQUIRY <span className="text-[#FFD700]">FORM</span>
            </h1>
            <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
              Have a question or project in mind? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 border-2 border-black/10 hover:border-[#FFD700]/30 transition-all shadow-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD700]">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#FFD700] transition-all text-black text-sm"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD700]">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 9999452314"
                  className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#FFD700] transition-all text-black text-sm"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD700]">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#FFD700] transition-all text-black text-sm"
                required
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD700]">Topic/Service</label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#FFD700] transition-all text-black text-sm"
                required
              >
                <option value="">Select a topic</option>
                <option value="Senior Structural Engineer">Senior Structural Engineer</option>
                <option value="Lead Painting Supervisor">Lead Painting Supervisor</option>
                <option value="Waterproofing Technician">Waterproofing Technician</option>
                <option value="Project Manager">Project Manager</option>
                <option value="Interior Painting">Interior Painting</option>
                <option value="Exterior Painting">Exterior Painting</option>
                <option value="Waterproofing">Waterproofing</option>
                <option value="Small Construction">Small Construction</option>
                <option value="Home Renovation">Home Renovation</option>
                <option value="Commercial Work">Commercial Work</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 mb-8">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#FFD700]">Your Query/Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="5"
                className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#FFD700] transition-all text-black resize-none text-sm"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-wider text-xs sm:text-sm transition-all"
            >
              Submit Enquiry
            </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
