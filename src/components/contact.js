"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, ArrowLeft } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { useTheme } from "@/context/ThemeContext";

const ORANGE = "#F3B664";

export default function Contact() {
    const { user } = useSession();
    const [menuOpen, setMenuOpen] = useState(false);
    const { isDark, toggleDark } = useTheme();

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#F2F2F2] text-[#2F3E4D] dark:bg-gray-900 dark:text-gray-100">
            {/* Header - same as dashboard and settings */}
            <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 bg-white shadow-sm dark:bg-gray-800 dark:shadow-gray-900">
                <Link href="/dashboard" className="flex items-center shrink-0">
                    <img
                        src="/images/Janta%20Power%20Business%20Card%20Logo%202.svg"
                        alt="Janta Power"
                        className="h-14 w-auto min-w-[160px] object-contain md:h-16 md:min-w-[200px]"
                    />
                </Link>
                <div className="flex items-center gap-2">
                    <button type="button" aria-label={isDark ? "Light mode" : "Dark mode"} className="p-2 rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-gray-700 text-[#2F3E4D] dark:text-gray-200" onClick={toggleDark}>
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button type="button" aria-label="Menu" className="p-2 rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-gray-700 text-[#2F3E4D] dark:text-gray-200" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Dropdown from top bar menu - same as dashboard and settings */}
            {menuOpen && (
                <div className="fixed top-24 right-6 w-56 bg-white dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <p className="px-4 py-2 text-sm font-medium border-b border-gray-100 dark:border-gray-700 dark:text-gray-200">{user?.name || "Guest"}</p>
                    <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link href="/settings" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Settings</Link>
                    <button
                        onClick={async () => {
                            try {
                                await fetch("/api/logout", { method: "GET" });
                                window.location.href = "/?loggedout=true";
                            } catch (err) {
                                console.error("Logout failed:", err);
                            }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200"
                    >
                        Log Out
                    </button>
                </div>
            )}

            {/* Main content */}
            <main className="flex-1 overflow-y-auto min-h-0 pt-28 pb-8 px-6 dark:bg-gray-900">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center gap-2 text-[#2F3E4D] dark:text-gray-200 hover:text-[#2A9D8F] font-medium transition-colors cursor-pointer mb-6"
                    aria-label="Back to dashboard"
                >
                    <ArrowLeft className="w-5 h-5 flex-shrink-0" />
                    Back to Dashboard
                </Link>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] dark:text-gray-100 text-center mb-8">
                        Contact us
                    </h1>
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
                        <form method="post">
                            <div className="mb-4">
                                <label htmlFor="fullname" className="block text-sm font-medium text-[#6A7B8F] mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="fullname"
                                    name="fullname"
                                    required
                                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#2F3E4D] focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-[#6A7B8F] mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#2F3E4D] focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-[#6A7B8F] mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Draft a message..."
                                    required
                                    rows={5}
                                    className="w-full border border-[#E5E7EB] rounded-lg px-3 py-2 text-[#2F3E4D] focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent resize-y"
                                />
                            </div>
                            <div className="mb-6 flex items-start gap-2">
                                <input
                                    type="radio"
                                    id="privacy-policy"
                                    name="privacy-policy"
                                    required
                                    className="mt-1 rounded-full border-[#E5E7EB] text-[#2A9D8F] focus:ring-[#2A9D8F]"
                                />
                                <label htmlFor="privacy-policy" className="text-sm text-[#6A7B8F]">
                                    I accept the terms <span className="text-red-500">*</span>
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-lg font-bold text-white transition-colors hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3B664] cursor-pointer"
                                    style={{ backgroundColor: ORANGE }}
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
