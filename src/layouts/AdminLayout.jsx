import { Outlet, Link } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-[#0A0A0A] text-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-[#121212] flex flex-col pt-10">
        <div className="px-8 mb-12">
          <Link to="/admin/dashboard" className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white flex items-center">
              <span className="text-primary mr-1">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l10 5v10l-10 5-10-5v-10l10-5zm0 2.3l-8 4v8.4l8 4 8-4v-8.4l-8-4z" /><path d="M12 7l6 3v4l-6 3-6-3v-4l6-3z" /></svg>
              </span>
              Buildarx
            </span>
            <span className="text-[8px] uppercase tracking-[3px] text-white/50 -mt-1 font-bold">Admin Panel</span>
          </Link>
        </div>

        <nav className="flex flex-col gap-2 px-4">
          <Link to="/admin/dashboard" className="px-4 py-3 rounded-sm hover:bg-white/5 transition-all text-sm font-bold tracking-wider flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v16zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v16z" /></svg>
            DASHBOARD
          </Link>
          <Link to="/admin/enquiries" className="px-4 py-3 rounded-sm hover:bg-white/5 transition-all text-sm font-bold tracking-wider flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            ENQUIRIES
          </Link>
          <Link to="/admin/gallery" className="px-4 py-3 rounded-sm hover:bg-white/5 transition-all text-sm font-bold tracking-wider flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            MANAGE GALLERY
          </Link>
          <Link to="/admin/clients" className="px-4 py-3 rounded-sm hover:bg-white/5 transition-all text-sm font-bold tracking-wider flex items-center gap-3">
            <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            MANAGE CLIENTS
          </Link>
        </nav>

        <div className="mt-auto p-8 border-t border-white/5">
          <button className="text-sm font-bold text-red-500 hover:text-red-400">LOGOUT</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 border-b border-white/5 bg-[#121212] flex items-center justify-between px-12">
          <h2 className="text-xl font-bold uppercase tracking-widest">Admin Overview</h2>
          <div className="flex items-center gap-6">
            <span className="text-text-muted text-sm">Welcome back, Admin</span>
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-black font-bold">A</div>
          </div>
        </header>

        {/* Content Area */}
        <section className="flex-1 overflow-y-auto p-12">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
