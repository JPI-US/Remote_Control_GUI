"use client";
import React from 'react';
import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from 'next/navigation';
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { useSystem } from '@/hooks/useSystem';
import { useSession } from '@/hooks/useSession';
import "@/lib/chart";
import "@/lib/line";
import { Bar, Line } from "react-chartjs-2";
import 'chartjs-adapter-date-fns'; // FOR USING CATEGORY TIME
import 'chartjs-adapter-luxon'; // Timezone-aware adapter
import { DateTime } from "luxon";

const SYSTEM_ID = "49bfa0cf-3479-4852-bf3a-91ad30ac50cc";

const RADIUS = 45; // Static
const CIRCUMFERENCE = 2 * Math.PI * RADIUS; // Static

export default function Dashboard(){
    const { session, user, loading } = useSession(); // Retrieving session info: 
    const { system, loading: systemloading } = useSystem(); //Retrieving system data    
    const router = useRouter();

    const MAX_PV_POWER = system?.max_pv_kw; 
    const system_tz = system?.timezone;
    const chartDayCT = DateTime.now().setZone(system_tz).startOf("day");
    const chartDay = DateTime.now().setZone(system_tz).startOf("day");

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
    }, []); 

    // Convert watts → percentage
    const powerPercent = Math.min(
        Math.max(pvPower / MAX_PV_POWER, 0),
        1
    );

    const dashOffset = CIRCUMFERENCE * (1 - powerPercent);
    const pvPowerKw = pvPower / 1000;


    // Useeffect for retrieving the monthly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
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
    }, []); 

    // Retrieving Todays total power generation
    const todaysProduction = useMemo(() => {
        if (!dailyProduction || !system_tz) return null;

        const systemDay = DateTime.now().setZone(system_tz).day;
        const index = systemDay - 1;

        return dailyProduction.values[index] ?? null;
    }, [dailyProduction, system_tz]);


    // Useeffect for retrieving the monthly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
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
    }, []);
     
    const MONTH_NAMES = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const monthLabels = monthlyProduction?.labels
        ? monthlyProduction.labels.map(m => MONTH_NAMES[m - 1])
        : MONTH_NAMES; // fallback while loading


    // Useeffect for retrieving the yearly energy generation data /api/fronius/dailyproductionforMonth?systemId=${SYSTEM_ID}
    useEffect(() => {
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
    }, []);


    // Useeffect for retrieving the hourly power generation data /api/fronius/dailyProduction?systemId=${SYSTEM_ID}
    useEffect(() => {
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
    }, []);

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


    const [activeTab, setActiveTab] = useState("historical"); // Active tab state
    const [generationView, setGenerationView] = useState("daily"); // Active chart generation state

    //Fetching the toatal lifetime generation
    useEffect(() => {
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
    }, []); 
    
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
                value: `${(todaysProduction).toFixed(2)} kW`,
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

    //Hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    

    // Dark Mode Toggle
    const [darkMode, setDarkMode] = useState(false);

    // Check if dark mode was previously set
    /* useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);
    
    useEffect(() => {
        // Set dark mode in localStorage and document
        if (darkMode) {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]); */
    
    // Decoding jwt token to retrieve user data {
    //const router = useRouter();

    //Filter search results
    const [query, setQuery] = useState("");

    // A set for holding the selected status
    const [activeStatuses, setActiveStatuses] = useState(new Set());/* 

    const displayedCards = useMemo(() => {
        return powerData.filter((item) => {
            const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
            const matchesStatus = activeStatuses.size === 0 || activeStatuses.has(item.status);
            return matchesQuery && matchesStatus;
        });
    }, [query, activeStatuses, powerData]); */

    // Function for adding and eleting a status from the set
    const handleStatusChange = (status) => {
        setActiveStatuses(prev => {
            const newSet = new Set(prev);
            newSet.has(status) ? newSet.delete(status) : newSet.add(status);
            return newSet;
        });
    };
    // let displayedCards = query ? filteredResults : powerData;    

    /* displayedCards = activeStatuses.size
        ? powerData.filter(item => activeStatuses.has(item.status))
        : powerData; */

    // Viewing the hidden components in status
    const [isStatusOpen, setisStatusOpen] = useState(false);

    const value = 125;
  
    // Case 1: still loading
    if (systemloading) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    } 
    // Case 2: no system found
    if (!system) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">No system data found...</p>;
    } 
    console.log(JSON.stringify(system)); // prints full object as JSON string
    const angle = system?.towers?.[0]?.current_angle ?? "N/A";
    console.log(`This is the tower angle: ${angle}`);
    if (loading || !session) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    }

    return(
        <div className='w-screen max-w-full overflow-x-hidden min-h-screen h-auto pb-4 text-black text-center bg-[#dfe0e2]'>
            <div className='h-40 border-b-4 border-[#87A9C4] bg-[#f4f4f5]'>
                {/* Janta Logo 87A9C4*/}
                {/* md:mr-auto md:ml-6 bg-[#f7e2cc] bg-[#fff]: tab header bg color; bg-[#f4f4f5]: tab group bg color; a9adb1: closest; dfe0e2: actual*/}
                <img
                    className='w-full sm:w-auto h-auto rounded-lg mr-auto -mt-16 -mb-8'
                    src='images/Logo Type_Mix1.png'
                    alt='Janta logo' 
                    style={{height:'15em', width:'15em'}} 
                />
                {/* Hamburger Menu */}
                <button className="absolute top-7 right-8 z-50 cursor-pointer" onClick={() =>setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Dropdown Hamburger Menu */}
                {menuOpen && (
                    <div className="absolute top-16 right-1 w-56 h-auto bg-[#f4f4f5] z-40 shadow-sm shadow-black border-gray-400 border rounded-md py-3">
                        <ul className="text-black text-left">
                            <li className='mt-4 pl-4 text-xl'>{user.name}</li>

                            <li className='mt-2 pl-4'><Link href="/settings" className="block hover:underline">Settings</Link></li>
                            <li className='mt-2 pl-4'><Link href="/contact" className="block hover:underline">Contact us</Link></li>
                            <li className="mt-2 pl-4">
                                <button
                                    onClick={async () => {
                                    try {
                                        await fetch('/api/logout', { method: 'GET' });
                                        window.location.href = '/?loggedout=true';
                                    } catch (err) {
                                        console.error('Logout failed:', err);
                                    }
                                    }}
                                    className="block hover:underline text-left w-full"
                                >
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Page title */}
            <div className='my-8'>    
                <h1 className='text-4xl font-bold'>{/* Your Tower Dashboard  */}{system.system_name} </h1>
            </div>

            {/* New dashboard design */}
            <div className="card mx-10 px-4 py-4 mb-10 relative overflow-hidden bg-white rounded-md shadow-black shadow-md border-t-1 border-black">
                {/* Header */}
                <h2 className="font-bold uppercase tracking-wide mb-4 flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    Live Tower Status
                </h2>

                {/* Status Banner */}
                <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded-lg">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full border-4 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                                        <span className="text-sm font-bold">●</span>
                                    </div>
                                </div>
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                            </div>
                            
                            <div>
                                <p className="text-sm font-medium">Tower Status</p>
                                <p className="text-xs">Online & Operational</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-xs">Status</div>
                            <div className="text-sm font-medium text-green-700">Online</div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row items-center justify-around p-4 relative">
                    {/* Power Output Ring */}
                    <div className="relative w-64 h-64 flex flex-col items-center justify-center">
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            <div className="absolute text-4xl font-bold z-10 animate-pulse">
                                <span className="accent-orange">{pvPowerKw.toFixed(2)}</span> kW
                            </div>

                            <svg
                                className="w-64 h-64 absolute"
                                viewBox="0 0 100 100"
                            >
                                {/* Background */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={RADIUS}
                                    fill="transparent"
                                    stroke="#d1d5db"
                                    strokeWidth="8"
                                />

                                {/* Power Ring */}
                                <circle
                                    cx="50"
                                    cy="50"
                                    r={RADIUS}
                                    fill="transparent"
                                    stroke="url(#powerGradient)"
                                    strokeWidth="8"
                                    strokeDasharray={CIRCUMFERENCE}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                    transform="rotate(-90 50 50)"
                                    className="transition-all duration-1000 ease-in-out"
                                />

                                <defs>
                                    <linearGradient id="powerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#fbbf24" />
                                    <stop offset="50%" stopColor="#f59e0b" />
                                    <stop offset="100%" stopColor="#d97706" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <p className="mt-6 text-lg font-bold text-center">
                            Current Power Output
                        </p>
                    </div>

                    {/* Tower + Angle */}
                    <div className="flex flex-col items-center">
                        <div className="relative">
                            <img
                                src="/images/Tower-Drawing.svg"
                                className="w-72 h-72 mb-4 logo-invert drop-shadow-lg transition-all duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 w-72 h-72 bg-white/5 rounded-full blur-xl -z-10"/>
                        </div>

                        {/* Angle Indicator */}
                        <div className="flex flex-col items-center mb-3 ml-12">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-8 h-8"/>
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{ transform: `rotate(${angle}deg)` }}
                                    >
                                        <div className="w-1 h-3 rounded-full"/>
                                    </div>
                                </div>
                                <p className="text-2xl font-bold leading-none">
                                    <span className="text-blue-600">{Math.floor(angle)}</span>°
                                </p>
                        </div>
                        <p className="mt-1 text-sm ml-12 font-medium">
                            Tower Angle
                        </p>
                    </div>
                </div>
            </div>
            <div className="card mx-10 mb-10 px-4 py-4 relative overflow-hidden bg-white rounded-md shadow-black shadow-md border-t-1 border-black">
                <h2 className="text-base font-bold uppercase tracking-wide mb-4 flex items-center">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                    Daily Performance Metrics
                </h2>
                
                {/* Status Overview Bar */}
                <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4 ">
                    <div className="p-3 status-success rounded-lg bg-green-500/10 border border-green-500">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"/>
                                <span className="text-sm font-medium">Tower Online</span>
                            </div>
                            <div className="text-xs">
                                Last updated: {new Date().toLocaleTimeString()}
                            </div>
                        </div>
                    </div>
                    
                    {/* Weather Widget */}
                    <div className="p-3 border border-gray-300 rounded-lg">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="text-2xl">{weatherDisplay.icon}</div>
                                <div>
                                    <p className="text-sm text-blue-600 font-medium text-left">{weatherDisplay.title}</p>
                                    <p className="text-xs text-left">{weatherDisplay.message}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                {weather?.current ? (
                                    <>
                                        <div className="text-sm font-bold">
                                            {weather.current.temp}°C
                                        </div>
                                        <div className="text-xs">
                                            Humidity: {weather.current.humidity}%
                                        </div>
                                    </>
                                    ) : (
                                    <div>Loading...</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {tempStats.map((stat, index) => (
                        <div key={index} className="stat-card flex items-center p-3 space-x-3 relative overflow-hidden group border-1 border-gray-300 rounded-md shadow-md">
                            <div className="flex-shrink-0">
                                <img 
                                    src={stat.icon} 
                                    alt={stat.label}
                                    className="w-6 h-6 opacity-90 drop-shadow-sm"
                                />
                            </div>
                            <div className="flex-1 text-left">
                                <p className="text-xs uppercase font-medium mb-1">{stat.label}</p>
                                <p className="text-lg font-bold mb-1 drop-shadow-sm">
                                    <span className={`${
                                        stat.label === 'Humidity' ? 'text-blue-600' :
                                        stat.label === 'Temperature' ? 'text-red-500' :
                                        stat.label === 'Current Power' ? 'text-orange-600' :
                                        stat.label === 'System Efficiency' ? 'text-green-600' :
                                        stat.label === 'Daily Peak Power' ? 'text-orange-600' :
                                        'text-green-600'
                                    }`}>{stat.value}</span>
                                </p>
                                <p className="text-xs">{stat.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card mx-10 mb-10 px-4 py-4 relative overflow-hidden bg-white rounded-md shadow-black shadow-md border-t-1 border-black">
                {/* Toggle Switch*/}
                <div className="flex space-x-6 mx-auto text-lg mb-8">
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${activeTab === "historical"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setActiveTab("historical")}
                    >
                        Historical
                    </button>
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${activeTab === "diagnostics"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setActiveTab("diagnostics")}
                    >
                        Diagnostics
                    </button>
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${activeTab === "control"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setActiveTab("control")}
                    >
                        Control
                    </button>
                </div>
                {/* Content Area */}
                <div className="min-h-[200px]">
                    {activeTab === "historical" && (
                        <div>
                            <h4 className="text-2xl text-black font-bold tracking-wide my-4">Historical Power Data</h4> 
                            {/* Generation Timeframe Toggle */}
                            <div className="flex justify-start mb-4">
                                <div className="inline-flex space-x-2 bg-gray-100 rounded-md p-2">
                                    {[
                                        { id: "daily", label: "Daily" },
                                        { id: "monthly", label: "Monthly" },
                                        { id: "yearly", label: "Yearly" },
                                        { id: "total", label: "Total" },
                                    ].map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setGenerationView(option.id)}
                                        className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 rounded-md
                                        ${
                                            generationView === option.id
                                            ? "bg-blue-600 text-white shadow-sm"
                                            : "text-gray-600 hover:text-black hover:cursor-pointer"
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                    ))}
                                </div>
                            </div>
                            {/* Historical charts go here */}
                            <div className='w-full h-500px p-4'>
                                {generationView === "daily" && hourlyProduction && (
                                    <div className="">
                                        {/* Daily line chart */}
                                        {hourlyProduction && (
                                            <div style={{ height: "300px" }}>
                                                <Line
                                                    data={{
                                                        //labels: x,
                                                        datasets: [
                                                            {
                                                                label: "Power Output",
                                                                data: datasetPoints,
                                                                //data: hourlyProduction.values,
                                                                borderColor: "#f59e0b",
                                                                fill: 'start',
                                                                backgroundColor: "#f59e0b",
                                                                borderWidth: 2,
                                                                pointRadius: 0,
                                                                pointHoverRadius: 4,
                                                                pointHitRadius: 10,
                                                                spanGaps: true,
                                                                tension: 0.2,
                                                                cubicInterpolationMode: 'monotone',
                                                            },
                                                        ],
                                                    }}
                                                    options={{
                                                        responsive: true,
                                                        maintainAspectRatio: false,
                                                        //aspectRatio: 3,
                                                        scales: {
                                                            x: {
                                                                type: 'time',
                                                                adapters: {
                                                                    date: {
                                                                        zone: system_tz, 
                                                                    },
                                                                },
                                                                min: fullDayDates[0],
                                                                max: fullDayDates[fullDayDates.length - 1],
                                                                time: {
                                                                    unit: 'hour',
                                                                    tooltipFormat: 'HH:mm',
                                                                    displayFormats: {
                                                                        hour: 'HH:mm',
                                                                    },
                                                                },
                                                                grid: {
                                                                    display: false, // removes all X-axis grid lines
                                                                    drawTicks: false,
                                                                },
                                                                ticks: {
                                                                    autoSkip: false,
                                                                    maxRotation: 0,
                                                                    align: 'center',
                                                                },
                                                            },
                                                            y: {
                                                                beginAtZero: true,
                                                                title: {
                                                                    display: true,
                                                                    text: "watts",
                                                                    fontSize: 44,
                                                                },
                                                            },
                                                        },
                                                        plugins: {
                                                            legend: { display: false },
                                                            tooltip: {
                                                                callbacks: {
                                                                    title: items => items[0].label,
                                                                },
                                                            },
                                                            legend: { display: false },
                                                        },
                                                    }}
                                                /> 
                                            </div>
                                        )}
                                    </div>
                                )}

                                {generationView === "monthly" && (
                                    <div className="" style={{ height: "300px" }}>
                                        {/* Monthly bar chart */}
                                        <Bar
                                            data={{
                                                labels: dailyProduction.labels,
                                                datasets: [
                                                    {
                                                        label: "Energy Output",
                                                        data: dailyProduction.values,
                                                        backgroundColor: "#f59e0b",
                                                        borderColor: "#f59e0b",
                                                        borderWidth: 2,
                                                        borderRadius: 4,
                                                        barPercentage: 0.8,
                                                        categoryPercentage: 0.9,
                                                    },
                                                ],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                //aspectRatio: 3,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true,
                                                        title: {
                                                            display: true,
                                                            text: "kWh",
                                                        },
                                                    },
                                                },
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            className="h-full"
                                        /> 
                                    </div>
                                )}

                                {generationView === "yearly" && (
                                    <div className="" style={{ height: "300px" }}>
                                        {/* Monthly bar chart */}
                                        <Bar
                                            data={{
                                                labels: monthLabels,
                                                datasets: [
                                                    {
                                                        label: "Energy Output",
                                                        data: monthlyProduction.values,
                                                        backgroundColor: "#f59e0b",
                                                        borderColor: "#f59e0b",
                                                        borderWidth: 2,
                                                        borderRadius: 4,
                                                        barPercentage: 0.8,
                                                        categoryPercentage: 0.9,
                                                    },
                                                ],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                //aspectRatio: 3,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true,
                                                        title: {
                                                            display: true,
                                                            text: "kWh",
                                                        },
                                                    },
                                                },
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            className="h-full"
                                        /> 
                                    </div>
                                )}
                                {generationView === "total" && (
                                    <div className="" style={{ height: "300px" }}>
                                        {/* yearly bar chart */}
                                        <Bar
                                            data={{
                                                labels: yearlyProduction.labels,
                                                datasets: [
                                                    {
                                                        label: "Energy Output",
                                                        data: yearlyProduction.values,
                                                        backgroundColor: "#f59e0b",
                                                        borderColor: "#f59e0b",
                                                        borderWidth: 2,
                                                        borderRadius: 4,
                                                        barPercentage: 0.5,
                                                        categoryPercentage: 0.3,
                                                    },
                                                ],
                                            }}
                                            options={{
                                                responsive: true,
                                                maintainAspectRatio: false,
                                                //aspectRatio: 3,
                                                scales: {
                                                    y: {
                                                        beginAtZero: true,
                                                        title: {
                                                            display: true,
                                                            text: "MWH",
                                                        },
                                                    },
                                                },
                                                plugins: {
                                                    legend: { display: false },
                                                },
                                            }}
                                            className="h-full"
                                        /> 
                                    </div>
                                )}

                                
                            </div>
                        </div>
                    )}

                    {activeTab === "diagnostics" && (
                        <div>
                            <h4 className="text-2xl text-black font-bold tracking-wide my-4">System Diagnostics</h4>
                            {/* Diagnostics content */}
                            <div className='flex flex-col'>
                                <ul className="grid grid-cols-2 gap-3 p-4 text-black">
                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Tower</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>

                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Motor</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>

                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Relay</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>

                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Limit Switch</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>
                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Communication Protocol</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>
                                    <li className="flex justify-between items-center border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Encoder</span>
                                        <span className="text-green-600 font-semibold">Online</span>
                                    </li>
                                    {/* Fault/offline: text-red-600; warning: text-yellow-500   */}
                                </ul>
                            </div>
                        </div>
                    )}

                    {activeTab === "control" && (
                        <div>
                            <h4 className="text-2xl text-black font-bold tracking-wide my-4">Control Panel</h4>
                            {/* Control actions */}
                            <div className='flex flex-col'>
                                <ul className="grid grid-cols-2 gap-3 p-4 text-black">
                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Restart</span>
                                        <span className="text-xs">Reboot tower systems and all components</span>
                                    </li>

                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Reset</span>
                                        <span className="text-xs">Reset to default factory settings</span>
                                    </li>

                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Go Home</span>
                                        <span className="text-xs">Return tower to home position</span>
                                    </li>

                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Enter Maintenance</span>
                                        <span className="text-xs">Enable maintenance mode for repairs</span>
                                    </li>

                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Leave Maintenance</span>
                                        <span className="text-xs">Exit maintenance mode and resume operation</span>
                                    </li>

                                    
                                    <li className="flex flex-col text-center hover:cursor-pointer hover:scale-102 hover:shadow-lg border border-gray-300 rounded-md shadow-md px-3 py-2">
                                        <span className="font-medium">Stop Command</span>
                                        <span className="text-xs">Emergency stop all operations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    ) 
}