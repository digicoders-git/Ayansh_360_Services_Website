import React from 'react';

const About = () => {
    return (
        <div className="bg-white md:pt-32 pt-20 pb-20 md:px-30 text-black">
            {/* Hero Small */}
            <section className="relative bg-[#252f48] py-20 border-b border-black/10 overflow-hidden -mx-[calc((100vw-98.5%)/2)] w-screen">
               
                <div className="container text-center relative z-10">
                    <span className="text-blue-500 font-bold uppercase tracking-[6px] mb-4 block">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter"> ARYANSH 360 <span className="text-[#FFD700]">SERVICES</span></h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="md:py-24">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <img
                            src="team.webp"
                            alt="Team"
                            className="w-full h-[500px] object-cover border border-white/10"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden md:block">
                            <span className="text-5xl font-bold text-black block mb-2">15+</span>
                            <span className="text-sm font-bold text-black/60 uppercase tracking-widest">Years of Experience</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 px-5">
                        <h2 className="text-3xl md:text-4xl">WE ARE COMMITTED TO <span className="text-primary">QUALITY</span> CONSTRUCTION</h2>
                        <p className="text-text-muted leading-relaxed">
                            Founded in 2008, Buildarx has grown from a small local painting firm into a comprehensive construction and waterproofing service provider. Our mission is to transform spaces with precision and care, ensuring every project meets the highest standards of durability and aesthetic appeal.
                        </p>
                        <p className="text-text-muted leading-relaxed">
                            We specialize in residential renovations, commercial painting, and advanced waterproofing solutions. Our team of certified professionals is dedicated to providing innovative solutions that stand the test of time.
                        </p>
                        <div className="md:grid md:grid-cols-2 gap-8 mt-4 sm:flex">
                            <div className="flex flex-col gap-2">
                                <span className=" font-bold flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    Certified Experts
                                </span>
                                <span className="font-bold flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    Quality Materials
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className=" font-bold flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    On-Time Delivery
                                </span>
                                <span className=" font-bold flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                    24/7 Support
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-5">
                <div className="container text-center mb-16">
                    <span className="text-blue-500 font-bold uppercase tracking-[4px] mb-4 block">Core Values</span>
                    <h2 className="text-4xl">WHAT DRIVES US</h2>
                </div>
                <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-10 border border-black/20 bg-bg-card hover:border-primary/60 transition-all">
                        <h3 className="text-xl mb-4 text-primary">Integrity</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            We believe in honest communication and transparent pricing at every stage of the project.
                        </p>
                    </div>
                    <div className="p-10 border border-black/20 bg-bg-card hover:border-primary/60 transition-all">
                        <h3 className="text-xl mb-4 text-primary">Innovation</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Using the latest technology and materials to provide superior construction and waterproofing.
                        </p>
                    </div>
                    <div className="p-10 border border-black/20 bg-bg-card hover:border-primary/60 transition-all">
                        <h3 className="text-xl mb-4 text-primary">Reliability</h3>
                        <p className="text-text-muted text-sm leading-relaxed">
                            Our clients trust us because we deliver what we promise, on time and within budget.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
