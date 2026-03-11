import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-20">
            {/* Header */}
            <div className="bg-[#252f48] text-white py-16 px-4 md:px-8 lg:px-16 mb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                    <p className="text-white/70">Last updated: January 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="space-y-12">
                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">1. Introduction</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ARYANSH 360 SERVICES ("we", "us", "our", or "Company") operates the website. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">2. Information Collection and Use</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            We collect several different types of information for various purposes to provide and improve our Service to you.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span><strong>Personal Data:</strong> Name, email address, phone number, address</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span><strong>Usage Data:</strong> Browser type, IP address, pages visited, time and date of visit</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span><strong>Cookies:</strong> Tracking technologies for improved user experience</span>
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">3. Use of Data</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            ARYANSH 360 SERVICES uses the collected data for various purposes:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>To provide and maintain our Service</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>To notify you about changes to our Service</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>To provide customer support</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>To gather analysis for improving our Service</span>
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">4. Security of Data</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The security of your data is important to us. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">5. Changes to This Privacy Policy</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <section className="bg-gray-50 border-l-4 border-[#FFD700] pl-6 p-6 rounded">
                        <h2 className="text-2xl font-bold mb-4 text-black">6. Contact Us</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p><strong>Email:</strong> <a href="mailto:Kishan.rai30@gmail.com" className="text-[#FFD700] hover:underline">Kishan.rai30@gmail.com</a></p>
                            <p><strong>Phone:</strong> <a href="tel:+919999452314" className="text-[#FFD700] hover:underline">+91 9999452314</a></p>
                        </div>
                    </section>
                </div>

                <div className="mt-16 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#E6C200] text-black font-bold py-3 px-8 rounded transition-all">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
