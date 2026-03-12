"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import { ArrowLeft, Droplets, Gauge, Menu, Thermometer, Wind, X} from "lucide-react";
import Sidebar from './sidebar';
import { Line, Doughnut, Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';

  // Register the necessary Chart.js components
ChartJS.register(
    ArcElement,
    BarElement,
    CategoryScale,
    ChartDataLabels,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

export default function Historical({powerID}){
    //accessing the json files for the page component 
    const [powerData, setPowerData] = useState(null);
    const [userData, setUserData] = useState([]);
    const router = useRouter();

    // Selecting the view for the historical power generation data
    const [view, setView] = useState("month");

    //Hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    //Dark Mode Toggle
    const [darkMode, setDarkMode] = useState(false);

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

    // based on button selected set the view for the historical power generation line chart
    const renderChart = () => {
        if (view === "total") {
            return (
                <>
                    <div className='relative flex items-center justify-center' style={{height:'380px'}}>
                        <Doughnut data={totalPowerData} options={doughnutChartOptions} />
                        <p className='absolute top-2/5 left-1/2 transform -translate-x-1/2 
                          text-center text-2xl font-bold text-gray-800 pointer-events-none'>{totalPowerData.datasets[0].data[0]} kW</p>
                    </div>
                </>
            )
        }
        const data = view === "month" ? monthlyPowerData : yearlyPowerData;
        return <Bar data={data} options={options} />;
    };

    // Setup for line chart for historical power generation in months and years using chart.js
    const monthlyPowerData = {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets:[ 
            {
                label: "Monthly Data",
                data: [400, 300, 500, 200],
                borderColor: "rgba(236, 172, 92,1)",
                backgroundColor: "rgba(236, 172, 92,0.2)",
            },
        ],
    };

    const yearlyPowerData = {
        labels: ["2021", "2022", "2023"],
        datasets:[ 
            {
                label: "Yearly Data",
                data: [1200, 1500, 1700],
                borderColor: "rgba(236, 172, 92,1)",
                backgroundColor: "rgba(236, 172, 92,0.2)",
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow chart to take up the full width of its container
        /* layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            }
        }, */
        plugins: {
            legend: {
                position: 'bottom', // Positions the legend at the top
                labels: {
                    padding: 10,
                }
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
          },
        /* datalabels: {
            align: 'end',
            anchor: 'end',
            color: '#111827',
            font: {
                weight: 'bold',
                size: 10,
            },
        }, */
    };

    // Doughnut chart for the total power data generated for a tower
    const totalPowerData = {
        labels: ["Total"],
        datasets:[ 
            {
                label: "Total Data",
                data: [4400],
                fill: true,
                borderColor: "rgba(236, 172, 92,1)",
                backgroundColor: "rgba(236, 172, 92,0.2)",
            },
        ],
    };
    
    const doughnutChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '65%',
        plugins: {
            legend: {
                display: true, // Show the legend
                position: 'bottom', // Position the legend on the bottom
                labels: {
                    font: {
                        size: 14, // Customize legend label font size
                        weight: 'bold',
                    },
                    color: '#333', // Legend label color
                    padding: 20,
                },
            },
        },
    };

    // Dataset for shared 4 grid linechart using chart.js
    const chartdata1 = {
        labels: ['00:00', '02:30', '05:00', '07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        datasets: [
            {
                label: 'Wind Speed',
                data: [7, 5, 4, 6, 7, 6, 8, 9, 7],
                borderColor: '#3b82f6',
                backgroundColor: 'rgba(59, 130, 246, 1)',
                tension: 0.4, // Makes the line smooth
                fill: true, // add a default solid fill
            },
        ],
    };

    const chartdata2 = {
        labels: ['00:00', '02:30', '05:00', '07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        datasets: [
            {
                label: 'Pressure',
                data: [30.01, 30.02, 30.02, 30.01, 30.02, 30.03, 30.02, 30.01, 30.01],
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 1)',
                tension: 0.4, // Makes the line smooth
                fill: true, // add a default solid fill
            },
        ],
    };

    const chartdata3 = {
        labels: ['00:00', '02:30', '05:00', '07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        datasets: [
            {
                label: 'Humidity',
                data: [94, 95, 96, 92, 88, 86, 84, 80, 83],
                borderColor: '#60A5FA',
                backgroundColor: 'rgba(96, 165, 250, 1)',
                tension: 0.4, // Makes the line smooth
                fill: true, // add a default solid fill
            },
        ],
    };

    const chartdata4 = {
        labels: ['00:00', '02:30', '05:00', '07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        datasets: [
            {
                label: 'Temperature',
                data: [70, 72, 75, 76, 77, 79, 82, 79, 75],
                borderColor: '#37D23C',
                backgroundColor: 'rgba(55, 210, 60, 1)',
                tension: 0.4, // Makes the line smooth
                fill: true, // add a default solid fill
            },
        ],
    };

    // Wind chart options
    const chartOptions1 = {
        responsive: true,
        maintainAspectRatio: false, // Allow charts to fill their grid cell
        plugins: {
            legend: {
                display: false, // You might hide legend for small charts in a grid
            },
            title: {
                display: true,
                text: 'Wind', 
                color: 'black',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        }
    };

    // Pressure chart options
    const chartOptions2 = {
        responsive: true,
        maintainAspectRatio: false, // Allow charts to fill their grid cell
        plugins: {
            legend: {
                display: false, // You might hide legend for small charts in a grid
            },
            title: {
                display: true,
                text: 'Pressure', 
                color: 'black',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        }
    };

    // Humidity chart options
    const chartOptions3 = {
        responsive: true,
        maintainAspectRatio: false, // Allow charts to fill their grid cell
        plugins: {
            legend: {
                display: false, // You might hide legend for small charts in a grid
            },
            title: {
                display: true,
                text: 'Humidity', 
                color: 'black',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        }
    };
    // Temperature chart options
    const chartOptions4 = {
        responsive: true,
        maintainAspectRatio: false, // Allow charts to fill their grid cell
        plugins: {
            legend: {
                display: false, // You might hide legend for small charts in a grid
            },
            title: {
                display: true,
                text: 'Temperature', 
                color: 'black',
            },
            tooltip: {
                mode: 'index',
                intersect: false,
            },
        }
    };

    // Dataset for linechart using chart.js
    // const DualAxisLineChart = ({ data }) => {
    // const chartData = {
    // labels: data.map(d => d.time),
    const data2 = {
        labels: ['00:00', '02:30', '05:00', '07:30', '10:00', '12:30', '15:00', '17:30', '20:00'],
        datasets: [
            {
                label: 'Power Generation (kW)',
                data: [0, 0, 100, 6000, 8000, 6000, 8000, 6000, 100],
                borderColor: '#37D23C',
                backgroundColor: 'rgba(55, 210, 60, 1)',
                yAxisID: 'y1',
                tension: 0.4, // Makes the line smooth
                fill: false, 
            },
            {
                label: 'Temperature (°C)',
                data: [70, 72, 75, 76, 77, 79, 82, 79, 75],
                borderColor: '#60A5FA',
                backgroundColor: 'rgba(96, 165, 250, 1)',
                yAxisID: 'y2',
                tension: 0.4, // Makes the line smooth
                fill: false, 
            },
        ],
    };

    const options2 = {
        responsive: true,
        // maintainAspectRatio: false, // Allow chart to take up the full width of its container
        interaction: {
            mode: 'index',
            intersect: false,
        },
        scales: {
            y1: {
                type: 'linear',
                position: 'left',
                title: {
                    display: true,
                    text: 'Power Usage (kW)',
                    color: 'rgba(0, 0, 0, 1)',
                },
                ticks: {
                    color: 'rgba(0, 0, 0, 1)',
                },
            },
            y2: {
                type: 'linear',
                position: 'right',
                title: {
                    display: true,
                    text: 'Temperature (°C)',
                    color: 'rgba(0, 0, 0, 1)',
                },
                grid: {
                    drawOnChartArea: true,
                },
                ticks: {
                    color: 'rgba(0, 0, 0, 1)',
                },
            },
        },
        plugins: {
            legend: {
                position: 'top', // Positions the legend at the top
                labels: {
                    padding: 10,
                    color: 'rgba(0, 0, 0, 1)',
                }
            },
        },




        /* ticks: {
          color: 'rgba(75, 192, 192, 1)',
        },
      },
        layout: {
            padding: {
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            }
        },
        plugins: {
            title: {
                display: true,
                text: "Historical Power & Sensor Data",
                color: 'black',
                font: {
                    size: 24,
                },
            },
            legend: {
                position: 'top', // Positions the legend at the top
                labels: {
                    padding: 10,
                }
            },
        },
        datalabels: {
            align: 'end',
            anchor: 'end',
            color: '#111827',
            font: {
                weight: 'bold',
                size: 10,
            },
          }, */
    };

    if (!powerData || userData.length === 0) return <p className="bg-[#f7e2cc] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    ;

    return(
        <div className='w-screen max-w-screen overflow-hidden h-auto pb-4 text-center bg-[#f7e2cc] text-black'>
                <div className='relative w-full h-30 bg-white'>
                {/* Back Button */}
                <Link href={`/dashboard/${item.id}`} className="absolute top-7 left-8">
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
            <h1 className='pb-4 text-4xl font-bold'>Historical data for {powerData.name}</h1>

            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white my-8 md:mx-auto md:w-2/3 mx-4'>
                {/* Line Chart for Power data*/}
                <div className='pt-4'><h1 className='text-2xl font-bold'>Historical Power Data</h1></div>
                <div className='pt-4 space-x-4 flex justify-center'>
                    <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' variant={view === "month" ? "default" : "outline"} onClick={() => setView("month")}>Monthly</button>
                    <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' variant={view === "year" ? "default" : "outline"} onClick={() => setView("year")}>Yearly</button>
                    <button className='border-2 border-black p-1 rounded-lg cursor-pointer bg-[#ffc16a] hover:brightness-80' variant={view === "total" ? "default" : "outline"} onClick={() => setView("total")}>Total</button>
                </div>
                <div className='bg-white'>  
                    <div className='py-4 md:mx-20 text-black' style={{height:'400px'}}>
                        {renderChart()}
                    </div>
                </div>
            </div>

            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white my-8 md:mx-auto md:w-2/3 mx-4 h-auto'>
                {/* Line Chart for Sensor Data*/}
                <div className='pt-4'><h1 className='text-2xl font-bold'>Historical Sensor Data</h1></div>
                <div className='bg-white'>  
                    <div className='py-4 md:mx-20 text-black grid grid-cols-2 gap-4' style={{height:'400px'}}>
                        <div className="p-2 rounded shadow">
                            <Line data={chartdata1} options={chartOptions1}  />
                        </div>
                        <div className="p-2 rounded shadow">
                            <Line data={chartdata2} options={chartOptions2}/>
                        </div>
                        <div className="p-2 rounded shadow">
                            <Line data={chartdata3} options={chartOptions3} />
                        </div>
                        <div className="p-2 rounded shadow">
                            <Line data={chartdata4} options={chartOptions4} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white my-8 pb-6 md:mx-auto md:w-2/3 mx-4'>
                {/* Line Chart for Power and Sensor Data */}
                <div className='bg-white'>  
                    <div className='py-4 md:mx-20 text-black' style={{height:'400px'}}>
                        <Line data={data2} options={options2} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
