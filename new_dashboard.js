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
import 'chartjs-adapter-date-fns';
import 'chartjs-adapter-luxon';
import { DateTime } from "luxon";
import Sidebar, { SIDEBAR_COLLAPSED_W, SIDEBAR_EXPANDED_W } from '@/components/Sidebar';
import EnergyFlowPanel from '@/components/EnergyFlowPanel';
import TreeImpactIcon from '@/components/TreeImpactIcon';
import { isFifaDallasId, isFifaDallasSystem } from '@/lib/fifaDallasSystem';
import {
    getFifaDashboardTheme,
    getFifaPageBackground,
    getFifaHeaderStyle,
    FIFA_ORANGE,
} from '@/lib/fifaDashboardTheme';
import FifaSoccerBackdrop from '@/components/FifaSoccerBackdrop';

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
/** ~5.4 kW per tower → 16.2 kW for a 3-tower system (e.g. Patrick Home) */
const KW_PER_TOWER = 5.4;

function parseMaxPvKw(value) {
    if (value == null) return 0;
    const n = typeof value === "object" && value !== null && "toNumber" in value
        ? value.toNumber()
        : Number(value);
    if (!Number.isFinite(n) || n <= 0) return 0;
    if (n > 500) return n / 1000;
    return n;
}

function resolveRatedPvKw(system) {
    const towerCount = Math.max(
        Number(system?.towers?.length) || 0,
        Number(system?.total_towers) || 0,
        1,
    );
    const derivedKw = Math.round(KW_PER_TOWER * towerCount * 10) / 10;
    const configured = parseMaxPvKw(system?.max_pv_kw);

    if (configured > 0) {
        if (towerCount === 1) return configured;
        if (configured <= derivedKw * 1.25) return configured;
    }
    return derivedKw;
}

function formatHourLong(h) {
    if (h === 0) return "12 AM";
    if (h === 12) return "12 PM";
    return h < 12 ? `${h} AM` : `${h - 12} PM`;
}

function chartYScale(maxVal) {
    const padded = Math.max(maxVal * 1.15, 0.5);
    let step;
    if (padded <= 1) step = 0.25;
    else if (padded <= 2.5) step = 0.5;
    else if (padded <= 6) step = 1;
    else if (padded <= 12) step = 2;
    else step = 5;
    const max = Math.ceil(padded / step) * step;
    return { max, step };
}

/** Chart.js y-axis grid — matches internal card dividers */
function chartAxisGrid(theme) {
    return { color: theme.chartGrid ?? theme.border, lineWidth: 0.5, drawBorder: false };
}

/** Hairline divider — same color/weight as chart grid */
function gridDivider(theme) {
    return `0.5px solid ${theme.chartGrid ?? theme.border}`;
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
    text2:    "rgba(245,240,234,0.80)",
    text3:    "rgba(245,240,234,0.58)",
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
        cardBorder:  "0.5px solid rgba(255,245,235,0.12)",
        cardShadow:  "0 4px 6px rgba(0,0,0,0.18), 0 8px 24px rgba(0,0,0,0.28), 0 1px 2px rgba(0,0,0,0.12)",
        cardRadius:  20,
        // Text hierarchy
        text1:       "#f5f0ea",
        text2:       "rgba(245,240,234,0.80)",
        text3:       "rgba(245,240,234,0.58)",
        label:       "rgba(245,240,234,0.58)",
        // Dividers
        border:      "rgba(255,245,235,0.14)",
        border2:     "rgba(255,245,235,0.20)",
        divider:     "rgba(255,245,235,0.12)",
        // Accents
        amber:       "#e6b85c",
        amberDim:    "rgba(230,184,92,0.14)",
        green:       "rgba(74,222,128,0.75)",
        // Gauge
        gaugeTrack:  "rgba(230,184,92,0.14)",
        gaugeRing:   "#e6b85c",
        // Charts
        chartBg:     "rgba(255,255,255,0.03)",
        chartGrid:   "rgba(255,245,235,0.10)",
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
        section2Bg:  "#F4F6F9",
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
        chartGrid:   "rgba(26,37,53,0.06)",
        // Typography scale — identical in both modes, kept here for T.* access
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

/** Shared toolbar chrome for tower / period toggle rows */
const TOOLBAR_ROW = "px-6 h-14 flex items-center shrink-0";
const TOOLBAR_BTN = "text-[13px] font-medium py-[5px] px-3 rounded cursor-pointer transition-all duration-[150ms]";

/** Dashboard section headings — consistent vertical rhythm */
const SECTION_HEADING = "text-[13px] font-bold tracking-[0.15em] uppercase scroll-reveal mb-5";
const SECTION_SPACING = "mt-12";

function toolbarBtnStyle(active, theme, isDark) {
    return {
        background: active ? theme.amber : "transparent",
        color: active ? (isDark ? "#000" : "#fff") : theme.text2,
        border: `0.5px solid ${active ? theme.amber : theme.border}`,
    };
}

export default function Dashboard() {
    const { session, user, loading } = useSession();
    const { isDark, toggleDark } = useTheme();
    const { system, loading: systemloading } = useSystem();
    const router = useRouter();

    const MAX_PV_KW = system ? resolveRatedPvKw(system) : KW_PER_TOWER;
    const MAX_PV_W = MAX_PV_KW * 1000;
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
    const [pageVisible, setPageVisible] = useState(
        () => (typeof document !== "undefined" ? !document.hidden : true),
    );
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

    useEffect(() => {
        const onVis = () => setPageVisible(!document.hidden);
        document.addEventListener("visibilitychange", onVis);
        return () => document.removeEventListener("visibilitychange", onVis);
    }, []);

    // ── Live poll (every 10 s): live power + flow ──────────────────────────
    useEffect(() => {
        if (!system || !pageVisible) return;
        async function fetchLive() {
            try {
                const response = await fetch(`/api/fronius`, { cache: "no-store" });
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
    }, [system, pageVisible]);

    const powerPercent = MAX_PV_W > 0
        ? Math.min(Math.max(pvPower / MAX_PV_W, 0), 1)
        : 0;
    const safePowerPercent = Number.isFinite(powerPercent) ? powerPercent : 0;
    const dashOffset = CIRCUMFERENCE * (1 - safePowerPercent);
    const pvPowerKw = pvPower / 1000;

    // ── Production poll (every 5 min): all chart / historical data in one call ──
    useEffect(() => {
        if (!system) return;
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
                        ? Math.round(Math.max(...energyData.values) / 100) / 10
                        : 0
                );
            } catch (error) { console.error('Production fetch error:', error); }
        }
        fetchProduction();
        intervalRef1.current = setInterval(fetchProduction, 300000);
        return () => clearInterval(intervalRef1.current);
    }, [system, pageVisible]);

    const todaysProduction = useMemo(() => {
        if (!dailyProduction || !system_tz) return null;
        const systemDay = DateTime.now().setZone(system_tz).day;
        return dailyProduction.values[systemDay - 1] ?? null;
    }, [dailyProduction, system_tz]);

    const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const monthLabels = monthlyProduction?.labels
        ? monthlyProduction.labels.map(m => MONTH_NAMES[m - 1])
        : MONTH_NAMES;

    const fullDayDates = useMemo(() => {
        const labels = [];
        for (let h = 0; h < 24; h++) {
            for (let m = 0; m < 60; m += 5) {
                labels.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
            }
        }
        return labels.map((label) => {
            const [hh, mm] = label.split(":").map(Number);
            return chartDay.plus({ hours: hh, minutes: mm }).toUTC().toJSDate();
        });
    }, [chartDay]);

    const hourlyKwhPoints = useMemo(() => {
        if (!hourlyProduction?.labels?.length) return [];
        const byHour = new Map();
        hourlyProduction.labels.forEach((timeLabel, i) => {
            const [hh] = timeLabel.split(":").map(Number);
            const intervalWh = hourlyProduction.energyWh?.[i]
                ?? ((hourlyProduction.values[i] || 0) * (5 / 60)); // legacy: W × 5 min → Wh
            const kwh = intervalWh / 1000;
            byHour.set(hh, (byHour.get(hh) || 0) + kwh);
        });
        return [...byHour.entries()]
            .sort(([a], [b]) => a - b)
            .map(([hour, kwh]) => ({
                x: chartDay.setZone(system_tz).set({ hour, minute: 0, second: 0, millisecond: 0 }).toJSDate(),
                y: Math.round(kwh * 100) / 100,
            }));
    }, [hourlyProduction, system_tz, chartDay]);

    const peakHourlyKwh = useMemo(() => {
        if (!hourlyKwhPoints.length) return 0;
        return Math.max(...hourlyKwhPoints.map((p) => p.y));
    }, [hourlyKwhPoints]);

    const todayDataMaxKwh = useMemo(
        () => Math.max(peakHourlyKwh, 0.001),
        [peakHourlyKwh]
    );

    const isFifaPage = isFifaDallasId(session?.activeSystemId) || isFifaDallasSystem(system);
    const isFifa = isFifaPage && fifaBrandingOn;

    const todayDataLineChartOptions = useMemo(() => {
        const chartT = isFifa
            ? getFifaDashboardTheme(isDark)
            : getTheme(isDark);
        const yScale = chartYScale(todayDataMaxKwh);
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            scales: {
                x: {
                    type: "time",
                    adapters: { date: { zone: system_tz } },
                    min: fullDayDates[0],
                    max: fullDayDates[fullDayDates.length - 1],
                    grid: { display: false },
                    border: { display: false },
                    ticks: { color: chartT.text3, font: { size: 12 } },
                },
                y: {
                    beginAtZero: true,
                    max: yScale.max,
                    grid: chartAxisGrid(chartT),
                    border: { display: false },
                    title: {
                        display: true,
                        text: "kWh",
                        color: chartT.text3,
                        font: { size: 11, weight: "500" },
                        padding: { bottom: 8 },
                    },
                    ticks: {
                        color: chartT.text3,
                        font: { size: 11 },
                        stepSize: yScale.step,
                        maxTicksLimit: 6,
                        callback: (v) => (Number(v) % 1 === 0 ? String(v) : Number(v).toFixed(1)),
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: isDark ? "rgba(20,17,15,0.92)" : "rgba(255,255,255,0.96)",
                    titleColor: chartT.text1,
                    bodyColor: chartT.text2,
                    footerColor: chartT.text3,
                    borderColor: chartT.border,
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: (items) => {
                            const x = items[0]?.parsed?.x;
                            if (x == null) return "";
                            return DateTime.fromJSDate(new Date(x)).setZone(system_tz).toFormat("h a");
                        },
                        label: (ctx) => `${Number(ctx.parsed.y).toFixed(2)} kWh`,
                        footer: () => [
                            `Total today: ${(todaysProduction ?? 0).toFixed(1)} kWh`,
                            `Peak hour: ${peakHourlyKwh.toFixed(2)} kWh`,
                        ],
                    },
                },
            },
        };
    }, [isDark, isFifa, todayDataMaxKwh, system_tz, fullDayDates, todaysProduction, peakHourlyKwh]);

    const avgPowerKw = useMemo(() => {
        const vals = hourlyProduction?.values;
        if (!vals?.length) return 0;
        const sum = vals.reduce((acc, v) => acc + (Number(v) || 0), 0);
        return Math.round((sum / vals.length / 1000) * 10) / 10;
    }, [hourlyProduction]);

    const hourlyPowerKwByHour = useMemo(() => {
        if (!hourlyProduction?.labels?.length) return Array(24).fill(0);
        const byHour = Array(24).fill(0);
        hourlyProduction.labels.forEach((timeLabel, i) => {
            const [hh] = timeLabel.split(":").map(Number);
            const powerW = hourlyProduction.values[i] || 0;
            byHour[hh] = Math.max(byHour[hh], powerW);
        });
        return byHour.map((w) => w / 1000);
    }, [hourlyProduction]);

    const performanceChartMaxKw = useMemo(
        () => Math.max(...hourlyPowerKwByHour, 0.001),
        [hourlyPowerKwByHour]
    );

    const peakTodayKw = useMemo(
        () => Math.round(Math.max(performanceChartMaxKw, pvPowerKw) * 100) / 100,
        [performanceChartMaxKw, pvPowerKw]
    );

    const performanceBarChartData = useMemo(() => {
        const chartT = isFifa
            ? getFifaDashboardTheme(isDark)
            : getTheme(isDark);
        const currentHour = new Date().getHours();
        const barActive = isDark ? "rgba(230,184,92,0.72)" : "rgba(232,160,32,0.82)";
        const barPast = isDark ? "rgba(230,184,92,0.42)" : "rgba(232,160,32,0.52)";
        const barEmpty = isDark ? "rgba(230,184,92,0.12)" : "rgba(232,160,32,0.14)";
        return {
            labels: hourlyPowerKwByHour.map((_, i) => (
                [0, 6, 12, 18].includes(i) ? formatHourLong(i) : ""
            )),
            datasets: [{
                label: "Power (kW)",
                data: hourlyPowerKwByHour.map((v) => Math.round(v * 100) / 100),
                backgroundColor: hourlyPowerKwByHour.map((val, i) => {
                    if (i === currentHour) return chartT.amber;
                    if (val > 0) return barPast;
                    return barEmpty;
                }),
                hoverBackgroundColor: hourlyPowerKwByHour.map((val, i) => {
                    if (i === currentHour) return chartT.amber;
                    if (val > 0) return barActive;
                    return barEmpty;
                }),
                borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
                borderSkipped: false,
                barPercentage: 0.72,
                categoryPercentage: 0.92,
            }],
        };
    }, [hourlyPowerKwByHour, isDark, isFifa]);

    const performanceBarChartOptions = useMemo(() => {
        const chartT = isFifa
            ? getFifaDashboardTheme(isDark)
            : getTheme(isDark);
        const yScale = chartYScale(performanceChartMaxKw);
        return {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: "index", intersect: false },
            scales: {
                x: {
                    grid: { display: false },
                    border: { display: false },
                    ticks: {
                        color: chartT.text3,
                        font: { size: 11 },
                        maxRotation: 0,
                        autoSkip: false,
                        padding: 6,
                    },
                },
                y: {
                    beginAtZero: true,
                    max: yScale.max,
                    grid: chartAxisGrid(chartT),
                    border: { display: false },
                    title: {
                        display: true,
                        text: "kW",
                        color: chartT.text3,
                        font: { size: 11, weight: "500" },
                        padding: { bottom: 8 },
                    },
                    ticks: {
                        color: chartT.text3,
                        font: { size: 11 },
                        stepSize: yScale.step,
                        maxTicksLimit: 6,
                        callback: (v) => (Number(v) % 1 === 0 ? String(v) : Number(v).toFixed(1)),
                    },
                },
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: isDark ? "rgba(20,17,15,0.92)" : "rgba(255,255,255,0.96)",
                    titleColor: chartT.text1,
                    bodyColor: chartT.text2,
                    borderColor: chartT.border,
                    borderWidth: 1,
                    padding: 10,
                    displayColors: false,
                    callbacks: {
                        title: (items) => formatHourLong(items[0]?.dataIndex ?? 0),
                        label: (ctx) => `${Number(ctx.parsed.y).toFixed(2)} kW`,
                    },
                },
            },
        };
    }, [isDark, isFifa, performanceChartMaxKw]);

    const [weather, setWeather] = useState(null);
    const [weatherLoading, setweatherLoading] = useState(true);
    const [weatherError, SetweatherError] = useState(null);
    useEffect(() => {
        if (!lat || !lon || !pageVisible) return;
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
    }, [lat, lon, pageVisible]);

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
            const deltaHours = (now - carbonLastTickRef.current) / 3_600_000;
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

    useEffect(() => {
        if (loading || systemloading || !system) return;
        const root = mainScrollRef.current;
        if (!root) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { root, threshold: 0.08, rootMargin: "0px 0px -28px 0px" }
        );
        root.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [loading, systemloading, system?.id]);

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
    const canAccessControlPanel = session?.role === "ADMIN" || session?.planTier === "COMMERCIAL";

    const healthComponents = ["Inverter", "Motor", "Sensors", "Network", "PV Panels", "Relay"];

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

    const T = isFifa ? getFifaDashboardTheme(isDark) : getTheme(isDark);
    const pageBackground = isFifa ? getFifaPageBackground(isDark, T.pageBg) : T.pageBg;
    const fifaHeaderRaw = isFifa ? getFifaHeaderStyle(isDark) : null;
    const fifaHeaderIconColor = fifaHeaderRaw?.iconColor;
    const fifaHeaderStyle = fifaHeaderRaw
        ? (({ iconColor, ...css }) => css)(fifaHeaderRaw)
        : null;

    const GAUGE_R = 54;
    const GAUGE_CIRC = 2 * Math.PI * GAUGE_R;
    const gaugeFill = GAUGE_CIRC * safePowerPercent;

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
                                        : isDark ? T.text2 : "#2F3E4D" }}
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
                                        : isDark ? T.text2 : "#2F3E4D" }}
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
                            className="pt-10 px-8"
                            id="section-1"
                            style={{ background: T.sectionBg }}
                        >
                            {/* Section labels — FIFA orange captions above Tower Status / time */}
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
                                    <p className="text-[13px] font-bold tracking-[0.15em] uppercase" style={{ color: T.text3 }}>
                                        Tower Status
                                    </p>
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
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">

                                {/* Card 1: Power Output */}
                                <div
                                    className="rounded-xl overflow-hidden flex flex-col h-full scroll-reveal scroll-reveal-delay-1"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Power Output</p>
                                    </div>
                                    <div className="flex flex-col flex-1 items-center p-5 pb-5">
                                    <div className="flex items-center justify-center w-full h-[200px] shrink-0">
                                        <div className="relative flex items-center justify-center w-[200px] h-[200px]">
                                        <div className="flex flex-col items-center z-10 gap-1">
                                            <span className="text-[46px] font-[200] leading-none tracking-[-0.02em]" style={{ color: T.text1 }}>
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
                                                strokeDasharray={`${gaugeFill} ${GAUGE_CIRC}`}
                                                strokeDashoffset={0}
                                                strokeLinecap="round"
                                                transform="rotate(-90 60 60)"
                                                style={{ transition: "stroke-dasharray 1s ease-out" }}
                                            />
                                        </svg>
                                        </div>
                                    </div>
                                    <div className="text-center w-full shrink-0 min-h-[52px] mt-3">
                                        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: T.text3 }}>Conditions</p>
                                        <p className="text-xl font-light leading-[1.3]" style={{ color: T.text1 }}>
                                            {weatherDisplay.icon} {weatherDisplay.title}
                                        </p>
                                    </div>
                                    <div className="flex-1 min-h-8 w-full" aria-hidden />
                                    <div className="w-full pt-5 flex justify-around shrink-0" style={{ borderTop: `0.5px solid ${T.border}` }}>
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Peak Today</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>{peakTodayKw.toFixed(2)} kW</p>
                                        </div>
                                        <div className="w-px self-stretch" style={{ background: T.border }} />
                                        <div className="text-center">
                                            <p className="text-[13px] uppercase tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Avg Today</p>
                                            <p className="text-[15px] font-light" style={{ color: T.text1 }}>{avgPowerKw.toFixed(1)} kW</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                {/* Card 2: Tower Angle */}
                                <div
                                    className="rounded-xl overflow-hidden flex flex-col h-full scroll-reveal scroll-reveal-delay-2"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Tower Angle</p>
                                    </div>
                                    <div className="flex flex-col flex-1 items-center p-5 pb-5">
                                    <div className="flex items-center justify-center w-full h-[200px] shrink-0">
                                        <div className="relative flex items-center justify-center w-[200px] h-[200px]">
                                        <svg className="absolute" width={200} height={200} viewBox="0 0 220 220">
                                            <circle cx="110" cy="110" r="100" fill="none"
                                                stroke={isDark ? (isFifa ? T.green : T.amber) : (isFifa ? T.border2 : T.amber)} strokeWidth="1"
                                                strokeDasharray="3 6" strokeLinecap="round"
                                                strokeOpacity={isDark ? 0.85 : (isFifa ? 1 : 0.85)} />
                                        </svg>
                                        <div className="relative z-10 w-[145px] h-[145px] flex items-center justify-center">
                                            <img
                                                src={isDark ? "/images/tower_Design_dark.svg" : "/images/tower_Design.svg"}
                                                alt="Tower"
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="text-center w-full shrink-0 min-h-[52px] mt-3">
                                        <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: T.text3 }}>Direction</p>
                                        <p className="text-xl font-light leading-[1.3] tracking-[0.02em]" style={{ color: T.text1 }}>{towerDirection}</p>
                                    </div>
                                    <div className="flex-1 min-h-8 w-full" aria-hidden />
                                    <div className="w-full pt-5 flex justify-around shrink-0" style={{ borderTop: `0.5px solid ${T.border}` }}>
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
                                    className="rounded-xl overflow-hidden flex flex-col h-full scroll-reveal scroll-reveal-delay-3"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center justify-between shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>System Health</p>
                                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: T.green }} aria-label="Online" />
                                    </div>
                                    <div className="flex flex-col flex-1 min-h-0">
                                        {healthComponents.map((item, i, arr) => (
                                            <div
                                                key={item}
                                                className="flex flex-1 items-center justify-between px-5 min-h-0"
                                                style={i < arr.length - 1 ? { borderBottom: gridDivider(T) } : {}}
                                            >
                                                <span className="text-[13px]" style={{ color: T.text2 }}>{item}</span>
                                                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: T.green }} />
                                            </div>
                                        ))}
                                        <div className="px-5 pb-5 shrink-0 w-full">
                                            <div className="w-full pt-5 flex justify-around shrink-0" style={{ borderTop: `0.5px solid ${T.border}` }}>
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
                                </div>
                            </div>

                            {/* TODAY AT A GLANCE — 2×2: Today|Performance · Climate|Impact */}
                            <p className={`${SECTION_HEADING} ${SECTION_SPACING} scroll-reveal scroll-reveal-delay-1`} style={{ color: T.text3 }}>Today at a Glance</p>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch lg:[grid-template-rows:auto_auto] scroll-reveal scroll-reveal-delay-1">

                                {/* Today's Data — row 1, left */}
                                <div className="rounded-xl overflow-hidden flex flex-col h-full min-h-0"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Energy Output</p>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 min-h-0">
                                        {hourlyKwhPoints.length ? (
                                            <div className="flex-1 min-h-[310px]">
                                                <Line
                                                    data={{
                                                        datasets: [{
                                                            label: "Energy (kWh)",
                                                            data: hourlyKwhPoints,
                                                            borderColor: T.amber,
                                                            backgroundColor: T.amberDim,
                                                            fill: "start",
                                                            borderWidth: 2,
                                                            pointRadius: 0,
                                                            pointHitRadius: 14,
                                                            tension: 0.3,
                                                        }],
                                                    }}
                                                    options={todayDataLineChartOptions}
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex-1 min-h-[310px] flex items-center justify-center">
                                                <p className="text-sm" style={{ color: T.text3 }}>Loading chart data…</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Performance — row 1, right */}
                                <div className="rounded-xl overflow-hidden flex flex-col h-full min-h-0"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Power Output</p>
                                    </div>
                                    <div className="p-5 flex flex-col flex-1 min-h-0">
                                        {hourlyProduction?.labels?.length ? (
                                            <div className="flex-1 min-h-0">
                                                <Bar data={performanceBarChartData} options={performanceBarChartOptions} />
                                            </div>
                                        ) : (
                                            <div className="flex-1 min-h-0 flex items-center justify-center">
                                                <p className="text-sm" style={{ color: T.text3 }}>Loading chart data…</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Climate — row 2, left */}
                                <div className="rounded-xl overflow-hidden flex flex-col h-full min-h-0"
                                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
                                >
                                    <div className="px-5 h-12 flex items-center justify-between shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <p className="text-[13px] font-bold tracking-[0.15em] uppercase leading-none" style={{ color: T.text3 }}>Climate</p>
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
                                    <div className="grid grid-cols-2 shrink-0" style={{ borderBottom: `0.5px solid ${T.border}` }}>
                                        <div className="px-4 py-3" style={{ borderRight: `0.5px solid ${T.border}` }}>
                                            <p className="text-[12px] tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Humidity</p>
                                            <p className="text-[22px] font-[200] leading-none" style={{ color: T.text1 }}>
                                                {weather?.current?.humidity ?? "—"}<span className="text-xs font-light" style={{ color: T.text2 }}>%</span>
                                            </p>
                                        </div>
                                        <div className="px-4 py-3">
                                            <p className="text-[12px] tracking-[0.10em] mb-1" style={{ color: T.text3 }}>Temperature</p>
                                            <p className="text-[22px] font-[200] leading-none" style={{ color: T.text1 }}>
                                                {toDisplayTemp(weather?.current?.temp)}<span className="text-xs font-light" style={{ color: T.text2 }}>{tempSymbol}</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 flex flex-col flex-1 min-h-0">
                                        <p className="text-[12px] tracking-[0.10em] mb-2 shrink-0" style={{ color: T.text3 }}>Today&apos;s Conditions</p>
                                        <div className="grid grid-cols-2 gap-3 flex-1 min-h-0">
                                            <div className="flex flex-col min-h-0">
                                                <div className="flex-1 min-h-[64px]">
                                                    <Sparkline
                                                        values={weather?.hourly?.slice(0, 24).map(h => h.humidity ?? 0) ?? [weather?.current?.humidity ?? 0]}
                                                        color="#7BAFD4" unit="%" startHour={new Date().getHours()}
                                                    />
                                                </div>
                                                <p className="text-[10px] mt-1 shrink-0" style={{ color: T.text3 }}>Updated {currentTime}</p>
                                            </div>
                                            <div className="flex flex-col min-h-0">
                                                <div className="flex-1 min-h-[64px]">
                                                    <Sparkline
                                                        values={weather?.hourly?.slice(0, 24).map(h => toDisplayTemp(h.temp) ?? 0) ?? [toDisplayTemp(weather?.current?.temp) ?? 0]}
                                                        color="#f97316" unit={tempSymbol} startHour={new Date().getHours()}
                                                    />
                                                </div>
                                                <p className="text-[10px] mt-1 shrink-0" style={{ color: T.text3 }}>Feels like {toDisplayTemp((weather?.current?.temp ?? 15) - 2)}{tempSymbol}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Environmental Impact — row 2, right */}
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

                            </div>
                        </section>

                        {/* ════════════════════════════════════════
                            SECTION 2 — Diagnostics + Controls + Historical
                        ════════════════════════════════════════ */}
                        <section
                            ref={diagnosticsRef}
                            className="px-8 pb-10 scroll-mt-24"
                            id="diagnostics"
                            style={{ background: T.sectionBg }}
                        >
                            {/* Section label */}
                            <p className={`${SECTION_HEADING} ${SECTION_SPACING}`} style={{ color: T.text3 }}>System Diagnostics</p>

                            {/* ── Diagnostics ── */}
                            <div className="rounded-xl overflow-hidden scroll-reveal scroll-reveal-delay-1"
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
                            <div ref={controlRef} id="control" className="scroll-mt-24 scroll-reveal scroll-reveal-delay-2">
                                <p className={`${SECTION_HEADING} ${SECTION_SPACING}`} style={{ color: T.text3 }}>System Controls</p>
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
                            <div ref={historicalRef} id="historical" className="scroll-mt-24 scroll-reveal scroll-reveal-delay-1">
                                <p className={`${SECTION_HEADING} ${SECTION_SPACING}`} style={{ color: T.text3 }}>Historical Data</p>
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
                    style={{ background: T.cardBg, border: T.cardBorder, boxShadow: T.cardShadow, borderRadius: T.cardRadius }}
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
