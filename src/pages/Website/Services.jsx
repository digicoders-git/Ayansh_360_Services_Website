import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesList = [
        {
            title: "Interior Painting",
            desc: "Premium interior painting services with eco-friendly paints and perfect finishes.",
            image: "https://hometriangle.com/blogs/content/images/2024/03/hometriangle-blog-guide-professional-painting-in-bangalore.jpg"
        },
        {
            title: "Exterior Painting",
            desc: "Durable exterior painting that protects your home from the elements.",
            image: "https://hometriangle.com/blogs/content/images/2024/03/hometriangle-blog-guide-professional-painting-in-bangalore.jpg"
        },
        {
            title: "Waterproofing",
            desc: "Advanced waterproofing solutions for basements, roofs, and terraces.",
            image: "https://sivamwaterproofing.com/imgs/img3.JPG"
        },
        {
            title: "Small Construction",
            desc: "Expertly handled small building projects, extensions, and repairs.",
            image: "https://www.akbconsultants.com/blog/wp-content/uploads/2021/05/building-construction.jpg"
        },
        {
            title: "Home Renovation",
            desc: "Complete home transformation services from design to execution.",
            image: "https://www.akbconsultants.com/blog/wp-content/uploads/2021/05/building-construction.jpg"
        },
        {
            title: "Commercial Work",
            desc: "Professional construction and maintenance services for businesses.",
            image: "https://www.akbconsultants.com/blog/wp-content/uploads/2021/05/building-construction.jpg"
        }
    ];

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
                    {servicesList.map((service, index) => (
                        <div key={index} className="group bg-black p-12 border border-black/5 transition-all flex flex-col gap-8 min-h-[450px] relative overflow-hidden">
                            <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity" />
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
                                        Expertise urban design wea together thearea divers wheunknown pnturies.
                                    </p>
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
