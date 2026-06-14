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
import Sidebar, { SIDEBAR_COLLAPSED_W, SIDEBAR_EXPANDED_W } from '@/components/Sidebar';
import EnergyFlowPanel from '@/components/EnergyFlowPanel';
import TreeImpactIcon from '@/components/TreeImpactIcon';
import { isFifaDallasSystem } from '@/lib/fifaDallasSystem';
import {
    getFifaDashboardTheme,
    getFifaPageBackground,
    getFifaHeaderStyle,
    FIFA_ORANGE,
} from '@/lib/fifaDashboardTheme';
import FifaSoccerBackdrop from '@/components/FifaSoccerBackdrop';

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CO2_KG_PER_KWH = 0.37;
const KG_PER_TREE = 21;

/** Next power-of-10 milestone above current carbon (e.g. 6,284 → 10,000). */
function nextCarbonGoalKg(kg) {
    if (kg <= 0) return 100;
    const exp = Math.ceil(Math.log10(kg));
    const milestone = 10 ** exp;
    if (kg >= milestone) return 10 ** (exp + 1);
    return milestone;
}

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
        // Typography scale — identical in both modes, kept here for T.* access
        heroSize:    52,
        heroWeight:  200,
        statSize:    28,
        statWeight:  200,
        // Surface (alias for cardBg)
        surface:     "rgba(28,24,20,0.85)",
    };
    return {
        // Page backgrounds
        pageBg:      "#F4F6F9",
        sectionBg:   "#F4F6F9",
        section2Bg:  "#EEF1F5",
        // Cards
        cardBg:      "#FFFFFF",
        cardBorder:  "1px solid rgba(26,37,53,0.07)",
        cardShadow:  "0 4px 6px rgba(26,37,53,0.04), 0 8px 24px rgba(26,37,53,0.08), 0 1px 2px rgba(26,37,53,0.06)",
        cardRadius:  20,
        // Text hierarchy — navy blue family matching #1A2535 sidebar
        text1:       "#1A2535",
        text2:       "#3D5068",
        text3:       "#7A90A8",
        label:       "#3D5068",
        // Dividers
        border:      "rgba(26,37,53,0.08)",
        border2:     "rgba(26,37,53,0.14)",
        divider:     "rgba(26,37,53,0.08)",
        // Accents
        amber:       "#E8A020",
        amberDim:    "rgba(232,160,32,0.12)",
        green:       "#4A9E78",
        // Gauge
        gaugeTrack:  "rgba(26,37,53,0.10)",
        gaugeRing:   "#F3B664",
        // Charts
        chartBg:     "#EEF1F5",
        chartGrid:   "rgba(26,37,53,0.08)",
        // Typography scale — identical in both modes, kept here for T.* access
        heroSize:    52,
        heroWeight:  200,
        statSize:    28,
        statWeight:  200,
        // Surface (alias for cardBg)
        surface:     "#FFFFFF",
    };
}

const TOOLBAR_ROW = "px-6 h-14 flex items-center shrink-0";
const TOOLBAR_BTN = "text-[13px] font-medium py-[5px] px-3 rounded cursor-pointer transition-all duration-[150ms]";

function toolbarBtnStyle(active, theme, isDark) {
    return {
        background: active ? theme.amber : "transparent",
        color: active ? (isDark ? "#000" : "#fff") : theme.text2,
        border: `0.5px solid ${active ? theme.amber : theme.border}`,
    };
}

function chartAxisGrid(theme) {
    return { color: theme.chartGrid ?? theme.border, lineWidth: 0.5, drawBorder: false };
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
    const cleanValues = values.map((v) => {
        const n = Number(v);
        return Number.isFinite(n) ? n : 0;
    });
    const w = 180, h = 48;
    const max = Math.max(...cleanValues, 0.001);
    const min = Math.min(...cleanValues, 0);
    const range = max - min || 0.001;
    const pts = cleanValues.map((v, i) => {
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
        <div className="relative">
            <svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none"
                className="overflow-visible block cursor-crosshair"
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

export default function Dashboard() {
    const { session, user, loading } = useSession();
    const { isDark, toggleDark } = useTheme();
    const { system, loading: systemloading } = useSystem();
    const router = useRouter();

    const MAX_PV_POWER = system?.max_pv_kw;
    const system_tz = system?.timezone;
    const chartDay = DateTime.now().setZone(system_tz).startOf("day");

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

    const isEG4 = String(system?.inverter_type).toUpperCase() === "EG4";

    // ── Live poll (every 10 s): live power + flow ──────────────────────────
    useEffect(() => {
        if (!system) return;
        async function fetchLive() {
            try {
                if (isEG4) {
                    const response = await fetch(`/api/eg4`, { cache: "no-store" });
                    if (!response.ok) return;
                    const json = await response.json();

                    if (json.solar?.total_w != null) setPvPower(json.solar.total_w);

                    const toUser = json.grid?.to_user_w ?? 0;
                    const toGrid = json.grid?.to_grid_w ?? 0;
                    setGridImport(toUser > 0);
                    setGridPower(toUser > 0 ? toUser : toGrid);
                    setLoadPower(json.consumption?.power_w ?? 0);
                    setBattSoc(json.battery?.soc ?? null);
                    setHasBattery(json.battery?.soc != null);
                    const chargeW = json.battery?.charge_w ?? 0;
                    const dischargeW = json.battery?.discharge_w ?? 0;
                    setBattChargePower(chargeW > 0 ? chargeW : -dischargeW);
                    return;
                }

                const response = await fetch(`/api/fronius/live`, { cache: "no-store" });
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
    }, [system, isEG4]);

    const powerPercent = MAX_PV_POWER > 0
        ? Math.min(Math.max(pvPower / MAX_PV_POWER, 0), 1)
        : 0;
    const safePowerPercent = Number.isFinite(powerPercent) ? powerPercent : 0;
    const dashOffset = CIRCUMFERENCE * (1 - safePowerPercent);
    const pvPowerKw = pvPower / 1000;

    // Peak Today = max of today's historical hourly peak and the current live power
    const peakTodayKw = useMemo(() => {
        const histMaxKw = hourlyProduction?.values?.length
            ? Math.max(...hourlyProduction.values) / 1000
            : 0;
        return Math.round(Math.max(histMaxKw, pvPowerKw) * 100) / 100;
    }, [hourlyProduction, pvPowerKw]);

    // ── Production poll (every 5 min): all chart / historical data in one call ──
    useEffect(() => {
        if (!system) return;
        if (isEG4) return; // No historical chart data available for EG4 systems yet
        async function fetchProduction() {
            try {
                const res = await fetch(`/api/fronius`, { cache: "no-store" });
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
    }, [system, isEG4]);

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
        'Slight Chance Showers And Thunderstorms': { icon: '⛈️', title: 'Slight Chance Storms', message: 'Possible showers or storms; solar output may vary' },
        'Chance Showers And Thunderstorms': { icon: '⛈️', title: 'Chance Storms', message: 'Showers and thunderstorms likely; reduced solar output' },
        'Showers And Thunderstorms': { icon: '⛈️', title: 'Showers & Storms', message: 'Showers and thunderstorms expected; solar generation disrupted' },
        default: { icon: '🌡️', title: 'Weather Update', message: 'Conditions are changing' },
    };

    const condition = weather?.current?.condition;
    //console.log(condition); //WEATHER ICON TESTER
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
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
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

    const [currentTime, setCurrentTime] = useState(() =>
        DateTime.now().setZone(system_tz || "America/Chicago").toFormat("hh:mm:ss a")
    );

    useEffect(() => {
        const tz = system_tz || "America/Chicago";
        const tick = () => setCurrentTime(DateTime.now().setZone(tz).toFormat("hh:mm:ss a"));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [system_tz]);
    const [pageVisible, setPageVisible] = useState(
        () => (typeof document !== "undefined" ? !document.hidden : true),
    );

    useEffect(() => {
        const onVis = () => setPageVisible(!document.hidden);
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    const [fifaBrandingOn, setFifaBrandingOn] = useState(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("fifaBranding");
            if (stored !== null) return stored === "true";
        }
        return true;
    });

    const toggleFifaBranding = () => setFifaBrandingOn((prev) => {
        const next = !prev;
        if (typeof window !== "undefined") localStorage.setItem("fifaBranding", String(next));
        return next;
    });

    const [liveCarbonKg, setLiveCarbonKg] = useState(0);
    const carbonApiKwhRef = useRef(0);
    const carbonLiveKwhRef = useRef(0);
    const carbonLastTickRef = useRef(Date.now());

    useEffect(() => {
        if (totalProduction == null) return;
        carbonApiKwhRef.current = totalProduction;
        carbonLiveKwhRef.current = 0;
        carbonLastTickRef.current = Date.now();
        setLiveCarbonKg(totalProduction * CO2_KG_PER_KWH);
    }, [totalProduction]);

    useEffect(() => {
        if (!pageVisible) return;
        const tick = () => {
            const now = Date.now();
            const deltaHours = (now - carbonLastTickRef.current) / 3600000;
            carbonLastTickRef.current = now;
            if (pvPower > 50) {
                carbonLiveKwhRef.current += (pvPower / 1000) * deltaHours;
            }
            setLiveCarbonKg(
                (carbonApiKwhRef.current + carbonLiveKwhRef.current) * CO2_KG_PER_KWH,
            );
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [pageVisible, pvPower]);

    const carbonGoalKg = nextCarbonGoalKg(liveCarbonKg);
    const treesPlanted = Math.floor(liveCarbonKg / KG_PER_TREE);
    const treeFillPercent = (liveCarbonKg % KG_PER_TREE) / KG_PER_TREE;

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

    const angle = system?.towers?.[0]?.tower_angle ?? "N/A";
    const angleNum = !isNaN(parseFloat(angle)) ? parseFloat(angle).toFixed(2) : "—";
    const towerCount = system?.towers?.length ?? 0;
    const selectedTower = system?.towers?.[selectedTowerIndex];
    const orientationAngle = selectedTower?.tower_angle ?? null;
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

    const healthComponents = ["Inverter", "Motor", "Sensors", "Network", "PV Panels", "Relay"];
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
    // sectionLabel replaced by T.text3 inline — kept for safety
    const sectionLabel = { fontSize: 13, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "inherit" };

    const isFifaPage = isFifaDallasSystem(system);
    const isFifa = isFifaPage && fifaBrandingOn;

    // Resolved theme tokens for this render
    const T = isFifa ? getFifaDashboardTheme(isDark) : getTheme(isDark);
    const pageBackground = isFifa ? getFifaPageBackground(isDark, T.pageBg) : T.pageBg;
    const fifaHeaderRaw = isFifa ? getFifaHeaderStyle(isDark) : null;
    const fifaHeaderIconColor = fifaHeaderRaw?.iconColor;
    const fifaHeaderStyle = fifaHeaderRaw
        ? (({ iconColor, ...css }) => css)(fifaHeaderRaw)
        : null;

    const GAUGE_R = 54;
    const GAUGE_CIRC = 2 * Math.PI * GAUGE_R;
    const gaugeDashOffset = GAUGE_CIRC * (1 - safePowerPercent);

    return (
        <div
            className="flex flex-col h-screen overflow-hidden w-full antialiased [text-rendering:optimizeLegibility]"
            style={{ background: pageBackground, color: T.text1 }}
        >
            <div className="flex flex-1 min-h-0">
                <Sidebar activeSection={activeSection} onSectionChange={(id) => {
                    setActiveSection(id);
                    const refMap = { dashboard: section1Ref, diagnostics: diagnosticsRef, control: controlRef, historical: historicalRef };
                    scrollToSection(refMap[id], `/dashboard${id !== "dashboard" ? "#" + id : ""}`);
                }} systemName={system?.system_name} isNarrow={isNarrow} branding={isFifa ? 'fifa' : 'default'} onExpandedChange={setSidebarExpanded} />

                <div
                    className="relative flex-1 flex flex-col min-w-0 min-h-0"
                    style={{
                        background: pageBackground,
                        marginLeft: isNarrow ? 0 : (sidebarExpanded ? SIDEBAR_EXPANDED_W : SIDEBAR_COLLAPSED_W),
                        transition: 'margin-left 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                >
                    {isFifa && <FifaSoccerBackdrop isDark={isDark} />}
                    <main ref={setMainRef} className="relative z-[1] flex-1 min-h-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory pb-0 md:pb-0 [.mobile_&]:pb-16">
        {/* ── Header ── */}
                        <header
                            className="flex items-center justify-between px-6 h-14 shrink-0 overflow-hidden relative z-20"
                            style={isFifa
                                ? fifaHeaderStyle
                                : isDark
                                ? {
                                    background: "rgba(20,17,15,0.75)",
                                    borderBottom: `0.5px solid ${T.border}`,
                                  }
                                : {
                                    background: "linear-gradient(to right, rgba(26,37,53,0.96) 0%, rgba(26,37,53,0.80) 25%, rgba(26,37,53,0.45) 55%, rgba(242,242,242,0.0) 100%)",
                                    borderBottom: "1px solid rgba(26,37,53,0.15)",
                                  }
                            }
                        >

                            <div className="h-14 w-48 overflow-hidden flex items-center justify-start shrink-0">
                                <img
                                    src="/images/Janta_Power_Business_Card_Logo.jpeg"
                                    alt="Janta Power"
                                    className="w-auto max-w-none pointer-events-none select-none"
                                    style={{ height: 100, transform: "translateY(8px)" }}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                {isFifaPage && (
                                    <button
                                        type="button"
                                        role="switch"
                                        aria-checked={fifaBrandingOn}
                                        aria-label={fifaBrandingOn ? "Turn off FIFA branding" : "Turn on FIFA branding"}
                                        className="p-2 rounded-lg transition-opacity cursor-pointer"
                                        style={{ opacity: fifaBrandingOn ? 1 : 0.45 }}
                                        onClick={toggleFifaBranding}
                                    >
                                        <img
                                            src="/images/soccer-ball-icon.png"
                                            alt=""
                                            className="w-5 h-5 object-contain pointer-events-none select-none"
                                            draggable={false}
                                        />
                                    </button>
                                )}
                                <button
                                    type="button"
                                    aria-label={isDark ? "Light mode" : "Dark mode"}
                                    className="p-2 rounded-lg transition-colors cursor-pointer"
                                    style={{ color: isFifa && fifaHeaderIconColor
                                        ? fifaHeaderIconColor
                                        : isDark ? "rgba(245,240,234,0.6)" : "#2F3E4D" }}
                                    onClick={toggleDark}
                                >
                                    {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </button>
                                <button
                                    type="button"
                                    aria-label="Menu"
                                    className="p-2 rounded-lg transition-colors cursor-pointer"
                                    style={{ color: isFifa && fifaHeaderIconColor
                                        ? fifaHeaderIconColor
                                        : isDark ? "rgba(245,240,234,0.6)" : "#2F3E4D" }}
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
                            {/* TOWER STATUS label + live time */}
                            <div className="flex items-end justify-between gap-4 mb-5">
                                <div className="flex flex-col gap-0.5">
                                    {isFifa && (
                                        <span
                                            className="text-[10px] font-bold tracking-[0.14em] uppercase"
                                            style={{ color: FIFA_ORANGE }}
                                        >
                                            Fair Park, TX
                                        </span>
                                    )}
                                    <p className="text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3 }}>Tower Status</p>
                                </div>
                                <div className="flex flex-col items-end gap-0.5">
                                    {isFifa && (
                                        <span
                                            className="text-[10px] font-bold tracking-[0.14em] uppercase"
                                            style={{ color: FIFA_ORANGE }}
                                        >
                                            WORLD CUP 26
                                        </span>
                                    )}
                                    <p
                                        className="text-[13px] font-bold tracking-[0.15em] uppercase tabular-nums"
                                        style={{ color: T.text3 }}
                                        aria-live="polite"
                                    >
                                        {currentTime}
                                    </p>
                                </div>
                            </div>

                            {/* ── Tower Status Cards ── */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">

                                {/* Card 1: Power Output */}
                                <div
                                    className="rounded-xl overflow-hidden flex flex-col"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Power Output</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-between flex-1 p-6">
                                    <div className="relative flex items-center justify-center w-[200px] h-[200px]">
                                        <div className="flex flex-col items-center z-10 gap-1">
                                            <span className="text-[52px] font-[200] leading-none tracking-[-0.02em]" style={{ color: T.text1 }}>
                                                {pvPowerKw.toFixed(2)}
                                            </span>
                                            <span className="text-sm font-normal tracking-[0.15em] uppercase" style={{ color: T.text3 }}>
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
                                                className="[transition:stroke-dashoffset_1s_ease-out]"
                                            />
                                        </svg>
                                    </div>
                                    {/* Weather condition — mirrors Direction label in tower card */}
                                    <div className="mt-4 text-center">
                                        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: T.text3 }}>Conditions</p>
                                        <p className="text-xl font-light leading-[1.3]" style={{ color: T.text1 }}>
                                            {weatherDisplay.icon} {weatherDisplay.title}
                                        </p>
                                    </div>
                                    <div className="w-full mt-5 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Daily Total</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</p>
                                        </div>
                                        <div className="w-px self-stretch" style={{ background: T.border }} />
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Peak Today</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>{peakTodayKw.toFixed(2)} kW</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 2: Tower Angle */}
                                <div
                                    className="rounded-xl overflow-hidden flex flex-col"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Tower Angle</p>
                                    </div>
                                    <div className="flex flex-col items-center justify-between flex-1 p-6">
                                    <div className="relative flex items-center justify-center w-[220px] h-[220px]">
                                        <svg className="absolute" width={220} height={220} viewBox="0 0 220 220">
                                            <circle cx="110" cy="110" r="100" fill="none"
                                                stroke={T.border2} strokeWidth="1"
                                                strokeDasharray="3 6" strokeLinecap="round" />
                                        </svg>
                                        {isDark ? (
                                            <div className="w-[220px] h-[220px] bg-[url('/images/White_with_Yellow_Sun_Fix.png')] bg-[length:420px] [background-position:52%_-60%] bg-no-repeat relative z-10" />
                                        ) : (
                                            <img src="/images/tower_Design.svg" alt="Tower"
                                                className="object-contain relative z-10 w-[160px] h-[160px]"
                                            />
                                        )}
                                    </div>
                                    <div className="mt-4 text-center">
                                        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: T.text3 }}>Direction</p>
                                        <p className="text-xl font-light leading-none tracking-[0.02em]" style={{ color: T.text1 }}>{towerDirection}</p>
                                    </div>
                                    <div className="w-full mt-4 pt-4 flex justify-around" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Tower Angle</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>{angleNum}°</p>
                                        </div>
                                        <div className="w-px self-stretch" style={{ background: T.border }} />
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Elevation</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>32°</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 3: System Health */}
                                <div
                                    className="rounded-xl overflow-hidden flex flex-col"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <span className="text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3 }}>System Health</span>
                                        <span className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[0.08em]" style={{ color: T.green }}>
                                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: T.green }} />
                                            All nominal
                                        </span>
                                    </div>
                                    {healthComponents.map((item, i, arr) => (
                                        <div
                                            key={item}
                                            className="flex items-center justify-between px-5 py-3"
                                            style={i < arr.length - 1 ? { borderBottom: `0.5px solid ${T.border}` } : {}}
                                        >
                                            <span className="text-[13px]" style={{ color: T.text2 }}>{item}</span>
                                            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: T.green }} />
                                        </div>
                                    ))}
                                    <div className="px-5 py-4 mt-auto flex justify-around" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Components</p>
                                            <p className="text-[15px] font-light tabular-nums" style={{ color: T.text1 }}>{healthComponents.length}</p>
                                        </div>
                                        <div className="w-px self-stretch" style={{ background: T.border }} />
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Alerts</p>
                                            <p className="text-[15px] font-light tabular-nums" style={{ color: T.text1 }}>0</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TODAY AT A GLANCE label */}
                            <p className="text-[13px] font-bold tracking-[0.15em] uppercase mb-5" style={{ color: T.text3 }}>Today at a Glance</p>

                            {/* ── Performance + Today's Data row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">

                                {/* Today's Data chart */}
                                <div className="rounded-xl p-5 min-h-[200px]"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3 }}>Today&apos;s Data</p>
                                        <p className="text-[13px] tracking-[0.08em]" style={{ color: T.text3 }}>Hourly production</p>
                                    </div>
                                    {hourlyProduction?.values?.length && fullDayDates?.length ? (
                                        <div className="h-[180px]">
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
                                        <div className="h-[180px] flex items-center justify-center">
                                            <p className="text-sm" style={{ color: T.text3 }}>Loading chart data...</p>
                                        </div>
                                    )}
                                    <div className="flex justify-between mt-3 pt-3" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div>
                                            <span className="text-[13px]" style={{ color: T.text3 }}>Peak  </span>
                                            <span className="text-sm font-light" style={{ color: T.text1 }}>{maxHourlyPower} kW</span>
                                        </div>
                                        <div>
                                            <span className="text-[13px]" style={{ color: T.text3 }}>Today  </span>
                                            <span className="text-sm font-light" style={{ color: T.text1 }}>{(todaysProduction ?? 0).toFixed(1)} kWh</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Performance */}
                                <div className="rounded-xl overflow-hidden"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <p className="px-5 pt-4 pb-3 text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3, borderBottom: `0.5px solid ${T.border}` }}>
                                        Performance
                                    </p>
                                    <div className="grid grid-cols-2" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="px-5 py-4" style={{ borderRight: `0.5px solid ${T.border}` }}>
                                            <p className="text-[13px] tracking-[0.10em] mb-1.5" style={{ color: T.text3 }}>Daily Peak</p>
                                            <p className="text-[28px] font-[200] leading-none" style={{ color: T.text1 }}>{maxHourlyPower} <span className="text-sm font-light" style={{ color: T.text2 }}>kW</span></p>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p className="text-[13px] tracking-[0.10em] mb-1.5" style={{ color: T.text3 }}>Power Output</p>
                                            <p className="text-[28px] font-[200] leading-none" style={{ color: T.text1 }}>{powerPercentDisplay.toFixed(1)}<span className="text-sm font-light" style={{ color: T.text2 }}>%</span></p>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className="text-[13px] tracking-[0.10em] mb-2.5" style={{ color: T.text3 }}>Hourly Output</p>
                                        <div className="flex items-end gap-0.5 h-12">
                                            {Array.from({ length: 24 }, (_, i) => {
                                                const hourVal = hourlyProduction?.values?.[Math.floor(i * (hourlyProduction.values.length / 24))] ?? 0;
                                                const maxVal = Math.max(...(hourlyProduction?.values ?? [1]), 1);
                                                const h = Math.max(3, (hourVal / maxVal) * 48);
                                                const isNow = i === new Date().getHours();
                                                return (
                                                    <div key={i} className="flex-1 rounded-sm [transition:height_0.5s_ease-out]" style={{
                                                        height: h,
                                                        background: isNow ? T.amber : (hourVal > 0 ? T.amberDim : T.amberDim),
                                                        opacity: isNow ? 1 : hourVal > 0 ? 0.5 : 0.2,
                                                    }} />
                                                );
                                            })}
                                        </div>
                                        <div className="flex justify-between mt-1 text-xs" style={{ color: T.text3 }}>
                                            <span>0</span><span>6</span><span>12</span><span>18</span><span>now</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── CO2 + Climate row ── */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">

                                {/* Environmental Impact */}
                                <div className="rounded-xl overflow-hidden flex flex-col h-full min-h-0"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Environmental Impact</p>
                                    </div>
                                    <div className="p-5 flex flex-col justify-between flex-1 min-h-0 gap-4 relative overflow-hidden">
                                        <div className="relative z-[1] max-w-[56%]">
                                            <p className="text-[36px] font-[200] leading-none tracking-[-0.02em] tabular-nums" style={{ color: T.amber }}>
                                                {liveCarbonKg.toFixed(2)}<span className="text-lg font-light ml-1">kg CO₂</span>
                                            </p>
                                            <p className="text-sm mt-1.5" style={{ color: T.text3 }}>Carbon saved since installation</p>
                                        </div>
                                        <div className="relative z-[1] max-w-[56%]">
                                            <p className="text-sm tabular-nums" style={{ color: T.text2 }}>
                                                ≈ {treesPlanted.toLocaleString()} trees planted
                                            </p>
                                            <p className="text-[11px] mt-1.5 tabular-nums" style={{ color: T.text3 }}>
                                                {Math.round(carbonGoalKg).toLocaleString()} kg goal
                                            </p>
                                        </div>
                                        <div className="absolute top-[calc(50%-6px)] left-[calc(36%+205px)] z-0 h-full max-h-full w-[72%] max-w-[228px] -translate-x-1/2 -translate-y-1/2 origin-center scale-[1.20] pointer-events-none">
                                            <TreeImpactIcon
                                                percent={treeFillPercent}
                                                fillColor={T.amber}
                                                trackColor={isDark ? T.amberDim : T.gaugeTrack}
                                                isDark={isDark}
                                                className="h-full w-full max-h-full min-h-0"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Climate */}
                                <div className="rounded-xl overflow-hidden"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 pt-4 pb-3 flex items-center justify-between" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3 }}>Climate</p>
                                        <button
                                            type="button"
                                            onClick={toggleTempUnit}
                                            className="flex items-center rounded-full overflow-hidden text-[11px] font-semibold"
                                            style={{ border: `0.5px solid ${T.border2}` }}
                                            aria-label="Toggle temperature unit"
                                        >
                                            <span className="py-[2px] px-[7px] transition-all duration-200" style={{ background: tempUnit === "F" ? T.amber : "transparent", color: tempUnit === "F" ? (isDark ? "#000" : "#fff") : T.text3 }}>°F</span>
                                            <span className="py-[2px] px-[7px] transition-all duration-200" style={{ background: tempUnit === "C" ? T.amber : "transparent", color: tempUnit === "C" ? (isDark ? "#000" : "#fff") : T.text3 }}>°C</span>
                                        </button>
                                    </div>
                                    <div className="grid grid-cols-2" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="px-5 py-4" style={{ borderRight: `0.5px solid ${T.border}` }}>
                                            <p className="text-[13px] tracking-[0.10em] mb-1.5" style={{ color: T.text3 }}>Humidity</p>
                                            <p className="text-[28px] font-[200] leading-none" style={{ color: T.text1 }}>
                                                {weather?.current?.humidity ?? "—"}<span className="text-sm font-light" style={{ color: T.text2 }}>%</span>
                                            </p>
                                        </div>
                                        <div className="px-5 py-4">
                                            <p className="text-[13px] tracking-[0.10em] mb-1.5" style={{ color: T.text3 }}>Temperature</p>
                                            <p className="text-[28px] font-[200] leading-none" style={{ color: T.text1 }}>
                                                {toDisplayTemp(weather?.current?.temp)}<span className="text-sm font-light" style={{ color: T.text2 }}>{tempSymbol}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-5 py-4">
                                        <p className="text-[13px] tracking-[0.10em] mb-2.5" style={{ color: T.text3 }}>Today&apos;s Conditions</p>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <Sparkline
                                                    values={weather?.hourly?.slice(0, 24).map(h => h.humidity ?? 0) ?? [weather?.current?.humidity ?? 0]}
                                                    color="#7BAFD4" unit="%" startHour={new Date().getHours()}
                                                />
                                                <p className="text-[11px] mt-1" style={{ color: T.text3 }}>Updated {currentTime}</p>
                                            </div>
                                            <div>
                                                <Sparkline
                                                    values={weather?.hourly?.slice(0, 24).map(h => toDisplayTemp(h.temp) ?? 0) ?? [toDisplayTemp(weather?.current?.temp) ?? 0]}
                                                    color="#f97316" unit={tempSymbol} startHour={new Date().getHours()}
                                                />
                                                <p className="text-[11px] mt-1" style={{ color: T.text3 }}>Feels like {toDisplayTemp((weather?.current?.temp ?? 15) - 2)}{tempSymbol}</p>
                                            </div>
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
                            style={{ background: T.section2Bg }}
                        >
                            {/* Section label */}
                            <p className="text-[13px] font-bold tracking-[0.15em] uppercase mb-5" style={{ color: T.text3 }}>System Diagnostics</p>

                            {/* ── Diagnostics ── */}
                            <div className="rounded-xl overflow-hidden mb-6"
                                style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                            >
                                {sensors.map((s, i) => (
                                    <div
                                        key={s.name}
                                        className="flex items-center px-5 py-4"
                                        style={i > 0 ? { borderTop: `0.5px solid ${T.border}` } : {}}
                                    >
                                        <s.Icon className="w-[15px] h-[15px] opacity-70 shrink-0 mr-3.5" style={{ color: s.color }} />
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[13px] font-normal" style={{ color: T.text1 }}>{s.name}</p>
                                            <p className="text-xs mt-px" style={{ color: T.text3 }}>{s.description}</p>
                                        </div>
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: T.green }} />
                                    </div>
                                ))}
                            </div>

                            {/* ── System Controls ── */}
                            <div ref={controlRef} id="control" className="scroll-mt-24">
                                <p className="text-[13px] font-bold tracking-[0.15em] uppercase mb-5 mt-12" style={{ color: T.text3 }}>System Controls</p>
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
                                    latitude={lat}
                                    longitude={lon}
                                    canAccessControlPanel={canAccessControlPanel}
                                    showAutonomousToggle={session?.role === "ADMIN"}
                                    autonomousMode={autonomousMode}
                                    setAutonomousMode={setAutonomousMode}
                                    maintenanceMode={maintenanceMode}
                                    setMaintenanceMode={setMaintenanceMode}
                                    controlActions={controlActions}
                                    isDark={isDark}
                                    branding={isFifa ? "fifa" : "default"}
                                    systemTimezone={system_tz}
                                    isCommercial={session?.planTier === "COMMERCIAL"}
                                    cardBorder={T.cardBorder}
                                    cardRadius={T.cardRadius}
                                    cardShadow={T.cardShadow}
                                />
                            </div>


                            {/* ── Historical Data ── */}
                            <div ref={historicalRef} id="historical" className="scroll-mt-24">
                                <p className="text-[13px] font-bold tracking-[0.15em] uppercase mb-5 mt-12" style={{ color: T.text3 }}>Historical Data</p>
                                <div className="rounded-xl overflow-hidden mb-6"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className={TOOLBAR_ROW} style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="flex items-center gap-1">
                                            {[{ id: "monthly", label: "Monthly" }, { id: "yearly", label: "Yearly" }, { id: "total", label: "Total" }].map(({ id, label }) => (
                                                <button key={id} type="button" onClick={() => setHistoricalPeriod(id)}
                                                    className={TOOLBAR_BTN}
                                                    style={toolbarBtnStyle(historicalPeriod === id, T, isDark)}
                                                >{label}</button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="p-5 min-h-[300px]">
                                        {historicalPeriod === "monthly" && dailyProduction?.values?.length > 0 && (
                                            <div className="h-[260px]">
                                                <Bar data={{ labels: (dailyProduction.labels || dailyProduction.values.map((_, i) => i + 1)).slice(0, dailyProduction.values.length), datasets: [{ label: "Energy (kWh)", data: (dailyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: T.amber, borderRadius: 3, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                    options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, grid: chartAxisGrid(T), border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } }, x: { grid: { display: false }, border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } } }, plugins: { legend: { display: false } } }}
                                                />
                                            </div>
                                        )}
                                        {historicalPeriod === "yearly" && monthlyProduction?.values?.length > 0 && (
                                            <div className="h-[260px]">
                                                <Bar data={{ labels: monthLabels.slice(0, (monthlyProduction.values || []).length), datasets: [{ label: "Energy (kWh)", data: (monthlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: T.amber, borderRadius: 3, barPercentage: 0.8, categoryPercentage: 0.9 }] }}
                                                    options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, grid: chartAxisGrid(T), border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } }, x: { grid: { display: false }, border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } } }, plugins: { legend: { display: false } } }}
                                                />
                                            </div>
                                        )}
                                        {historicalPeriod === "total" && yearlyProduction?.values?.length > 0 && (
                                            <div className="h-[260px]">
                                                <Bar data={{ labels: (yearlyProduction.labels || yearlyProduction.values.map((_, i) => `${i + 1}`)).slice(0, (yearlyProduction.values || []).length), datasets: [{ label: "Energy (MWh)", data: (yearlyProduction.values || []).map(v => Math.round((v ?? 0) * 100) / 100), backgroundColor: T.amber, borderRadius: 3, barPercentage: 0.4, categoryPercentage: 0.5 }] }}
                                                    options={{ responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, grid: chartAxisGrid(T), border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } }, x: { grid: { display: false }, border: { display: false }, ticks: { color: T.text3, font: { size: 13 } } } }, plugins: { legend: { display: false } } }}
                                                />
                                            </div>
                                        )}
                                        {((historicalPeriod === "monthly" && !dailyProduction?.values?.length) || (historicalPeriod === "yearly" && !monthlyProduction?.values?.length) || (historicalPeriod === "total" && !yearlyProduction?.values?.length)) && (
                                            <div className="h-[260px] flex items-center justify-center">
                                                <p className="text-sm" style={{ color: T.text3 }}>Loading chart data...</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>
                </div>
            </div>

            {/* Dropdown menu */}
            {menuOpen && (
                <div
                    className="fixed top-24 right-6 w-56 rounded-lg shadow-lg py-2 z-50"
                    style={{ background: T.cardBg, border: T.cardBorder }}
                >
                    <p className="px-4 py-2 text-base font-semibold" style={{ color: T.text1 }}>{user?.name || "Guest"}</p>
                    <div style={{ borderTop: `0.5px solid ${T.border}` }} aria-hidden />
                    <Link href="/settings" className="block px-4 py-2 text-sm transition-colors"
                        style={{ color: T.text2 }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                        onClick={() => setMenuOpen(false)}>Settings</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm transition-colors"
                        style={{ color: T.text2 }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                        onClick={() => setMenuOpen(false)}>Contact us</Link>
                    {session?.role === "ADMIN" && (
                        <Link href="/systemselect" className="block px-4 py-2 text-sm transition-colors"
                            style={{ color: T.text2 }}
                            onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                            onClick={() => setMenuOpen(false)}>Systems</Link>
                    )}
                    <button
                        onClick={async () => {
                            try { await fetch("/api/logout", { method: "GET" }); window.location.href = "/?loggedout=true"; }
                            catch (err) { console.error("Logout failed:", err); }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm transition-colors cursor-pointer bg-transparent border-0"
                        style={{ color: T.text2 }}
                        onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                    >Log Out</button>
                </div>
            )}
        </div>
    );
}
