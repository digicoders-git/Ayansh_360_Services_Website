import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(scrolled);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Scroll Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-[#FFD700] z-[1001]" style={{ width: `${scrollProgress}%`, transition: 'width 0.1s ease' }}></div>
            <header className="fixed top-1 left-0 z-[1000] w-full bg-black">
                {/* Top Bar */}
                <div className="bg-gray-900/50 backdrop-blur-sm text-white border-b border-white/10 hidden md:block py-3">
                    <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center text-xs font-medium">
                        <div className="flex gap-6 items-center">
                            <a href="tel:+919999452314" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors">
                                <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                +91 9999452314
                            </a>
                            <span className="text-white/30">|</span>
                            <a href="mailto:Kishan.rai30@gmail.com" className="flex items-center gap-2 hover:text-[#FFD700] transition-colors">
                                <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                Kishan.rai30@gmail.com
                            </a>
                        </div>
                        <div className="flex gap-6 items-center">
                            <span className="flex items-center gap-2 text-white/70">
                                <svg className="w-3.5 h-3.5 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                Mon – Fri: 8:00am – 7:00pm
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Navbar */}
                <nav className={`transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/10' : 'bg-black/80 backdrop-blur-sm py-5'}`}>
                    <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="flex group items-center gap-3">
                            <img src="/logo.png" alt="Buildarx Logo" className="h-10 w-auto" />
                            <div className='flex flex-col gap-0.5'>
                                <span className="text-sm font-bold text-white tracking-wide">ARYANSH 360</span>
                                <span className="text-[10px] uppercase tracking-[2px] text-[#FFD700] font-semibold">SERVICES</span>
                            </div>
                         
                        </Link>

                        {/* Nav Links - Desktop */}
                        <div className="hidden lg:flex items-center gap-10">
                            <Link to="/" className={`text-sm font-semibold uppercase tracking-wide relative group ${location.pathname === '/' ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700] transition-colors'
                                }`}>
                                Home
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFD700] ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'
                                    }`}></span>
                            </Link>
                            <Link to="/about" className={`text-sm font-semibold uppercase tracking-wide relative group ${location.pathname === '/about' ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700] transition-colors'
                                }`}>
                                About
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFD700] ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'
                                    }`}></span>
                            </Link>
                            <Link to="/services" className={`text-sm font-semibold uppercase tracking-wide relative group ${location.pathname === '/services' ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700] transition-colors'
                                }`}>
                                Services
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFD700] ${location.pathname === '/services' ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'
                                    }`}></span>
                            </Link>
                            <div className="relative group">
                                <button className={`text-sm font-semibold uppercase tracking-wide relative flex items-center gap-2 ${location.pathname === '/pages' ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700] transition-colors'}`}>
                                    Pages
                                    <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                </button>
                                <div className="absolute left-0 mt-0 w-48 bg-black/95 border border-white/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <Link to="/our-work" className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-white/5 text-sm font-semibold uppercase tracking-wide first:rounded-t-lg">
                                        Our Work
                                    </Link>
                                    <Link to="/our-clients" className="block px-4 py-3 text-white hover:text-[#FFD700] hover:bg-white/5 text-sm font-semibold uppercase tracking-wide last:rounded-b-lg">
                                        Our Clients
                                    </Link>
                                </div>
                            </div>
                            <Link to="/contact" className={`text-sm font-semibold uppercase tracking-wide relative group ${location.pathname === '/contact' ? 'text-[#FFD700]' : 'text-white hover:text-[#FFD700] transition-colors'
                                }`}>
                                Contact
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FFD700] ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full transition-all duration-300'
                                    }`}></span>
                            </Link>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-4">
                            <button className="text-white hover:text-[#FFD700] transition-colors hidden md:block p-2 hover:bg-white/5 rounded-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>

                            {/* Burger Menu Button */}
                            <button
                                className="flex flex-col gap-1.5 p-2 lg:hidden hover:bg-white/5 rounded-lg transition-colors group"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className="w-6 h-0.5 bg-white group-hover:bg-[#FFD700] transition-colors"></span>
                                <span className="w-6 h-0.5 bg-white group-hover:bg-[#FFD700] transition-colors"></span>
                                <span className="w-6 h-0.5 bg-white group-hover:bg-[#FFD700] transition-colors"></span>
                            </button>

                            {/* CTA Button */}
                            <Link to="/enquiry" className="hidden lg:flex items-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3.5 px-7 uppercase text-xs tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD700]/20 hover:scale-105">
                                ENQUIRY
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <>
                        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
                        <div className="fixed top-0 right-0 h-full w-[280px] bg-black z-[1001] flex flex-col p-6 lg:hidden shadow-2xl transform transition-transform duration-300">
                            <button className="self-end text-white p-2 hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <div className="flex flex-col gap-1 mt-8">
                                <Link to="/" className={`text-base font-semibold uppercase tracking-wide py-3 px-4 rounded-lg ${location.pathname === '/' ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors'
                                    }`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                <Link to="/about" className={`text-base font-semibold uppercase tracking-wide py-3 px-4 rounded-lg ${location.pathname === '/about' ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors'
                                    }`} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                <Link to="/services" className={`text-base font-semibold uppercase tracking-wide py-3 px-4 rounded-lg ${location.pathname === '/services' ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors'
                                    }`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                                <div className="flex flex-col gap-1">
                                    <span className="text-base font-semibold uppercase tracking-wide py-3 px-4 text-white">Pages</span>
                                    <Link to="/our-work" className="text-base font-semibold uppercase tracking-wide py-2 px-8 rounded-lg text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link>
                                    <Link to="/our-clients" className="text-base font-semibold uppercase tracking-wide py-2 px-8 rounded-lg text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Our Clients</Link>
                                </div>
                                <Link to="/career" className={`text-base font-semibold uppercase tracking-wide py-3 px-4 rounded-lg ${location.pathname === '/career' ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors'
                                    }`} onClick={() => setIsMobileMenuOpen(false)}>Career</Link>
                                <Link to="/contact" className={`text-base font-semibold uppercase tracking-wide py-3 px-4 rounded-lg ${location.pathname === '/contact' ? 'text-[#FFD700] bg-[#FFD700]/10' : 'text-white hover:text-[#FFD700] hover:bg-white/5 transition-colors'
                                    }`} onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                            </div>
                            <Link to="/contact" className="mt-8 flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3.5 px-6 uppercase text-sm tracking-wider transition-all" onClick={() => setIsMobileMenuOpen(false)}>
                                GET A QUOTE
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    </>
                )}
            </header>
        </>
    );
};

export default Navbar;
