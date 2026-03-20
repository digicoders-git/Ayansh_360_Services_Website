import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { createEnquiry } from '../../apis/website';

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const jobType = searchParams.get('type') || '';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: jobType,
    message: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  useEffect(() => {
    if (jobType) {
      setFormData(prev => ({ ...prev, subject: jobType }));
    }
  }, [jobType]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await createEnquiry(formData);
      setSubmitMessage({ type: 'success', text: 'Enquiry submitted successfully!' });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(null), 3000);
    } catch (err) {
      console.error('Error submitting enquiry:', err);
      setSubmitMessage({ type: 'error', text: 'Failed to submit enquiry. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
        <div className="container text-center relative z-10">
          <span className="text-[#0681d4] font-bold uppercase tracking-[6px] mb-4 block">SEND YOUR QUERY</span>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">ENQUIRY <span className="text-[#fa5900]">FORM</span></h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
        <div className="flex justify-center">
          <div className="w-full max-w-xl">
            <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 md:p-12 border-2 border-black/10 hover:border-[#fa5900]/30 transition-all shadow-lg">
              {submitMessage && (
                <div className={`mb-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage.text}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fa5900]">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#fa5900] transition-all text-black text-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fa5900]">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9999452314"
                    className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#fa5900] transition-all text-black text-sm"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fa5900]">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#fa5900] transition-all text-black text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-6">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fa5900]">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#fa5900] transition-all text-black text-sm"
                  required
                />
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#fa5900]">Your Query/Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full bg-gray-50 p-3 sm:p-4 rounded-lg border border-black/10 outline-none focus:border-[#fa5900] transition-all text-black resize-none text-sm"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#fa5900] hover:bg-[#e05000] disabled:opacity-50 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-wider text-xs sm:text-sm transition-all"
              >
                {submitting ? 'SUBMITTING...' : 'SUBMIT ENQUIRY'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;
