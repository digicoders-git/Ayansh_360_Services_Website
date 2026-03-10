import React from 'react';

const ManageClient = () => {
    return (
        <div className="bg-[#121212] border border-white/5">
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-bold uppercase tracking-widest">Client Management</h3>
                <button className="btn-primary !py-2 !px-6 !text-xs">ADD NEW CLIENT</button>
            </div>
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="p-8 bg-black/30 border border-white/5 flex items-center gap-6">
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black font-bold text-xl uppercase">C{i}</div>
                            <div>
                                <h4 className="text-white font-bold">Client Name {i}</h4>
                                <span className="text-text-muted text-xs uppercase tracking-widest">Premium Partner</span>
                                <button className="block mt-4 text-xs font-bold text-red-500 hover:underline">REMOVE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageClient;
