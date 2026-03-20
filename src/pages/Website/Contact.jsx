import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContactInfo, createUserContact } from '../../apis/website';

const Contact = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState(null);

    useEffect(() => {
        fetchContactInfo();
    }, []);

    const fetchContactInfo = async () => {
        try {
            setLoading(true);
            const response = await getContactInfo();
            setContactInfo(response.data.data);
        } catch (err) {
            console.error('Error fetching contact info:', err);
            setError('Failed to load contact information');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (({
            ...prev,
            [name]: value
        })));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setSubmitting(true);
            await createUserContact({
                name: formData.name,
                email: formData.email,
                mobile: formData.phone,
                message: formData.message
            });
            setSubmitMessage({ type: 'success', text: 'Message sent successfully!' });
            setFormData({ name: '', email: '', phone: '', message: '' });
            setTimeout(() => setSubmitMessage(null), 3000);
        } catch (err) {
            console.error('Error submitting contact:', err);
            setSubmitMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
            
                <div className="container text-center relative z-10">
                    <span className="text-[#0681d4] font-bold uppercase tracking-[6px] mb-4 block">GET IN TOUCH</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">CONTACT <span className="text-[#fa5900]">US</span></h1>
                </div>
            </section>

            {/* Get In Touch Section */}
            <section className="py-24 px-5 md:px-30 bg-white">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side */}
                    <div className="flex flex-col gap-10">
                        <div>
                            <h2 className="text-4xl font-bold text-black mb-6">Get In Touch</h2>
                            <p className="text-gray-500 leading-relaxed max-w-lg">
                                The perfect way to enjoy brewing tea on low hanging fruitidentify. Duis autem vel eum iriurea generat dolor inner hendrmodeerit ulputate velit esse m olestie consequatvel illum dolore eu feugiat nulla facilisis.
                            </p>
                        </div>

                        <div className="flex flex-col gap-10">
                            {loading ? (
                                <p className="text-gray-500">Loading contact information...</p>
                            ) : error ? (
                                <p className="text-red-500">{error}</p>
                            ) : contactInfo ? (
                                <>
                                    {/* Address */}
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-[#fff3ee] flex items-center justify-center text-[#fa5900] shrink-0 border border-[#fa5900]/10">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div className="flex flex-col py-1">
                                            <h4 className="text-xl font-bold text-black mb-1">Address</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{contactInfo.address}</p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-[#fff3ee] flex items-center justify-center text-[#fa5900] shrink-0 border border-[#fa5900]/10">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                        </div>
                                        <div className="flex flex-col py-1">
                                            <h4 className="text-xl font-bold text-black mb-1">Phone</h4>
                                            <a href={`tel:${contactInfo.phone}`} className="text-gray-500 text-sm leading-relaxed hover:text-[#fa5900] transition-colors">{contactInfo.phone}</a>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 rounded-2xl bg-[#fff3ee] flex items-center justify-center text-[#fa5900] shrink-0 border border-[#fa5900]/10">
                                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div className="flex flex-col py-1">
                                            <h4 className="text-xl font-bold text-black mb-1">E-mail Address</h4>
                                            <a href={`mailto:${contactInfo.email}`} className="text-gray-500 text-sm leading-relaxed hover:text-[#fa5900] transition-colors">{contactInfo.email}</a>
                                        </div>
                                    </div>
                                </>
                            ) : null}
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white md:p-14 p-8 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
                        <h2 className="text-3xl font-bold text-black mb-4">Send Us Message</h2>
                        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-sm">Seorem Ipsum is simply dummy text of the printing and typesetting.</p>

                        {submitMessage && (
                            <div className={`mb-6 p-4 rounded-lg ${submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {submitMessage.text}
                            </div>
                        )}

                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#fa5900]/50 transition-all text-sm"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#fa5900]/50 transition-all text-sm"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#fa5900]/50 transition-all text-sm"
                            />
                            <textarea
                                name="message"
                                placeholder="Comments"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#fa5900]/50 transition-all text-sm resize-none"
                            ></textarea>

                            <button 
                                type="submit"
                                disabled={submitting}
                                className="w-full bg-[#fa5900] hover:bg-[#e05000] disabled:opacity-50 text-white font-bold py-5 rounded-lg uppercase tracking-widest text-xs transition-all mt-4 leading-none"
                            >
                                {submitting ? 'SENDING...' : 'SEND MESSAGE'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 px-5 md:px-30">
                <div className="container">
                    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl p-5 border-1 border-gray-300">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d80.8!3d26.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a0!3d26.8!5e0!3m2!1sen!2sin!4v1700000000000"
                            className="w-full h-full grayscale rounded-xl"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>

                        {/* Address Card Overlay */}
                        <div className="absolute top-10 left-10 bg-white p-8 rounded-xl shadow-xl max-w-sm hidden md:block">
                            <h4 className="text-xl font-bold mb-2">Buildarx</h4>
                            <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                {contactInfo?.address}
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                <span>3.1 ★ (241)</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0V5a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zM18 10a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM15.657 14.243l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM11 17a1 1 0 10-2 0v2a1 1 0 102 0v-2zM4.343 14.243l-1.414 1.414a1 1 0 101.414 1.414l1.414-1.414a1 1 0 00-1.414-1.414zM3 10a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zM4.343 5.757L2.929 4.343a1 1 0 111.414-1.414l1.414 1.414a1 1 0 01-1.414 1.414z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
