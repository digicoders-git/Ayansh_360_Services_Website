import React from 'react';

const Client = () => {
    const testimonials = [
        { name: "Robert Fox", role: "Home Owner", text: "Buildarx transformed my old villa into a modern masterpiece. Their painting team is incredibly meticulous and professional." },
        { name: "Jane Cooper", role: "Property Manager", text: "We've used their waterproofing services for multiple commercial properties. Exceptional quality and very reliable team." },
        { name: "Wade Warren", role: "Developer", text: "On time and within budget. Their small construction team handled our extension project with great skill and integrity." }
    ];

    return (
        <div className="bg-white overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center px-4 md:px-8 lg:px-16 overflow-hidden pt-20">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                        alt="Clients background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
                </div>
                <div className="container relative z-10">
                    <div className="max-w-2xl">
                        <span className="text-[#FFD700] font-bold uppercase tracking-[4px] mb-4 block text-sm">TESTIMONIALS</span>
                        <h1 className="text-3xl sm:text-4xl md:text-6xl mb-6 leading-tight text-black font-bold">
                            WHAT OUR <span className="text-[#FFD700]">CLIENTS</span> SAY
                        </h1>
                        <p className="text-gray-600 text-base sm:text-lg mb-10 max-w-lg leading-relaxed">
                            Hear from our satisfied clients about their experience working with ARYANSH 360 SERVICES.
                        </p>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 sm:py-24 md:py-32 bg-white text-black px-4 md:px-8 lg:px-16">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                        {testimonials.map((t, i) => (
                            <div key={i} className="bg-white p-6 sm:p-8 border-2 border-black/10 hover:border-[#FFD700] transition-all shadow-lg">
                                <div className="text-[#FFD700] text-4xl mb-4">"</div>
                                <p className="text-gray-600 leading-relaxed mb-6 italic text-sm sm:text-base">{t.text}</p>
                                <div className="border-t border-black/10 pt-4">
                                    <h4 className="text-black font-bold text-sm sm:text-base">{t.name}</h4>
                                    <span className="text-[#FFD700] text-[10px] uppercase tracking-widest font-bold">{t.role}</span>
                                </div>
                            </div>
                        ))}
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
