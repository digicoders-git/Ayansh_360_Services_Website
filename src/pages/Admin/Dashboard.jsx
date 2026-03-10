import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#121212] p-8 border border-white/5 flex flex-col gap-4">
                    <span className="text-text-muted text-xs uppercase tracking-widest font-bold">Total Enquiries</span>
                    <span className="text-4xl font-bold text-primary">124</span>
                </div>
                <div className="bg-[#121212] p-8 border border-white/5 flex flex-col gap-4">
                    <span className="text-text-muted text-xs uppercase tracking-widest font-bold">Gallery Images</span>
                    <span className="text-4xl font-bold text-primary">56</span>
                </div>
                <div className="bg-[#121212] p-8 border border-white/5 flex flex-col gap-4">
                    <span className="text-text-muted text-xs uppercase tracking-widest font-bold">Active Clients</span>
                    <span className="text-4xl font-bold text-primary">89</span>
                </div>
            </div>

            <div className="bg-[#121212] border border-white/5">
                <div className="p-8 border-b border-white/5 flex justify-between items-center">
                    <h3 className="text-lg font-bold">Recent Enquiries</h3>
                    <button className="text-xs font-bold text-primary">VIEW ALL</button>
                </div>
                <div className="p-8">
                    <table className="w-full text-left text-sm">
                        <thead className="text-text-muted border-b border-white/5">
                            <tr>
                                <th className="pb-4 font-bold">Name</th>
                                <th className="pb-4 font-bold">Service</th>
                                <th className="pb-4 font-bold">Date</th>
                                <th className="pb-4 font-bold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="text-white">
                            <tr className="border-b border-white/5">
                                <td className="py-4">John Doe</td>
                                <td className="py-4">Painting</td>
                                <td className="py-4">Mar 10, 2026</td>
                                <td className="py-4 text-green-500 font-bold">New</td>
                            </tr>
                            <tr className="border-b border-white/5">
                                <td className="py-4">Jane Smith</td>
                                <td className="py-4">Waterproofing</td>
                                <td className="py-4">Mar 09, 2026</td>
                                <td className="py-4 text-yellow-500 font-bold">Pending</td>
                            </tr>
                            <tr>
                                <td className="py-4">Mike Ross</td>
                                <td className="py-4">Renovation</td>
                                <td className="py-4">Mar 08, 2026</td>
                                <td className="py-4 text-blue-500 font-bold">Contacted</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
