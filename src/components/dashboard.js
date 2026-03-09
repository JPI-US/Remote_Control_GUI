"use client";
import React from 'react';
import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from 'next/navigation';
import {
    Menu, X, Moon, Sun, LayoutDashboard, BarChart3, Sliders, History,
    Droplets, Thermometer, Zap, Globe, Check, RotateCcw, Power, Home,
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

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const SIDEBAR_BG = "#374151";
const MAIN_BG = "#F2F2F2";
const CARD_BG = "#FFFFFF";
const ACCENT_GREEN = "#2A9D8F";
const ORANGE = "#F3B664";
const TITLE_COLOR = "#2F3E4D";
const TEXT_MUTED = "#6A7B8F";

export default function Dashboard(){
    const { session, user, loading } = useSession(); // Retrieving session info:
    const { isDark, toggleDark } = useTheme(); 
    const { system, froniusSystemId, loading: systemloading } = useSystem(); //Retrieving system data    
    const router = useRouter();

    const MAX_PV_POWER = system?.max_pv_kw; 
    const system_tz = system?.timezone;
    const chartDay = DateTime.now().setZone(system_tz).startOf("day");
    const SYSTEM_ID = froniusSystemId;
    console.log(`The system id: ${SYSTEM_ID}`);

    const lat = system?.latitude;
    const lon = system?.longitude;

    const [pvPower, setPvPower] = useState(0); //Retrieves the live power generation
    const [maxHourlyPower, setMaxHourlyPower] = useState(0);
    const [dailyProduction, setDailyProduction] = useState(null); // Retrieves the daily power generation
    const [hourlyProduction, setHourlyProduction] = useState(null); // Retrieves the hourly power generation
    const [monthlyProduction, setMonthlyProduction] = useState(null); // Retrieves the monthly power generation
    const [yearlyProduction, setYearlyProduction] = useState(null); // Retrieves the monthly power generation
    const [totalProduction, setTotalProduction] = useState(null); // Retrieves the total power generation
    const intervalRef = useRef(null); //Interval time for refreshes
    const intervalRef1 = useRef(null); //Interval time for refreshes

    // Useeffect for retrieving the live power generation data
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchLive() {
            try {
                // Fetch power data
                const response = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!response.ok) return;

                const json = await response.json();
                const live = json.data?.live;

                if (!live?.pvPower != null) {
                    setPvPower(live.pvPower);
                }
            } catch (error) {
                console.error('Live fetch error:', error);
            }
        }

        fetchLive();
        intervalRef.current = setInterval(fetchLive, 10000); // Call every 10 seconds
        return () => clearInterval(intervalRef.current);
    }, [SYSTEM_ID]); 

    // Convert watts → percentage
    const powerPercent = Math.min(
        Math.max(pvPower / MAX_PV_POWER, 0),
        1
    );

    const dashOffset = CIRCUMFERENCE * (1 - powerPercent);
    const pvPowerKw = pvPower / 1000;


    // Useeffect for retrieving the monthly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchDailyProduction() {
            try {
                // Fetch power data
                const res = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!res.ok) return;

                const json = await res.json();
                setDailyProduction(json.data?.dailyproduction ?? null);
            } catch (error) {
                console.error('Daily production error:', error);
            }
        }

        fetchDailyProduction();
    }, [SYSTEM_ID]); 

    // Retrieving Todays total power generation
    const todaysProduction = useMemo(() => {
        if (!dailyProduction || !system_tz) return null;

        const systemDay = DateTime.now().setZone(system_tz).day;
        const index = systemDay - 1;

        return dailyProduction.values[index] ?? null;
    }, [dailyProduction, system_tz]);


    // Useeffect for retrieving the monthly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchMonthlyProduction() {
            try {
                // Fetch power data
                const res = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!res.ok) return;

                const json = await res.json();
                setMonthlyProduction(json.data?.monthlyproduction ?? null);
            } catch (error) {
                console.error('Monthly production error:', error);
            }
        }

        fetchMonthlyProduction();
    }, [SYSTEM_ID]);
     
    const MONTH_NAMES = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthLabels = monthlyProduction?.labels
        ? monthlyProduction.labels.map(m => MONTH_NAMES[m - 1])
        : MONTH_NAMES; // fallback while loading


    // Useeffect for retrieving the yearly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchYearlyProduction() {
            try {
                // Fetch power data
                const res = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!res.ok) return;

                const json = await res.json();
                setYearlyProduction(json.data?.yearlyproduction ?? null);
            } catch (error) {
                console.error('Monthly production error:', error);
            }
        }

        fetchYearlyProduction();
    }, [SYSTEM_ID]);


    // Useeffect for retrieving the hourly power generation data /api/fronius/dailyProduction?systemId=${SYSTEM_ID}
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchHourlyProduction() {
            try {
                // Fetch power data
                const res = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!res.ok) return;

                const json = await res.json();
                
                // Extract energy data safely
                const energyData = json.data?.hourlyproduction ?? null;

                setHourlyProduction(energyData);

                // Compute maximum power immediately
                if (energyData?.values?.length) {
                    const maxPower = Math.max(...energyData.values)/1000;
                    setMaxHourlyPower(Math.round(maxPower)); // round for display
                } else {
                    setMaxHourlyPower(0);
                }
            } catch (error) {
                console.error('Daily production error:', error);
            }
        }

        fetchHourlyProduction();
        intervalRef1.current = setInterval(fetchHourlyProduction, 300000); // Call every 5 minutes
        return () => clearInterval(intervalRef1.current);
    }, [SYSTEM_ID]);

    // Generate full day 5-minute interval labels (00:00 → 23:55)
    const fullDayLabels = [];
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m += 5) {
            fullDayLabels.push(`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`);
        }
    }

    // Build Date objects in system timezone → convert to UTC for Chart.js
    const fullDayDates = fullDayLabels.map(label => {
        const [hh, mm] = label.split(":").map(Number);

        return chartDay
            .plus({ hours: hh, minutes: mm })
            .toUTC()
            .toJSDate();
    });

    const datasetPoints = (hourlyProduction?.labels ?? []).map((utcLabel, i) => {
        const [hh, mm] = utcLabel.split(":").map(Number);

        const utcTime = chartDay
            .setZone("utc", { keepLocalTime: true })
            .set({
                hour: hh,
                minute: mm,
                second: 0,
                millisecond: 0,
            });

        const systemTime = utcTime.setZone(system_tz);

        return {
            x: systemTime.toJSDate(),
            y: hourlyProduction.values[i],
        };
    });


    //Fetching the total lifetime generation
    useEffect(() => {
        if (!SYSTEM_ID) return;
        console.log("Fetching Fronius data for system:", SYSTEM_ID);
        async function fetchtotalProduction() {
            try {
                // Fetch power data
                const res = await fetch(
                    `/api/fronius?systemId=${SYSTEM_ID}`, 
                    { cache: "no-store" }
                );

                if (!res.ok) return;

                const json = await res.json();
                setTotalProduction(json.data?.total ?? null);
            } catch (error) {
                console.error('Daily production error:', error);
            }
        }

        fetchtotalProduction();
    }, [SYSTEM_ID]); 
    
    const [weather, setWeather] = useState(null);
    const [weatherLoading, setweatherLoading] = useState(true);
    const [weatherError, SetweatherError] = useState(null);
    //Fetching the live weather readings for the systems location
    useEffect(() => {
        if (!lat || !lon) return;

        const controller = new AbortController();

        async function fetchWeather() {
            try {
                setweatherLoading(true);
                SetweatherError(null);

                const res = await fetch(
                    `/api/weather?lat=${lat}&lon=${lon}`,
                    { signal: controller.signal }
                );

                if (!res.ok) {
                    const data = await res.json();
                    throw new Error(data.error || "Failed to fetch weather data");
                }

                const data = await res.json();
                if (!data || !data.current) {
                    throw new Error("Weather data missing current values");
                }

                console.log("Weather API RESPONSE:", data);
                setWeather(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Weather API call error:", err);
                    SetweatherError(err.message);
                }
            } finally {
                setweatherLoading(false);
            }
        }

        fetchWeather();
        const interval = setInterval(fetchWeather, 10 * 60 * 1000); // every 10 minutes
        return () => {
            clearInterval(interval); //clearing interval timer
            controller.abort(); // Cleanup on unmount or lat/lon change
        };
    }, [lat, lon]);

    const tempStats = useMemo(() => {
        if (!weather?.current) return [];

        return [
            {
                label: 'Humidity',
                value: `${weather.current.humidity}%`,
                icon: '/images/water-droplet.svg',
                description: 'Environmental humidity level',
                color: 'blue',
            },
            {
                label: 'Temperature',
                value: `${weather.current.temp}°C`,
                icon: '/images/thermometer.svg',
                description: 'Current ambient temperature',
                color: 'red',
            },
            {
                label: 'Current Power',
                value: `${(pvPowerKw/(MAX_PV_POWER/1000)*100).toFixed(2)}%`,
                icon: '/images/lightning-bolt.svg',
                description: 'Real-time power generation',
                color: 'yellow'
            },
            {
                label: 'Daily Peak Power',
                value: `${maxHourlyPower} kW`,
                icon: '/images/Sun.svg',
                description: 'Maximum power achieved today',
                color: 'orange'
            },
            {
                label: 'Todays Total Power Generation',
                value: `${(todaysProduction ?? 0).toFixed(2)} kW`,
                icon: '/images/Sun.svg',
                description: 'Total power achieved today',
                color: 'orange'
            },
            {
                label: 'Carbon Saved',
                value: `${(totalProduction*0.37).toFixed(2)} kg CO₂`, //Total carbon saved = Inverter total in kwh * EF(Grid emission factor) 
                icon: '/images/Wind.svg',
                description: 'Environmental impact reduction',
                color: 'emerald'
            }
        ];
    }, [weather, pvPowerKw, MAX_PV_POWER, maxHourlyPower, totalProduction, todaysProduction]);

    const weatherUI = {
        Sunny: {
            icon: '☀️',
            title: 'Clear Sky',
            message: 'Perfect for solar generation',
        },
        'Mostly Sunny': {
            icon: '🌤️',
            title: 'Mostly Sunny',
            message: 'Great solar conditions',
        },
        'Partly Sunny': {
            icon: '🌤️',
            title: 'Partly Sunny',
            message: 'Moderate solar conditions',
        },
        'Partly Cloudy': {
            icon: '⛅',
            title: 'Partly Cloudy',
            message: 'Moderate solar output expected',
        },
        'Mostly Cloudy': {
            icon: '⛅',
            title: 'Mostly Cloudy',
            message: 'Reduced solar output expected',
        },
        Cloudy: {
            icon: '☁️',
            title: 'Cloudy',
            message: 'Reduced solar efficiency',
        },
        'Slight Chance Rain Showers': {
            icon: '☁️',
            title: 'Cloudy',
            message: 'Reduced solar efficiency',
        },
        Rain: {
            icon: '🌧️',
            title: 'Rainy',
            message: 'Low solar generation expected',
        },
        Thunderstorms: {
            icon: '⛈️',
            title: 'Stormy',
            message: 'Solar generation disrupted',
        },
        default: {
            icon: '🌡️',
            title: 'Weather Update',
            message: 'Conditions are changing',
        },
    };

    const condition = weather?.current?.condition;
    //console.log(`Condition: ${condition}`);// Chance Rain Showers
    const weatherDisplay = weatherUI[condition] || weatherUI.default;

    const [menuOpen, setMenuOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [autonomousMode, setAutonomousMode] = useState(true);
    const [maintenanceMode, setMaintenanceMode] = useState(false);
    const [historicalPeriod, setHistoricalPeriod] = useState("monthly");
    const diagnosticsRef = useRef(null);
    const controlRef = useRef(null);
    const historicalRef = useRef(null);
    const [activeSection, setActiveSection] = useState("dashboard");

    const [query, setQuery] = useState("");
    const currentTime = useMemo(() =>
        DateTime.now().setZone(system_tz || "America/Chicago").toFormat("hh:mm:ss a"),
        [system_tz]
    );
    const carbonSaved = useMemo(() =>
        totalProduction != null ? (totalProduction * 0.37).toFixed(2) : "0",
        [totalProduction]
    );

    // Scroll to section when sidebar link is clicked or URL has #diagnostics, #control, #historical
    const scrollToSection = (ref) => {
        ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    useEffect(() => {
        if (typeof window === "undefined") return;
        const hash = window.location.hash;
        const id = setTimeout(() => {
            if (hash === "#diagnostics") scrollToSection(diagnosticsRef);
            else if (hash === "#control") scrollToSection(controlRef);
            else if (hash === "#historical") scrollToSection(historicalRef);
        }, 100);
        return () => clearTimeout(id);
    }, []);
    useEffect(() => {
        const onHashChange = () => {
            const hash = window.location.hash;
            if (hash === "#diagnostics") {
                scrollToSection(diagnosticsRef);
                setActiveSection("diagnostics");
            } else if (hash === "#control") {
                scrollToSection(controlRef);
                setActiveSection("control");
            } else if (hash === "#historical") {
                scrollToSection(historicalRef);
                setActiveSection("historical");
            } else {
                setActiveSection("dashboard");
            }
        };
        const hash = window.location.hash;
        if (hash === "#diagnostics") setActiveSection("diagnostics");
        else if (hash === "#control") setActiveSection("control");
        else if (hash === "#historical") setActiveSection("historical");
        else setActiveSection("dashboard");
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    // --- Rendering ---
    if (loading || systemloading) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    }
    
    if (!session) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">Unauthorized...</p>;
    }
    // Case 2: no system found
    if (!system) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">No system data found...</p>;
    } 
    if (!user) {
        return <p>User not found or not logged in</p>;
    }
    console.log(JSON.stringify(system)); // prints full object as JSON string
    const angle = system?.towers?.[0]?.current_angle ?? "N/A";
    console.log(`This is the tower angle: ${angle}`);
    

    const angleNum = typeof angle === "number" && !Number.isNaN(angle) ? Math.floor(angle) : (angle ?? "—");
    const powerPercentDisplay = MAX_PV_POWER > 0 ? Math.min(100, (pvPowerKw / (MAX_PV_POWER / 1000)) * 100) : 0;

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#F2F2F2] text-[#2F3E4D] dark:bg-gray-900 dark:text-gray-100">
            {/* Top header bar - fixed, white, with bigger logo */}
            <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-sm dark:bg-gray-800 dark:shadow-gray-900">
                <img
                    src="/images/Janta%20Power%20Business%20Card%20Logo%202.svg"
                    alt="Janta Power"
                    className="h-14 w-auto min-w-[160px] object-contain md:h-16 md:min-w-[200px]"
                />
                <p className="text-sm font-medium text-[#2F3E4D] dark:text-gray-200 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
                    {system?.system_name || "System"} • {currentTime}
                </p>
                    <div className="flex items-center gap-2">
                        <button type="button" aria-label={isDark ? "Light mode" : "Dark mode"} className="p-2 rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-gray-700 text-[#2F3E4D] dark:text-gray-200" onClick={toggleDark}>
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button type="button" aria-label="Menu" className="p-2 rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-gray-700 text-[#2F3E4D] dark:text-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Below header: fixed vertical sidebar + main content (pt-20 = space for fixed header) */}
            <div className="flex flex-1 min-h-0 pt-20">
                {/* Vertical sidebar - fixed, dark grey, not scrollable */}
                <aside
                    className="fixed left-0 top-20 bottom-0 w-64 z-30 flex flex-col overflow-y-auto"
                    style={{ backgroundColor: SIDEBAR_BG }}
                >
                    <nav className="flex flex-col gap-6 p-4 pt-5">
                        <div className="flex flex-col gap-1">
                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">System</span>
                            <div className="flex flex-col gap-0.5">
                                {activeSection === "dashboard" ? (
                                    <div className="flex items-center rounded-lg bg-white/10 pl-1" style={{ borderLeft: `3px solid ${ACCENT_GREEN}` }}>
                                        <Link href="/dashboard" onClick={() => setActiveSection("dashboard")} className="flex items-center gap-3 px-3 py-2 w-full text-white font-semibold">
                                            <LayoutDashboard className="w-5 h-5 flex-shrink-0 text-white/90" />
                                            Dashboard
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href="/dashboard" onClick={() => setActiveSection("dashboard")} className="flex items-center gap-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10">
                                        <LayoutDashboard className="w-5 h-5 flex-shrink-0" />
                                        Dashboard
                                    </Link>
                                )}
                                {activeSection === "diagnostics" ? (
                                    <div className="flex items-center rounded-lg bg-white/10 pl-1" style={{ borderLeft: `3px solid ${ACCENT_GREEN}` }}>
                                        <Link href="/dashboard#diagnostics" onClick={() => setActiveSection("diagnostics")} className="flex items-center gap-3 px-3 py-2 w-full text-white font-semibold">
                                            <BarChart3 className="w-5 h-5 flex-shrink-0 text-white/90" />
                                            Diagnostics
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href="/dashboard#diagnostics" onClick={() => setActiveSection("diagnostics")} className="flex items-center gap-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10">
                                        <BarChart3 className="w-5 h-5 flex-shrink-0" />
                                        Diagnostics
                                    </Link>
                                )}
                                {activeSection === "control" ? (
                                    <div className="flex items-center rounded-lg bg-white/10 pl-1" style={{ borderLeft: `3px solid ${ACCENT_GREEN}` }}>
                                        <Link href="/dashboard#control" onClick={() => setActiveSection("control")} className="flex items-center gap-3 px-3 py-2 w-full text-white font-semibold">
                                            <Sliders className="w-5 h-5 flex-shrink-0 text-white/90" />
                                            Control
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href="/dashboard#control" onClick={() => setActiveSection("control")} className="flex items-center gap-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10">
                                        <Sliders className="w-5 h-5 flex-shrink-0" />
                                        Control
                                    </Link>
                                )}
                                {activeSection === "historical" ? (
                                    <div className="flex items-center rounded-lg bg-white/10 pl-1" style={{ borderLeft: `3px solid ${ACCENT_GREEN}` }}>
                                        <Link href="/dashboard#historical" onClick={() => setActiveSection("historical")} className="flex items-center gap-3 px-3 py-2 w-full text-white font-semibold">
                                            <History className="w-5 h-5 flex-shrink-0 text-white/90" />
                                            Historical Data
                                        </Link>
                                    </div>
                                ) : (
                                    <Link href="/dashboard#historical" onClick={() => setActiveSection("historical")} className="flex items-center gap-3 px-4 py-2 rounded-lg text-white/90 hover:bg-white/10">
                                        <History className="w-5 h-5 flex-shrink-0" />
                                        Historical Data
                                    </Link>
                                )}
                            </div>
                        </div>
                    </nav>
                </aside>

                {/* Main content - ml-64 to sit beside fixed sidebar */}
                <div className="flex-1 flex flex-col min-w-0 ml-64 dark:bg-gray-900">

                {/* Scrollable sections (4 sections) - scroll-snap for section transitions */}
                <main className="flex-1 overflow-y-auto overflow-x-hidden snap-y snap-mandatory">
                    {/* Section 1 - Tower Status + Today at a Glance */}
                    <section className="py-6 px-6 pb-4 dark:bg-gray-900" id="section-1">
                        <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] dark:text-gray-100 mb-4">{system.system_name}</h1>

                        {/* TOWER STATUS */}
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] dark:text-gray-200 mb-3">Tower Status</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            {/* Card 1: Current Power Output - circular gauge */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center dark:text-gray-100">
                                <div className="relative w-40 h-40 flex items-center justify-center">
                                    <span className="text-2xl font-bold z-10">{pvPowerKw.toFixed(2)} KW</span>
                                    <svg className="w-40 h-40 absolute" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r={RADIUS} fill="transparent" stroke="#e5e7eb" strokeWidth="8" />
                                        <circle
                                            cx="50" cy="50" r={RADIUS}
                                            fill="transparent"
                                            stroke={ORANGE}
                                            strokeWidth="8"
                                            strokeDasharray={CIRCUMFERENCE}
                                            strokeDashoffset={dashOffset}
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                            className="transition-all duration-1000"
                                        />
                                    </svg>
                                </div>
                                <p className="mt-3 text-sm text-[#6A7B8F] dark:text-gray-400">Current Power Output</p>
                            </div>

                            {/* Card 2: Tower Angle */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center dark:text-gray-100">
                                <div className="relative flex items-center justify-center">
                                    <img src="/images/tower_Design.svg" alt="Tower" className="w-32 h-32 object-contain" />
                                </div>
                                <p className="text-2xl font-bold text-[#2F3E4D] dark:text-gray-100 mt-2">{angleNum}°</p>
                                <p className="text-sm text-[#6A7B8F] dark:text-gray-400">Tower Angle</p>
                            </div>

                            {/* Card 3: System Health */}
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                                <h3 className="text-sm font-bold text-[#2F3E4D] dark:text-gray-100 mb-3">System Health</h3>
                                <ul className="space-y-2">
                                    {["Inverter", "Motor", "Sensors", "Network", "PV Panels"].map((item) => (
                                        <li key={item} className="flex items-center justify-between text-sm">
                                            <span className="text-[#2F3E4D] dark:text-gray-200">{item}</span>
                                            <span className="flex items-center gap-1.5 text-[#2A9D8F] font-medium">
                                                <span className="w-2 h-2 rounded-full bg-[#2A9D8F]" /> FUNCTIONAL
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* TODAY AT A GLANCE */}
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">Today at a Glance</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">Environmental</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col items-center text-center">
                                        <Droplets className="w-8 h-8 text-blue-400 mb-2" />
                                        <p className="text-xl font-bold text-[#2F3E4D]">{weather?.current?.humidity ?? "—"}%</p>
                                        <p className="text-xs text-[#6A7B8F]">Humidity</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                        <Thermometer className="w-8 h-8 text-orange-500 mb-2" />
                                        <p className="text-xl font-bold text-[#2F3E4D]">{weather?.current?.temp ?? "—"}°C</p>
                                        <p className="text-xs text-[#6A7B8F]">Temperature</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">Performance</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col items-center text-center">
                                        <img src="/images/Battery%20charging.png" alt="Battery charging" className="w-8 h-8 object-contain mb-2" />
                                        <p className="text-xl font-bold text-[#2F3E4D]">{maxHourlyPower} kW</p>
                                        <p className="text-xs text-[#6A7B8F]">Daily Peak</p>
                                    </div>
                                    <div className="flex flex-col items-center text-center">
                                        <Zap className="w-8 h-8 text-[#6A7B8F] mb-2" />
                                        <p className="text-xl font-bold text-[#2F3E4D]">{powerPercentDisplay.toFixed(1)}%</p>
                                        <p className="text-xs text-[#6A7B8F]">Power Output</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center text-center min-h-[240px]">
                                <Globe className="w-10 h-10 text-[#2A9D8F] mb-2 flex-shrink-0" />
                                <p className="text-xs text-[#6A7B8F]">Environmental impact reduction</p>
                                <p className="text-xl font-bold text-[#2A9D8F] mt-1">{carbonSaved} kg CO2</p>
                                <p className="text-sm text-[#2A9D8F]">Carbon Saved</p>
                            </div>

                            {/* Today's Data - area chart */}
                            <div className="bg-white rounded-xl shadow-md p-4 md:col-span-1">
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
                                                    x: {
                                                        type: "time",
                                                        adapters: { date: { zone: system_tz } },
                                                        min: fullDayDates[0],
                                                        max: fullDayDates[fullDayDates.length - 1],
                                                        grid: { display: false },
                                                    },
                                                    y: {
                                                        beginAtZero: true,
                                                        title: { display: true, text: "Power (KW)" },
                                                        grid: { color: "#f3f4f6" },
                                                    },
                                                },
                                                plugins: { legend: { display: false } },
                                            }}
                                        />
                                    </div>
                                ) : (
                                    <p className="text-sm text-[#6A7B8F] py-8 text-center">Loading chart data...</p>
                                )}
                            </div>
                        </div>
                    </section>

                    {/* Section 2 - System Diagnostics */}
                    <section ref={diagnosticsRef} className="py-6 px-6 pt-4 bg-[#F2F2F2] scroll-mt-24" id="diagnostics">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-3">System Diagnostics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            {[
                                { name: "Light Sensor", description: "Sun tracking and positioning" },
                                { name: "Relay", description: "Power distribution and switching system" },
                                { name: "Pressure Sensor", description: "Environmental pressure monitoring" },
                                { name: "Humidity Sensor", description: "Moisture detection and monitoring" },
                                { name: "Temperature Sensor", description: "Heat monitoring and thermal control" },
                                { name: "Limit Switches", description: "Safety controls and position limits" },
                            ].map((item) => (
                                <div key={item.name} className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between gap-4">
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

                        {/* System Controls - Tower Orientation + Control Panel */}
                        <div ref={controlRef} id="control" className="scroll-mt-24">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mt-10 mb-3">System Controls</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            {/* Tower Orientation card */}
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mb-4">Tower Orientation</h3>
                                <div className="flex justify-center mb-4">
                                    <img src="/images/Transparent%20PNG%201.jpg" alt="Tower" className="w-64 h-64 md:w-80 md:h-80 object-contain" />
                                </div>
                                <div className="flex items-center justify-center gap-2 text-[#2F3E4D] font-bold text-lg mb-4">
                                    <RotateCcw className="w-5 h-5 text-[#6A7B8F]" />
                                    {angleNum}°
                                </div>
                                <div className="flex flex-row items-start justify-center gap-8 flex-wrap min-w-0 pt-4 mt-4 border-t border-[#E5E7EB]">
                                    <div className="flex items-start gap-3 min-w-0 flex-1 basis-0 max-w-[240px]">
                                        <button
                                            type="button"
                                            role="switch"
                                            aria-checked={autonomousMode}
                                            onClick={() => { setAutonomousMode(true); setMaintenanceMode(false); }}
                                            className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors mt-0.5 ${autonomousMode ? "bg-[#2A9D8F]" : "bg-[#d1d5db]"}`}
                                        >
                                            <span className={`inline-flex h-5 w-5 rounded-full bg-white shadow items-center justify-center transition-transform ${autonomousMode ? "translate-x-5" : "translate-x-0.5"} mt-0.5`}>
                                                {autonomousMode && <Check className="w-3 h-3 text-[#2A9D8F]" />}
                                            </span>
                                        </button>
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="font-bold text-[#2F3E4D] text-base">Autonomous</span>
                                            <span className="text-sm text-[#6A7B8F]">Default</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 min-w-0 flex-1 basis-0 max-w-[240px]">
                                        <button
                                            type="button"
                                            role="switch"
                                            aria-checked={maintenanceMode}
                                            onClick={() => setMaintenanceMode(!maintenanceMode)}
                                            className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors mt-0.5 ${maintenanceMode ? "bg-[#dc2626]" : "bg-[#d1d5db]"}`}
                                        >
                                            <span className={`inline-flex h-5 w-5 rounded-full bg-white shadow items-center justify-center transition-transform ${maintenanceMode ? "translate-x-5" : "translate-x-0.5"} mt-0.5`}>
                                                <X className="w-3 h-3 text-[#dc2626]" />
                                            </span>
                                        </button>
                                        <div className="flex flex-col gap-0.5 min-w-0">
                                            <span className="font-bold text-[#2F3E4D] text-base">Maintenance</span>
                                            <span className="text-sm text-[#6A7B8F]">Requires confirmation</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Control Panel card */}
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-lg font-bold text-[#2F3E4D] mb-4">Control Panel</h3>
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F2F2F2] shadow-sm">
                                        <button type="button" className="shrink-0 w-24 py-2.5 rounded-lg bg-[#2A9D8F] text-white font-bold transition-all duration-200 cursor-pointer hover:bg-[#238276] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#2A9D8F] focus:ring-offset-2 flex items-center justify-center gap-2">
                                            <Power className="w-4 h-4" /> Start
                                        </button>
                                        <p className="text-sm text-[#2F3E4D]">Power on tower and start automated tracking</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F2F2F2] shadow-sm">
                                        <button type="button" className="shrink-0 w-24 py-2.5 rounded-lg bg-[#F3B664] text-white font-bold transition-all duration-200 cursor-pointer hover:bg-[#e0a04d] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#F3B664] focus:ring-offset-2 flex items-center justify-center gap-2">
                                            <RotateCcw className="w-4 h-4" /> Restart
                                        </button>
                                        <p className="text-sm text-[#2F3E4D]">Reboot tower systems and all components</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F2F2F2] shadow-sm">
                                        <button type="button" className="shrink-0 w-24 py-2.5 rounded-lg bg-[#e57373] text-white font-bold transition-all duration-200 cursor-pointer hover:bg-[#ef5350] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#e57373] focus:ring-offset-2 flex items-center justify-center gap-2">
                                            <X className="w-4 h-4" /> Stop
                                        </button>
                                        <p className="text-sm text-[#2F3E4D]">Emergency stop all operations</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F2F2F2] shadow-sm">
                                        <button type="button" className="shrink-0 w-24 py-2.5 rounded-lg bg-[#b91c1c] text-white font-bold transition-all duration-200 cursor-pointer hover:bg-[#991b1b] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#b91c1c] focus:ring-offset-2 flex items-center justify-center gap-2">
                                            <RotateCcw className="w-4 h-4" /> Reset
                                        </button>
                                        <p className="text-sm text-[#2F3E4D]">Reset tower to default factory settings</p>
                                    </div>
                                    <div className="flex items-center gap-4 p-3 rounded-xl bg-[#F2F2F2] shadow-sm">
                                        <button type="button" className="shrink-0 w-24 py-2.5 rounded-lg bg-[#374151] text-white font-bold transition-all duration-200 cursor-pointer hover:bg-[#4b5563] hover:shadow-md active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#374151] focus:ring-offset-2 flex items-center justify-center gap-2">
                                            <Home className="w-4 h-4" /> Home
                                        </button>
                                        <p className="text-sm text-[#2F3E4D]">Return tower to home position</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        {/* Historical Data section */}
                        <div ref={historicalRef} id="historical" className="scroll-mt-24">
                        <h2 className="text-sm font-bold uppercase tracking-wider text-[#2F3E4D] mt-10 mb-3">Historical Data</h2>
                        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                            <h3 className="text-base font-bold text-[#2F3E4D]">Historical Power Data</h3>
                            <p className="text-sm text-[#6A7B8F] mt-0.5 mb-4">Energy produced over time</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {[
                                    { id: "monthly", label: "Monthly" },
                                    { id: "yearly", label: "Yearly" },
                                    { id: "total", label: "Total" },
                                ].map(({ id, label }) => (
                                    <button
                                        key={id}
                                        type="button"
                                        onClick={() => setHistoricalPeriod(id)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${historicalPeriod === id ? "bg-[#F3B664] text-white" : "bg-[#F2F2F2] text-[#2F3E4D] hover:bg-[#E5E7EB]"}`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>
                            <div className="rounded-lg border border-[#E5E7EB] bg-[#FAFAFA] p-4" style={{ minHeight: "280px" }}>
                                {historicalPeriod === "monthly" && dailyProduction?.values?.length > 0 && (
                                    <div style={{ height: "260px" }}>
                                        <Bar
                                            data={{
                                                labels: (dailyProduction.labels || dailyProduction.values.map((_, i) => i + 1)).slice(0, dailyProduction.values.length),
                                                datasets: [{
                                                    label: "Energy (kWh)",
                                                    data: (dailyProduction.values || []).map((v) => Math.round((v ?? 0) * 100) / 100),
                                                    backgroundColor: "#F3B664",
                                                    borderRadius: 4,
                                                    barPercentage: 0.8,
                                                    categoryPercentage: 0.9,
                                                }],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E5E7EB" } },
                                                    x: { grid: { display: false }, title: { display: true, text: "Day" } },
                                                },
                                                plugins: { legend: { display: false } },
                                            }}
                                        />
                                    </div>
                                )}
                                {historicalPeriod === "yearly" && monthlyProduction?.values?.length > 0 && (
                                    <div style={{ height: "260px" }}>
                                        <Bar
                                            data={{
                                                labels: monthLabels.slice(0, (monthlyProduction.values || []).length),
                                                datasets: [{
                                                    label: "Energy (kWh)",
                                                    data: (monthlyProduction.values || []).map((v) => Math.round((v ?? 0) * 100) / 100),
                                                    backgroundColor: "#F3B664",
                                                    borderRadius: 4,
                                                    barPercentage: 0.8,
                                                    categoryPercentage: 0.9,
                                                }],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: { beginAtZero: true, title: { display: true, text: "Energy (kWh)" }, grid: { color: "#E5E7EB" } },
                                                    x: { grid: { display: false }, title: { display: true, text: "Month" } },
                                                },
                                                plugins: { legend: { display: false } },
                                            }}
                                        />
                                    </div>
                                )}
                                {historicalPeriod === "total" && yearlyProduction?.values?.length > 0 && (
                                    <div style={{ height: "260px" }}>
                                        <Bar
                                            data={{
                                                labels: (yearlyProduction.labels || yearlyProduction.values.map((_, i) => `${i + 1}`)).slice(0, (yearlyProduction.values || []).length),
                                                datasets: [{
                                                    label: "Energy (MWh)",
                                                    data: (yearlyProduction.values || []).map((v) => Math.round((v ?? 0) * 100) / 100),
                                                    backgroundColor: "#F3B664",
                                                    borderRadius: 4,
                                                    barPercentage: 0.4,
                                                    categoryPercentage: 0.5,
                                                }],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                scales: {
                                                    y: { beginAtZero: true, title: { display: true, text: "Energy (MWh)" }, grid: { color: "#E5E7EB" } },
                                                    x: { grid: { display: false }, title: { display: true, text: "Year" } },
                                                },
                                                plugins: { legend: { display: false } },
                                            }}
                                        />
                                    </div>
                                )}
                                {((historicalPeriod === "monthly" && !dailyProduction?.values?.length) || (historicalPeriod === "yearly" && !monthlyProduction?.values?.length) || (historicalPeriod === "total" && !yearlyProduction?.values?.length)) && (
                                    <p className="text-sm text-[#6A7B8F] py-12 text-center">Loading chart data...</p>
                                )}
                            </div>
                        </div>
                        </div>
                    </section>
                </main>
                </div>
            </div>

            {/* Dropdown from top bar menu */}
            {menuOpen && (
                <div className="fixed top-24 right-6 w-56 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <p className="px-4 py-2 text-sm font-medium border-b border-gray-100 dark:border-gray-700 dark:text-gray-200">{user?.name || "Guest"}</p>
                    <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Settings</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Contact us</Link>
                    <button
                        onClick={async () => {
                            try {
                                await fetch("/api/logout", { method: "GET" });
                                window.location.href = "/?loggedout=true";
                            } catch (err) {
                                console.error("Logout failed:", err);
                            }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200"
                    >
                        Log Out
                    </button>
                </div>
            )}
        </div>
    );
}