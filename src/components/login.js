"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Login(){
    const searchParams = useSearchParams();
    const [showLogoutMessage, setShowLogoutMessage] = useState(false);

    useEffect(() => {
        if (searchParams.get('loggedout') === 'true') {
          setShowLogoutMessage(true);
    
          // Optional: hide message after a few seconds
          setTimeout(() => setShowLogoutMessage(false), 4000);
        }
    }, [searchParams]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include', // send & accept cookies
            });

            const data = await res.json();

            if (res.ok) {
                // JWT is stored in HttpOnly cookie by backend
                router.push('/systemselect'); // Redirect to dashboard
            } else {setMessage(data.error)}
        } catch (err) {
            console.error('Login failed', err);
            setMessage('Login failed. Please try again.');
        }
    };
    
    return(
        /*  bg-white md:bg-[#f7e2cc]*/
        <div className="relative w-screen h-screen text-center flex items-center justify-center">
            <div
                className="absolute inset-0 bg-[url('/images/vine_power_tower_scale60.jpg')] bg-cover bg-center md:brightness-75 brightness-50 ">
            </div>
            <div className='relative z-10 flex w-full md:min-w-2/5 justify-center'>
                <form onSubmit={handleLogin} className='md:border-2 border-black md:rounded-2xl w-full p-4 md:rounded-lg md:max-w-md backdrop-blur-md bg-white md:shadow-lg md:shadow-black'>
                    {showLogoutMessage && (
                        <div className="bg-green-200 border border-green-600 text-green-800 px-4 rounded mb-2 text-center">
                            You have been logged out successfully.
                        </div>
                    )}
                    <img
                        className='w-full sm:w-auto h-auto rounded-lg mx-auto -mt-8'
                        src='images/Logo Type_Mix1.png'
                        alt='Janta logo' 
                        style={{height:'15em', width:'15em'}} 
                    />

                    <p className='text-black text-5xl font-bold mx-auto -mt-14 pb-10'>
                        Sign in
                    </p>

                    {message && <p className="text-xl text-red-500 pb-4 font-bold text-center">{message}</p>}

                    <div className=''>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            inputMode="email"
                            className='rounded-lg border-2 w-full p-2 text-black bg-white'
                            placeholder='Email'
                            value={email}
                            maxLength={254} /* NEW */
                            pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"    /* NEW */
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        /> 
                    </div>

                    <div className='pt-8'>
                        <input
                            type='password' 
                            id='password' 
                            name='password'
                            className='rounded-lg border-2 w-full p-2 text-black bg-white'
                            placeholder='Password'
                            value={password}
                            maxLength={128} /* NEW */
                            onChange={(e) => setPassword(e.target.value)}
                            required>
                        </input>
                    </div>

                    <div className='mt-6 flex'>
                        <input type="checkbox" id="horns" name="horns" className='mr-1' required/>
                        <p className='text-black text-md'>By signing in, you accept the <a href='www.google.com' className='underline'>terms of service</a>.</p>
                    </div>

                    <div className='mt-6 text-right'>
                        <button type="submit" className='w-full border-2 border-black rounded-lg bg-[#ecac5c] font-bold p-2 text-black hover:brightness-90'>
                            Sign in
                        </button>
                    </div>

                    <div className='mt-6 flex justify-between w-full'>
                        <a href='/register' className='text-black hover:underline hidden'>Sign up</a>
                        <a href='/passreset' className='text-black hover:underline hidden'>Forgot password?</a>
                    </div>

                </form>
            </div>            
        </div>
    )
}
