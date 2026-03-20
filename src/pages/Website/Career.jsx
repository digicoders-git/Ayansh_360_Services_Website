import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getJobs } from '../../apis/website';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            setLoading(true);
            const response = await getJobs();
            setJobs(response.data.data || []);
        } catch (err) {
            console.error('Error fetching jobs:', err);
            setError('Failed to load jobs');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
            
                <div className="container text-center relative z-10">
                    <span className="text-[#0681d4] font-bold uppercase tracking-[6px] mb-4 block">JOIN OUR TEAM</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">BUILD YOUR <span className="text-[#fa5900]">CAREER</span></h1>
                </div>
            </section>

            {/* Jobs Section */}
            <section id="jobs" className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="mb-12 md:mb-20">
                        <span className="text-[#fa5900] font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">OPEN POSITIONS</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">CURRENT <span className="text-[#fa5900]">OPPORTUNITIES</span></h2>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        {loading ? (
                            <div className="text-center py-20">
                                <p className="text-gray-500">Loading jobs...</p>
                            </div>
                        ) : error ? (
                            <div className="text-center py-20">
                                <p className="text-red-500">{error}</p>
                            </div>
                        ) : jobs.length > 0 ? (
                            jobs.map((job, i) => (
                                <div key={i} className="group bg-white p-6 sm:p-8 border-2 border-black/10 hover:border-[#fa5900] hover:shadow-lg transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-lg sm:text-2xl font-bold text-black mb-3">{job.title}</h3>
                                        <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                                            <span className="flex items-center gap-2 text-gray-600">
                                                <i className="fas fa-map-marker-alt text-[#fa5900]"></i>
                                                {job.location}
                                            </span>
                                            <span className="flex items-center gap-2 text-gray-600">
                                                <i className="fas fa-clock text-[#fa5900]"></i>
                                                {job.type}
                                            </span>
                                            <span className="flex items-center gap-2 text-[#fa5900] font-bold">
                                                <i className="fas fa-indian-rupee-sign"></i>
                                                {job.salary}
                                            </span>
                                        </div>
                                    </div>
                                    <Link to={`/enquiry?type=${encodeURIComponent(job.title)}`} className="w-full sm:w-auto bg-[#fa5900] hover:bg-[#e05000] text-white font-bold py-3 px-6 sm:px-8 uppercase text-xs sm:text-sm tracking-wider transition-all text-center">
                                        APPLY NOW
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-gray-500">No jobs available</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Why Join Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-black text-white px-4 md:px-8 lg:px-16">
                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div>
                        <span className="text-[#fa5900] font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">WHY JOIN US</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8">WHY WORK AT <span className="text-[#fa5900]">AAYANSH 360</span>?</h2>
                        <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                            We offer a dynamic work environment where quality and integrity are rewarded. Join a team that values your skills and provides opportunities for growth and professional development.
                        </p>
                        <ul className="flex flex-col gap-4">
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#fa5900] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Competitive Salary & Benefits Packages</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#fa5900] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Professional Development & Training Programs</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#fa5900] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Safe & Supportive Work Culture</span>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="w-2 h-2 bg-[#fa5900] rounded-full mt-2 shrink-0"></div>
                                <span className="text-sm sm:text-base">Career Growth & Advancement Opportunities</span>
                            </li>
                        </ul>
                    </div>
                    <div className="h-64 sm:h-80 md:h-96 relative border-4 border-[#fa5900]/20 overflow-hidden bg-gray-200">
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
                <div className="absolute inset-0 bg-[#fa5900]/10"></div>
                <div className="container relative z-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 sm:mb-8 font-bold text-black">DIDN'T FIND YOUR ROLE?</h2>
                    <p className="text-gray-700 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
                        Send us your resume and let us know about your skills. We're always looking for talented individuals to join our team.
                    </p>
                    <Link to="/enquiry" className="inline-flex items-center gap-2 bg-[#fa5900] hover:bg-[#e05000] text-white font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-10 md:px-12 text-xs sm:text-base md:text-lg uppercase tracking-wider transition-all">
                        SEND YOUR REQUEST
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Career;
