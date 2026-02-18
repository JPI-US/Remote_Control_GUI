"use client";
import React from 'react';
import { useEffect, useState } from "react";
import Link from 'next/link';
import { ArrowLeft, Menu, X} from "lucide-react";
import { useSession } from '@/hooks/useSession';
import { useSystem } from '@/hooks/useSystem';

export default function Settings(){
    //const { userId } = useAuth();//Retrieve user info
    const { session, user, loading } = useSession(); // Retrieving session info: 
    const { system, froniusSystemId, loading: systemloading } = useSystem(); //Retrieving system data    
    const userID = session?.sub ?? null;

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
    
    // Handles profile upodates
    const handleProfileUpdate = async (e) => {
        e.preventDefault();

        if (!userID) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            // setMessage("Missing user ID");
            return;
        }

        const bodyData = { name, email, phone }; // store for fetch & logging
        console.log('Sending body:', bodyData);

        const res = await fetch(`/api/user`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyData),
        });

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

    //Handles user settings updates
    // const [pushNotifications, setPushNotifications] = useState(false);   Dormant
    // const [systemAlerts, setSystemAlerts] = useState(false);             Dormant
    // const [failedLogins, setFailedLogins] = useState(false);             Dormant

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Handles password change
    const handlePasswordChange = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!currentPassword || !newPassword || !confirmPassword) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }

        if (newPassword !== confirmPassword) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }

        if (currentPassword === newPassword) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }

        try {
            const res = await fetch("/api/user/change-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword, newPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 4000);
                setCurrentPassword("");
                setNewPassword("");
                setConfirmPassword("");
            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 4000);
            }
        } catch (err) {
            console.error("Password update error:", err);
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
        }
    };

    const [systemName, setSystemName] = useState('');
    useEffect(() => {
        if (system) {
            setSystemName(system.system_name);
        }
    }, [system]);
    const handleSystemUpdate = async (e) => {
        e.preventDefault();

        if (!systemName) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }

        try {
            const res = await fetch('/api/system', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ system_name: systemName }),
                credentials: 'include', // JWT cookie sent automatically
            });

            const data = await res.json();

            if (res.ok) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 4000);
            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 4000);
            }
        } catch (err) {
            console.error('Error updating system:', err);
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
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
                                <form onSubmit={handleProfileUpdate}>
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
                            <form onSubmit={handlePasswordChange}>
                                {showMessage && (
                                    <div className="bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                        Password updated successfully.
                                    </div>
                                )}
                                {showError && (
                                    <div className="bg-red-400 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                        Failed to update Password.
                                    </div>
                                )}
                                {/* <h1 className='text-2xl pt-6'>Notification preferences</h1>
                                <div className='flex pt-2 items-center justify-center gap-2 py-2'>
                                    <p className='pr-2 text-lg'>Enable push notifications:</p>
                                    <input 
                                        type="checkbox"
                                        id="push_notifications" 
                                        //checked={userNotifications.push_notifications_enabled ?? false}
                                        //onChange={(e) => handleUpdate('push_notifications_enabled', e.target.checked)}
                                    />
                                </div>
                                <div className='flex pt-2 items-center justify-center gap-2 py-2'>
                                    <p className='pr-2 text-lg'>Notify on System alerts:</p>
                                    <input 
                                        type="checkbox"
                                        id="push_notifications" 
                                        //checked={userNotifications.push_notifications_enabled ?? false}
                                        //onChange={(e) => handleUpdate('push_notifications_enabled', e.target.checked)}
                                    />
                                </div>
                                <div className='flex pt-2 items-center justify-center gap-2 py-2'>
                                    <p className='pr-2 text-lg'>Notify on failed login attempts:</p>
                                    <input 
                                        type="checkbox"
                                        id="push_notifications" 
                                        //checked={userNotifications.push_notifications_enabled ?? false}
                                        //onChange={(e) => handleUpdate('push_notifications_enabled', e.target.checked)}
                                    />
                                </div>
                                 */}

                                <h1 className='text-2xl pt-6'>Security preferences</h1>

                                <h2 className='text-xl pt-4'>Change password</h2>
                                <div className='flex items-center justify-end pt-4 gap-2 py-4 px-4'>
                                    <p className='pr-2 text-lg'>Current password:</p>
                                    <input 
                                        type="password" 
                                        className='border-2 border-black p-1 bg-white'
                                        value={currentPassword}
                                        onChange={(e) => setCurrentPassword(e.target.value)}
                                    />
                                </div>
                                <div className='flex items-center justify-end pt-4 gap-2 py-4 px-4'>
                                    <p className='pr-2 text-lg'>New password:</p>
                                    <input 
                                        type="password" 
                                        className='border-2 border-black p-1 bg-white'
                                        value={newPassword}        
                                        onChange={(e) => setNewPassword(e.target.value)}
                                    />
                                </div>
                                <div className='flex items-center justify-end pt-4 gap-2 py-4 px-4'>
                                    <p className='pr-2 text-lg'>Confirm new password:</p>
                                    <input 
                                        type="password" 
                                        className='border-2 border-black p-1 bg-white'
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className='pt-4 py-2'>
                                    <button type='submit' value="Save" className='w-20 border-2 p-1 cursor-pointer rounded-sm hover:focus hover:opacity-75 bg-orange-400'>Save</button>
                                </div>
                            </form>
                            {/* Additional settings to add */}
                            <div className='hidden'>
                                <p className='pr-2'>System alerts</p>
                                <p className='pr-2'>Email or sms notifications</p>
                                    
                                <p className='pr-2'>Energy units (kWh, MWh):</p>
                                <p className='pr-2'>Date & time formats</p>
                                <p className='pr-2'>Currency</p>

                                <p className='pr-2'>Two-factor authentication (2FA)</p>
                                <p className='pr-2'>Password change</p>
                                <p className='pr-2'>Active sessions</p>
                            </div>
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
                            <form onSubmit={handleSystemUpdate}>
                                {showMessage && (
                                    <div className="bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                    System updated successfully.
                                    </div>
                                )}
                                {showError && (
                                    <div className="bg-red-400 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                                    Failed to update system.
                                    </div>
                                )}
                                <div className='flex pt-6 items-center py-2'>
                                    <p className='pr-2'>System Name</p>
                                    <input 
                                        type="text" 
                                        className='border-2 border-black p-1 bg-white'
                                        value={systemName}
                                        onChange={(e) => setSystemName(e.target.value)}
                                    />
                                </div>
                                <div className='pt-4 py-2'>
                                    <button type='submit' value="Save" className='w-20 border-2 p-1 cursor-pointer rounded-sm hover:focus hover:opacity-75 bg-orange-400'>Save</button>
                                </div>
                            </form>
                            {/* Additional settings to add */}
                            <div className='hidden'>
                                <p className='pr-2'>Installation address</p>
                                <p className='pr-2'>Maintenance & lifecycle</p>
                                <p className='pr-2'>Commissioning date</p>
                                <p className='pr-2'>Warranty details</p>
                                <p className='pr-2'>Last data update</p>
                            </div>
                        </div>
                    </div>
                </>
            )

        }
    };

    if (loading || !session) {
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

                            <li className='mt-2 pl-4'><Link href="/dashboard" className="block hover:underline">Dashboard</Link></li>
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
            <div className="relative flex items-center w-full py-4 px-8 border-b bg-[#f4f4f5]">
                <Link href="/dashboard" className="flex items-center justify-center">
                    <ArrowLeft size={32} className="text-black" />
                </Link>
                <div className="absolute left-1/2 -translate-x-1/2 flex space-x-6 text-2xl">
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