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
                        src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D"
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
                            <span className="text-primary font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">WHAT WE DO</span>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl">EXCELLENCE IN EVERY <span className="text-primary">DETAIL</span></h2>
                        </div>
                        <Link to="/services" className="text-primary font-bold border-b border-primary pb-1 hover:opacity-70 text-sm sm:text-base whitespace-nowrap">VIEW ALL SERVICES</Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-black/5">
                        {/* Service 1 */}
                        <div className="group bg-white p-6 sm:p-8 md:p-12 border-r border-b border-black/5 hover:bg-gray-50 transition-all flex flex-col gap-6 sm:gap-8">
                            <div className="text-[#FFD700]">
                                <svg className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.842-4.162a.75.75 0 011.05-.537l3.02 1.25a.75.75 0 00.957-.354l.43-1.03a.5.5 0 01.913-.03l.85 2.155a.75.75 0 01-.137.765l-1.464 1.83a.75.75 0 01-.606.31h-5.894a.75.75 0 01-.913-.31l-.224-.31a.75.75 0 01.137-.957zM3 18.75V15a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75zM18 18.75V15a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75zM6 13.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5z" /></svg>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase tracking-tight leading-tight">Professional <br /> Painting</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-black/10 rounded-sm hover:bg-black hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>

                        {/* Service 2 */}
                        <div className="group bg-white p-6 sm:p-8 md:p-12 border-r border-b border-black/5 hover:bg-gray-50 transition-all flex flex-col gap-6 sm:gap-8">
                            <div className="text-[#FFD700]">
                                <svg className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5l-3-1m-3.145-5.49a1.125 1.125 0 00-1.656 1.14l.23 2.106a1.125 1.125 0 01-.243.794l-1.102 1.32a1.125 1.125 0 00-.083 1.298l.84 1.68a1.125 1.125 0 010 1.002l-.84 1.68a1.125 1.125 0 00.083 1.298l1.102 1.32a1.125 1.125 0 01.243.794l-.23 2.106a1.125 1.125 0 001.656 1.14l1.974-.718a1.125 1.125 0 01.769 0l1.974.718a1.125 1.125 0 001.656-1.14l-.23-2.106a1.125 1.125 0 01.243-.794l1.102-1.32z" /></svg>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase tracking-tight leading-tight">Construction <br /> Work</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-black/10 rounded-sm hover:bg-black hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>

                        {/* Service 3 */}
                        <div className="group bg-white p-6 sm:p-8 md:p-12 border-r border-b border-black/5 hover:bg-gray-50 transition-all flex flex-col gap-6 sm:gap-8">
                            <div className="text-[#FFD700]">
                                <svg className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                            </div>
                            <div className="flex flex-col gap-3 sm:gap-4">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black uppercase tracking-tight leading-tight">Waterproofing <br /> Solutions</h3>
                                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed max-w-[200px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>
                            <Link to="/services" className="mt-auto inline-flex items-center justify-center w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 border border-black/10 rounded-sm hover:bg-black hover:text-white transition-all transform group-hover:rotate-[-45deg]">
                                <svg className="w-4 sm:w-4 md:w-5 h-4 sm:h-4 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden text-gray-800 px-4">
                <img
                    src="https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBjb25zdHJ1Y3Rpb258ZW58MHx8MHx8fDA%3D"
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
        </div>
    );
};

export default Home;
