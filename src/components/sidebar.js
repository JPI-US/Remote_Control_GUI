"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
    Layout, 
    BarChart, 
    Activity, 
    Settings, 
    User, 
    Settings as Gear, 
    Sun 
} from 'lucide-react';

export default function Sidebar() {
    const pathname = usePathname();
    
    // Extract powerID from pathname if it exists
    const getPowerId = () => {
        const match = pathname.match(/\/(dashboard|historical)\/([^\/]+)/);
        return match ? match[2] : '';
    };
    
    const powerID = getPowerId();
    
    const isActive = (path) => {
        if (path === '/dashboard' || path === '/historical') {
            return pathname.startsWith(path);
        }
        return pathname === path;
    };
    
    const systemLinks = [
        { 
            name: 'Dashboard', 
            path: powerID ? `/dashboard/${powerID}` : '/towerselect', 
            icon: Layout 
        },
        { 
            name: 'Historical Data', 
            path: powerID ? `/historical/${powerID}` : '/towerselect', 
            icon: BarChart 
        },
        { 
            name: 'Diagnostics', 
            path: '/towerselect', 
            icon: Activity 
        },
        { 
            name: 'Controls', 
            path: '/towerselect', 
            icon: Settings 
        },
    ];
    
    const accountLinks = [
        { 
            name: 'Profile', 
            path: '/profile', 
            icon: User 
        },
        { 
            name: 'User Settings', 
            path: '/settings', 
            icon: Gear 
        },
        { 
            name: 'PV System', 
            path: '/towerselect', 
            icon: Sun 
        },
    ];
    
    return (
        <div className="fixed left-0 top-0 h-screen w-64 bg-[#1e293b] text-white flex flex-col z-50">
            {/* Logo Section */}
            <div className="p-6 border-b border-gray-700 flex items-center justify-center bg-white">
                <img
                    src="/images/Logo Type_Black Sun 2.png"
                    alt="Janta logo"
                    className="max-w-[12em] max-h-[12em] w-auto h-auto object-contain"
                />
            </div>
            
            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto py-4">
                {/* SYSTEM Section */}
                <div className="mb-6">
                    <h2 className="px-6 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        SYSTEM
                    </h2>
                    <nav className="mt-2">
                        {systemLinks.map((link) => {
                            const Icon = link.icon;
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                                        active
                                            ? 'bg-[#334155] text-white border-l-4 border-blue-500'
                                            : 'text-gray-300 hover:bg-[#334155] hover:text-white'
                                    }`}
                                >
                                    <Icon className="mr-3 h-5 w-5" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
                
                {/* ACCOUNT Section */}
                <div className="mb-6">
                    <h2 className="px-6 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        ACCOUNT
                    </h2>
                    <nav className="mt-2">
                        {accountLinks.map((link) => {
                            const Icon = link.icon;
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                                        active
                                            ? 'bg-[#334155] text-white border-l-4 border-blue-500'
                                            : 'text-gray-300 hover:bg-[#334155] hover:text-white'
                                    }`}
                                >
                                    <Icon className="mr-3 h-5 w-5" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </div>
    );
}
