import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesList = [
        {
            title: "Interior Painting",
            desc: "Premium interior painting services with eco-friendly paints and perfect finishes.",
            icon: "P"
        },
        {
            title: "Exterior Painting",
            desc: "Durable exterior painting that protects your home from the elements.",
            icon: "E"
        },
        {
            title: "Waterproofing",
            desc: "Advanced waterproofing solutions for basements, roofs, and terraces.",
            icon: "W"
        },
        {
            title: "Small Construction",
            desc: "Expertly handled small building projects, extensions, and repairs.",
            icon: "C"
        },
        {
            title: "Home Renovation",
            desc: "Complete home transformation services from design to execution.",
            icon: "R"
        },
        {
            title: "Commercial Work",
            desc: "Professional construction and maintenance services for businesses.",
            icon: "B"
        }
    ];

    return (
        <div className="bg-white pt-32 pb-20 md:px-30 text-black">
            {/* Header */}
            <section className="relative py-20 border-b border-black/5 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Services background"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                </div>
                <div className="container text-center relative z-10">
                    <span className="text-[#FFD700] font-bold uppercase tracking-[6px] mb-4 block">OUR EXPERTISE</span>
                    <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter">SERVICES WE <span className="text-[#FFD700]">PROVIDE</span></h1>
                </div>
            </section>

            {/* Grid */}
            <section className="py-24">
                <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                    {servicesList.map((service, index) => (
                        <div key={index} className="group p-12 bg-white border border-black/20 hover:bg-gray-50 transition-all flex flex-col gap-8 min-h-[450px]">
                            {/* Icon */}
                            <div className="text-[#FFD700]">
                                {index === 0 && <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122l.842-4.162a.75.75 0 011.05-.537l3.02 1.25a.75.75 0 00.957-.354l.43-1.03a.5.5 0 01.913-.03l.85 2.155a.75.75 0 01-.137.765l-1.464 1.83a.75.75 0 01-.606.31h-5.894a.75.75 0 01-.913-.31l-.224-.31a.75.75 0 01.137-.957zM3 18.75V15a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75zM18 18.75V15a.75.75 0 01.75-.75h1.5a.75.75 0 01.75.75v3.75a.75.75 0 01-.75.75h-1.5a.75.75 0 01-.75-.75zM6 13.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75v1.5a.75.75 0 01-.75.75H6.75a.75.75 0 01-.75-.75v-1.5z" /></svg>}
                                {index === 1 && <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-12h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.75m-.75 3h.75m-.75 3h.75" /></svg>}
                                {index === 2 && <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>}
                                {index >= 3 && <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5-1.5l-3-1m-3.145-5.49a1.125 1.125 0 00-1.656 1.14l.23 2.106a1.125 1.125 0 01-.243.794l-1.102 1.32a1.125 1.125 0 00-.083 1.298l.84 1.68a1.125 1.125 0 010 1.002l-.84 1.68a1.125 1.125 0 00.083 1.298l1.102 1.32a1.125 1.125 0 01.243.794l-.23 2.106a1.125 1.125 0 001.656 1.14l1.974-.718a1.125 1.125 0 01.769 0l1.974.718a1.125 1.125 0 001.656-1.14l-.23-2.106a1.125 1.125 0 01.243-.794l1.102-1.32z" /></svg>}
                            </div>

                            <div className="flex flex-col gap-5">
                                <h3 className="text-3xl font-bold text-black leading-tight uppercase tracking-tighter">
                                    {service.title.split(' ').map((word, i) => (
                                        <React.Fragment key={i}>
                                            {word}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </h3>
                                <p className="text-gray-500 text-base leading-relaxed max-w-[280px]">
                                    Expertise urban design wea together thearea divers wheunknown pnturies.
                                </p>
                            </div>

                            <div className="mt-auto">
                                <div className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Services;
