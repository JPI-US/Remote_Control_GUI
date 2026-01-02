"use client";
import React from 'react';
import { useEffect, useRef, useState, useMemo } from "react";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { Menu, Search, Signal, TriangleAlert, ShieldAlert, ShieldX, Sigma, X } from "lucide-react";
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import "@/lib/chart";
import { Bar } from "react-chartjs-2";

const SYSTEM_ID = "49bfa0cf-3479-4852-bf3a-91ad30ac50cc";
const MAX_PV_POWER = 19000;    
const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function TowerSelect(){
    const router = useRouter();
    const { user, userId, loading } = useAuth(); //Retrieving user data    

    const [pvPower, setPvPower] = useState(0); //Retrieves the live power generation
    const [dailyProduction, setDailyProduction] = useState(null); // Retrieves the monthly power generation
    const intervalRef = useRef(null); //Interval time for refreshes

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
        intervalRef.current = setInterval(fetchLive, 10000);
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
                console.log("Fronius API response:", json);
                setDailyProduction(json.data?.production ?? null);
            } catch (error) {
                console.error('Daily production error:', error);
            }
        }

        fetchDailyProduction();
    }, []); 




    //Hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);
    
    
    //accessing the json files for the page component 
    const [powerData, setPowerData] = useState([]);

    const [userTelemetry, setuserTelemetry] = useState([]);// new
    
    useEffect(() => {
        async function fetchData() {
            try {
                // Fetch power data
                const powerResponse = await fetch('/api/powerData', {
                    credentials: 'include',
                });
                const powerJson = await powerResponse.json();
                setPowerData(powerJson);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []); 

    /* useEffect(() => {
        if (!userId) return; // Don't fetch until ID is set

        async function fetchTelemetry() {
            try{
                const telemetryResponse = await fetch(`/api/telemetry/${userId}`);
                const telemetryData = await telemetryResponse.json();
                setuserTelemetry(telemetryData);
            } catch (error){
                console.log("Fetch error:", error)
                // router.push('/login');
            }
        }
        fetchTelemetry();
    }, [userId]); */

    // Count items with status 'Online'
    const onlineCount = powerData.filter(item => item.status === 'Tracking').length;

    // Count items with status 'Warning'
    const warningCount = powerData.filter(item => item.status === 'Warning').length;

    // Count items with status 'Fault'
    const faultCount = powerData.filter(item => item.status === 'Fault').length;

    // Count items with status 'Offline'
    const offlineCount = powerData.filter(item => item.status === 'Offline').length;

    

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
    const [activeStatuses, setActiveStatuses] = useState(new Set());

    const displayedCards = useMemo(() => {
        return powerData.filter((item) => {
            const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
            const matchesStatus = activeStatuses.size === 0 || activeStatuses.has(item.status);
            return matchesQuery && matchesStatus;
        });
    }, [query, activeStatuses, powerData]);

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
  
    //if (!powerData || !user || !userId) {
    if (loading) {
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

            <div className='mt-8'>
                {/* Page title */}
                <h1 className='md:pb-20 pb-8 text-4xl font-bold'>Your Tower Dashboard</h1>
            </div>









            {/* New dashboard design  flex justify-center */}
            <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center">                
                    <div className="bg-white rounded-md shadow-lg  p-10 flex flex-col items-center h-full">
                        <svg width="200" height="200" viewBox="0 0 100 100">
                            {/* Background ring */}
                            <circle
                                cx="50"
                                cy="50"
                                r={RADIUS}
                                fill="transparent"
                                stroke="#e5e7eb"
                                strokeWidth="8"
                            />

                            {/* Power ring */}
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
                                className="transition-all duration-1000 ease-in-out"
                                transform="rotate(-90 50 50)" // start from top
                            />

                            <defs>
                                <linearGradient
                                    id="powerGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#fbbf24" />
                                    <stop offset="50%" stopColor="#f59e0b" />
                                    <stop offset="100%" stopColor="#d97706" />
                                </linearGradient>
                            </defs>

                            {/* Center value */}
                            <text
                                x="50"
                                y="48"
                                textAnchor="middle"
                                fontSize="14"
                                fontWeight="600"
                                fill="#111827"
                            >
                                {pvPowerKw.toFixed(2)}
                            </text>
                            <text
                                x="50"
                                y="62"
                                textAnchor="middle"
                                fontSize="10"
                                fill="#6b7280"
                            >
                                kW
                            </text>
                        </svg>

                        <p className="pt-4 text-lg text-black font-bold">
                            Live PV Power
                        </p>
                    </div>
                </div>
                <div className="flex">
                    {/* Bar Chart */}
                    {dailyProduction && (
                        <div className="bg-white rounded-xl p-4 shadow-lg flex-1 h-full flex flex-col">
                            <h3 className="text-black font-bold text-lg mb-4">
                                Monthly Production (kWh)
                            </h3>

                            <div className="flex-1">
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
                        </div>
                    )}
                </div>
            </div>








            {/*

            
            
    
            */}




        </div>
    ) 
}