"use client";
import React from 'react';
import { useEffect, useLayoutEffect, useRef, useState, useMemo, useCallback } from "react";
import { useRouter } from 'next/navigation';
import {
    Menu, X, Moon, Sun, LayoutDashboard, BarChart3, Sliders, History,
    Droplets, Thermometer, Zap, Globe, Check, RotateCcw, Power, Home,
    Sun as SunIcon, Wind, Activity, Gauge, Cpu, Wifi, SolarPanel,
    ChevronRight,
} from "lucide-react";
import Link from 'next/link';
import { useSystem } from '@/hooks/useSystem';
import { useSession } from '@/hooks/useSession';
import { useTheme } from '@/context/ThemeContext';
import "@/lib/chart";
import "@/lib/line";
import { Bar, Line } from "react-chartjs-2";
import TowerModelViewer from "@/components/TowerModelViewer";
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-luxon';
import { DateTime } from "luxon";
import Sidebar from '@/components/Sidebar';
import EnergyFlowPanel from '@/components/EnergyFlowPanel';

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

// Light mode palette (unchanged)
const SIDEBAR_BG = "#374151";
const MAIN_BG = "#F7F5F2";
const CARD_BG = "#FFFFFF";
const ACCENT_GREEN = "#4A9E78";
const ORANGE = "#F3B664";
const TITLE_COLOR = "#3D2E1E";
const TEXT_MUTED = "#8B7A68";

// Warm energy system palette — light mode
const WM = {
    bg:         "#F7F5F2",   // warm cream atmosphere
    section1:   "#F7F5F2",   // tower status zone
    section2:   "#F2F0EC",   // today at a glance — slightly deeper
    section3:   "#F7F5F2",   // diagnostics
    label:      "#8B7355",   // warm brown-gray section labels
    title:      "#3D2E1E",   // warm dark brown page title
    body:       "#4A3728",   // warm body text
    muted:      "#A8978A",   // warm muted text
    amber:      "#E8A020",   // primary energy amber
    green:      "#4A9E78",   // soft warm green for sustainability
    blue:       "#7BAFD4",   // sky blue — warm-toned, not cold
    pill:       "#F2F0EC",   // pill / tag backgrounds
};

// SwiftUI-style card for light mode — pronounced directional shadow for depth
const LT_CARD = {
    background: "#FFFFFF",
    borderRadius: 20,
    boxShadow: "0 4px 6px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
    border: "1px solid rgba(0,0,0,0.04)",
};

// Dark mode palette — Rivian-inspired
const DK = {
    bg:       "#14110f",
    surface:  "rgba(28,24,20,0.85)",
    surface2: "rgba(34,30,25,0.9)",
    border:   "rgba(255,245,235,0.07)",
    border2:  "rgba(255,245,235,0.12)",
    text1:    "#f5f0ea",
    text2:    "rgba(245,240,234,0.6)",
    text3:    "rgba(245,240,234,0.38)",
    amber:    "#e6b85c",
    amberDim: "rgba(230,184,92,0.14)",
    green:    "rgba(74,222,128,0.75)",
    red:      "#ef4444",
    warmGray: "#a8a29e",
    earth:    "#8b7355",
};

// ── Theme token system ────────────────────────────────────────────────
// Single source of truth for both light and dark mode.
// All card UI should reference T.* instead of DK.* or WM.* directly.
function getTheme(isDark) {
    if (isDark) return {
        // Page backgrounds
        pageBg:      "#14110f",
        sectionBg:   "#14110f",
        section2Bg:  "#14110f",
        // Cards
        cardBg:      "rgba(28,24,20,0.85)",
        cardBorder:  "0.5px solid rgba(255,245,235,0.07)",
        cardShadow:  "none",
        cardRadius:  12,
        // Text hierarchy
        text1:       "#f5f0ea",
        text2:       "rgba(245,240,234,0.6)",
        text3:       "rgba(245,240,234,0.38)",
        label:       "rgba(245,240,234,0.38)",
        // Dividers
        border:      "rgba(255,245,235,0.07)",
        border2:     "rgba(255,245,235,0.12)",
        divider:     "rgba(255,245,235,0.07)",
        // Accents
        amber:       "#e6b85c",
        amberDim:    "rgba(230,184,92,0.14)",
        green:       "rgba(74,222,128,0.75)",
        // Gauge
        gaugeTrack:  "rgba(230,184,92,0.14)",
        gaugeRing:   "#e6b85c",
        // Charts
        chartBg:     "rgba(255,255,255,0.03)",
        chartGrid:   "rgba(255,255,255,0.04)",
        // Typography scale
        heroSize:    52,
        heroWeight:  200,
        statSize:    28,
        statWeight:  200,
        // Surface (alias for cardBg)
        surface:     "rgba(28,24,20,0.85)",
    };
    return {
        // Page backgrounds
        pageBg:      "#F7F5F2",
        sectionBg:   "#F7F5F2",
        section2Bg:  "#F2F2F2",
        // Cards
        cardBg:      "#FFFFFF",
        cardBorder:  "1px solid rgba(0,0,0,0.04)",
        cardShadow:  "0 4px 6px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06)",
        cardRadius:  20,
        // Text hierarchy
        text1:       "#5C4A38",
        text2:       "#8B7355",
        text3:       "#A8978A",
        label:       "#8B7355",
        // Dividers
        border:      "rgba(0,0,0,0.06)",
        border2:     "rgba(0,0,0,0.10)",
        divider:     "#e5e7eb",
        // Accents
        amber:       "#E8A020",
        amberDim:    "rgba(232,160,32,0.12)",
        green:       "#4A9E78",
        // Gauge
        gaugeTrack:  "#e5e7eb",
        gaugeRing:   "#F3B664",
        // Charts
        chartBg:     "#EFEFEF",
        chartGrid:   "#E0E0E0",
        // Typography scale
        heroSize:    52,
        heroWeight:  200,
        statSize:    28,
        statWeight:  200,
        // Surface (alias for cardBg)
        surface:     "#FFFFFF",
    };
}

// Helper: returns className string for a dark-mode-aware card
function dkCard(isDark, extraLight = "", extraDark = "") {
    if (isDark) return `rounded-xl border ${extraDark}`;
    return `bg-white rounded-2xl ${extraLight}`;
}

// Tiny sparkline component (dark mode only)
function Sparkline({ values = [], color = DK.amber, unit = "", startHour = 0 }) {
    const [hovered, setHovered] = React.useState(null);
    if (!values.length) return null;
    const w = 180, h = 48;
    const max = Math.max(...values, 0.001);
    const min = Math.min(...values, 0);
    const range = max - min || 0.001;
    const pts = values.map((v, i) => {
        const x = (i / Math.max(values.length - 1, 1)) * w;
        const y = h - ((v - min) / range) * (h - 4) - 2;
        return { x, y, v, i };
    });
    const ptsStr = pts.map(p => `${p.x},${p.y}`).join(" ");

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width * w;
        let closest = pts[0];
        pts.forEach(p => { if (Math.abs(p.x - relX) < Math.abs(closest.x - relX)) closest = p; });
        setHovered(closest);
    };

    const tooltipX = hovered ? Math.min(Math.max(hovered.x, 20), w - 20) : 0;
    const tooltipY = hovered ? Math.max(hovered.y - 14, 8) : 0;
    const hour = hovered ? (startHour + hovered.i) % 24 : 0;
    const label = hour === 0 ? "12 AM" : hour < 12 ? `${hour} AM` : hour === 12 ? "12 PM" : `${hour - 12} PM`;

    return (
        <div style={{ position: "relative" }}>
            <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
                style={{ overflow: "visible", display: "block", cursor: "crosshair" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setHovered(null)}
            >
                <polyline points={ptsStr} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                {hovered && <>
                    <line x1={hovered.x} y1={0} x2={hovered.x} y2={h}
                        stroke={color} strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
                    <circle cx={hovered.x} cy={hovered.y} r="3" fill={color} opacity="0.9" />
                    <rect x={tooltipX - 22} y={tooltipY - 13} width="44" height="24" rx="4"
                        fill="rgba(20,17,15,0.88)" stroke={color} strokeWidth="0.5" />
                    <text x={tooltipX} y={tooltipY - 3} textAnchor="middle" fontSize="9" fill={color} fontWeight="600">
                        {Math.round(hovered.v)}{unit}
                    </text>
                    <text x={tooltipX} y={tooltipY + 7} textAnchor="middle" fontSize="8" fill="rgba(245,240,234,0.5)">
                        {label}
                    </text>
                </>}
            </svg>
        </div>
    );
}

// Progress bar component (dark mode only)
function DkProgressBar({ value, max, color = DK.amber }) {
    const pct = Math.min(100, (value / Math.max(max, 0.001)) * 100);
    return (
        <div style={{ height: 3, background: DK.amberDim, borderRadius: 99, overflow: "hidden", width: "100%" }}>
            <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99, transition: "width 0.8s ease-out" }} />
        </div>
    );
}

export default function Dashboard() {
    const { session, user, loading } = useSession();
    const { isDark, toggleDark } = useTheme();
    const { system, froniusSystemId, loading: systemloading } = useSystem();
    const router = useRouter();

    const MAX_PV_POWER = system?.max_pv_kw;
    const system_tz = system?.timezone;
    const chartDay = DateTime.now().setZone(system_tz).startOf("day");
    const SYSTEM_ID = froniusSystemId;

    const lat = system?.latitude;
    const lon = system?.longitude;

    const [pvPower, setPvPower] = useState(0);
    const [maxHourlyPower, setMaxHourlyPower] = useState(0);
    const [dailyProduction, setDailyProduction] = useState(null);
    const [hourlyProduction, setHourlyProduction] = useState(null);
    const [monthlyProduction, setMonthlyProduction] = useState(null);
    const [yearlyProduction, setYearlyProduction] = useState(null);
    const [totalProduction, setTotalProduction] = useState(null);
    // Flow data — from /FlowData endpoint
    const [gridPower, setGridPower] = useState(0);
    const [gridImport, setGridImport] = useState(false);
    const [loadPower, setLoadPower] = useState(0);
    const [battSoc, setBattSoc] = useState(null);
    const [hasBattery, setHasBattery] = useState(false);
    const [battChargePower, setBattChargePower] = useState(null);
    const intervalRef = useRef(null);
    const intervalRef1 = useRef(null);

    // ── Live poll (every 10 s): live power + flow ──────────────────────────
    useEffect(() => {
        if (!SYSTEM_ID) return;
        async function fetchLive() {
            try {
                const response = await fetch(`/api/fronius?systemId=${SYSTEM_ID}`, { cache: "no-store" });
                if (!response.ok) return;
                const json = await response.json();

                // Live power
                const live = json.data?.live;
                if (live?.pvPower != null) setPvPower(live.pvPower);

                // Flow data (grid, load, battery) — more up-to-date pvPower wins
                const flow = json.data?.flow;
                if (flow) {
                    setGridPower(flow.gridPower ?? 0);
                    setGridImport(flow.gridImport ?? false);
                    setLoadPower(flow.loadPower ?? 0);
                    setBattSoc(flow.battSoc ?? null);
                    setHasBattery(flow.hasBattery ?? false);
                    setBattChargePower(flow.battChargePower ?? null);
                    if (flow.pvPower != null) setPvPower(flow.pvPower);
                }
            } catch (error) { console.error('Live fetch error:', error); }
        }
        fetchLive();
        intervalRef.current = setInterval(fetchLive, 10000);
        return () => clearInterval(intervalRef.current);
    }, [SYSTEM_ID]);

    const powerPercent = MAX_PV_POWER > 0
        ? Math.min(Math.max(pvPower / MAX_PV_POWER, 0), 1)
        : 0;
    const safePowerPercent = Number.isFinite(powerPercent) ? powerPercent : 0;
    const dashOffset = CIRCUMFERENCE * (1 - safePowerPercent);
    const pvPowerKw = pvPower / 1000;

    // ── Production poll (every 5 min): all chart / historical data in one call ──
    useEffect(() => {
        if (!SYSTEM_ID) return;
        async function fetchProduction() {
            try {
                const res = await fetch(`/api/fronius?systemId=${SYSTEM_ID}`, { cache: "no-store" });
                if (!res.ok) return;
                const json = await res.json();

                setDailyProduction(json.data?.dailyproduction ?? null);
                setMonthlyProduction(json.data?.monthlyproduction ?? null);
                setYearlyProduction(json.data?.yearlyproduction ?? null);
                setTotalProduction(json.data?.total ?? null);

                const energyData = json.data?.hourlyproduction ?? null;
                setHourlyProduction(energyData);
                setMaxHourlyPower(
                    energyData?.values?.length
                        ? Math.round(Math.max(...energyData.values) / 1000)
                        : 0
                );
            } catch (error) { console.error('Production fetch error:', error); }
        }
        fetchProduction();
        intervalRef1.current = setInterval(fetchProduction, 300000);
        return () => clearInterval(intervalRef1.current);
    }, [SYSTEM_ID]);

    const todaysProduction = useMemo(() => {
        if (!dailyProduction || !system_tz) return null;
        const systemDay = DateTime.now().setZone(system_tz).day;
        return dailyProduction.values[systemDay - 1] ?? null;
    }, [dailyProduction, system_tz]);

    const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const monthLabels = monthlyProduction?.labels
        ? monthlyProduction.labels.map(m => MONTH_NAMES[m - 1])
        : MONTH_NAMES;

    const fullDayLabels = [];
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m += 5) {
            fullDayLabels.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
        }
    }

    const fullDayDates = fullDayLabels.map(label => {
        const [hh, mm] = label.split(":").map(Number);
        return chartDay.plus({ hours: hh, minutes: mm }).toUTC().toJSDate();
    });

    const datasetPoints = (hourlyProduction?.labels ?? []).map((utcLabel, i) => {
        const [hh, mm] = utcLabel.split(":").map(Number);
        const utcTime = chartDay.setZone("utc", { keepLocalTime: true }).set({ hour: hh, minute: mm, second: 0, millisecond: 0 });
        return { x: utcTime.setZone(system_tz).toJSDate(), y: hourlyProduction.values[i] };
    });

    const [weather, setWeather] = useState(null);
    const [weatherLoading, setweatherLoading] = useState(true);
    const [weatherError, SetweatherError] = useState(null);
    useEffect(() => {
        if (!lat || !lon) return;
        const controller = new AbortController();
        async function fetchWeather() {
            try {
                setweatherLoading(true);
                SetweatherError(null);
                const res = await fetch(`/api/weather?lat=${lat}&lon=${lon}`, { signal: controller.signal });
                if (!res.ok) { const data = await res.json(); throw new Error(data.error || "Failed to fetch weather data"); }
                const data = await res.json();
                if (!data || !data.current) throw new Error("Weather data missing current values");
                setWeather(data);
            } catch (err) {
                if (err.name !== "AbortError") { SetweatherError(err.message); }
            } finally { setweatherLoading(false); }
        }
        fetchWeather();
        const interval = setInterval(fetchWeather, 10 * 60 * 1000);
        return () => { clearInterval(interval); controller.abort(); };
    }, [lat, lon]);

    const weatherUI = {
        Sunny: { icon: '☀️', title: 'Clear Sky', message: 'Perfect for solar generation' },
        'Mostly Sunny': { icon: '🌤️', title: 'Mostly Sunny', message: 'Great solar conditions' },
        'Partly Sunny': { icon: '🌤️', title: 'Partly Sunny', message: 'Moderate solar conditions' },
        'Partly Cloudy': { icon: '⛅', title: 'Partly Cloudy', message: 'Moderate solar output expected' },
        'Mostly Cloudy': { icon: '⛅', title: 'Mostly Cloudy', message: 'Reduced solar output expected' },
        Cloudy: { icon: '☁️', title: 'Cloudy', message: 'Reduced solar efficiency' },
        'Slight Chance Rain Showers': { icon: '☁️', title: 'Cloudy', message: 'Reduced solar efficiency' },
        Rain: { icon: '🌧️', title: 'Rainy', message: 'Low solar generation expected' },
        Thunderstorms: { icon: '⛈️', title: 'Stormy', message: 'Solar generation disrupted' },
        default: { icon: '🌡️', title: 'Weather Update', message: 'Conditions are changing' },
    };

    const condition = weather?.current?.condition;
    const weatherDisplay = weatherUI[condition] || weatherUI.default;

    const [menuOpen, setMenuOpen] = useState(false);
    const [isNarrow, setIsNarrow] = useState(false);
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mq = window.matchMedia('(max-width: 1000px)');
        setIsNarrow(mq.matches);
        const handler = (e) => setIsNarrow(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);
    const [tempUnit, setTempUnit] = useState(() => {
        if (typeof window !== 'undefined') return localStorage.getItem('tempUnit') || 'F';
        return 'F';
    });
    const toDisplayTemp = (celsius) => {
        if (celsius == null || celsius === '—') return '—';
        if (tempUnit === 'F') return Math.round(celsius * 9/5 + 32);
        return celsius;
    };
    const tempSymbol = tempUnit === 'F' ? '°F' : '°C';
    const toggleTempUnit = () => setTempUnit(prev => {
        const next = prev === 'F' ? 'C' : 'F';
        if (typeof window !== 'undefined') localStorage.setItem('tempUnit', next);
        return next;
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [autonomousMode, setAutonomousMode] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [selectedTowerIndex, setSelectedTowerIndex] = useState(0);
    const [historicalPeriod, setHistoricalPeriod] = useState("monthly");
    const [isWide, setIsWide] = useState(false);
    const mainScrollRef = useRef(null);
    const section1Ref = useRef(null);
    const diagnosticsRef = useRef(null);
    const controlRef = useRef(null);
    const historicalRef = useRef(null);
    const [activeSection, setActiveSection] = useState("dashboard");

    const currentTime = useMemo(() =>
        DateTime.now().setZone(system_tz || "America/Chicago").toFormat("hh:mm:ss a"),
        [system_tz]
    );
    const carbonSaved = useMemo(() =>
        totalProduction != null ? (totalProduction * 0.37).toFixed(2) : "0",
        [totalProduction]
    );

    useEffect(() => {
        const count = system?.towers?.length ?? 0;
        if (count > 0 && selectedTowerIndex >= count) setSelectedTowerIndex(count - 1);
    }, [system?.towers?.length, selectedTowerIndex]);

    const scrollToSection = (ref, pathWithHash) => {
        const mainEl = mainScrollRef.current;
        const sectionEl = ref?.current;
        if (mainEl && sectionEl) {
            const mainRect = mainEl.getBoundingClientRect();
            const sectionRect = sectionEl.getBoundingClientRect();
            mainEl.scrollTo({ top: mainEl.scrollTop + (sectionRect.top - mainRect.top), behavior: "smooth" });
        } else if (sectionEl) {
            sectionEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (pathWithHash && typeof window !== "undefined") window.history.replaceState(null, "", pathWithHash);
    };

    useEffect(() => {
        if (typeof window === "undefined") return;
        const hash = window.location.hash;
        const id = setTimeout(() => {
            if (hash === "#diagnostics") scrollToSection(diagnosticsRef, "/dashboard#diagnostics");
            else if (hash === "#control") scrollToSection(controlRef, "/dashboard#control");
            else if (hash === "#historical") scrollToSection(historicalRef, "/dashboard#historical");
        }, 200);
        return () => clearTimeout(id);
    }, []);

    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash;
            if (hash === "#diagnostics") { scrollToSection(diagnosticsRef, "/dashboard#diagnostics"); setActiveSection("diagnostics"); }
            else if (hash === "#control") { scrollToSection(controlRef, "/dashboard#control"); setActiveSection("control"); }
            else if (hash === "#historical") { scrollToSection(historicalRef, "/dashboard#historical"); setActiveSection("historical"); }
            else setActiveSection("dashboard");
        };
        const h = window.location.hash;
        if (h === "#diagnostics") setActiveSection("diagnostics");
        else if (h === "#control") setActiveSection("control");
        else if (h === "#historical") setActiveSection("historical");
        else setActiveSection("dashboard");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    const SECTIONS = useMemo(() => [
        { ref: section1Ref, id: "dashboard" },
        { ref: diagnosticsRef, id: "diagnostics" },
        { ref: controlRef, id: "control" },
        { ref: historicalRef, id: "historical" },
    ], []);

    const scrollSpyUpdateRef = useRef(null);
    const updateActiveFromScroll = useCallback(() => {
        const THRESHOLD = 160;
        let bestId = "dashboard", bestTop = -Infinity;
        let fallbackId = "dashboard", fallbackTop = -Infinity;
        for (const { ref: r, id } of SECTIONS) {
            const el = r?.current;
            if (!el) continue;
            const top = el.getBoundingClientRect().top;
            if (top <= THRESHOLD && top > bestTop) { bestTop = top; bestId = id; }
            if (top < window.innerHeight && top > fallbackTop) { fallbackTop = top; fallbackId = id; }
        }
        const next = bestTop > -Infinity ? bestId : fallbackId;
        setActiveSection((prev) => (next === prev ? prev : next));
    }, [SECTIONS]);
    scrollSpyUpdateRef.current = updateActiveFromScroll;

    const scrollSpyHandler = useCallback(() => { scrollSpyUpdateRef.current?.(); }, []);
    const setMainRef = useCallback((el) => {
        if (mainScrollRef.current && !el) mainScrollRef.current.removeEventListener("scroll", scrollSpyHandler);
        mainScrollRef.current = el;
        if (el) { el.addEventListener("scroll", scrollSpyHandler, { passive: true }); scrollSpyUpdateRef.current?.(); }
    }, [scrollSpyHandler]);

    useLayoutEffect(() => {
        if (!system?.id) return;
        updateActiveFromScroll();
    }, [system?.id, updateActiveFromScroll]);

    if (loading || systemloading) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl">Loading...</p>;
    }
    if (!session) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl">Unauthorized...</p>;
    }
    if (!system) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl">No system data found...</p>;
    }
    if (!user) {
        return <p>User not found or not logged in</p>;
    }

    const angle = system?.towers?.[0]?.current_angle ?? "N/A";
    const angleNum = !isNaN(parseFloat(angle)) ? parseFloat(angle).toFixed(2) : "—";
    const towerCount = system?.towers?.length ?? 0;
    const selectedTower = system?.towers?.[selectedTowerIndex];
    const orientationAngle = selectedTower?.current_angle ?? null;
    const orientationAngleNum = !isNaN(parseFloat(orientationAngle)) ? parseFloat(orientationAngle).toFixed(2) : "—";
    const towerRotationDeg = !isNaN(parseFloat(orientationAngle)) ? parseFloat(orientationAngle) : 0;
    const getDirection = (deg) => {
        const d = parseFloat(deg);
        if (isNaN(d)) return "—";
        if (d >= 67.5  && d < 112.5) return "East";
        if (d >= 112.5 && d < 157.5) return "South-East";
        if (d >= 157.5 && d < 202.5) return "South";
        if (d >= 202.5 && d < 247.5) return "South-West";
        if (d >= 247.5 && d < 292.5) return "West";
        return "South";
    };
    const towerDirection = getDirection(angleNum);
    const powerPercentDisplay = MAX_PV_POWER > 0 ? Math.min(100, (pvPowerKw / (MAX_PV_POWER / 1000)) * 100) : 0;
    const canAccessControlPanel = session?.role === "ADMIN" || session?.planTier === "COMMERCIAL";

    // Sensor data for diagnostics
    const sensors = [
        { name: "Light Sensor", description: "Sun tracking and positioning", Icon: SunIcon, color: "#d4a853" },
        { name: "Relay", description: "Power distribution and switching system", Icon: Zap, color: "#a78bfa" },
        { name: "Atmospheric Pressure Sensor", description: "Environmental pressure monitoring", Icon: Activity, color: "#7BAFD4" },
        { name: "Humidity Sensor", description: "Moisture detection and monitoring", Icon: Droplets, color: "#7BAFD4" },
        { name: "Temperature Sensor", description: "Heat monitoring and thermal control", Icon: Thermometer, color: "#f97316" },
        { name: "Limit Switches", description: "Safety controls and position limits", Icon: Gauge, color: "#94a3b8" },
    ];

    // Control actions
    const controlActions = [
        { id: "start",   label: "Start",   description: "Power on tower and start automated tracking", Icon: Power,     lightCls: "bg-[#4A9E78] hover:bg-[#238276] focus:ring-[#2A9D8F]" },
        { id: "restart", label: "Restart", description: "Reboot tower systems and all components",     Icon: RotateCcw, lightCls: "bg-[#F3B664] hover:bg-[#e0a04d] focus:ring-[#F3B664]" },
        { id: "stop",    label: "Stop",    description: "Emergency stop all operations",               Icon: X,         lightCls: "bg-[#e57373] hover:bg-[#ef5350] focus:ring-[#e57373]" },
        { id: "reset",   label: "Reset",   description: "Reset tower to default factory settings",     Icon: RotateCcw, lightCls: "bg-[#b91c1c] hover:bg-[#991b1b] focus:ring-[#b91c1c]" },
        { id: "home",    label: "Home",    description: "Return tower to home position",               Icon: Home,      lightCls: "bg-[#374151] hover:bg-[#4b5563] focus:ring-[#374151]" },
    ];

    // ─── Shared style helpers ───────────────────────────────────────────────
    const sectionLabel = isDark
        ? { fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: DK.text3 }
        : {};
    const sectionLabelCls = isDark ? "" : "text-sm font-bold uppercase tracking-wider text-[#5C4A38]";

    // Resolved theme tokens for this render
    const T = getTheme(isDark);

    const GAUGE_R = isDark ? 54 : RADIUS;
    const GAUGE_CIRC = 2 * Math.PI * GAUGE_R;
    const gaugeDashOffset = GAUGE_CIRC * (1 - safePowerPercent);

    return (
        <div
            className="flex flex-col h-screen overflow-hidden w-full"
            style={{ background: T.pageBg, color: T.text1, WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale", textRendering: "optimizeLegibility" }}
        >
            <div className="flex flex-1 min-h-0">
                <Sidebar activeSection={activeSection} onSectionChange={(id) => {
                    setActiveSection(id);
                    const refMap = { dashboard: section1Ref, diagnostics: diagnosticsRef, control: controlRef, historical: historicalRef };
                    scrollToSection(refMap[id], `/dashboard${id !== "dashboard" ? "#" + id : ""}`);
                }} systemName={system?.system_name} isNarrow={isNarrow} />

                <div className="flex-1 flex flex-col min-w-0 min-h-0" style={{ marginLeft: isNarrow ? 0 : 256, background: T.pageBg }}>
                    <main ref={setMainRef} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory pb-0 md:pb-0 [.mobile_&]:pb-16">
        {/* ── Header ── */}
                        <header
                            className="flex items-center justify-between px-6 py-4"
                            style={isDark
                                ? {
                                    background: "rgba(20,17,15,0.75)",
                                    borderBottom: `0.5px solid ${DK.border}`,
                                  }
                                : {
                                    background: "linear-gradient(to right, rgba(26,37,53,0.96) 0%, rgba(26,37,53,0.80) 25%, rgba(26,37,53,0.45) 55%, rgba(242,242,242,0.0) 100%)",
                                    borderBottom: "1px solid rgba(26,37,53,0.15)",
                                  }
                            }
                        >

                            <p
                                className="text-sm font-medium"
                                style={isDark ? { color: DK.text2 } : { color: "rgba(245,235,220,0.9)" }}
                            >
                                {system?.system_name || "System"} • {currentTime}
                            </p>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    aria-label={isDark ? "Light mode" : "Dark mode"}
                                    className="p-2 rounded-lg transition-colors"
                                    style={isDark ? { color: DK.text2 } : { color: "#2F3E4D" }}
                                    onClick={toggleDark}
                                >
                                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                                <button
                                    type="button"
                                    aria-label="Menu"
                                    className="p-2 rounded-lg transition-colors cursor-pointer"
                                    style={isDark ? { color: DK.text2 } : { color: "#2F3E4D" }}
                                    onClick={() => setMenuOpen(!menuOpen)}
                                >
                                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                                </button>
                            </div>
                        </header>


                        {/* ════════════════════════════════════════
                            SECTION 1 — Tower Status + Today at a Glance
                        ════════════════════════════════════════ */}
                        <section
                            ref={section1Ref}
                            className="py-10 px-8 pb-6"
                            id="section-1"
                            style={{ background: T.sectionBg }}
                        >
                            {/* TOWER STATUS label */}
                            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.text3, marginBottom: 20 }}>Tower Status</p>

                            {/* ── Tower Status Cards ── */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

                                {/* Card 1: Power Output */}
                                <div
                                    className="rounded-xl flex flex-col items-center p-6 justify-between"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
                                        <div className="flex flex-col items-center z-10 gap-1">
                                            <span style={{ fontSize: T.heroSize, fontWeight: T.heroWeight, color: T.text1, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                {pvPowerKw.toFixed(2)}
                                            </span>
                                            <span style={{ fontSize: 14, fontWeight: 400, color: T.text3, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                                kilowatts
                                            </span>
                                        </div>
                                        <svg className="absolute" width={200} height={200} viewBox="0 0 120 120">
                                            <circle cx="60" cy="60" r={GAUGE_R} fill="transparent" stroke={T.gaugeTrack} strokeWidth="6" />
                                            <circle
                                                cx="60" cy="60" r={GAUGE_R}
                                                fill="transparent"
                                                stroke={T.gaugeRing}
                                                strokeWidth="6"
                                                strokeDasharray={GAUGE_CIRC}
                                                strokeDashoffset={gaugeDashOffset}
                                                strokeLinecap="round"
                                                transform="rotate(-90 60 60)"
                                                style={{ transition: "stroke-dashoffset 1s ease-out" }}
                                            />
                                        </svg>
                                    </div>
                                    <div className="w-full mt-5 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p style={{ fontSize: 13, color: T.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Daily Total</p>
                                            <p style={{ fontSize: 15, fontWeight: 300, color: T.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</p>
                                        </div>
                                        <div style={{ width: "0.5px", background: T.border, alignSelf: "stretch" }} />
                                        <div className="text-center">
                                            <p style={{ fontSize: 13, color: T.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Peak Today</p>
                                            <p style={{ fontSize: 15, fontWeight: 300, color: T.text1 }}>{maxHourlyPower} kW</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2: Tower Angle */}
                                <div
                                    className="rounded-xl flex flex-col items-center p-6 justify-between"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="relative flex items-center justify-center" style={{ width: 220, height: 220 }}>
                                        <svg className="absolute" width={220} height={220} viewBox="0 0 220 220">
                                            <circle cx="110" cy="110" r="100" fill="none"
                                                stroke={T.border2} strokeWidth="1"
                                                strokeDasharray="3 6" strokeLinecap="round" />
                                        </svg>
                                        {isDark ? (
                                            <div style={{
                                                width: "220px", height: "220px",
                                                backgroundImage: "url('/images/White_with_Yellow_Sun_Fix.png')",
                                                backgroundSize: "420px",
                                                backgroundPosition: "52% -60%",
                                                backgroundRepeat: "no-repeat",
                                                position: "relative", zIndex: 10,
                                            }} />
                                        ) : (
                                            <img src="/images/tower_Design.svg" alt="Tower"
                                                className="object-contain relative z-10"
                                                style={{ width: 160, height: 160 }} />
                                        )}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: T.text3, marginBottom: 8 }}>Direction</p>
                                        <p style={{ fontSize: 20, fontWeight: 300, color: T.text1, lineHeight: 1, letterSpacing: "0.02em" }}>{towerDirection}</p>
                                    </div>
                                    <div className="w-full mt-4 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p style={{ fontSize: 13, color: T.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Tower Angle</p>
                                            <p style={{ fontSize: 15, fontWeight: 300, color: T.text1 }}>{angleNum}°</p>
                                        </div>
                                        <div style={{ width: "0.5px", background: T.border, alignSelf: "stretch" }} />
                                        <div className="text-center">
                                            <p style={{ fontSize: 13, color: T.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Elevation</p>
                                            <p style={{ fontSize: 15, fontWeight: 300, color: T.text1 }}>32°</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3: System Health */}
                                <div
                                    className="rounded-xl overflow-hidden"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <span style={{ fontSize: 13, fontWeight: 500, color: T.text1 }}>System Health</span>
                                        <span className="flex items-center gap-1.5" style={{ fontSize: 13, color: T.green, fontWeight: 600, letterSpacing: "0.08em" }}>
                                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, display: "inline-block" }} />
                                            All nominal
                                        </span>
                                    </div>
                                    {["Inverter", "Motor", "Sensors", "Network", "PV Panels"].map((item, i, arr) => (
                                        <div
                                            key={item}
                                            className="flex items-center justify-between px-5 py-3"
                                            style={i < arr.length - 1 ? { borderBottom: `0.5px solid ${T.border}` } : {}}
                                        >
                                            <span style={{ fontSize: 13, color: T.text2 }}>{item}</span>
                                            <span style={{ width: 6, height: 6, borderRadius: "50%", background: T.green, display: "inline-block" }} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* TODAY AT A GLANCE label */}
                            <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.text3, marginBottom: 20 }}>Today at a Glance</p>

                            {/* ── Environmental + Performance row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                                {/* Environmental */}
                                <div className="rounded-xl overflow-hidden"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 pt-4 pb-3 flex items-center justify-between" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.text3 }}>Environmental</p>
                                        <button
                                            type="button"
                                            onClick={toggleTempUnit}
                                            className="flex items-center rounded-full overflow-hidden"
                                            style={{ border: `0.5px solid ${T.border2}`, fontSize: 11, fontWeight: 600 }}
                                            aria-label="Toggle temperature unit"
                                        >
                                            <span style={{ padding: "2px 7px", background: tempUnit === "F" ? T.amber : "transparent", color: tempUnit === "F" ? (isDark ? "#000" : "#fff") : T.text3, transition: "all 0.2s" }}>°F</span>
                                            <span style={{ padding: "2px 7px", background: tempUnit === "C" ? T.amber : "transparent", color: tempUnit === "C" ? (isDark ? "#000" : "#fff") : T.text3, transition: "all 0.2s" }}>°C</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="px-5 py-4" style={{ borderRight: `0.5px solid ${T.border}` }}>
                                            <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Humidity</p>
                                            <p style={{ fontSize: T.statSize, fontWeight: T.statWeight, color: T.text1, lineHeight: 1 }}>
                                                {weather?.current?.humidity ?? "—"}<span style={{ fontSize: 14, fontWeight: 300, color: T.text2 }}>%</span>
                                            </p>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Temperature</p>
                                            <p style={{ fontSize: T.statSize, fontWeight: T.statWeight, color: T.text1, lineHeight: 1 }}>
                                                {toDisplayTemp(weather?.current?.temp)}<span style={{ fontSize: 14, fontWeight: 300, color: T.text2 }}>{tempSymbol}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4">
                                        <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 10 }}>Today&apos;s Conditions</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Sparkline
                                                    values={weather?.hourly?.slice(0, 24).map(h => h.humidity ?? 0) ?? [weather?.current?.humidity ?? 0]}
                                                    color="#7BAFD4" unit="%" startHour={new Date().getHours()}
                                                />
                                                <p style={{ fontSize: 11, color: T.text3, marginTop: 4 }}>Updated {currentTime}</p>
                                            </div>
                                            <div>
                                                <Sparkline
                                                    values={weather?.hourly?.slice(0, 24).map(h => toDisplayTemp(h.temp) ?? 0) ?? [toDisplayTemp(weather?.current?.temp) ?? 0]}
                                                    color="#f97316" unit={tempSymbol} startHour={new Date().getHours()}
                                                />
                                                <p style={{ fontSize: 11, color: T.text3, marginTop: 4 }}>Feels like {toDisplayTemp((weather?.current?.temp ?? 15) - 2)}{tempSymbol}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance */}
                                <div className="rounded-xl overflow-hidden"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <p className="px-5 pt-4 pb-3" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: T.text3, borderBottom: `0.5px solid ${T.border}` }}>
                                        Performance
                                    </p>
                                    <div className="grid grid-cols-2" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="px-5 py-4" style={{ borderRight: `0.5px solid ${T.border}` }}>
                                            <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Daily Peak</p>
                                            <p style={{ fontSize: T.statSize, fontWeight: T.statWeight, color: T.text1, lineHeight: 1 }}>{maxHourlyPower} <span style={{ fontSize: 14, fontWeight: 300, color: T.text2 }}>kW</span></p>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Power Output</p>
                                            <p style={{ fontSize: T.statSize, fontWeight: T.statWeight, color: T.text1, lineHeight: 1 }}>{powerPercentDisplay.toFixed(1)}<span style={{ fontSize: 14, fontWeight: 300, color: T.text2 }}>%</span></p>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4">
                                        <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.10em", marginBottom: 10 }}>Hourly Output</p>
                                        <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 48 }}>
                                            {Array.from({ length: 24 }, (_, i) => {
                                                const hourVal = hourlyProduction?.values?.[Math.floor(i * (hourlyProduction.values.length / 24))] ?? 0;
                                                const maxVal = Math.max(...(hourlyProduction?.values ?? [1]), 1);
                                                const h = Math.max(3, (hourVal / maxVal) * 48);
                                                const isNow = i === new Date().getHours();
                                                return (
                                                    <div key={i} style={{
                                                        flex: 1, height: h, borderRadius: 2,
                                                        background: isNow ? T.amber : (hourVal > 0 ? T.amberDim : T.amberDim),
                                                        opacity: isNow ? 1 : hourVal > 0 ? 0.5 : 0.2,
                                                        transition: "height 0.5s ease-out",
                                                    }} />
                                                );
                                            })}
                                        </div>
                                        <div className="flex justify-between mt-1" style={{ fontSize: 12, color: T.text3 }}>
                                            <span>0</span><span>6</span><span>12</span><span>18</span><span>now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── CO2 + Today's Data row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

                                {/* CO2 / Environmental Impact */}
                                <div className="rounded-xl p-6 flex flex-col justify-between"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius, minHeight: 200 }}
                                >
                                    <div>
                                        <p style={{ fontSize: 13, color: T.text3, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
                                            Environmental Impact
                                        </p>
                                        <p style={{ fontSize: 44, fontWeight: 200, color: T.amber, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                            {carbonSaved} <span style={{ fontSize: 20, fontWeight: 300 }}>kg CO₂</span>
                                        </p>
                                        <p style={{ fontSize: 14, color: T.text3, marginTop: 8 }}>Carbon saved since installation</p>
                                    </div>
                                    <p style={{ fontSize: 14, color: T.text2, marginTop: 16, marginBottom: 12 }}>
                                        ≈ {Math.round(carbonSaved / 21)} trees planted · {Math.round(carbonSaved * 4.3)} km not driven
                                    </p>
                                    <div>
                                        <div className="flex justify-between mb-2" style={{ fontSize: 13, color: T.text3 }}>
                                            <span>Monthly goal</span>
                                            <span>{Math.min(carbonSaved, 50)} / 50 kg</span>
                                        </div>
                                        <DkProgressBar value={Math.min(parseFloat(carbonSaved), 50)} max={50} color={T.amber} />
                                    </div>
                                </div>

                                {/* Today's Data chart */}
                                <div className="rounded-xl p-5"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius, minHeight: 200 }}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <p style={{ fontSize: 13, fontWeight: 500, color: T.text1 }}>Today&apos;s Data</p>
                                        <p style={{ fontSize: 13, color: T.text3, letterSpacing: "0.08em" }}>Hourly production</p>
                                    </div>
                                    {hourlyProduction?.values?.length && fullDayDates?.length ? (
                                        <div style={{ height: 180 }}>
                                            <Line
                                                data={{
                                                    datasets: [{
                                                        label: "Power (KW)",
                                                        data: datasetPoints.map((p) => ({ x: p.x, y: (p.y || 0) / 1000 })),
                                                        borderColor: T.amber,
                                                        backgroundColor: isDark ? "transparent" : T.amberDim,
                                                        fill: isDark ? false : "start",
                                                        borderWidth: 1.5,
                                                        pointRadius: 0,
                                                        tension: 0.3,
                                                    }],
                                                }}
                                                options={{
                                                    responsive: true,
                                                    maintainAspectRatio: false,
                                                    scales: {
                                                        x: {
                                                            type: "time",
                                                            adapters: { date: { zone: system_tz } },
                                                            min: fullDayDates[0],
                                                            max: fullDayDates[fullDayDates.length - 1],
                                                            grid: { display: false },
                                                            border: { display: false },
                                                            ticks: { color: T.text3, font: { size: 12 } },
                                                        },
                                                        y: {
                                                            beginAtZero: true,
                                                            grid: { color: T.chartGrid, drawBorder: false },
                                                            border: { display: false },
                                                            ticks: { color: T.text3, font: { size: 12 } },
                                                        },
                                                    },
                                                    plugins: { legend: { display: false } },
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <p style={{ fontSize: 14, color: T.text3 }}>Loading chart data...</p>
                                        </div>
                                    )}
                                    <div className="flex justify-between mt-3 pt-3" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div>
                                            <span style={{ fontSize: 13, color: T.text3 }}>Peak  </span>
                                            <span style={{ fontSize: 14, fontWeight: 300, color: T.text1 }}>{maxHourlyPower} kW</span>
                                        </div>
                                        <div>
                                            <span style={{ fontSize: 13, color: T.text3 }}>Today  </span>
                                            <span style={{ fontSize: 14, fontWeight: 300, color: T.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* ════════════════════════════════════════
                            SECTION 2 — Diagnostics + Controls + Historical
                        ════════════════════════════════════════ */}
                        <section
                            ref={diagnosticsRef}
                            className="py-10 px-8 pt-8 scroll-mt-24"
                            id="diagnostics"
                            style={isDark ? { background: DK.bg } : { background: "#F2F2F2" }}
                        >
                            {/* Section label */}
                            {isDark ? (
                                <p style={{ ...sectionLabel, marginBottom: 16 }}>System Diagnostics</p>
                            ) : (
                                <h2 className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: WM.label, marginBottom: "20px" }}>System Diagnostics</h2>
                            )}

                            {/* ── Diagnostics ── */}
                            {isDark ? (
                                !isWide ? (
                                    /* Compact flat list — small/medium screens */
                                    <div
                                        className="rounded-xl overflow-hidden mb-6"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        {sensors.map((s, i) => (
                                            <div
                                                key={s.name}
                                                className="flex items-center px-5 py-4"
                                                style={i > 0 ? { borderTop: `0.5px solid ${DK.border}` } : {}}
                                            >
                                                <s.Icon style={{ width: 15, height: 15, color: s.color, opacity: 0.7, flexShrink: 0, marginRight: 14 }} />
                                                <div className="flex-1 min-w-0">
                                                    <p style={{ fontSize: 13, color: DK.text1, fontWeight: 400 }}>{s.name}</p>
                                                    <p style={{ fontSize: 14, color: DK.text3, marginTop: 1 }}>{s.description}</p>
                                                </div>
                                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: DK.green, flexShrink: 0 }} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    /* 2×3 grid cards — large screens */
                                    <div className="grid grid-cols-2 gap-3 mb-6">
                                        {sensors.map((s) => (
                                            <div
                                                key={s.name}
                                                className="rounded-xl flex items-start gap-4 p-5"
                                                style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                            >
                                                <div style={{
                                                    width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                                                    background: `${s.color}14`,
                                                    border: `0.5px solid ${s.color}40`,
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                }}>
                                                    <s.Icon style={{ width: 20, height: 20, color: s.color, opacity: 0.85 }} />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p style={{ fontSize: 13, fontWeight: 500, color: DK.text1 }}>{s.name}</p>
                                                    <p style={{ fontSize: 14, color: DK.text3, marginTop: 4, lineHeight: 1.5 }}>{s.description}</p>
                                                </div>
                                                <div style={{
                                                    display: "flex", alignItems: "center", gap: 5,
                                                    padding: "4px 10px", borderRadius: 99, flexShrink: 0,
                                                    background: "rgba(74,222,128,0.08)",
                                                    border: "0.5px solid rgba(74,222,128,0.2)",
                                                }}>
                                                    <span style={{ width: 5, height: 5, borderRadius: "50%", background: DK.green }} />
                                                    <span style={{ fontSize: 13, fontWeight: 600, color: DK.green, letterSpacing: "0.06em" }}>Online</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            ) : (
                                /* Light: original grid of cards */
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                                    {[
                                        { name: "Light Sensor", description: "Sun tracking and positioning" },
                                        { name: "Relay", description: "Power distribution and switching system" },
                                        { name: "Atmospheric Pressure Sensor", description: "Environmental pressure monitoring" },
                                        { name: "Humidity Sensor", description: "Moisture detection and monitoring" },
                                        { name: "Temperature Sensor", description: "Heat monitoring and thermal control" },
                                        { name: "Limit Switches", description: "Safety controls and position limits" },
                                    ].map((item) => (
                                        <div key={item.name} className="bg-white rounded-2xl p-4 flex items-center justify-between gap-4" style={LT_CARD}>
                                            <div>
                                                <h3 className="font-semibold text-[#5C4A38]">{item.name}</h3>
                                                <p className="text-sm text-[#A8978A] mt-0.5">{item.description}</p>
                                            </div>
                                            <span className="flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-full text-sm font-medium text-[#4A9E78]" style={{ backgroundColor: WM.pill }}>
                                                <span className="w-2 h-2 rounded-full bg-[#4A9E78]" /> Online
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* ── System Controls ── */}
                            <div ref={controlRef} id="control" className="scroll-mt-24">
                                {isDark ? (
                                    <>
                                        <p style={{ ...sectionLabel, marginBottom: 16, marginTop: 32 }}>System Controls</p>
                                        <EnergyFlowPanel
                                            pvPower={pvPower}
                                            gridPower={gridPower}
                                            gridImport={gridImport}
                                            loadPower={loadPower}
                                            battSoc={battSoc}
                                            hasBattery={hasBattery}
                                            battChargePower={battChargePower}
                                            todaysProduction={todaysProduction}
                                            maxHourlyPower={maxHourlyPower}
                                            towerCount={towerCount}
                                            selectedTowerIndex={selectedTowerIndex}
                                            onTowerSelect={setSelectedTowerIndex}
                                            towerRotationDeg={towerRotationDeg}
                                            orientationAngleNum={orientationAngleNum}
                                            canAccessControlPanel={canAccessControlPanel}
                                            autonomousMode={autonomousMode}
                                            setAutonomousMode={setAutonomousMode}
                                            maintenanceMode={maintenanceMode}
                                            setMaintenanceMode={setMaintenanceMode}
                                            controlActions={controlActions}
                                            isDark={isDark}
                                            systemTimezone={system_tz}
                                            isCommercial={true}
                                            // isCommercial={session?.planTier === "COMMERCIAL" || session?.role === "ADMIN"}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-xs font-medium uppercase tracking-widest mt-10 mb-4" style={{ color: WM.label, marginTop: "56px" }}>System Controls</h2>
                                        <EnergyFlowPanel
                                            pvPower={pvPower}
                                            gridPower={gridPower}
                                            gridImport={gridImport}
                                            loadPower={loadPower}
                                            battSoc={battSoc}
                                            hasBattery={hasBattery}
                                            battChargePower={battChargePower}
                                            todaysProduction={todaysProduction}
                                            maxHourlyPower={maxHourlyPower}
                                            towerCount={towerCount}
                                            selectedTowerIndex={selectedTowerIndex}
                                            onTowerSelect={setSelectedTowerIndex}
                                            towerRotationDeg={towerRotationDeg}
                                            orientationAngleNum={orientationAngleNum}
                                            canAccessControlPanel={canAccessControlPanel}
                                            autonomousMode={autonomousMode}
                                            setAutonomousMode={setAutonomousMode}
                                            maintenanceMode={maintenanceMode}
                                            setMaintenanceMode={setMaintenanceMode}
                                            controlActions={controlActions}
                                            isDark={false}
                                            systemTimezone={system_tz}
                                            isCommercial={true}
                                        />
                                    </>
                                )}
                            </div>


                            {/* ── Historical Data ── */}
                            <div ref={historicalRef} id="historical" className="scroll-mt-24">
                                {isDark ? (
                                    <p style={{ ...sectionLabel, marginBottom: 16, marginTop: 32 }}>Historical Data</p>
                                ) : (
                                    <h2 className="text-xs font-medium uppercase tracking-widest mt-10 mb-4" style={{ color: WM.label, marginTop: "56px" }}>Historical Data</h2>
                                )}

                                {isDark ? (
                                    <div
                                        className="rounded-xl overflow-hidden mb-6"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        <div className="px-5 py-4 flex items-center justify-between" style={{ borderBottom: `0.5px solid ${DK.border}` }}>
                                            <div>
                                                <p style={{ fontSize: 13, fontWeight: 500, color: DK.text1 }}>Historical Power Data</p>
                                                <p style={{ fontSize: 14, color: DK.text3, marginTop: 2 }}>Energy produced over time</p>
                                            </div>
                                            {/* Period toggles */}
                                            <div className="flex items-center gap-1">
                                                {[{ id: "monthly", label: "Monthly" }, { id: "yearly", label: "Yearly" }, { id: "total", label: "Total" }].map(({ id, label }) => (
                                                    <button
                                                        key={id}
                                                        type="button"
                                                        onClick={() => setHistoricalPeriod(id)}
                                                        style={{
                                                            fontSize: 13, fontWeight: 500, padding: "5px 12px", borderRadius: 4, cursor: "pointer", transition: "all 0.15s",
                                                            background: historicalPeriod === id ? DK.amber : "transparent",
                                                            color: historicalPeriod === id ? "#000" : DK.text2,
                                                            border: `0.5px solid ${historicalPeriod === id ? DK.amber : DK.border}`,
                                                        }}
                                                    >
                                                        {label}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="p-5" style={{ minHeight: 300 }}>
                                            {historicalPeriod === "monthly" && dailyProduction?.values?.length > 0 && (
                                                <div style={{ height: 260 }}>
                                                    <Bar
                                                        data={{
                                                            labels: (dailyProduction.labels || dailyProduction.values.map((_, i) => i + 1)).slice(0, dailyProduction.values.length),
                                                            datasets: [{ label: "Energy (kWh)", data: (dailyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: DK.amber, borderRadius: 3, barPercentage: 0.8, categoryPercentage: 0.9 }],
                                                        }}
                                                        options={{
                                                            responsive: true, maintainAspectRatio: false,
                                                            scales: {
                                                                y: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.04)", drawBorder: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                                x: { grid: { display: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                            },
                                                            plugins: { legend: { display: false } },
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            {historicalPeriod === "yearly" && monthlyProduction?.values?.length > 0 && (
                                                <div style={{ height: 260 }}>
                                                    <Bar
                                                        data={{
                                                            labels: monthLabels.slice(0, (monthlyProduction.values || []).length),
                                                            datasets: [{ label: "Energy (kWh)", data: (monthlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: DK.amber, borderRadius: 3, barPercentage: 0.8, categoryPercentage: 0.9 }],
                                                        }}
                                                        options={{
                                                            responsive: true, maintainAspectRatio: false,
                                                            scales: {
                                                                y: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.04)", drawBorder: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                                x: { grid: { display: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                            },
                                                            plugins: { legend: { display: false } },
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            {historicalPeriod === "total" && yearlyProduction?.values?.length > 0 && (
                                                <div style={{ height: 260 }}>
                                                    <Bar
                                                        data={{
                                                            labels: (yearlyProduction.labels || yearlyProduction.values.map((_, i) => `${i + 1}`)).slice(0, (yearlyProduction.values || []).length),
                                                            datasets: [{ label: "Energy (MWh)", data: (yearlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: DK.amber, borderRadius: 3, barPercentage: 0.4, categoryPercentage: 0.5 }],
                                                        }}
                                                        options={{
                                                            responsive: true, maintainAspectRatio: false,
                                                            scales: {
                                                                y: { beginAtZero: true, grid: { color: "rgba(255,255,255,0.04)", drawBorder: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                                x: { grid: { display: false }, border: { display: false }, ticks: { color: DK.text3, font: { size: 13 } } },
                                                            },
                                                            plugins: { legend: { display: false } },
                                                        }}
                                                    />
                                                </div>
                                            )}
                                            {((historicalPeriod === "monthly" && !dailyProduction?.values?.length) || (historicalPeriod === "yearly" && !monthlyProduction?.values?.length) || (historicalPeriod === "total" && !yearlyProduction?.values?.length)) && (
                                                <div style={{ height: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                    <p style={{ fontSize: 14, color: DK.text3 }}>Loading chart data...</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-6 mb-6" style={{ ...LT_CARD, boxShadow: "0 4px 8px rgba(0,0,0,0.06), 0 12px 32px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.08)" }}>
                                        <h3 className="text-base font-medium text-[#5C4A38]">Historical Power Data</h3>
                                        <p className="text-sm text-[#A8978A] mt-0.5 mb-4">Energy produced over time</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {[{ id: "monthly", label: "Monthly" }, { id: "yearly", label: "Yearly" }, { id: "total", label: "Total" }].map(({ id, label }) => (
                                                <button
                                                    key={id} type="button" onClick={() => setHistoricalPeriod(id)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${historicalPeriod === id ? "bg-[#F3B664] text-white" : "text-[#5C4A38] hover:bg-[#E8E0D4]"}`}
                                                    style={historicalPeriod === id ? {} : { backgroundColor: WM.pill }}
                                                >{label}</button>
                                            ))}
                                        </div>
                                        <div className="rounded-xl p-4" style={{ backgroundColor: "#EFEFEF", minHeight: "280px" }}>
                                            {historicalPeriod === "monthly" && dailyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: (dailyProduction.labels || dailyProduction.values.map((_, i) => i + 1)).slice(0, dailyProduction.values.length), datasets: [{ label: "Energy (kWh)", data: (dailyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E0E0E0" } }, x: { grid: { display: false }, title: { display: true, text: "Day" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {historicalPeriod === "yearly" && monthlyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: monthLabels.slice(0, (monthlyProduction.values || []).length), datasets: [{ label: "Energy (kWh)", data: (monthlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E0E0E0" } }, x: { grid: { display: false }, title: { display: true, text: "Month" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {historicalPeriod === "total" && yearlyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: (yearlyProduction.labels || yearlyProduction.values.map((_, i) => `${i + 1}`)).slice(0, (yearlyProduction.values || []).length), datasets: [{ label: "Energy (MWh)", data: (yearlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.4, categoryPercentage: 0.5 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (MWh)" }, grid: { color: "#E0E0E0" } }, x: { grid: { display: false }, title: { display: true, text: "Year" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {((historicalPeriod === "monthly" && !dailyProduction?.values?.length) || (historicalPeriod === "yearly" && !monthlyProduction?.values?.length) || (historicalPeriod === "total" && !yearlyProduction?.values?.length)) && (
                                                <p className="text-sm text-[#A8978A] py-12 text-center">Loading chart data...</p>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <div
                    className="fixed top-24 right-6 w-56 rounded-lg shadow-lg py-2 z-50"
                    style={isDark
                        ? { background: DK.surface, border: `0.5px solid ${DK.border2}` }
                        : { background: "#fff", border: "1px solid #d1d5db" }
                    }
                >
                    <p className="px-4 py-2 text-base font-semibold" style={isDark ? { color: DK.text1 } : { color: TITLE_COLOR }}>{user?.name || "Guest"}</p>
                    <div style={isDark ? { borderTop: `0.5px solid ${DK.border}` } : { borderTop: "1px solid #e5e7eb" }} aria-hidden />
                    <Link href="/settings" className="block px-4 py-2 text-sm transition-colors"
                        style={isDark ? { color: DK.text2 } : { color: TITLE_COLOR }}
                        onMouseEnter={e => { if (isDark) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={e => { if (isDark) e.currentTarget.style.background = "transparent"; }}
                        onClick={() => setMenuOpen(false)}>Settings</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm transition-colors"
                        style={isDark ? { color: DK.text2 } : { color: TITLE_COLOR }}
                        onMouseEnter={e => { if (isDark) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={e => { if (isDark) e.currentTarget.style.background = "transparent"; }}
                        onClick={() => setMenuOpen(false)}>Contact us</Link>
                    <button
                        onClick={async () => {
                            try { await fetch("/api/logout", { method: "GET" }); window.location.href = "/?loggedout=true"; }
                            catch (err) { console.error("Logout failed:", err); }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer"
                        style={isDark ? { color: DK.text2, background: "transparent", border: "none" } : { color: TITLE_COLOR, background: "transparent", border: "none" }}
                        onMouseEnter={e => { if (isDark) e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                        onMouseLeave={e => { if (isDark) e.currentTarget.style.background = "transparent"; }}
                    >Log Out</button>
                </div>
            )}
        </div>
    );
}