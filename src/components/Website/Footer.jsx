import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#0A0A0A] pt-20 md:px-30 pb-10 border-t border-white/5 mt-auto">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Branding */}
                <div className="flex flex-col gap-6">
                    <Link to="/" className="flex flex-col w-max">
                        <span className="text-2xl font-bold tracking-tighter text-white flex items-center">
                            <span className="text-primary mr-1">
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 5v10l-10 5-10-5v-10l10-5zm0 2.3l-8 4v8.4l8 4 8-4v-8.4l-8-4z" /><path d="M12 7l6 3v4l-6 3-6-3v-4l6-3z" /></svg>
                            </span>
                            Buildarx
                        </span>
                        <span className="text-[10px] uppercase tracking-[4px] text-white/50 -mt-1 font-bold">Construction</span>
                    </Link>
                    <p className="text-text-muted text-sm leading-relaxed">
                        Professional painting, small construction, and waterproofing solutions. We build with quality and integrity at the heart of everything we do.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </a>
                        <a href="#" className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center hover:bg-primary hover:text-black transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-lg font-bold">Quick Links</h4>
                    <ul className="flex flex-col gap-3 text-text-muted text-sm">
                        <li><Link to="/about" className="hover:text-primary">About Company</Link></li>
                        <li><Link to="/services" className="hover:text-primary">Our Services</Link></li>
                        <li><Link to="/work" className="hover:text-primary">Our Projects</Link></li>
                        <li><Link to="/career" className="hover:text-primary">Careers</Link></li>
                        <li><Link to="/contact" className="hover:text-primary">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-lg font-bold">Services</h4>
                    <ul className="flex flex-col gap-3 text-text-muted text-sm">
                        <li><Link to="/services" className="hover:text-primary">Interior Painting</Link></li>
                        <li><Link to="/services" className="hover:text-primary">Exterior Painting</Link></li>
                        <li><Link to="/services" className="hover:text-primary">Small Construction</Link></li>
                        <li><Link to="/services" className="hover:text-primary">Waterproofing</Link></li>
                        <li><Link to="/services" className="hover:text-primary">Home Renovation</Link></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-6">
                    <h4 className="text-white text-lg font-bold">Newsletter</h4>
                    <p className="text-text-muted text-sm">Subscribe to get latest news and updates from us.</p>
                    <div className="flex border border-white/10 rounded-sm overflow-hidden">
                        <input
                            type="text"
                            placeholder="Email address"
                            className="bg-transparent border-none outline-none p-3 text-sm text-white flex-1"
                        />
                        <button className="bg-primary text-black px-4 flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="container pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                <p>&copy; 2026 Buildarx. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-primary">Privacy Policy</a>
                    <a href="#" className="hover:text-primary">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
