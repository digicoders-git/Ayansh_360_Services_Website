import React from 'react';

const ManageGallery = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="bg-[#121212] border border-white/5 p-8 flex justify-between items-center">
                <h3 className="text-xl font-bold uppercase tracking-widest">Gallery Management</h3>
                <button className="btn-primary !py-2 !px-6 !text-xs">ADD NEW IMAGE</button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                    <div key={i} className="group relative aspect-square bg-[#121212] border border-white/5 overflow-hidden">
                        <img
                            src={`https://images.unsplash.com/photo-1541913057-22102a3e7407?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80&sig=${i}`}
                            alt="Gallery"
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-all"
                        />
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center gap-4">
                            <button className="text-red-500 font-bold text-xs uppercase hover:underline">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageGallery;
