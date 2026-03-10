import React from 'react';

const ManageEnquiry = () => {
    return (
        <div className="bg-[#121212] border border-white/5">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-bold uppercase tracking-widest">Enquiry Management</h3>
                <div className="flex gap-4">
                    <input type="text" placeholder="Search enquiry..." className="bg-black border border-white/10 p-2 text-xs text-white outline-none" />
                </div>
            </div>
            <div className="p-8">
                <table className="w-full text-left text-sm">
                    <thead className="text-text-muted border-b border-white/5">
                        <tr>
                            <th className="pb-4 font-bold uppercase tracking-widest text-[10px]">Client</th>
                            <th className="pb-4 font-bold uppercase tracking-widest text-[10px]">Email</th>
                            <th className="pb-4 font-bold uppercase tracking-widest text-[10px]">Phone</th>
                            <th className="pb-4 font-bold uppercase tracking-widest text-[10px]">Requirement</th>
                            <th className="pb-4 font-bold uppercase tracking-widest text-[10px]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        <tr className="border-b border-white/5">
                            <td className="py-6">John Doe</td>
                            <td className="py-6">john@example.com</td>
                            <td className="py-6">+1 234 567 890</td>
                            <td className="py-6">Villa Painting</td>
                            <td className="py-6 flex gap-4">
                                <button className="text-primary hover:underline">View</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                        <tr className="border-b border-white/5">
                            <td className="py-6">Jane Smith</td>
                            <td className="py-6">jane@example.com</td>
                            <td className="py-6">+1 987 654 321</td>
                            <td className="py-6">Roof Leakage</td>
                            <td className="py-6 flex gap-4">
                                <button className="text-primary hover:underline">View</button>
                                <button className="text-red-500 hover:underline">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageEnquiry;
