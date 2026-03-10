import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-white/5 mt-auto">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Branding */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex group items-center gap-3 w-max">
                            <img src="/logo.png" alt="ARYANSH 360 Logo" className="h-10 w-auto" />
                            <div className='flex flex-col gap-0.5'>
                                <span className="text-sm font-bold text-white tracking-wide">ARYANSH 360</span>
                                <span className="text-[10px] uppercase tracking-[2px] text-[#FFD700] font-semibold">SERVICES</span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Professional painting, small construction, and waterproofing solutions. We build with quality and integrity.
                        </p>
                        {/* <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 border border-white/20 rounded-sm flex items-center justify-center hover:bg-[#FFD700] hover:text-black hover:border-[#FFD700] transition-all">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                            </a>
                        </div> */}
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-white/60 text-sm">
                            <li><Link to="/about" className="hover:text-[#FFD700] transition-colors">About Company</Link></li>
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Our Services</Link></li>
                            <li><Link to="/our-work" className="hover:text-[#FFD700] transition-colors">Our Projects</Link></li>
                            <li><Link to="/career" className="hover:text-[#FFD700] transition-colors">Careers</Link></li>
                            <li><Link to="/contact" className="hover:text-[#FFD700] transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide">Services</h4>
                        <ul className="flex flex-col gap-3 text-white/60 text-sm">
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Interior Painting</Link></li>
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Exterior Painting</Link></li>
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Small Construction</Link></li>
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Waterproofing</Link></li>
                            <li><Link to="/services" className="hover:text-[#FFD700] transition-colors">Home Renovation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-white text-sm font-bold uppercase tracking-wide">Contact</h4>
                        <ul className="flex flex-col gap-4 text-white/60 text-sm">
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-[#FFD700] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <a href="tel:+919999452314" className="hover:text-[#FFD700] transition-colors">+91 9999452314</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-[#FFD700] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href="mailto:Kishan.rai30@gmail.com" className="hover:text-[#FFD700] transition-colors">Kishan.rai30@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <p>&copy; 2026 Digicoders Technology Pvt. Ltd. </p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-[#FFD700] transition-colors">Privacy Policy</Link>
                        <Link to="/terms-and-conditions" className="hover:text-[#FFD700] transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
