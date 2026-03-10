import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
    const projects = [
        { title: "Modern Villa Renovation", category: "Construction", image: "/service-2.jpg" },
        { title: "Commercial Building Painting", category: "Painting", image: "/service-1.jpg" },
        { title: "Waterproofing Solutions", category: "Waterproofing", image: "/service-3.jpg" },
        { title: "Residential Interior Painting", category: "Painting", image: "/service-1.jpg" },
        { title: "Industrial Construction", category: "Construction", image: "/service-2.jpg" },
        { title: "Exterior Waterproofing", category: "Waterproofing", image: "/service-3.jpg" }
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Our Work background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="container relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">OUR PORTFOLIO</span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight text-black font-bold">
                            SHOWCASE OF OUR <span className="text-[#FFD700]">WORK</span>
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
                            Explore our completed projects showcasing excellence in construction, painting, and waterproofing services.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="mb-12 md:mb-20">
                        <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">COMPLETED PROJECTS</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">OUR <span className="text-[#FFD700]">PORTFOLIO</span></h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, i) => (
                            <div key={i} className="group relative overflow-hidden border-2 border-black/10 hover:border-[#FFD700] transition-all">
                                <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-70"
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all"></div>
                                </div>
                                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                                    <span className="text-[#FFD700] text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">{project.category}</span>
                                    <h3 className="text-lg sm:text-xl font-bold">{project.title}</h3>
                                </div>
                            </div>
                        ))}
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
                    <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 font-bold text-black">READY TO START YOUR PROJECT?</h2>
                    <p className="text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        Let us bring your vision to life with our expert team and proven track record of excellence.
                    </p>
                    <Link to="/enquiry" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-10 md:px-12 text-xs sm:text-base md:text-lg uppercase tracking-wider transition-all">
                        GET IN TOUCH
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Work;
