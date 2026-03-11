import React from 'react';
import { Link } from 'react-router-dom';

const Career = () => {
    const jobs = [
        { title: "Senior Structural Engineer", location: "Lucknow", type: "Full Time", salary: "₹8-12 LPA" },
        { title: "Lead Painting Supervisor", location: "Lucknow", type: "Full Time", salary: "₹6-9 LPA" },
        { title: "Waterproofing Technician", location: "Lucknow", type: "Full Time", salary: "₹5-7 LPA" },
        { title: "Project Manager", location: "Lucknow", type: "Contract", salary: "₹10-15 LPA" }
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            {/* <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Career background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="container relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-sm">JOIN OUR TEAM</span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight text-black font-bold">
                            BUILD YOUR <span className="text-[#FFD700]">CAREER</span> WITH US
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
                            We're looking for talented professionals to join our growing team. Help us build excellence in construction, painting, and waterproofing services.
                        </p>
                        <Link to="#jobs" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-4 px-8 uppercase text-sm tracking-wider transition-all">
                            EXPLORE OPPORTUNITIES
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </section> */}

            {/* Hero Section */}
            <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
            
                <div className="container text-center relative z-10">
                    <span className="text-blue-500 font-bold uppercase tracking-[6px] mb-4 block">JOIN OUR TEAM</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">BUILD YOUR <span className="text-[#FFD700]">CAREER</span></h1>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="jobs" className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="mb-12 md:mb-20">
                        <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">OPEN POSITIONS</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">CURRENT <span className="text-[#FFD700]">OPPORTUNITIES</span></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        {jobs.map((job, i) => (
                            <div key={i} className="group bg-white p-6 sm:p-8 border-2 border-black/10 hover:border-[#FFD700] hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                <div className="flex-1">
                                    <h3 className="text-lg sm:text-2xl font-bold text-black mb-3">{job.title}</h3>
                                    <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {job.location}
                                        </span>
                                        <span className="flex items-center gap-2 text-gray-600">
                                            <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {job.type}
                                        </span>
                                        <span className="flex items-center gap-2 text-[#FFD700] font-bold">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {job.salary}
                                        </span>
                                    </div>
                                </div>
                                <Link to={`/contact?type=${encodeURIComponent(job.title)}`} className="w-full sm:w-auto bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 px-6 sm:px-8 uppercase text-xs sm:text-sm tracking-wider transition-all text-center">
                                    APPLY NOW
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-black text-white px-4 md:px-8 lg:px-16">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">WHY JOIN US</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">WHY WORK AT <span className="text-[#FFD700]">ARYANSH 360</span>?</h2>
                        <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                            We offer a dynamic work environment where quality and integrity are rewarded. Join a team that values your skills and provides opportunities for growth and professional development.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Competitive Salary & Benefits Packages</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Professional Development & Training Programs</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Safe & Supportive Work Culture</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#FFD700] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Career Growth & Advancement Opportunities</span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-64 sm:h-80 md:h-96 relative border-4 border-[#FFD700]/20 overflow-hidden bg-gray-200">
                        <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600&q=80"
                            alt="Construction team"
                            className="w-full h-full object-cover"
                            onError={(e) => e.target.style.display = 'none'}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 md:py-24 relative overflow-hidden text-gray-800 px-4">
                <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt="Call to action"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-[#FFD700]/10"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 font-bold text-black">DIDN'T FIND YOUR ROLE?</h2>
                    <p className="text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        Send us your resume and let us know about your skills. We're always looking for talented individuals to join our team.
                    </p>
                    <Link to="/contact" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-10 md:px-12 text-xs sm:text-base md:text-lg uppercase tracking-wider transition-all">
                        SEND YOUR RESUME
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Career;
