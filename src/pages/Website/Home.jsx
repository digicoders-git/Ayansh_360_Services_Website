import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden">
                {/* Background Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="home-hero.avif"
                        alt="Construction"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                </div>

                <div className="container relative z-10 pt-20">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold uppercase tracking-[4px] mb-4 block animate-fade-in-up">Professional Solutions</span>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl mb-6 leading-tight animate-fade-in-up delay-100">
                            BUILDING <span className="text-primary">DREAMS</span> <br />
                            WITH INTEGRITY
                        </h1>
                        <p className="text-text-muted text-base sm:text-lg mb-10 max-w-lg leading-relaxed animate-fade-in-up delay-200">
                            Expert painting, construction, and waterproofing services for residential and commercial properties. We deliver quality that lasts.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-fade-in-up delay-300">
                            <Link to="/contact" className="btn-primary items-center flex !py-3 sm:!py-4 border-1 border-transparent !px-6 sm:!px-10 hover:border-white text-sm sm:text-base">
                                GET STARTED
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                            <Link to="/services" className="border border-white/20 text-white py-3 sm:py-4 px-6 sm:px-10 font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all text-sm sm:text-base">
                                OUR SERVICES
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute bottom-4 sm:bottom-10 right-4 sm:right-8 lg:right-16 hidden lg:flex gap-6 sm:gap-10 bg-black/40 backdrop-blur-md p-4 sm:p-8 border-l-4 border-primary">
                    <div className="flex flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-white">250+</span>
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-primary/80 font-bold">Projects Done</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl sm:text-4xl font-bold text-white">15+</span>
                        <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-primary/80 font-bold">Years Exp</span>
                    </div>
                </div>
            </section>

            {/* Services Highlight Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6 md:gap-8">
                        <div className="max-w-xl">
                            <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">WHAT WE DO</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl">EXCELLENCE IN EVERY <span className="text-primary">DETAIL</span></h2>
                        </div>
                        <Link to="/services" className="text-primary font-bold border-b border-primary pb-1 hover:opacity-70 text-sm sm:text-base whitespace-nowrap">VIEW ALL SERVICES</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/5">
                        {/* Service 1 */}
                        <div className="group bg-black p-6 sm:p-8 md:p-12 border-r border-b border-black/5 transition-all flex flex-col gap-6 sm:gap-8 relative overflow-hidden">
                            <img src="service-1.jpg" alt="Painting" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity" />
                            <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">Professional <br /> Painting</h3>
                                <p className="text-white text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto relative z-10 inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-white/40 rounded-sm hover:bg-primary hover:text-black hover:border-primary transition-all transform group-hover:rotate-[-45deg] text-white">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-black p-6 sm:p-8 md:p-12 border-r border-b border-black/5 transition-all flex flex-col gap-6 sm:gap-8 relative overflow-hidden">
                            <img src="service-2.jpg" alt="Construction" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity" />
                            <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">Construction <br /> Work</h3>
                                <p className="text-white text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto relative z-10 inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-white/40 rounded-sm hover:bg-primary hover:text-black hover:border-primary transition-all transform group-hover:rotate-[-45deg] text-white">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-black p-6 sm:p-8 md:p-12 border-r border-b border-black/5 transition-all flex flex-col gap-6 sm:gap-8 relative overflow-hidden">
                            <img src="service-3.jpg" alt="Waterproofing" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity" />
                            <div className="relative z-10 flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight">Waterproofing <br /> Solutions</h3>
                                <p className="text-white text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto relative z-10 inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-white/40 rounded-sm hover:bg-primary hover:text-black hover:border-primary transition-all transform group-hover:rotate-[-45deg] text-white">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Work Section */}
            <section className="relative bg-white pb-16 sm:pb-24">
                {/* Yellow Header Area */}
                <div className="bg-primary pt-16 sm:pt-24 pb-32 sm:pb-48 px-4 md:px-8 lg:px-16 text-center">
                    <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">HOW WE WORK</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl text-black max-w-3xl mx-auto font-bold uppercase leading-tight">
                        Your Dream Comes True With <br /> Our Few Process
                    </h2>
                </div>

                {/* Process Cards */}
                <div className="container px-4 md:px-8 lg:px-16 -mt-20 sm:-mt-32 relative z-10 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                        {/* Step 01 */}
                        <div className="relative group bg-white p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div className="text-primary">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.83-5.83m0 0a2.93 2.93 0 11-4.144-4.144 2.93 2.93 0 014.144 4.144zm-5.83 5.83l-5.83 5.83a2.652 2.652 0 11-3.75-3.75l5.83-5.83m5.83-5.83l5.83-5.83A2.652 2.652 0 1121 9.75l-5.83 5.83m-5.83-5.83L3.75 3.75A2.652 2.652 0 017.5 0l5.83 5.83" />
                                    </svg>
                                </div>
                                <span className="text-gray-100 text-5xl font-bold font-outfit leading-none">01</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-tight">Project Planning</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We specialize in the maintenance of metalworking equipment and engineers have worked.
                                </p>
                            </div>
                            {/* Arrow for desktop */}
                            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div className="relative group bg-white p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div className="text-primary">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545" />
                                    </svg>
                                </div>
                                <span className="text-gray-100 text-5xl font-bold font-outfit leading-none">02</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-tight">Development</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We specialize in the maintenance of metalworking equipment and engineers have worked.
                                </p>
                            </div>
                            {/* Arrow for desktop */}
                            <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-20">
                                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-50">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                                </div>
                            </div>
                        </div>

                        {/* Step 03 */}
                        <div className="group bg-white p-8 sm:p-10 shadow-xl border border-gray-100 flex flex-col gap-6">
                            <div className="flex justify-between items-start">
                                <div className="text-primary">
                                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span className="text-gray-100 text-5xl font-bold font-outfit leading-none">03</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-tight">Success</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    We specialize in the maintenance of metalworking equipment and engineers have worked.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Stats Counter Section */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 sm:mt-24 text-center">
                        <div>
                            <span className="text-4xl sm:text-5xl font-bold text-black block mb-2 font-outfit">32K</span>
                            <div className="w-12 h-1 bg-primary mx-auto mb-3"></div>
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Project Done</span>
                        </div>
                        <div>
                            <span className="text-4xl sm:text-5xl font-bold text-black block mb-2 font-outfit">84K</span>
                            <div className="w-12 h-1 bg-primary mx-auto mb-3"></div>
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Happy Clients</span>
                        </div>
                        <div>
                            <span className="text-4xl sm:text-5xl font-bold text-black block mb-2 font-outfit">19K</span>
                            <div className="w-12 h-1 bg-primary mx-auto mb-3"></div>
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Trusted Partners</span>
                        </div>
                        <div>
                            <span className="text-4xl sm:text-5xl font-bold text-black block mb-2 font-outfit">22K</span>
                            <div className="w-12 h-1 bg-primary mx-auto mb-3"></div>
                            <span className="text-gray-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">Quality Design</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Working Projects Section */}
            <section className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden px-4 md:px-8 lg:px-16">
                {/* Background Letter 'A' (for Aryansh) */}
                <div className="absolute left-[-100px] top-1/2 -translate-y-1/2 text-[400px] font-bold text-white/[0.03] select-none pointer-events-none z-0">
                    A
                </div>

                <div className="container relative z-10 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        {/* Project Info (Left) */}
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-[2px] bg-primary"></div>
                                <span className="text-blue-500 font-bold uppercase tracking-[4px] text-xs sm:text-sm">WORKING PROJECTS</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase font-outfit">
                                Highlighted Our Project <br /> <span className="text-primary">Excellence</span> Building
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-10 max-w-md">
                                We specialize in the maintenance of workering equipment and engineers have worked. We specialize in equipment and consulting.
                            </p>
                        
                        </div>

                        {/* Project Cards (Right) */}
                        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Project 1 */}
                            <div className="group bg-white rounded-sm overflow-hidden flex flex-col h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src="service-1.jpg"
                                        alt="Interior Painting"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-[2px] bg-primary"></div>
                                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Painting</span>
                                    </div>
                                    <h3 className="text-black font-bold text-lg uppercase tracking-tight font-outfit">Interior Painting</h3>
                                </div>
                            </div>

                            {/* Project 2 */}
                            <div className="group bg-white rounded-sm overflow-hidden flex flex-col h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src="service-2.jpg"
                                        alt="Construction Work"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-[2px] bg-primary"></div>
                                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Construction</span>
                                    </div>
                                    <h3 className="text-black font-bold text-lg uppercase tracking-tight font-outfit">Building Construction</h3>
                                </div>
                            </div>

                            {/* Project 3 */}
                            <div className="group bg-white rounded-sm overflow-hidden flex flex-col h-full">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src="service-3.jpg"
                                        alt="Waterproofing"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all"></div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-6 h-[2px] bg-primary"></div>
                                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Waterproofing</span>
                                    </div>
                                    <h3 className="text-black font-bold text-lg uppercase tracking-tight font-outfit">Waterproofing Solutions</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden text-gray-800 px-4">
                <img
                    src="home-hero.avif"
                    alt="Call to action"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-primary/10"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8">READY TO START YOUR PROJECT?</h2>
                    <p className="text-text-muted mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        Contact us today for a free consultation and quote. Our experts are ready to bring your vision to life.
                    </p>
                    <Link to="/contact" className="btn-primary !py-3 sm:!py-4 md:!py-5 !px-8 sm:!px-10 md:!px-12 text-sm sm:text-base md:text-lg border border-1 inline-block">
                        GET A FREE QUOTE
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-gray-50 px-4 text-black md:px-8 lg:px-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">ABOUT US</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6  leading-tight">TRUSTED BY <span className="text-primary">THOUSANDS</span></h2>
                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                                With over 15 years of experience in the construction and painting industry, ARYANSH 360 has established itself as a trusted partner for residential and commercial projects. Our commitment to quality, integrity, and customer satisfaction sets us apart.
                            </p>
                            <ul className="flex flex-col gap-4 mb-8">
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700 text-sm sm:text-base">250+ Successful Projects Completed</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700 text-sm sm:text-base">Expert Team of Professionals</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    <span className="text-gray-700 text-sm sm:text-base">Quality Guaranteed on Every Project</span>
                                </li>
                            </ul>
                            <Link to="/about" className="text-primary font-bold border-b border-primary pb-1 hover:opacity-70 text-sm sm:text-base">
                                LEARN MORE ABOUT US
                            </Link>
                        </div>
                        <div className="relative h-96 rounded-xl overflow-hidden">
                            <img
                                src="trust.avif"
                                alt="About Us"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 sm:py-32 bg-white relative overflow-hidden px-4 md:px-8 lg:px-16">
                {/* Background Decoration */}
                <div className="absolute left-0 bottom-0 w-1/3 opacity-[0.03] pointer-events-none">
                    <img
                        src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                        alt="Background Crane"
                        className="w-full grayscale"
                    />
                </div>

                <div className="container relative z-10 mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Title Info (Left) */}
                        <div className="lg:w-1/3">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-[2px] bg-primary"></div>
                                <span className="text-blue-500 font-bold uppercase tracking-[4px] text-xs sm:text-sm">TESTIMONIALS</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight uppercase font-outfit text-black">
                                What Our Clients Say <br /> About <span className="text-primary">Building</span> Their Dreams
                            </h2>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 max-w-sm">
                                More than 99% customer satisfaction is our success. We take pride in delivering excellence.
                            </p>
                          
                        </div>

                        {/* Testimonial Cards (Right) */}
                        <div className="lg:w-2/3 flex flex-col gap-6 w-full">
                            {/* Card 1 */}
                            <div className="bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative group">
                                <div className="absolute right-8 top-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4 3.638-4 5.849h3.983v10h-9.979z" /></svg>
                                </div>
                                <div className="flex text-primary gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-lg italic mb-10 leading-relaxed font-inter">
                                    "Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                                        alt="Client"
                                        className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-primary"
                                    />
                                    <div>
                                        <h4 className="text-black font-bold text-lg font-outfit">Makjer Moken</h4>
                                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Director at Buildanx</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative group">
                                <div className="absolute right-8 top-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.437.917-4 3.638-4 5.849h3.983v10h-9.979z" /></svg>
                                </div>
                                <div className="flex text-primary gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                    ))}
                                </div>
                                <p className="text-gray-600 text-lg italic mb-10 leading-relaxed font-inter">
                                    "Great Quality Products With areaw Good Packaging unknown printer toweok year galley of type and scrambled itter area make pecimive centuries"
                                </p>
                                <div className="flex items-center gap-4">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                                        alt="Client"
                                        className="w-16 h-16 rounded-full object-cover grayscale hover:grayscale-0 transition-all border-2 border-primary"
                                    />
                                    <div>
                                        <h4 className="text-black font-bold text-lg font-outfit">Makjer Moken</h4>
                                        <span className="text-primary text-sm font-bold uppercase tracking-wider">Director at Buildanx</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white px-4 md:px-8 lg:px-16">
                <div className="container max-w-4xl mx-auto">
                    <div className="text-center mb-12 md:mb-20">
                        <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">FREQUENTLY ASKED</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl text-black">QUESTIONS & <span className="text-primary">ANSWERS</span></h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                q: "What services does ARYANSH 360 offer?",
                                a: "We provide professional painting services (interior & exterior), small construction work, waterproofing solutions, and home renovation services for both residential and commercial properties."
                            },
                            {
                                q: "How long have you been in the business?",
                                a: "ARYANSH 360 has been serving customers for over 15 years with a proven track record of quality work and customer satisfaction."
                            },
                            {
                                q: "Do you provide free consultations?",
                                a: "Yes, we offer free consultations and quotes for all projects. Our team will assess your requirements and provide a detailed estimate."
                            },
                            {
                                q: "What areas do you serve?",
                                a: "We primarily serve Lucknow and surrounding areas. Contact us to check if your location is within our service area."
                            },
                            {
                                q: "Are your workers insured?",
                                a: "Yes, all our workers are properly trained and insured. We maintain high safety standards on all job sites."
                            },
                            {
                                q: "What is your warranty policy?",
                                a: "We stand behind our work with quality guarantees. Specific warranty details depend on the type of service. Contact us for more information."
                            }
                        ].map((faq, idx) => (
                            <details key={idx} className="group border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors cursor-pointer">
                                <summary className="flex items-center justify-between font-bold text-gray-900 text-sm sm:text-base">
                                    {faq.q}
                                    <svg className="w-5 h-5 text-primary group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                                </summary>
                                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-4">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
