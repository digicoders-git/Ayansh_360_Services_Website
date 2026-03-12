import React, { useState, useEffect } from 'react';
import { getTestimonials } from '../../apis/website';

const Client = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const response = await getTestimonials();
            setTestimonials(response.data.data || []);
        } catch (err) {
            console.error('Error fetching testimonials:', err);
            setError('Failed to load testimonials');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative bg-[#252f48] py-20 h-[400px] pt-45 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen flex items-center">
            
                <div className="container text-center relative z-10">
                    <span className="text-blue-500 font-bold uppercase tracking-[6px] mb-4 block">TESTIMONIALS</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">WHAT OUR <span className="text-[#FFD700]">CLIENTS SAY</span></h1>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {loading ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500">Loading testimonials...</p>
                            </div>
                        ) : error ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-red-500">{error}</p>
                            </div>
                        ) : testimonials.length > 0 ? (
                            testimonials.map((t, i) => (
                                <div key={i} className="bg-white p-6 sm:p-8 border-2 border-black/10 hover:border-[#FFD700] transition-all shadow-lg">
                                    <div className="text-[#FFD700] text-4xl mb-4">"</div>
                                    <div className="flex text-[#FFD700] gap-1 mb-4">
                                        {[...Array(t.rating || 5)].map((_, idx) => (
                                            <svg key={idx} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed mb-6 italic text-sm sm:text-base">{t.text}</p>
                                    <div className="border-t border-black/10 pt-4">
                                        <h4 className="text-black font-bold text-sm sm:text-base">{t.name}</h4>
                                        <span className="text-[#FFD700] text-[10px] uppercase tracking-widest font-bold">{t.role}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-20">
                                <p className="text-gray-500">No testimonials available</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-black text-white px-4 md:px-8 lg:px-16">
                <div className="container text-center">
                    <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-xs sm:text-sm">OUR PARTNERS</span>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-12 md:mb-16">TRUSTED BY <span className="text-[#FFD700]">INDUSTRY LEADERS</span></h2>
                    <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 opacity-60 grayscale hover:opacity-100 transition-opacity">
                        <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tighter">CONSTRUCTO</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tighter">BUILD-IT</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tighter">ELITE HOMES</span>
                        <span className="text-lg sm:text-xl md:text-2xl font-bold italic tracking-tighter">VILLA ARCH</span>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Client;
