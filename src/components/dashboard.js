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
const MAIN_BG = "#F2F2F2";
const CARD_BG = "#FFFFFF";
const ACCENT_GREEN = "#2A9D8F";
const ORANGE = "#F3B664";
const TITLE_COLOR = "#2F3E4D";
const TEXT_MUTED = "#6A7B8F";

// SwiftUI-style card for light mode — pronounced directional shadow for depth
const LT_CARD = {
    background: "#ffffff",
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

// Helper: returns className string for a dark-mode-aware card
function dkCard(isDark, extraLight = "", extraDark = "") {
    if (isDark) return `rounded-xl border ${extraDark}`;
    return `bg-white rounded-2xl ${extraLight}`;
}

// Tiny sparkline component (dark mode only)
function Sparkline({ values = [], color = DK.amber }) {
    if (!values.length) return null;
    const w = 120, h = 32;
    const max = Math.max(...values, 0.001);
    const pts = values.map((v, i) => {
        const x = (i / (values.length - 1)) * w;
        const y = h - (v / max) * (h - 4) - 2;
        return `${x},${y}`;
    }).join(" ");
    return (
        <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
            <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
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
    const powerPercentDisplay = MAX_PV_POWER > 0 ? Math.min(100, (pvPowerKw / (MAX_PV_POWER / 1000)) * 100) : 0;
    const canAccessControlPanel = session?.role === "ADMIN" || session?.planTier === "COMMERCIAL";

    // Sensor data for diagnostics
    const sensors = [
        { name: "Light Sensor", description: "Sun tracking and positioning", Icon: SunIcon, color: "#d4a853" },
        { name: "Relay", description: "Power distribution and switching system", Icon: Zap, color: "#a78bfa" },
        { name: "Atmospheric Pressure Sensor", description: "Environmental pressure monitoring", Icon: Activity, color: "#38bdf8" },
        { name: "Humidity Sensor", description: "Moisture detection and monitoring", Icon: Droplets, color: "#38bdf8" },
        { name: "Temperature Sensor", description: "Heat monitoring and thermal control", Icon: Thermometer, color: "#f97316" },
        { name: "Limit Switches", description: "Safety controls and position limits", Icon: Gauge, color: "#94a3b8" },
    ];

    // Control actions
    const controlActions = [
        { id: "start",   label: "Start",   description: "Power on tower and start automated tracking", Icon: Power,     lightCls: "bg-[#2A9D8F] hover:bg-[#238276] focus:ring-[#2A9D8F]" },
        { id: "restart", label: "Restart", description: "Reboot tower systems and all components",     Icon: RotateCcw, lightCls: "bg-[#F3B664] hover:bg-[#e0a04d] focus:ring-[#F3B664]" },
        { id: "stop",    label: "Stop",    description: "Emergency stop all operations",               Icon: X,         lightCls: "bg-[#e57373] hover:bg-[#ef5350] focus:ring-[#e57373]" },
        { id: "reset",   label: "Reset",   description: "Reset tower to default factory settings",     Icon: RotateCcw, lightCls: "bg-[#b91c1c] hover:bg-[#991b1b] focus:ring-[#b91c1c]" },
        { id: "home",    label: "Home",    description: "Return tower to home position",               Icon: Home,      lightCls: "bg-[#374151] hover:bg-[#4b5563] focus:ring-[#374151]" },
    ];

    // ─── Shared style helpers ───────────────────────────────────────────────
    const sectionLabel = isDark
        ? { fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: DK.text3 }
        : {};
    const sectionLabelCls = isDark ? "" : "text-sm font-bold uppercase tracking-wider text-[#2F3E4D]";

    const GAUGE_R = isDark ? 54 : RADIUS;
    const GAUGE_CIRC = 2 * Math.PI * GAUGE_R;
    const gaugeDashOffset = GAUGE_CIRC * (1 - safePowerPercent);

    return (
        <div
            className="flex flex-col h-screen overflow-hidden w-full text-[#2F3E4D] dark:text-gray-100"
            style={isDark ? { background: DK.bg } : { background: MAIN_BG }}
        >
            <div className="flex flex-1 min-h-0">
                <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} systemName={system?.system_name} />

                <div className="flex-1 flex flex-col min-w-0 min-h-0 ml-64" style={isDark ? { background: DK.bg } : {}}>
                    <main ref={setMainRef} className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
                        {/* ── Header ── */}
                        <header
                            className="flex items-center justify-between px-6 py-4"
                            style={isDark
                                ? {
                                    background: "rgba(20,17,15,0.75)",
                                    borderBottom: `0.5px solid ${DK.border}`,
                                  }
                                : {
                                    background: "linear-gradient(to right, rgba(42,28,18,0.92) 0%, rgba(62,42,26,0.75) 30%, rgba(80,58,36,0.45) 60%, rgba(242,242,242,0.6) 100%)",
                                    borderBottom: "1px solid rgba(42,28,18,0.18)",
                                  }
                            }
                        >
                            <img
                                src="/images/Janta_Power_Business_Card_Logo.jpeg"
                                alt="Janta Power"
                                className="h-14 w-auto min-w-[160px] object-contain md:h-16 md:min-w-[200px]"
                            />
                            <p
                                className="text-sm font-medium absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
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
                            className="py-6 px-6 pb-4"
                            id="section-1"
                            style={isDark ? { background: DK.bg } : { background: "#F2F2F2" }}
                        >
                            {/* Page title */}
                            {isDark ? (
                                <h1 style={{ fontSize: 14, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: DK.text3, marginBottom: 24 }}>
                                    {system.system_name}
                                </h1>
                            ) : (
                                <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] mb-4">{system.system_name}</h1>
                            )}

                            {/* TOWER STATUS label */}
                            {isDark ? (
                                <p style={{ ...sectionLabel, marginBottom: 16 }}>Tower Status</p>
                            ) : (
                                <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">Tower Status</h2>
                            )}

                            {/* ── Tower Status Cards ── */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

                                {/* Card 1: Power Output */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-1 rounded-xl flex flex-col items-center p-6"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        {/* Large gauge ring */}
                                        <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
                                            <div className="flex flex-col items-center z-10 gap-1">
                                                <span style={{ fontSize: 52, fontWeight: 200, color: DK.text1, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                    {pvPowerKw.toFixed(2)}
                                                </span>
                                                <span style={{ fontSize: 14, fontWeight: 400, color: DK.text3, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                                                    kilowatts
                                                </span>
                                            </div>
                                            <svg className="absolute" width={200} height={200} viewBox="0 0 120 120">
                                                <circle cx="60" cy="60" r={GAUGE_R} fill="transparent" stroke={DK.amberDim} strokeWidth="6" />
                                                <circle
                                                    cx="60" cy="60" r={GAUGE_R}
                                                    fill="transparent"
                                                    stroke={DK.amber}
                                                    strokeWidth="6"
                                                    strokeDasharray={GAUGE_CIRC}
                                                    strokeDashoffset={gaugeDashOffset}
                                                    strokeLinecap="round"
                                                    transform="rotate(-90 60 60)"
                                                    className={safePowerPercent > 0 ? "power-ring-active" : ""}
                                                    style={{ transition: "stroke-dashoffset 1s ease-out" }}
                                                />
                                            </svg>
                                        </div>
                                        {/* Stat footer */}
                                        <div className="w-full mt-5 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${DK.border}` }}>
                                            <div className="text-center">
                                                <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Daily Total</p>
                                                <p style={{ fontSize: 16, fontWeight: 300, color: DK.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</p>
                                            </div>
                                            <div style={{ width: "0.5px", background: DK.border, alignSelf: "stretch" }} />
                                            <div className="text-center">
                                                <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Peak Today</p>
                                                <p style={{ fontSize: 16, fontWeight: 300, color: DK.text1 }}>{maxHourlyPower} kW</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-[#2F3E4D]" style={LT_CARD}>
                                        <div className="relative w-40 h-40 flex items-center justify-center">
                                            <span className="text-2xl font-bold z-10">{pvPowerKw.toFixed(2)} KW</span>
                                            <svg className="w-40 h-40 absolute" viewBox="0 0 100 100">
                                                <circle cx="50" cy="50" r={RADIUS} fill="transparent" stroke="#e5e7eb" strokeWidth="8" />
                                                <circle cx="50" cy="50" r={RADIUS} fill="transparent" stroke={ORANGE} strokeWidth="8"
                                                    strokeDasharray={CIRCUMFERENCE} strokeDashoffset={dashOffset}
                                                    strokeLinecap="round" transform="rotate(-90 50 50)" className="transition-all duration-1000" />
                                            </svg>
                                        </div>
                                        <p className="mt-3 text-sm text-[#6A7B8F]">Current Power Output</p>
                                    </div>
                                )}

                                {/* Card 2: Tower Angle */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-2 rounded-xl flex flex-col items-center p-6"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        {/* Sweep track + rotating panel */}
                                        <div className="relative flex items-center justify-center" style={{ width: 140, height: 140 }}>
                                            {/* Dashed sweep arc */}
                                            <svg className="absolute" width={140} height={140} viewBox="0 0 140 140">
                                                <circle cx="70" cy="70" r="62" fill="none"
                                                    stroke={DK.border2} strokeWidth="1"
                                                    strokeDasharray="3 6" strokeLinecap="round" />
                                            </svg>
                                            <img src="/images/tower_Design.svg" alt="Tower"
                                                className="w-24 h-24 object-contain relative z-10"
                                                style={{ filter: "invert(1) opacity(0.7)" }} />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <p style={{ fontSize: 48, fontWeight: 200, color: DK.text1, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                {angleNum}<span style={{ fontSize: 24, fontWeight: 200 }}>°</span>
                                            </p>
                                            <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.15em", marginTop: 6 }}>Tower Angle</p>
                                        </div>
                                        {/* Footer stats */}
                                        <div className="w-full mt-4 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${DK.border}` }}>
                                            <div className="text-center">
                                                <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Azimuth</p>
                                                <p style={{ fontSize: 15, fontWeight: 300, color: DK.text1 }}>{angleNum}°</p>
                                            </div>
                                            <div style={{ width: "0.5px", background: DK.border, alignSelf: "stretch" }} />
                                            <div className="text-center">
                                                <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.10em", marginBottom: 4 }}>Elevation</p>
                                                <p style={{ fontSize: 15, fontWeight: 300, color: DK.text1 }}>32°</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-[#2F3E4D]" style={LT_CARD}>
                                        <div className="relative flex items-center justify-center">
                                            <img src="/images/tower_Design.svg" alt="Tower" className="w-32 h-32 object-contain" />
                                        </div>
                                        <p className="text-2xl font-bold text-[#2F3E4D] mt-2">{angleNum}°</p>
                                        <p className="text-sm text-[#6A7B8F]">Tower Angle</p>
                                    </div>
                                )}

                                {/* Card 3: System Health */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-3 rounded-xl overflow-hidden"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        {/* Header row */}
                                        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `0.5px solid ${DK.border}` }}>
                                            <span style={{ fontSize: 13, fontWeight: 500, color: DK.text1 }}>System Health</span>
                                            <span className="flex items-center gap-1.5" style={{ fontSize: 13, color: DK.green, fontWeight: 600, letterSpacing: "0.08em" }}>
                                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: DK.green, display: "inline-block" }} />
                                                All nominal
                                            </span>
                                        </div>
                                        {/* Flat rows */}
                                        {["Inverter", "Motor", "Sensors", "Network", "PV Panels"].map((item, i, arr) => (
                                            <div
                                                key={item}
                                                className="flex items-center justify-between px-5 py-3"
                                                style={i < arr.length - 1 ? { borderBottom: `0.5px solid ${DK.border}` } : {}}
                                            >
                                                <span style={{ fontSize: 13, color: DK.text2 }}>{item}</span>
                                                <span style={{ width: 6, height: 6, borderRadius: "50%", background: DK.green, display: "inline-block" }} />
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-6" style={LT_CARD}>
                                        <h3 className="text-sm font-bold text-[#2F3E4D] mb-3">System Health</h3>
                                        <ul className="space-y-2">
                                            {["Inverter", "Motor", "Sensors", "Network", "PV Panels"].map((item) => (
                                                <li key={item} className="flex items-center justify-between text-sm">
                                                    <span className="text-[#2F3E4D]">{item}</span>
                                                    <span className="flex items-center gap-1.5 text-[#2A9D8F] font-medium">
                                                        <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" /> FUNCTIONAL
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* TODAY AT A GLANCE label */}
                            {isDark ? (
                                <p style={{ ...sectionLabel, marginBottom: 16 }}>Today at a Glance</p>
                            ) : (
                                <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">Today at a Glance</h2>
                            )}

                            {/* ── Environmental + Performance row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                                {/* Environmental */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-1 rounded-xl overflow-hidden"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        <p className="px-5 pt-4 pb-3" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: DK.text3, borderBottom: `0.5px solid ${DK.border}` }}>
                                            Environmental
                                        </p>
                                        <div className="grid grid-cols-2">
                                            {/* Humidity */}
                                            <div className="flex flex-col px-5 py-5" style={{ borderRight: `0.5px solid ${DK.border}` }}>
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Droplets style={{ width: 16, height: 16, color: "#38bdf8", opacity: 0.7, flexShrink: 0 }} />
                                                    <span style={{ fontSize: 14, color: DK.text3 }}>Humidity</span>
                                                </div>
                                                <p style={{ fontSize: 40, fontWeight: 200, color: DK.text1, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                    {weather?.current?.humidity ?? "—"}<span style={{ fontSize: 20, fontWeight: 300 }}>%</span>
                                                </p>
                                                <div className="mt-3">
                                                    <Sparkline values={[22,24,23,25,24,26,25,weather?.current?.humidity ?? 24]} color="#38bdf8" />
                                                </div>
                                                <p style={{ fontSize: 13, color: DK.text3, marginTop: 6 }}>Updated {currentTime}</p>
                                            </div>
                                            {/* Temperature */}
                                            <div className="flex flex-col px-5 py-5">
                                                <div className="flex items-center gap-2 mb-3">
                                                    <Thermometer style={{ width: 16, height: 16, color: "#f97316", opacity: 0.7, flexShrink: 0 }} />
                                                    <span style={{ fontSize: 14, color: DK.text3 }}>Temperature</span>
                                                </div>
                                                <p style={{ fontSize: 40, fontWeight: 200, color: DK.text1, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                    {weather?.current?.temp ?? "—"}<span style={{ fontSize: 20, fontWeight: 300 }}>°C</span>
                                                </p>
                                                <div className="mt-3">
                                                    <Sparkline values={[12,13,14,14,15,15,14,weather?.current?.temp ?? 15]} color="#f97316" />
                                                </div>
                                                <p style={{ fontSize: 13, color: DK.text3, marginTop: 6 }}>Feels like {(weather?.current?.temp ?? 15) - 2}°C</p>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-4 flex flex-col min-h-[140px] relative overflow-hidden" style={LT_CARD}>
                                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 bg-[#d1d5db] z-10" style={{ width: "4px" }} aria-hidden />
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3 shrink-0">Environmental</h3>
                                        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                                            <div className="flex flex-col items-center justify-center text-center pr-4 min-h-0">
                                                <Droplets className="w-12 h-12 text-blue-400 mb-2" />
                                                <p className="text-2xl font-bold text-[#2F3E4D]">{weather?.current?.humidity ?? "—"}%</p>
                                                <p className="text-sm text-[#6A7B8F]">Humidity</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-center text-center pl-4 min-h-0">
                                                <Thermometer className="w-12 h-12 text-orange-500 mb-2" />
                                                <p className="text-2xl font-bold text-[#2F3E4D]">{weather?.current?.temp ?? "—"}°C</p>
                                                <p className="text-sm text-[#6A7B8F]">Temperature</p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Performance */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-2 rounded-xl overflow-hidden"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}
                                    >
                                        <p className="px-5 pt-4 pb-3" style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: DK.text3, borderBottom: `0.5px solid ${DK.border}` }}>
                                            Performance
                                        </p>
                                        {/* Two stats inline */}
                                        <div className="grid grid-cols-2" style={{ borderBottom: `0.5px solid ${DK.border}` }}>
                                            <div className="px-5 py-4" style={{ borderRight: `0.5px solid ${DK.border}` }}>
                                                <p style={{ fontSize: 13, color: DK.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Daily Peak</p>
                                                <p style={{ fontSize: 28, fontWeight: 200, color: DK.text1, lineHeight: 1 }}>{maxHourlyPower} <span style={{ fontSize: 14, fontWeight: 300, color: DK.text2 }}>kW</span></p>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p style={{ fontSize: 13, color: DK.text3, letterSpacing: "0.10em", marginBottom: 6 }}>Power Output</p>
                                                <p style={{ fontSize: 28, fontWeight: 200, color: DK.text1, lineHeight: 1 }}>{powerPercentDisplay.toFixed(1)}<span style={{ fontSize: 14, fontWeight: 300, color: DK.text2 }}>%</span></p>
                                            </div>
                                        </div>
                                        {/* Mini hourly bar chart */}
                                        <div className="px-5 py-4">
                                            <p style={{ fontSize: 13, color: DK.text3, letterSpacing: "0.10em", marginBottom: 10 }}>Hourly Output</p>
                                            <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 48 }}>
                                                {Array.from({ length: 24 }, (_, i) => {
                                                    const hourVal = hourlyProduction?.values?.[Math.floor(i * (hourlyProduction.values.length / 24))] ?? 0;
                                                    const maxVal = Math.max(...(hourlyProduction?.values ?? [1]), 1);
                                                    const h = Math.max(3, (hourVal / maxVal) * 48);
                                                    const currentHour = new Date().getHours();
                                                    const isNow = i === currentHour;
                                                    return (
                                                        <div
                                                            key={i}
                                                            style={{
                                                                flex: 1, height: h, borderRadius: 2,
                                                                background: isNow ? DK.amber : (hourVal > 0 ? "rgba(212,168,83,0.4)" : DK.amberDim),
                                                                transition: "height 0.5s ease-out",
                                                            }}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            <div className="flex justify-between mt-1" style={{ fontSize: 12, color: DK.text3 }}>
                                                <span>0</span><span>6</span><span>12</span><span>18</span><span>now</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-4 flex flex-col min-h-[140px] relative overflow-hidden" style={LT_CARD}>
                                        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 bg-[#d1d5db] z-10" style={{ width: "4px" }} aria-hidden />
                                        <h3 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3 shrink-0">Performance</h3>
                                        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                                            <div className="flex flex-col items-center justify-center text-center pr-4 min-h-0">
                                                <img src="/images/Battery%20charging.png" alt="Battery charging" className="w-12 h-12 object-contain mb-2" />
                                                <p className="text-2xl font-bold text-[#2F3E4D]">{maxHourlyPower} kW</p>
                                                <p className="text-sm text-[#6A7B8F]">Daily Peak</p>
                                            </div>
                                            <div className="flex flex-col items-center justify-center text-center pl-4 min-h-0">
                                                <Zap className="w-12 h-12 text-[#6A7B8F] mb-2" />
                                                <p className="text-2xl font-bold text-[#2F3E4D]">{powerPercentDisplay.toFixed(1)}%</p>
                                                <p className="text-sm text-[#6A7B8F]">Power Output</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* ── CO2 + Today's Data row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

                                {/* CO2 / Environmental Impact */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-3 rounded-xl p-6 flex flex-col justify-between"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}`, minHeight: 200 }}
                                    >
                                        <div>
                                            <p style={{ fontSize: 13, color: DK.text3, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
                                                Environmental Impact
                                            </p>
                                            <p style={{ fontSize: 44, fontWeight: 200, color: DK.amber, lineHeight: 1, letterSpacing: "-0.02em" }}>
                                                {carbonSaved} <span style={{ fontSize: 20, fontWeight: 300 }}>kg CO₂</span>
                                            </p>
                                            <p style={{ fontSize: 14, color: DK.text3, marginTop: 8 }}>Carbon saved since installation</p>
                                        </div>
                                        {/* Equivalencies */}
                                        <p style={{ fontSize: 14, color: DK.text2, marginTop: 16, marginBottom: 12 }}>
                                            ≈ {Math.round(carbonSaved / 21)} trees planted · {Math.round(carbonSaved * 4.3)} km not driven
                                        </p>
                                        {/* Progress bar */}
                                        <div>
                                            <div className="flex justify-between mb-2" style={{ fontSize: 13, color: DK.text3 }}>
                                                <span>Monthly goal</span>
                                                <span>{Math.min(carbonSaved, 50)} / 50 kg</span>
                                            </div>
                                            <DkProgressBar value={Math.min(parseFloat(carbonSaved), 50)} max={50} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-6 flex flex-row items-center justify-center gap-6 min-h-[240px]" style={LT_CARD}>
                                        <Globe className="w-24 h-24 text-[#2A9D8F] flex-shrink-0" />
                                        <div className="flex flex-col text-left min-w-0">
                                            <p className="text-base text-[#6A7B8F]">Environmental impact reduction</p>
                                            <p className="text-3xl font-bold text-[#2A9D8F] mt-1">{carbonSaved} kg CO2</p>
                                            <p className="text-lg text-[#2A9D8F]">Carbon Saved</p>
                                        </div>
                                    </div>
                                )}

                                {/* Today's Data chart */}
                                {isDark ? (
                                    <div
                                        className="dk-fade-in dk-fade-in-4 rounded-xl p-5"
                                        style={{ background: DK.surface, border: `0.5px solid ${DK.border}`, minHeight: 200 }}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <p style={{ fontSize: 13, fontWeight: 500, color: DK.text1 }}>Today&apos;s Data</p>
                                            <p style={{ fontSize: 13, color: DK.text3, letterSpacing: "0.08em" }}>Hourly production</p>
                                        </div>
                                        {hourlyProduction?.values?.length && fullDayDates?.length ? (
                                            <div style={{ height: 180 }}>
                                                <Line
                                                    data={{
                                                        datasets: [{
                                                            label: "Power (KW)",
                                                            data: datasetPoints.map((p) => ({ x: p.x, y: (p.y || 0) / 1000 })),
                                                            borderColor: DK.amber,
                                                            backgroundColor: "transparent",
                                                            fill: false,
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
                                                                ticks: { color: DK.text3, font: { size: 12 } },
                                                            },
                                                            y: {
                                                                beginAtZero: true,
                                                                grid: { color: "rgba(255,255,255,0.04)", drawBorder: false },
                                                                border: { display: false },
                                                                ticks: { color: DK.text3, font: { size: 12 } },
                                                            },
                                                        },
                                                        plugins: { legend: { display: false } },
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div style={{ height: 180, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                                <p style={{ fontSize: 14, color: DK.text3 }}>Loading chart data...</p>
                                            </div>
                                        )}
                                        {/* Footer peak/avg row */}
                                        <div className="flex justify-between mt-3 pt-3" style={{ borderTop: `0.5px solid ${DK.border}` }}>
                                            <div>
                                                <span style={{ fontSize: 13, color: DK.text3 }}>Peak  </span>
                                                <span style={{ fontSize: 14, fontWeight: 300, color: DK.text1 }}>{maxHourlyPower} kW</span>
                                            </div>
                                            <div>
                                                <span style={{ fontSize: 13, color: DK.text3 }}>Today  </span>
                                                <span style={{ fontSize: 14, fontWeight: 300, color: DK.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="bg-white rounded-2xl p-4 md:col-span-1" style={LT_CARD}>
                                        <h3 className="text-sm font-bold text-[#2F3E4D] mb-3">Today&apos;s Data</h3>
                                        {hourlyProduction?.values?.length && fullDayDates?.length ? (
                                            <div style={{ height: "200px" }}>
                                                <Line
                                                    data={{
                                                        datasets: [{
                                                            label: "Power (KW)",
                                                            data: datasetPoints.map((p) => ({ x: p.x, y: (p.y || 0) / 1000 })),
                                                            borderColor: ORANGE,
                                                            backgroundColor: "rgba(243, 182, 100, 0.3)",
                                                            fill: "start",
                                                            borderWidth: 2,
                                                            pointRadius: 0,
                                                            tension: 0.2,
                                                        }],
                                                    }}
                                                    options={{
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        scales: {
                                                            x: { type: "time", adapters: { date: { zone: system_tz } }, min: fullDayDates[0], max: fullDayDates[fullDayDates.length - 1], grid: { display: false } },
                                                            y: { beginAtZero: true, title: { display: true, text: "Power (KW)" }, grid: { color: "#f3f4f6" } },
                                                        },
                                                        plugins: { legend: { display: false } },
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <p className="text-sm text-[#6A7B8F] py-8 text-center">Loading chart data...</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </section>

                        {/* ════════════════════════════════════════
                            SECTION 2 — Diagnostics + Controls + Historical
                        ════════════════════════════════════════ */}
                        <section
                            ref={diagnosticsRef}
                            className="py-6 px-6 pt-4 scroll-mt-24"
                            id="diagnostics"
                            style={isDark ? { background: DK.bg } : { background: "#F2F2F2" }}
                        >
                            {/* Section label */}
                            {isDark ? (
                                <p style={{ ...sectionLabel, marginBottom: 16 }}>System Diagnostics</p>
                            ) : (
                                <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">System Diagnostics</h2>
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
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
                                                <h3 className="font-semibold text-[#2F3E4D]">{item.name}</h3>
                                                <p className="text-sm text-[#6A7B8F] mt-0.5">{item.description}</p>
                                            </div>
                                            <span className="flex items-center gap-2 shrink-0 px-3 py-1.5 rounded-full bg-[#F2F2F2] text-sm font-medium text-[#2A9D8F]">
                                                <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" /> Online
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
                                            // isCommercial={session?.planTier === "COMMERCIAL"}
                                            isCommercial={true}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mt-10 mb-3">System Controls</h2>
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
                                            canAccessControlPanel={false}
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
                                    <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mt-10 mb-3">Historical Data</h2>
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
                                    <div className="bg-white rounded-2xl p-6 mb-6" style={LT_CARD}>
                                        <h3 className="text-base font-bold text-[#2F3E4D]">Historical Power Data</h3>
                                        <p className="text-sm text-[#6A7B8F] mt-0.5 mb-4">Energy produced over time</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {[{ id: "monthly", label: "Monthly" }, { id: "yearly", label: "Yearly" }, { id: "total", label: "Total" }].map(({ id, label }) => (
                                                <button
                                                    key={id} type="button" onClick={() => setHistoricalPeriod(id)}
                                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${historicalPeriod === id ? "bg-[#F3B664] text-white" : "bg-[#F2F2F2] text-[#2F3E4D] hover:bg-[#E5E7EB]"}`}
                                                >{label}</button>
                                            ))}
                                        </div>
                                        <div className="rounded-lg bg-[#FAFAFA] p-4" style={{ minHeight: "280px" }}>
                                            {historicalPeriod === "monthly" && dailyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: (dailyProduction.labels || dailyProduction.values.map((_, i) => i + 1)).slice(0, dailyProduction.values.length), datasets: [{ label: "Energy (kWh)", data: (dailyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E5E7EB" } }, x: { grid: { display: false }, title: { display: true, text: "Day" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {historicalPeriod === "yearly" && monthlyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: monthLabels.slice(0, (monthlyProduction.values || []).length), datasets: [{ label: "Energy (kWh)", data: (monthlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E5E7EB" } }, x: { grid: { display: false }, title: { display: true, text: "Month" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {historicalPeriod === "total" && yearlyProduction?.values?.length > 0 && (
                                                <div style={{ height: "260px" }}>
                                                    <Bar data={{ labels: (yearlyProduction.labels || yearlyProduction.values.map((_, i) => `${i + 1}`)).slice(0, (yearlyProduction.values || []).length), datasets: [{ label: "Energy (MWh)", data: (yearlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: "#F3B664", borderRadius: 4, barPercentage: 0.4, categoryPercentage: 0.5 }] }}
                                                        options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, title: { display: true, text: "Energy (MWh)" }, grid: { color: "#E5E7EB" } }, x: { grid: { display: false }, title: { display: true, text: "Year" } } }, plugins: { legend: { display: false } } }} />
                                                </div>
                                            )}
                                            {((historicalPeriod === "monthly" && !dailyProduction?.values?.length) || (historicalPeriod === "yearly" && !monthlyProduction?.values?.length) || (historicalPeriod === "total" && !yearlyProduction?.values?.length)) && (
                                                <p className="text-sm text-[#6A7B8F] py-12 text-center">Loading chart data...</p>
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