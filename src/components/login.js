"use client";
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
export default function Login() {
    const searchParams = useSearchParams();
    const [showLogoutMessage, setShowLogoutMessage] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (searchParams.get('loggedout') === 'true') {
            setShowLogoutMessage(true);
            setTimeout(() => setShowLogoutMessage(false), 4000);
        }
    }, [searchParams]);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!acceptTerms) {
            setMessage('Please accept the terms of service.');
            return;
        }
        setMessage('');

        try {
            const res = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
                credentials: 'include',
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/systemselect');
            } else {
                setMessage(data.error || 'Invalid email or password.');
            }
        } catch (err) {
            console.error('Login failed', err);
            setMessage('Login failed. Please try again.');
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background image: Dallas Three Towers 1 */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/Dallas%20Three%20Towers%201.jpg')",
                }}
            />

            {/* Login card - Surface */}
            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-400 dark:border-gray-600 p-8 md:p-10 cursor-pointer">
                    {/* Logo and Sign in row: lines align with logo width */}
                    <div className="grid justify-items-center mx-auto" style={{ width: 'max-content' }}>
                        <div className="flex justify-center mb-2">
                            <img
                                src="/images/Janta%20Power%20Official%20Logo%201.svg"
                                alt="Janta Power"
                                className="h-28 w-auto md:h-36"
                            />
                        </div>
                        <div className="flex items-center gap-3 my-6 w-full min-w-0">
                            <span className="flex-1 h-px bg-[#87a9c4] min-w-0" />
                            <h2 className="text-[#2F3E4D] font-medium text-lg uppercase tracking-wide flex-shrink-0">
                                Sign in
                            </h2>
                            <span className="flex-1 h-px bg-[#87a9c4] min-w-0" />
                        </div>
                    </div>

                    {showLogoutMessage && (
                        <div className="mb-4 p-3 rounded-lg text-sm text-center bg-[#2A9D8F]/15 text-[#2A9D8F]">
                            You have been logged out successfully.
                        </div>
                    )}
                    {message && (
                        <div className="mb-4 p-3 rounded-lg text-sm text-center bg-[#D80404]/15 text-[#D80404]">
                            {message}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); setMessage(''); }}
                            className="w-full px-4 py-3 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87a9c4]/40 focus:border-[#87a9c4] bg-[#FFFFFF] dark:bg-gray-700 text-[#2F3E4D] dark:text-gray-100 placeholder-[#6A7B8F]/70"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); setMessage(''); }}
                            className="w-full px-4 py-3 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#87a9c4]/40 focus:border-[#87a9c4] bg-[#FFFFFF] dark:bg-gray-700 text-[#2F3E4D] dark:text-gray-100 placeholder-[#6A7B8F]/70"
                            required
                        />

                        {/* Terms - Accent circular indicator */}
                        <label className="flex items-start gap-3 cursor-pointer text-sm text-[#6A7B8F]">
                            <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-center justify-center">
                                {acceptTerms ? (
                                    <span className="w-2 h-2 rounded-full bg-[#87a9c4]" />
                                ) : null}
                            </span>
                            <input
                                type="checkbox"
                                checked={acceptTerms}
                                onChange={(e) => setAcceptTerms(e.target.checked)}
                                className="sr-only"
                            />
                            <span>By signing in, you accept the terms of service.</span>
                        </label>

                        <button
                            type="submit"
                            className="w-full py-3 mt-4 rounded-lg font-semibold text-[#2F3E4D] bg-[#F3B664] hover:bg-[#F3B664]/90 focus:outline-none focus:ring-2 focus:ring-[#F3B664]/50 transition cursor-pointer"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
