'use client';

import React from 'react';
import { LayoutDashboard, BarChart3, Sliders, History } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Sidebar = ({ activeSection, onSectionChange, systemName }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'diagnostics', label: 'Diagnostics', icon: BarChart3 },
    { id: 'control', label: 'Control', icon: Sliders },
    { id: 'historical', label: 'Historical Data', icon: History },
  ];

  const { isDark } = useTheme();

  // Dark mode palette (matches dashboard)
  const DK = {
    bg:      '#0c0c0d',
    surface: '#141415',
    border:  'rgba(255,255,255,0.06)',
    text1:   '#f0eeeb',
    text2:   'rgba(255,255,255,0.45)',
    text3:   'rgba(255,255,255,0.25)',
    amber:   '#d4a853',
  };

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-64 z-30 flex flex-col overflow-y-auto transition-all duration-300"
      style={isDark
        ? { background: DK.bg, borderRight: `0.5px solid ${DK.border}` }
        : { backgroundColor: '#1E2535', borderRight: '1px solid rgba(255,255,255,0.1)' }
      }
    >
      {/* Logo Section */}
      <Link
        href="/dashboard"
        className="flex items-center justify-center px-4 py-4 shrink-0 hover:bg-white/5 transition-colors"
        style={isDark
          ? { borderBottom: `0.5px solid ${DK.border}` }
          : { borderBottom: '1px solid rgba(255,255,255,0.1)' }
        }
      >
        <img
          src="/images/Janta_Power_Business_Card_Logo.jpeg"
          alt="Janta Power"
          className="w-full max-w-[180px] h-auto object-contain"
        />
      </Link>

      {/* Navigation */}
      <nav className="flex flex-col p-4 pt-6">
        {/* Section label */}
        <span
          className="px-3 pb-3 text-xs font-bold uppercase tracking-widest"
          style={isDark ? { color: DK.text3 } : { color: 'rgba(148,163,184,1)' }}
        >
          System
        </span>

        <div className="flex flex-col gap-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            if (isDark) {
              return (
                <button
                  key={item.id}
                  onClick={() => onSectionChange(item.id)}
                  className="flex items-center gap-3 w-full text-left cursor-pointer transition-colors"
                  style={{
                    padding: '10px 14px',
                    borderRadius: 6,
                    background: isActive ? 'rgba(212,168,83,0.08)' : 'transparent',
                    borderTop: 'none',
                    borderRight: 'none',
                    borderBottom: 'none',
                    borderLeft: isActive ? `2px solid ${DK.amber}` : '2px solid transparent',
                    color: isActive ? DK.text1 : DK.text2,
                    fontSize: 13,
                    fontWeight: isActive ? 500 : 400,
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  <Icon
                    style={{
                      width: 16, height: 16, flexShrink: 0,
                      color: isActive ? DK.amber : DK.text3,
                    }}
                  />
                  <span>{item.label}</span>
                </button>
              );
            }

            // Light mode (original)
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`
                  flex items-center gap-3 px-4 py-2.5 rounded-lg
                  transition-all duration-200 ease-out
                  font-medium text-sm
                  relative overflow-hidden group text-left w-full
                  ${isActive
                    ? 'bg-teal-600/30 text-teal-300 border-l-4 border-teal-400 pl-3'
                    : 'text-slate-300 hover:bg-white/10 hover:text-white'
                  }
                `}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                  aria-hidden="true"
                />
                <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${isActive ? 'scale-110 text-teal-400' : 'group-hover:scale-110'}`} />
                <span className="relative z-10">{item.label}</span>
                {isActive && <span className="absolute right-3 w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft" />}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      <div
        className="mt-auto p-4"
        style={isDark
          ? { borderTop: `0.5px solid ${DK.border}` }
          : { borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }
        }
      >
        <p
          className="text-xs font-medium truncate"
          style={isDark ? { color: DK.text3 } : { color: 'rgba(148,163,184,1)' }}
        >
          {systemName || 'System'}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
