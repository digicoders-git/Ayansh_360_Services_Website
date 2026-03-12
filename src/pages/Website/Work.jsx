import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../apis/website';

const Work = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const response = await getProjects();
            setProjects(response.data.data || []);
        } catch (err) {
            console.error('Error fetching projects:', err);
            setError('Failed to load projects');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
            
                <div className="container text-center relative z-10">
                    <span className="text-blue-500 font-bold uppercase tracking-[6px] mb-4 block">OUR PORTFOLIO</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">SHOWCASE OF OUR <span className="text-[#FFD700]">WORK</span></h1>
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
                        {loading ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500">Loading projects...</p>
                            </div>
                        ) : error ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-red-500">{error}</p>
                            </div>
                        ) : projects.length > 0 ? (
                            projects.map((project, i) => (
                                <div key={i} className="group relative overflow-hidden border-2 border-black/10 hover:border-[#FFD700] transition-all">
                                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-200">
                                        <img
                                            src={project.imageFileName ? `http://localhost:5000${project.image}` : 'https://via.placeholder.com/400'}
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
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500">No projects available</p>
                            </div>
                        )}
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
