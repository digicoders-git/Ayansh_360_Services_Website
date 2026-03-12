import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getContactInfo } from '../../apis/website';

const Footer = () => {
    const [contactInfo, setContactInfo] = useState({ phone: '', email: '' });

    useEffect(() => {
        fetchContactInfo();
    }, []);

    const fetchContactInfo = async () => {
        try {
            const response = await getContactInfo();
            setContactInfo(response.data.data);
        } catch (error) {
            console.error('Error fetching contact info:', error);
        }
    };
    return (
        <footer className="bg-[#252f48] pt-20 pb-10 border-t border-white/5 mt-auto">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
                    {/* Branding */}
                    <div className="flex flex-col gap-6">
                        <Link to="/" className="flex group items-center justify-center gap-3 w-max">
                            <img src="/logo(1).png" alt="AAYANSH 360 Logo" className="w-25" />
                            <div className='flex flex-col gap-0.5'>
                                <span className="text-sm font-bold text-white tracking-wide">AAYANSH 360</span>
                                <span className="text-[10px] uppercase tracking-[2px] text-[#FFD700] font-semibold">SERVICES</span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                            Professional painting, small construction, and waterproofing solutions. We build with quality and integrity.
                        </p>

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
                                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#FFD700] transition-colors">{contactInfo.phone}</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-4 h-4 text-[#FFD700] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#FFD700] transition-colors">{contactInfo.email}</a>
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
