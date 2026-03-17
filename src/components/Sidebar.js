'use client';

import React from 'react';
import { LayoutDashboard, BarChart3, Sliders, History } from 'lucide-react';
import Link from 'next/link';

const Sidebar = ({ activeSection, onSectionChange, systemName }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'diagnostics', label: 'Diagnostics', icon: BarChart3 },
    { id: 'control', label: 'Control', icon: Sliders },
    { id: 'historical', label: 'Historical Data', icon: History },
  ];

  return (
    <aside
      style={{ backgroundColor: '#1E2535' }}
      className="fixed left-0 top-0 bottom-0 w-64 z-30 flex flex-col overflow-y-auto border-r border-white/10 transition-all duration-300"
    >
      {/* Logo Section */}
      <Link
        href="/dashboard"
        className="flex items-center justify-center px-4 py-4 shrink-0 border-b border-white/10 hover:bg-white/5 transition-colors"
      >
        <img
          src="/images/Janta_Power_Business_Card_Logo.jpeg"
          alt="Janta Power"
          className="w-full max-w-[180px] h-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col gap-6 p-4 pt-6">
        <div className="flex flex-col gap-2">
          <span className="px-3 pb-2 text-xs font-bold uppercase tracking-widest text-slate-400">
            System
          </span>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg
                    transition-all duration-200 ease-out
                    font-medium text-sm
                    relative overflow-hidden group text-left w-full
                    ${
                      isActive
                        ? 'bg-teal-600/30 text-teal-300 border-l-4 border-teal-400 pl-3'
                        : 'text-slate-300 hover:bg-white/10 hover:text-white'
                    }
                  `}
                >
                  {/* Shimmer on hover */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                    aria-hidden="true"
                  />

                  {/* Icon */}
                  <Icon
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                      isActive ? 'scale-110 text-teal-400' : 'group-hover:scale-110'
                    }`}
                  />

                  {/* Label */}
                  <span className="relative z-10">{item.label}</span>

                  {/* Active pulse dot */}
                  {isActive && (
                    <span
                      className="absolute right-3 w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-white/10 bg-white/5">
        <p className="text-xs font-medium text-slate-400 truncate">
          {systemName || 'System'}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
