import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-8">
            <div className="w-full max-w-md bg-[#121212] border border-white/5 p-12">
                <div className="text-center mb-12">
                    <Link to="/" className="flex flex-col items-center mb-8">
                        <span className="text-3xl font-bold tracking-tighter text-white flex items-center">
                            <span className="text-primary mr-1">
                                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 5v10l-10 5-10-5v-10l10-5zm0 2.3l-8 4v8.4l8 4 8-4v-8.4l-8-4z" /><path d="M12 7l6 3v4l-6 3-6-3v-4l6-3z" /></svg>
                            </span>
                            Buildarx
                        </span>
                        <span className="text-[10px] uppercase tracking-[5px] text-white/50 -mt-2 font-bold">Construction</span>
                    </Link>
                    <h2 className="text-xl font-bold uppercase tracking-[4px]">Admin Portal</h2>
                </div>

                <form className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary font-bold">Username</label>
                        <input type="text" className="bg-black border border-white/10 p-4 text-white outline-none focus:border-primary transition-all" placeholder="admin" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest text-primary font-bold">Password</label>
                        <input type="password" className="bg-black border border-white/10 p-4 text-white outline-none focus:border-primary transition-all" placeholder="********" />
                    </div>
                    <Link to="/admin/dashboard" className="btn-primary !py-5 justify-center text-lg mt-4">
                        LOGIN ACCESS
                    </Link>
                </form>

                <p className="mt-12 text-center text-text-muted text-xs">
                    &copy; 2026 Buildarx Admin Panel. All rights reserved.
                </p>
            </div>
        </div>
    );
};

export default Login;
