import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Contact background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>
                <div className="container text-center relative z-10">
                    <span className="text-[#FFD700] font-bold uppercase tracking-[6px] mb-4 block">GET IN TOUCH</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">CONTACT <span className="text-[#FFD700]">US</span></h1>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 px-5 md:px-30">
                <div className="container">
                    <div className="relative h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl p-5 border-1 border-gray-300">
                        {/* Grayscale Map Placeholder */}
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
                                Plot no 165 vijay nagar sector B<br />
                                kamakhya colony opposite kanti niketan<br />
                                nilmatha cantt Lucknow 226002
                            </p>
                            <div className="flex items-center gap-2 text-primary font-bold text-sm">
                                <span>3.1 ★ (241)</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M11 3a1 1 0 10-2 0V5a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-1.414 1.414a1 1 0 001.414 1.414l1.414-1.414zM18 10a1 1 0 01-1 1h-2a1 1 0 110-2h2a1 1 0 011 1zM15.657 14.243l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414zM11 17a1 1 0 10-2 0v2a1 1 0 102 0v-2zM4.343 14.243l-1.414 1.414a1 1 0 101.414 1.414l1.414-1.414a1 1 0 00-1.414-1.414zM3 10a1 1 0 011-1h2a1 1 0 110 2H4a1 1 0 01-1-1zM4.343 5.757L2.929 4.343a1 1 0 111.414-1.414l1.414 1.414a1 1 0 01-1.414 1.414z" /></svg>
                            </div>
                        </div>
                    </div>
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
                            {/* Address */}
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#FFFBEB] flex items-center justify-center text-[#FFD700] shrink-0 border border-[#FFD700]/5">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="flex flex-col py-1">
                                    <h4 className="text-xl font-bold text-black mb-1">Address</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">Plot no 165 vijay nagar sector B kamakhya colony opposite kanti niketan nilmatha cantt Lucknow 226002</p>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#FFFBEB] flex items-center justify-center text-[#FFD700] shrink-0 border border-[#FFD700]/5">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div className="flex flex-col py-1">
                                    <h4 className="text-xl font-bold text-black mb-1">Phone</h4>
                                    <a href="tel:+919999452314" className="text-gray-500 text-sm leading-relaxed hover:text-[#FFD700] transition-colors">+91 9999452314</a>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex items-start gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-[#FFFBEB] flex items-center justify-center text-[#FFD700] shrink-0 border border-[#FFD700]/5">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div className="flex flex-col py-1">
                                    <h4 className="text-xl font-bold text-black mb-1">E-mail Address</h4>
                                    <a href="mailto:Kishan.rai30@gmail.com" className="text-gray-500 text-sm leading-relaxed hover:text-[#FFD700] transition-colors">Kishan.rai30@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="bg-white p-14 rounded-3xl border border-gray-200 shadow-xl shadow-gray-200/50">
                        <h2 className="text-3xl font-bold text-black mb-4">Send Us Message</h2>
                        <p className="text-gray-400 text-sm mb-10 leading-relaxed max-w-sm">Seorem Ipsum is simply dummy text of the printing and typesetting.</p>

                        <form className="flex flex-col gap-5">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="w-full bg-[rgba(255,255,22,0.2)] p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#FFD700]/50 transition-all text-sm"
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full bg-[rgba(255,255,22,0.2)]  p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#FFD700]/50 transition-all text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full bg-[rgba(255,255,22,0.2)]  p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#FFD700]/50 transition-all text-sm"
                            />
                            <input
                                type="text"
                                placeholder="Type Subject"
                                className="w-full bg-[rgba(255,255,22,0.2)]  p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#FFD700]/50 transition-all text-sm"
                            />
                            <textarea
                                placeholder="Comments"
                                rows="5"
                                className="w-full bg-[rgba(255,255,22,0.2)]  p-5 rounded-lg border border-gray-50 outline-none text-black placeholder:text-gray-400 focus:border-[#FFD700]/50 transition-all text-sm resize-none"
                            ></textarea>

                            <button className="w-full bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-5 rounded-lg uppercase tracking-widest text-xs transition-all mt-4 leading-none">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
