"use client";
import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import { ArrowLeft, Pencil} from "lucide-react";

export default function Security(){
    const router = useRouter();
    const [userId, setUserId] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);
    const [userSettings, setUserSettings] = useState({
        last_login_device: '',
        last_login: '',
        email_recovery: '',
        phone_recovery: '',
    });
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messagesuccess, setmessagesuccess] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            router.push('/');
            return;
        }
    
        try {
            const decoded = jwtDecode(token); // ✅ should be { id }
            setUserId(decoded.id); // ✅ correctly store in state
        } catch (error) {
            console.error('Invalid token', error);
            localStorage.removeItem('token');
            router.push('/');
            return;
        }
    }, []);

    useEffect(() => {
        if (!userId) return; // Don't fetch until ID is set

        async function fetchUserSettings() {
            try{
                const userResponse = await fetch(`/api/settings/${userId}`);
                const userData = await userResponse.json();
                setUserSettings(userData);
            } catch (error){
                console.log("Fetch error:", error)
                // router.push('/login');
            }
        }
        fetchUserSettings();
    }, [userId]);

    const handleUpdate = async (updatedData) => {
        if (!userId) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            // setMessage("Missing user ID");
            return;
        }

        const res = await fetch(`/api/settings/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedData),
        });
      
        const data = await res.json();
      
        if (res.ok) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
            // setMessage('Profile updated successfully!');
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            // setMessage(data.error || 'Failed to update profile');
        }
    };

    const [showEmailInput, setShowEmailInput] = useState(false);
    const [newEmail, setnewEmail] = useState("");
    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const [showPhoneInput, setShowPhoneInput] = useState(false);
    const [newPhone, setNewPhone] = useState("");
    const isValidUSPhone = (phone) => {
        // Allow formats like (123) 456-7890, 123-456-7890, 1234567890, +1 123 456 7890
        const cleaned = phone.replace(/[^\d]/g, '');
        return cleaned.length === 10 || (cleaned.length === 11 && cleaned.startsWith('1'));
    };  
      
    const handlePasswordChange = async (e) => {
        e.preventDefault();
    
        if (!currentPassword || !newPassword || !confirmPassword) {
            setMessage('Please fill in all fields.');
            setTimeout(() => {
                setMessage('');
            }, 3000);
            return;
        }
    
        if (newPassword !== confirmPassword) {
            setMessage('New passwords do not match.');
            setTimeout(() => {
                setMessage('');
            }, 3000);
            return;
        }

        if (currentPassword === newPassword) {
            setMessage('New password is the same as old password');
            setTimeout(() => {
                setMessage('');
            }, 3000);
            return;
        }
    
        const res = await fetch(`/api/user/${userId}/change-password`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ currentPassword, newPassword }),
        });
    
        const data = await res.json();
    
        if (res.ok) {
            setmessagesuccess('Password updated successfully.');
            setTimeout(() => {
                setmessagesuccess('');
            }, 3000);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        } else {
            setMessage(data.error || 'Password update failed.');
            setTimeout(() => {
                setMessage('');
            }, 3000);
        }
    }
    
    if (!userId) {
        return <p className="bg-[#f7e2cc] w-screen h-screen flex items-center justify-center text-black text-2xl ">Loading...</p>;
    }
     
    return(
        <div className='w-screen max-w-screen overflow-hidden h-auto md:h-screen pb-4 text-center bg-[#f7e2cc] text-black'>     
            <div className='py-8 relative w-full h-32'>
                {/* Back Button */}
                <Link href="/settings" className="absolute top-7 left-8">
                    <ArrowLeft size={32} className="text-black" />
                </Link>

                {/* Janta Logo */}
                <img
                    className='absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 object-cover'
                    src='images/Logo Type_Mix1.png'
                    alt='Janta logo' 
                    style={{height:'15em', width:'15em'}} 
                />
            </div>
            <div className='border-2 border-black shadow-md shadow-black rounded-lg bg-white py-8 mx-2 md:mx-auto md:w-2/3 px-4'>
                <div className='pb-4'>
                    {showMessage && (
                        <div className="bg-green-200 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                            Settings updated successfully.
                        </div>
                    )}
                    {showError && (
                        <div className="bg-red-400 border border-green-600 text-green-800 px-4 py-2 rounded mb-4 text-center">
                            Failed to update Settings.
                        </div>
                    )}
                    <h1 className='text-4xl font-bold'>Sign In & Security</h1>
                </div>                
                <div className='text-left p-2'>
                    <form onSubmit={handlePasswordChange}>
                        <h1 className='text-2xl'>Change Password</h1>
                        <div className='py-2 flex items-center border-b-2 border-gray-300'>
                            <p className='pr-2 text-lg'>Current password:</p>
                            <input 
                                type="password" 
                                className='border-2 border-black p-1'
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                        </div>
                        <div className='py-2 flex items-center border-b-2 border-gray-300'>
                            <p className='pr-2 text-lg'>New password:</p>
                            <input 
                                type="password" 
                                className='border-2 border-black p-1'
                                value={newPassword}        
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className='py-2 flex items-center'>
                            <p className='pr-2 text-lg'>Confirm new password:</p>
                            <input 
                                type="password" 
                                className='border-2 border-black p-1'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className='py-2'>
                            <button 
                                type='submit' 
                                className='border-2 p-1 cursor-pointer rounded-md hover:focus hover:bg-white bg-orange-400'
                            >
                                Save
                            </button>
                            {message && <p className="mt-3 text-red-600">{message}</p>}
                            {messagesuccess && <p className="mt-3 text-green-200">{messagesuccess}</p>}
                        </div>
                    </form>
                </div> 
                {/* <div className='text-left p-2 hidden'>
                    <h1 className='text-2xl'>Two-Factor Authentication (2FA)</h1>
                    <div className='py-2 flex border-b-2 border-gray-300'>
                        <p className='pr-2 text-lg'>Enable/Disable 2FA:</p>
                        <input 
                            type="checkbox"
                            id="two_factor_auth" 
                            checked={!!userSettings?.two_factor_auth}
                            onChange={(e) => setUserSettings(prev => ({ ...prev, two_factor_auth: e.target.checked }))}
                        />
                    </div>
                </div> */}
                <div className='text-left p-2'>
                    <h1 className='text-2xl'>Trusted Devices</h1>
                    <div className='flex py-2 text-lg'>
                        <p className='pr-2'>List of Devices:</p>
                        <p className='text-gray-600'>{userSettings.last_login_device}</p>
                    </div>
                    <div className='flex py-2 text-lg'>
                        <p className='pr-2'>Last sign in:</p>
                        <p className='text-gray-600'>
                            {userSettings.last_login
                            ? new Date(userSettings.last_login).toLocaleString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: 'numeric',
                                minute: '2-digit',
                                hour12: true,
                            })
                            : 'No login yet'}

                        </p>
                    </div>
                </div>
                <div className='text-left p-2'>
                    <h1 className='text-2xl'>Account Recovery settings</h1>
                    <div className='py-2 flex items-center border-b-2 border-gray-300'>
                        {/* Recovery Email */}
                        <p className='pr-2 text-lg'>Recovery Email:</p>
                        <p  
                            className={
                                `pr-2 text-lg 
                                ${showEmailInput ? 'hidden sm:block' : 'block'}
                            `}
                        >
                            {userSettings?.email_recovery || "Not set"}
                        </p>
                        <button
                            onClick={() => {
                                setShowEmailInput(!showEmailInput);
                                setnewEmail(userSettings.email_recovery || '');
                            }}
                            className={
                                `text-gray-800 hover:text-blue-800 -mt-2
                                ${showEmailInput ? 'hidden sm:block' : 'block'}
                            `}
                        >
                            <Pencil size={18} />
                        </button>

                        {/* Conditional input */}
                        {showEmailInput && (
                        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
                            <input
                                type="email"
                                placeholder="Enter new recovery email"
                                className="ml-4 -mt-2 border-2 border-black p-1"
                                value={newEmail}
                                onChange={(e) => setnewEmail(e.target.value)}
                            />
                            <button
                                onClick={async () => {
                                    if (!isValidEmail(newEmail)) {
                                        alert("Please enter a valid email address.");
                                        return;
                                    }

                                    const updatedSettings = {
                                        ...userSettings,
                                        email_recovery: newEmail,
                                    };

                                    // Update local state
                                    setUserSettings(updatedSettings);

                                    // Update backend
                                    await handleUpdate(updatedSettings);

                                    // Reset
                                    setShowEmailInput(false);
                                    setnewEmail(""); // clear input
                                }}
                                className="ml-4 border-2 p-1 cursor-pointer rounded-md hover:focus hover:bg-white bg-orange-400"
                            >
                            Save
                            </button>
                        </div>
                        )}
                    </div>

                    {/* Recovery Phone Number */}
                    <div className='py-2 flex items-center'>
                        <p className='pr-2 text-lg'>Recovery Phone Number:</p>
                        <p  
                            className={
                                `pr-2 text-lg 
                                ${showPhoneInput ? 'hidden sm:block' : 'block'}
                            `}
                        >
                            {userSettings?.phone_recovery || "Not set"}
                        </p>
                        <button
                            onClick={() => {
                                setShowPhoneInput(!showPhoneInput);
                                setNewPhone(userSettings?.phone_recovery || '');
                            }}
                            className={
                                `text-gray-800 hover:text-blue-800 -mt-2
                                ${showPhoneInput ? 'hidden sm:block' : 'block'}
                            `}
                        >
                            <Pencil size={18} />
                        </button>

                        {/* Conditional input */}
                        {showPhoneInput && (
                        <div className="flex flex-col sm:flex-row gap-2 mt-2 sm:mt-0 w-full sm:w-auto">
                            <input
                                type="tel"
                                placeholder="Enter new recovery phone"
                                className="ml-4 border-2 border-black p-1"
                                value={newPhone}
                                onChange={(e) => setNewPhone(e.target.value)}
                            />
                            <button
                                onClick={async () => {
                                    if (!isValidUSPhone(newPhone)) {
                                        alert("Please enter a valid U.S. phone number (e.g. 123-456-7890).");
                                        return;
                                    }

                                    const updatedSettings = {
                                        ...userSettings,
                                        phone_recovery: newPhone,
                                    };
                                
                                    // Update local state
                                    setUserSettings(updatedSettings);

                                    // Update backend
                                    await handleUpdate(updatedSettings);

                                    // Reset
                                    setShowPhoneInput(false);
                                    setNewPhone(""); // clear input
                                }}
                                className="ml-4 border-2 p-1 cursor-pointer rounded-md hover:focus hover:bg-white bg-orange-400"
                            >
                            Save
                            </button>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}