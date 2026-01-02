"use client";
import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { ArrowLeft, Menu, X} from "lucide-react";
import { useAuth } from '@/hooks/useAuth';

export default function Settings(){
    const { user, userId, loading } = useAuth();//Retrieve user info

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setPhone(user.phone_number || "");
        }
    }, [user]);
    
    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!userId) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            // setMessage("Missing user ID");
            return;
        }

        const res = await fetch(`/api/user/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, phone }),
        });
      
        console.log(body);
        const data = await res.json();
      
        if (res.ok) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
            // setMessage('Profile updated successfully!'); // Clear the message
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            // setMessage(data.error || 'Failed to update profile'); // Clear the message
        }
    };
    

    //Hamburger menu
    const [menuOpen, setMenuOpen] = useState(false);

    // To save button toggle for controls, sensors and status
    const [view, setView] = useState("profile");

    const renderSensorControls = () => {
        if (view === "profile") {
            return (
                <>
                    <div className='w-screen max-w-full overflow-x-hidden min-h-screen'>
                        <div className='pt-8'>  
                            <h1 className='text-4xl font-bold'>Profile</h1>
                        </div>
                        <div className='flex items-center justify-center text-lg'>
                            <div className="flex flex-col">
                                <form onSubmit={handleUpdate}>
                                    {showMessage && (
                                        <div className="bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                            Profile updated successfully.
                                        </div>
                                    )}
                                    {showError && (
                                        <div className="bg-red-400 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                            Failed to update profile.
                                        </div>
                                    )}
                                    <div className='flex pt-6 items-center py-2'>
                                        <p className='pr-2'>Name:</p>
                                        <input 
                                            type="text" 
                                            id="firstname" 
                                            className='bg-white border-1 ring rounded-sm pl-1'
                                            value= {name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex pt-6 items-center py-2'>
                                        <p className='pr-2'>Email:</p>
                                        <input 
                                            type="email" 
                                            id="email" 
                                            className='bg-white border-1 ring rounded-sm pl-1'
                                            value= {email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className='flex pt-6 items-center py-2'>
                                        <p className='pr-2'>Phone:</p>
                                        <input 
                                            type="tel" 
                                            id="phone" 
                                            className='bg-white border-1 ring rounded-sm pl-1'
                                            value= {phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                    </div>
                                    {/* Optional additions: Organization / Company name, Time zone, Address / location,*/}
                                    <div className='pt-4 py-2'>
                                        <button type='submit' value="Save" className='w-20 border-2 p-1 cursor-pointer rounded-sm hover:focus hover:opacity-75 bg-orange-400'>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>    
                       
                </>
            )
        }
        else if (view === "settings"){
            return (
                <>
                    <div className='pt-8'>  
                        <p className='text-4xl font-bold'>User settings</p>
                    </div>
                    <div className='flex items-center justify-center text-lg'>
                        <div className="flex flex-col">
                            <form>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>Notification preferences:</p>
                                    <p className='pr-2'>System alerts</p>
                                    <p className='pr-2'>Email or sms notifications</p>
                                </div>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>Energy units (kWh, MWh):</p>
                                    <p className='pr-2'>Currency</p>
                                    <p className='pr-2'>Date & time formats</p>
                                </div>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>Session & security:</p>
                                    <p className='pr-2'>Active sessions</p>
                                    <p className='pr-2'>Password change</p>
                                    <p className='pr-2'>Two-factor authentication (2FA)</p>
                                </div>
                                <div className='pt-4 py-2 hidden'>
                                    <button type='submit' value="Save" className='w-20 border-2 p-1 cursor-pointer rounded-sm hover:focus hover:opacity-75 bg-orange-400'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </>
            )
        }
        else{
            return (
                <>
                    <div className='pt-8'>  
                        <p className='text-4xl font-bold'> PV System</p>
                    </div>
                    <div className='flex items-center justify-center text-lg'>
                        <div className="flex flex-col">
                            <form>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>System Name</p>
                                    <p className='pr-2'>Installation address</p>
                                    
                                </div>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>Maintenance & lifecycle</p>
                                    <p className='pr-2'>Commissioning date</p>
                                    <p className='pr-2'>Warranty details</p>
                                </div>
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>Last data update</p>
                                </div>
                                <div className='pt-4 py-2 hidden'>
                                    <button type='submit' value="Save" className='w-20 border-2 p-1 cursor-pointer rounded-sm hover:focus hover:opacity-75 bg-orange-400'>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )

        }
    };
    if (loading) {
        return <p className="bg-[#dfe0e2] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    }

    return(
        <div className='w-screen max-w-full overflow-hidden min-h-screen md:h-screen pb-4 text-center bg-[#dfe0e2] text-black'> 
            <div className='h-40 border-b-4 border-[#87A9C4] bg-[#f4f4f5]'>
                {/* Janta Logo*/}
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

                            <li className='mt-2 pl-4'><Link href="/towerselect" className="block hover:underline">Dashboard</Link></li>
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

            {/* Menu tabs */}
            <div class="relative flex items-center w-full py-4 px-8 border-b bg-[#f4f4f5]">
                <Link href="/towerselect" className="flex items-center justify-center">
                    <ArrowLeft size={32} className="text-black" />
                </Link>
                <div class="absolute left-1/2 -translate-x-1/2 flex space-x-6 text-2xl">
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${view === "profile"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setView("profile")}
                    >
                        Profile
                    </button>
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${view === "settings"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setView("settings")}
                    >
                        User settings
                    </button>
                    <button
                        className={`tab border-b-2 hover:cursor-pointer
                        ${view === "system"
                            ? "border-black"
                            : "border-transparent hover:border-gray-400"}
                        `}
                        onClick={() => setView("system")}
                    >
                        PV system
                    </button>
                </div>
            </div>

            {/* Tab content*/}
            <div>
                {renderSensorControls()}
            </div>
        </div>
    )
}