"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { motion } from "framer-motion";
import { ArrowLeft, Droplets, Gauge, Menu, Thermometer, Wind, X} from "lucide-react";
import Sidebar from './sidebar';
import { Doughnut } from 'react-chartjs-2'; // Rline new
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip as RechartsTooltip,
    ResponsiveContainer,
    CartesianGrid
} from 'recharts';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    PointElement,
    //NEW
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';

  // Register the necessary Chart.js components
ChartJS.register(
    ArcElement,
    CategoryScale,
    ChartDataLabels,
    PointElement,
    LineElement,
    //LinearScale, //New
    Title,
    Tooltip,
    Legend,
    Filler
  );

export default function Dashboard({powerID}){
    //accessing the json files for the page component 
    const [powerData, setPowerData] = useState(null);
    const [userData, setUserData] = useState([]);
    const router = useRouter();

    //Hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    //Dark Mode Toggle
    const [darkMode, setDarkMode] = useState(false);

    // Froniuse API
    const [chartData2, setChartData2] = useState([]);
    
    useEffect(() => {
        //Make it a try or exception
        async function fetchFroniusData() {
            try{           
                const res = await fetch("/api/fronius");
                const data = await res.json();

                console.log("Raw API Response:", data);

                // ✅ Extract EnergyProductionTotal
                const channel = data.data.channels.find(
                    ch => ch.channelName === "EnergyProductionTotal"
                );

                if (!channel) return; // Safety check

                const labels = Object.keys(channel.values);   // Days: 1–30 // Extra
                const values = Object.values(channel.values); // Extra

                console.log("Fronius API labels:", labels);// Extra
                console.log("Fronius API values:", values);// Extra

                // Convert object to array for Recharts
                /* const formattedData = Object.entries(channel.values).map(([day, value]) => ({
                    day: Number(day),
                    energy: parseFloat(value) / 1000
                    //energy: Number(value) / 1000, // Convert Wh -> kWh
                }));  */

                const formattedData = Object.entries(channel.values)
                    .filter(([_, v]) => Number.isFinite(Number(v)))
                    .map(([day, value]) => ({
                        day: Number(day),
                        energy: Math.round(Number(value) / 1000),
                }));

                setChartData2(formattedData);
            } catch (error){
                console.error("Error loading solar data:", error)
            }
        }

        fetchFroniusData();
    }, []);

    const testData = [
        { day: 1, energy: 10 },
        { day: 2, energy: 20 },
        { day: 3, energy: 30 },
        { day: 4, energy: 25 },
        { day: 5, energy: 15 },
    ];

    console.log("Formatted Data:", chartData2);

    useEffect(() => {
        if (!powerID){
            router.push('/towerselect');
            return;
        } 

        // Get token from localStorage
        const token = localStorage.getItem('token');

        const decoded = jwtDecode(token);// Only gets { id }
        const userId = decoded.id;
        
        async function fetchData() {
            try {
                const powerResponse = await fetch('/api/powerData', {
                    credentials: 'include',
                });
                const powerJson = await powerResponse.json();
                const poweritem = powerJson.find(record => record.id === parseInt(powerID));
                setPowerData(poweritem);
                
                // Fetch user data (protected)
                const userResponse = await fetch(`/api/user/${userId}`);
                const userJson = await userResponse.json();
    
                setUserData(userJson);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [powerID]); 

    const item = {
        id: powerID,
    };

    useEffect(() => {
        // Load from localStorage if previously set
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    //Calculations and dataset for speedometer kpi 
    const maxValue = 100;
    const value = 7023;
    const filledValue = (maxValue / maxValue) * 180; // Convert to angle
    const emptyValue = 180 - filledValue;

    const data1 = {
        datasets: [
            {
                data: [filledValue, emptyValue],
                backgroundColor: ["#3586FF", "#e5e7eb"],
                borderWidth: 0,
                cutout: "80%", // Makes it a gauge
                rotation: -90, // Starts from bottom
                circumference: 180, // Half circle
            },
        ],
    };
    
    const options1 = {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
        },
    };

    //Dataset for linechart using chart.js
    const data = [
        { time: '02:30', value: 0, uv: 25},
        { time: '05:00', value: 80, uv: 25 },
        { time: '07:30', value: 100, uv: 25 },
        { time: '10:00', value: 6000, uv: 25 },
        { time: '12:30', value: 8000, uv: 25 },
        { time: '15:00', value: 6000, uv: 25 },
        { time: '17:30', value: 8000, uv: 25 },
        { time: '20:00', value: 6000, uv: 25 },
        { time: '22:30', value: 0, uv: 25 },
    ]

    // To save button toggle for controls, sensors and status
    const [view, setView] = useState("controls");
    const [toggleTitle, setToggleTitle] = useState("Controls");

    // Set toggleTitle *when view changes*
    useEffect(() => {
        if (view === "controls") {
            setToggleTitle("Controls");
        }
        else if (view === "sensors") {
            setToggleTitle("Sensors");
        }
        else{
            setToggleTitle("Status");
        }
    }, [view]);

    const renderSensorControls = () => {
        if (view === "controls") {
            return (
                <>
                    <div className='grid grid-cols-2'>
                        <div className='relative mt-4 md:mt-0'>                               
                            <img
                                src="/images/Angle-Shower-2.svg"
                                alt="Compass angle display"
                                className="mx-auto mb-4 pt-2"
                                style={{
                                    height: '8em',
                                }}
                            />
                            <motion.img
                                src="/images/Angle-Shower-1.svg"
                                alt="compass angle pointer"
                                className="absolute w-1/6 md:w-1/4 h-1/6 md:h-1/4 top-1/4 md:top-1/4 left-2/5 md:left-3/8"
                                animate={{
                                    rotate: Number(powerData?.angle ?? 0) + 180,
                                }}
                            />
                            <span className="mx-auto pb-1">{powerData.angle}°</span>
                        </div>
                        <div>                        
                        <div className='mx-2 pt-4 pb-2 grid grid-cols-2 gap-4'>
                            <button className='border-2 border-black p-1 bg-[#ffc16a] rounded-md shadow-lg'>East (5 Degrees)</button>
                            <button className='border-2 border-black p-1 bg-[#ffc16a] rounded-md shadow-lg'>West (5 Degrees)</button>
                            <button className='border-2 border-black p-1 bg-[#ffc16a] rounded-md shadow-lg break-words whitespace-normal'>Maintenance</button>                        
                            <button className='border-2 border-black p-1 bg-[#ffc16a] rounded-md shadow-lg'>Stop</button>
                        </div>
                        <div className='pt-2 pb-4 w-full'>
                            <button className='border-2 border-black p-1 bg-[#ffc16a] rounded-md w-3/4'>Track</button>
                        </div>
                        </div>
                    </div>
                </>
            )
        }
        else if (view === "sensors"){
            return (
                <>
                    <div className='w-full py-4 sm:mx-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-2'>
                        <div className='space-y-4'>
                            <p className='text-xl text-center'>Wind</p>
                            <Wind size={32} className="text-blue-500 mx-auto" />
                            <p className='text-xl text-center'>8 mph</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl text-center'>Pressure</p>
                            <Gauge size={32} className="text-red-500 mx-auto" />
                            <p className='text-xl text-center'>29.78 inHg</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl text-center'>Humidity</p>
                            <Droplets size={32} className="text-blue-400 mx-auto" />
                            <p className='text-xl text-center'>75%</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='text-xl text-center'>Temperature</p>
                            <Thermometer size={32} className="text-green-500 mx-auto" />
                            <p className='text-xl text-center'>70 °F</p>
                        </div>
                    </div>

                </>
            )
        }
        else{
            return (
                <>
                    <div 
                        className='my-6'
                    >
                        <p 
                            className='py-4 text-xl mx-24 text-center rounded-md border-2'
                            style={{
                                backgroundColor: powerData.status === 'Tracking' 
                                    ? 'limegreen' 
                                    : powerData.status === 'Warning' 
                                    ? 'orange' 
                                    : powerData.status === 'Offline' 
                                    ? 'Grey'
                                    : '#FF0800'
                            }}
                        >
                            {powerData.status}</p>
                    </div>
                </>
            )

        }
    };

    if (!powerData || userData.length === 0) 
        return <p className="bg-[#f7e2cc] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;

    return(
        <div className='flex'>
            <Sidebar />
            <div className='flex-1 ml-64 w-screen max-w-screen overflow-hidden h-auto pb-4 text-center bg-[#f7e2cc] text-black'>
                <div className='relative w-full h-30 bg-white'>
                {/* Back Button */}
                <Link href="/towerselect" className="absolute top-7 left-8">
                    <ArrowLeft size={32} className="text-black" />
                </Link>


                {/* Hamburger Menu */}
                <button className="absolute top-7 right-8 z-50 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute top-16 right-1 w-56 h-auto bg-gray-600 z-40 shadow-lg rounded-md py-3">
                        <ul className="text-white text-left">
                            <li className='mt-4 pl-4 text-xl '>{userData.name}</li>
                            <li className='pl-4 text-md'><Link href="/profile" className="hover:underline">view profile</Link></li>
                            <li className='mt-8 pl-4 '><Link href={`/historical/${item.id}`} className="block hover:underline">Historical Data</Link></li>
                            <li className='mt-2 pl-4'>
                                <button onClick={() => setDarkMode(!darkMode)} className="block text-white hover:underline">
                                    {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                                </button>
                            </li>

                            <li className='mt-2 pl-4 '><Link href="/settings" className="block hover:underline">Settings</Link></li>
                            <li className='mt-2 pl-4 '><Link href="/contact" className="block hover:underline">Contact us</Link></li>
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
            <div className='md:flex justify-center items-center pb-8 md:mx-auto md:w-2/3 mx-4'>
                <h1 className='mx-auto text-4xl font-bold'>Dashboard for {powerData.name}</h1>
                <Link href={`/historical/${item.id}`}>
                    <button 
                        className="flex items-center mx-auto md:mx-0 md:ml-right mt-2 md:mt-0 border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80"
                        href={`/historical/${item.id}`}
                    >
                        Historical Data
                        <img src="/images/right-arrow.png" alt="Submit" style={{height:'1em'}}/>
                    </button>
                </Link>
            </div>
            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white py-8 md:mx-auto md:w-2/3 mx-4 flex justify-center items-center'>
                {/* Speedometer KPI */}
                <div className='relative -ml-14 w-64 h-auto'>
                    <Doughnut data={data1} options={options1} />
                    <div className="absolute top-1/3 left-2/5 text-xl font-semibold">
                        {((powerData.today * 1000)/24).toFixed(1)} 
                        <p> Power (W) </p>
                    </div>
                    <div className='ml-2 mt-4 w-72 py-1 space-x-1 flex justify-between'>
                        <div className='space-y-1 border-r-2 border-[#3586FF]'>
                            <p className=''>{powerData.today} kWh</p>
                            <p>Today</p>
                        </div>
                        <div className='space-y-1 border-r-2 border-[#3586FF]'>
                            <p className=''>{powerData.month} kWh</p>
                            <p>Month</p>
                        </div>
                        <div className='space-y-1 border-r-2 border-[#3586FF]'>
                            <p className=''>{powerData.year} kWh</p>
                            <p>Year</p>
                        </div>
                        <div className='space-y-1'>
                            <p className=''>{powerData.total} kWh</p>
                            <p>Total</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border-2 border-black shadow-md shadow-black rounded-lg my-8 md:mx-auto md:w-2/3 mx-4'>
                {/* Line Chart */}
                <div className='py-4 h-96 bg-white'>
                    <h2 className="text-xl text-black mb-2">Power Generation (kW)</h2>
                    <ResponsiveContainer width="100%" height="100%"> 
                        {chartData2.length > 0 ? (
                        <LineChart width={739} height={352} data={chartData2} className='pb-8 -ml-8'>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis type="number" domain={[0, 'auto']} />
                            <RechartsTooltip />
                            {/* <Line type="monotone" dataKey="energy" stroke="#1f77b4" strokeWidth={2} connectNulls/> */}
                            <Line
                                type="linear"
                                dataKey="energy"
                                stroke="#1f77b4"
                                strokeWidth={3}
                                dot={{ r: 4, fill: "#1f77b4" }}
                                activeDot={{ r: 8 }}
                                connectNulls
                                isAnimationActive={false}
                            />

                        </LineChart>
                        ) : (
                        <p className="text-center">Loading chart...</p>
                        )}
                    </ResponsiveContainer>
                    {/*<LineChart data={chartData2} options={options2}/> */}
                </div>
            </div>

            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white my-8 md:mx-auto md:w-2/3 mx-4'>
                {/* Sensors */}
                <div className='bg-white'>  
                    <div className='pt-4'>
                        <h1 className='text-2xl font-bold'>{toggleTitle}</h1>
                    </div>
                    <div className='pt-4 space-x-4 flex justify-center md:justify-start md:ml-4'>
                        <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' onClick={() => setView("controls")}>Controls</button>
                        <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' onClick={() => setView("sensors")}>Sensors</button>
                        <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' onClick={() => setView("status")}>Status</button>
                    </div>
                    <div>
                        {renderSensorControls()}
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
