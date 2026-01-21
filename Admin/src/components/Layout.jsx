import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, Folder, MessageSquare, LogOut, Sun, Moon, List } from 'lucide-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from './ThemeContext';

const Sidebar = () => {
    const location = useLocation();

    const menuItems = [
        { path: '/', icon: LayoutDashboard, label: 'Dashboard' },
        { path: '/services', icon: Sun, label: 'Services' },
        { path: '/projects', icon: Folder, label: 'Projects' },
        { path: '/products', icon: ShoppingBag, label: 'Products' },
        { path: '/categories', icon: List, label: 'Categories' },
        { path: '/inquiries', icon: MessageSquare, label: 'Inquiries' },
    ];

    return (
        <div className="w-64 bg-black/40 backdrop-blur-xl h-screen fixed left-0 top-0 flex flex-col z-20 border-r border-white/10 shadow-2xl transition-all duration-300">
            <div className="p-8 flex items-center justify-center border-b border-white/5">
                <Link to="/" className="text-2xl font-bold flex items-center gap-3 no-underline">
                    {/* Logo Mark: M in White Box */}
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg shadow-white/5">
                        <div className="flex items-center justify-center text-black font-bold text-xl">
                            M
                        </div>
                    </div>
                    {/* Text Mark */}
                    <div className="flex flex-col leading-none">
                        <span className="text-white text-2xl font-bold tracking-tight">mera<span className="text-[#00D084]">Solar</span></span>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {menuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group ${isActive
                                    ? 'bg-gradient-to-r from-[#00D084]/20 to-transparent text-[#00D084] border-l-2 border-[#00D084]'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            <item.icon size={20} className={isActive ? "drop-shadow-[0_0_8px_rgba(0,208,132,0.5)]" : "group-hover:text-white transition-colors"} />
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/5">
                <button className="flex items-center gap-3 px-4 py-3 w-full text-red-500 hover:bg-red-500/10 rounded-lg transition-colors">
                    <LogOut size={20} />
                    <span className="font-medium">Logout</span>
                </button>
            </div>
        </div>
    );
};

const Layout = ({ children }) => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="min-h-screen bg-background text-text-main transition-colors duration-300">
            <Sidebar />
            <div className="ml-64 p-8">
                <header className="mb-8 flex justify-between items-center bg-surface/50 backdrop-blur-md p-4 rounded-2xl border border-white/5 sticky top-4 z-10 shadow-lg">
                    <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Overview</h2>
                        <p className="text-gray-400 text-sm mt-1">Welcome back, Admin</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
                        >
                            {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D084] to-emerald-600 text-white flex items-center justify-center font-bold shadow-lg">
                            A
                        </div>
                    </div>
                </header>
                <main>{children}</main>
            </div>
            <ToastContainer position="bottom-right" theme="dark" />
        </div>
    );
};

export default Layout;
