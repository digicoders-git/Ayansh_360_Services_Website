import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div className="bg-white text-black min-h-screen pt-32 pb-20">
            {/* Header */}
            <div className="bg-[#252f48] text-white py-16 px-4 md:px-8 lg:px-16 mb-16">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
                    <p className="text-white/70">Last updated: January 2026</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
                <div className="space-y-12">
                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">1. Agreement to Terms</h2>
                        <p className="text-gray-700 leading-relaxed">
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">2. Use License</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Permission is granted to temporarily download one copy of the materials on ARYANSH 360 SERVICES website for personal, non-commercial viewing only. Under this license you may not:
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>Modify or copy the materials</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>Use materials for commercial purposes</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>Attempt to decompile or reverse engineer software</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#FFD700] font-bold mt-1">•</span>
                                <span>Remove copyright or proprietary notations</span>
                            </li>
                        </ul>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">3. Disclaimer</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The materials on ARYANSH 360 SERVICES website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all warranties including merchantability, fitness for a particular purpose, or non-infringement of intellectual property rights.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">4. Limitations</h2>
                        <p className="text-gray-700 leading-relaxed">
                            In no event shall ARYANSH 360 SERVICES or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">5. Accuracy of Materials</h2>
                        <p className="text-gray-700 leading-relaxed">
                            The materials on ARYANSH 360 SERVICES website could include technical, typographical, or photographic errors. We do not warrant that any materials are accurate, complete, or current.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">6. Links</h2>
                        <p className="text-gray-700 leading-relaxed">
                            ARYANSH 360 SERVICES is not responsible for the contents of any linked sites. The inclusion of any link does not imply endorsement. Use of any linked website is at the user's own risk.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">7. Modifications</h2>
                        <p className="text-gray-700 leading-relaxed">
                            We may revise these terms of service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
                        </p>
                    </section>

                    <section className="border-l-4 border-[#FFD700] pl-6">
                        <h2 className="text-2xl font-bold mb-4 text-black">8. Governing Law</h2>
                        <p className="text-gray-700 leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>

                    <section className="bg-gray-50 border-l-4 border-[#FFD700] pl-6 p-6 rounded">
                        <h2 className="text-2xl font-bold mb-4 text-black">9. Contact Information</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            If you have any questions about these Terms & Conditions, please contact us:
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

export default TermsAndConditions;
