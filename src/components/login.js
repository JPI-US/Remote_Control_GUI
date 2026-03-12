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
                router.push('/towerselect'); // Redirect to dashboard
            } else {setMessage(data.error)}
        } catch (err) {
            console.error('Login failed', err);
            setMessage('Login failed. Please try again.');
        }
    };

        /* const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
      
        const data = await res.json();
      
        if (res.ok) {
            // Store token (consider HttpOnly cookies for secure apps)
            localStorage.setItem('token', data.token);
            router.push('/towerselect'); // Go to home page or dashboard
        } else {
            setMessage(data.error);
        }
    };  */
    
    return(
        /*  bg-white md:bg-[#f7e2cc]*/
        <div className="relative w-screen h-screen text-center flex items-center justify-center">
            <div
                className="absolute inset-0 bg-cover bg-center md:brightness-75 brightness-50"
                style={{ backgroundImage: "url('/images/Dallas Three Towers 1.png')" }}>
            </div>
            {/* Optional dark overlay 
            <div className="absolute inset-0 bg-black/40"></div>
                <form onSubmit={handleLogin} className='bg-white/90 backdrop-blur-md p-8 rounded-xl shadow-2xl ring-1 ring-white/30'>
            */}
            <div className='relative z-10 flex w-full md:min-w-2/5 justify-center'>
                <form onSubmit={handleLogin} className='md:border-2 border-black md:rounded-3xl w-full p-4 md:rounded-2xl md:max-w-md backdrop-blur-md bg-white/40 md:bg-white/50 md:shadow-2xl md:shadow-black/50 shadow-xl shadow-black/30'>
                    {showLogoutMessage && (
                        <div className="bg-green-200 border border-green-600 text-green-800 px-4 rounded mb-2 text-center">
                            You have been logged out successfully.
                        </div>
                    )}
                    <div className='flex justify-center mb-4'>
                        <img
                            className='max-w-xs w-auto h-auto object-contain mx-auto'
                            src='/images/Janta Power Official Logo 1.png'
                            alt='Janta logo' 
                            style={{maxHeight:'10em', maxWidth:'100%'}} 
                        />
                    </div>

                    <div className='flex items-center justify-center pb-10'>
                        <div className='h-px bg-gray-400 flex-1 max-w-[100px]'></div>
                        <p className='text-5xl font-bold mx-4 drop-shadow-lg uppercase' style={{ fontFamily: 'var(--font-bayon), sans-serif', color: '#2F3E4D' }}>
                            Sign in
                        </p>
                        <div className='h-px bg-gray-400 flex-1 max-w-[100px]'></div>
                    </div>

                    {message && <p className="text-xl text-red-500 pb-4 font-bold text-center drop-shadow-md">{message}</p>}

                    <div className=''>
                        <input 
                            type='email' 
                            id='email' 
                            name='email'
                            inputMode="email"
                            className='rounded-lg border-2 w-full p-2 text-black bg-white/90 backdrop-blur-sm'
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
                            className='rounded-lg border-2 w-full p-2 text-black bg-white/90 backdrop-blur-sm'
                            placeholder='Password'
                            value={password}
                            maxLength={128} /* NEW */
                            onChange={(e) => setPassword(e.target.value)}
                            required>
                        </input>
                    </div>

                    <div className='mt-6 flex items-center'>
                        <input 
                            type="checkbox" 
                            id="horns" 
                            name="horns" 
                            className='circular-checkbox mr-2' 
                            required
                        />
                        <p className='text-black text-md drop-shadow-md'>By signing in, you accept the <a href='www.google.com' className='underline'>terms of service</a>.</p>
                    </div>

                    <div className='mt-6 text-right'>
                        <button type="submit" className='w-full border-2 border-black rounded-lg bg-[#ecac5c] font-bold p-2 text-black hover:brightness-90'>
                            Sign in
                        </button>
                    </div>

                    <div className='mt-6 flex justify-between w-full'>
                        <a href='/register' className='text-white hover:underline hidden drop-shadow-md'>Sign up</a>
                        <a href='/passreset' className='text-white hover:underline hidden drop-shadow-md'>Forgot password?</a>
                    </div>

                </form>
            </div>            
        </div>
    )
}
