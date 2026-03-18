'use client';

import React, { useState } from 'react';
import { LayoutDashboard, BarChart3, Sliders, History } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

const Sidebar = ({ activeSection, onSectionChange, systemName }) => {
  const navItems = [
    { id: 'dashboard',   label: 'Dashboard',     icon: LayoutDashboard },
    { id: 'diagnostics', label: 'Diagnostics',    icon: BarChart3 },
    { id: 'control',     label: 'Control',        icon: Sliders },
    { id: 'historical',  label: 'Historical Data', icon: History },
  ];

  const { isDark } = useTheme();
  const [hoveredId, setHoveredId] = useState(null);

  const DK = {
    bg:      '#14110f',
    surface: '#1c1814',
    border:  'rgba(255,245,235,0.07)',
    text1:   '#f5f0ea',
    text2:   'rgba(245,240,234,0.5)',
    text3:   'rgba(245,240,234,0.28)',
    amber:   '#e6b85c',
    amberDim:'rgba(230,184,92,0.12)',
  };

  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-64 z-30 flex flex-col overflow-y-auto"
      style={isDark
        ? { background: DK.bg, borderRight: `0.5px solid ${DK.border}` }
        : { backgroundColor: '#1a1510', borderRight: '1px solid rgba(255,255,255,0.1)' }
      }
    >
      {/* Logo */}
      <Link
        href="/dashboard"
        className="flex items-center justify-center px-4 py-4 shrink-0"
        style={{
          borderBottom: isDark
            ? `0.5px solid ${DK.border}`
            : '1px solid rgba(255,255,255,0.1)',
          transition: 'background 0.2s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(230,184,92,0.04)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
      >
        <img
          src="/images/Janta_Power_Business_Card_Logo.jpeg"
          alt="Janta Power"
          className="w-full max-w-[180px] h-auto object-contain"
        />
      </Link>

      {/* Nav */}
      <nav className="flex flex-col p-3 pt-5 gap-1">
        <span
          className="px-3 pb-3 text-xs font-bold uppercase tracking-widest"
          style={{ color: isDark ? DK.text3 : 'rgba(148,163,184,1)' }}
        >
          System
        </span>

        {navItems.map((item) => {
          const Icon  = item.icon;
          const isActive  = activeSection === item.id;
          const isHovered = hoveredId === item.id;

          if (isDark) {
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: 10,
                  cursor: 'pointer',
                  border: 'none',
                  fontSize: 13,
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? DK.text1 : isHovered ? DK.text1 : DK.text2,
                  background: isActive
                    ? DK.amberDim
                    : isHovered
                    ? 'rgba(245,240,234,0.04)'
                    : 'transparent',
                  boxShadow: isActive
                    ? `0 0 16px rgba(230,184,92,0.08)`
                    : isHovered
                    ? `0 0 10px rgba(230,184,92,0.04)`
                    : 'none',
                  transition: 'all 0.22s ease',
                  position: 'relative',
                }}
              >
                {/* Icon with scale animation */}
                <Icon style={{
                  width: 16, height: 16, flexShrink: 0,
                  color: isActive ? DK.amber : isHovered ? DK.text1 : DK.text3,
                  transform: isActive ? 'scale(1.1)' : isHovered ? 'scale(1.05)' : 'scale(1)',
                  transition: 'transform 0.2s ease, color 0.2s ease',
                }} />

                <span style={{ transition: 'color 0.2s ease' }}>{item.label}</span>

                {/* Active indicator dot — right side */}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    right: 12,
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: DK.amber,
                    boxShadow: `0 0 6px ${DK.amber}`,
                    opacity: 0.85,
                  }} />
                )}
              </button>
            );
          }

          // Light mode
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-lg
                transition-all duration-200 ease-out
                font-medium text-sm relative overflow-hidden group text-left w-full
                ${isActive
                  ? 'bg-teal-600/30 text-teal-300'
                  : 'text-slate-300 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"
                aria-hidden="true"
              />
              <Icon className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${
                isActive ? 'scale-110 text-teal-400' : 'group-hover:scale-110'
              }`} />
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <span className="absolute right-3 w-2 h-2 rounded-full bg-teal-400 animate-pulse-soft" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        className="mt-auto p-4"
        style={isDark
          ? { borderTop: `0.5px solid ${DK.border}` }
          : { borderTop: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)' }
        }
      >
        <p className="text-xs font-medium truncate"
          style={{ color: isDark ? DK.text3 : 'rgba(148,163,184,1)' }}>
          {systemName || 'System'}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;