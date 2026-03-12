import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getServices } from '../../apis/website';

const Services = () => {
    const [servicesList, setServicesList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchServices();
    }, []);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const response = await getServices();
            setServicesList(response.data.data || []);

            console.log(response.data.data)

        } catch (err) {
            console.error('Error fetching services:', err);
            setError('Failed to load services');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white pt-28 md:pt-32 pb-20 md:px-30 text-black">
            {/* Header */}
            <section className="relative bg-[#252f48] py-20 border-b border-black/5 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen">
               
                <div className="container text-center relative z-10">
                    <span className="text-blue-500 font-bold uppercase tracking-[6px] mb-4 block">OUR EXPERTISE</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">SERVICES WE <span className="text-[#FFD700]">PROVIDE</span></h1>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {loading ? (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500">Loading services...</p>
                        </div>
                    ) : error ? (
                        <div className="col-span-full text-center py-20">
                            <p className="text-red-500">{error}</p>
                        </div>
                    ) : servicesList.length > 0 ? (
                        servicesList.map((service, index) => (
                            <div key={index} className="group bg-black p-12 border border-black/5 transition-all flex flex-col gap-8 min-h-[450px] relative overflow-hidden">
                                <img src={service.imageFileName ? `http://localhost:5000${service.image}` : 'https://via.placeholder.com/400'} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity" />
                                <div className="relative z-10 flex flex-col gap-8 h-full">
                                    <div className="flex flex-col gap-5">
                                        <h3 className="text-3xl font-bold text-white leading-tight uppercase tracking-tighter">
                                            {service.title.split(' ').map((word, i) => (
                                                <React.Fragment key={i}>
                                                    {word}
                                                    <br />
                                                </React.Fragment>
                                            ))}
                                        </h3>
                                        <p className="text-white text-base leading-relaxed max-w-[280px]">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-gray-500">No services available</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Services;
