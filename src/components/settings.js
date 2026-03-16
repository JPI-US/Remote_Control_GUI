"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun, User, Settings as SettingsIcon, ArrowLeft } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { useSystem } from "@/hooks/useSystem";
import { useTheme } from "@/context/ThemeContext";

const SIDEBAR_BG = "#374151";
const ACCENT_GREEN = "#2A9D8F";
const ORANGE = "#F3B664";

export default function Settings() {
    const { session, user, loading } = useSession();
    const { system } = useSystem();
    const userID = session?.sub ?? null;

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [showMessage, setShowMessage] = useState(false);
    const [showError, setShowError] = useState(false);
    const [editingProfile, setEditingProfile] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [systemName, setSystemName] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const [view, setView] = useState("profile");
    const { isDark, toggleDark } = useTheme();

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
            setPhone(user.phone_number || "");
        }
    }, [user]);

    useEffect(() => {
        if (system) setSystemName(system.system_name);
    }, [system]);

    const initial = (user?.name || "M").trim().charAt(0).toUpperCase();

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (!userID) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }
        const res = await fetch(`/api/user`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        });
        if (res.ok) {
            setShowMessage(true);
            setTimeout(() => setShowMessage(false), 4000);
            setEditingProfile(false);
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
        }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword || currentPassword === newPassword) {
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
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
        }
    };

    const handleSystemUpdate = async (e) => {
        e.preventDefault();
        if (!systemName) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
            return;
        }
        try {
            const res = await fetch("/api/system", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ system_name: systemName }),
                credentials: "include",
            });
            if (res.ok) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 4000);
            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 4000);
            }
        } catch (err) {
            setShowError(true);
            setTimeout(() => setShowError(false), 4000);
        }
    };

    if (loading || !session) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center bg-[#F2F2F2] text-[#2F3E4D] text-xl">
                Loading...
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#F2F2F2] text-[#2F3E4D] dark:bg-gray-900 dark:text-gray-100">
            {/* Header - same as dashboard */}
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
                    <button type="button" aria-label="Menu" className="p-2 rounded-lg hover:bg-[#F2F2F2] dark:hover:bg-gray-700 text-[#2F3E4D] dark:text-gray-200 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </header>

            {/* Dropdown from top bar menu - same as dashboard */}
            {menuOpen && (
                <div className="fixed top-24 right-6 w-56 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-lg shadow-lg py-2 z-50">
                    <p className="px-4 py-2 text-base font-semibold dark:text-gray-200">{user?.name || "Guest"}</p>
                    <div className="border-t border-gray-200 dark:border-gray-600" aria-hidden="true" />
                    <Link href="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Dashboard</Link>
                    <Link href="/contact" className="block px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200" onClick={() => setMenuOpen(false)}>Contact us</Link>
                    <button
                        onClick={async () => {
                            try {
                                await fetch("/api/logout", { method: "GET" });
                                window.location.href = "/?loggedout=true";
                            } catch (err) {
                                console.error("Logout failed:", err);
                            }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200 cursor-pointer"
                    >
                        Log Out
                    </button>
                </div>
            )}

            <div className="flex flex-1 min-h-0 pt-20 flex-col">
                {/* Horizontal nav bar above sections */}
                <nav
                    className="shrink-0 grid grid-cols-3 items-center border-b border-[#2d3748] px-6 pt-4"
                    style={{ backgroundColor: SIDEBAR_BG }}
                    aria-label="Settings sections"
                >
                    <Link
                        href="/dashboard"
                        className="flex items-center justify-start gap-2 py-4 pr-4 text-white/90 hover:text-[#F3B664] rounded-lg cursor-pointer transition-colors w-fit"
                        aria-label="Back to dashboard"
                    >
                        <ArrowLeft className="w-5 h-5 flex-shrink-0" />
                        Back to Dashboard
                    </Link>
                    <div className="flex flex-row justify-center gap-0 min-w-0">
                    <button
                        type="button"
                        onClick={() => setView("profile")}
                        className={`flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
                            view === "profile"
                                ? "border-[#F3B664] text-white"
                                : "border-transparent text-white/90 hover:bg-white/10"
                        }`}
                    >
                        <User className="w-4 h-4 flex-shrink-0" />
                        Profile
                    </button>
                    <button
                        type="button"
                        onClick={() => setView("settings")}
                        className={`flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
                            view === "settings"
                                ? "border-[#F3B664] text-white"
                                : "border-transparent text-white/90 hover:bg-white/10"
                        }`}
                    >
                        <SettingsIcon className="w-4 h-4 flex-shrink-0" />
                        User Settings
                    </button>
                    <button
                        type="button"
                        onClick={() => setView("system")}
                        className={`flex items-center justify-center gap-2 px-4 py-4 text-sm font-medium transition-colors border-b-2 -mb-px cursor-pointer ${
                            view === "system"
                                ? "border-[#F3B664] text-white"
                                : "border-transparent text-white/90 hover:bg-white/10"
                        }`}
                    >
                        <Sun className="w-4 h-4 flex-shrink-0" />
                        PV System
                    </button>
                    </div>
                    <div aria-hidden="true" />
                </nav>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto min-h-0 py-8 px-8">
                    {view === "profile" && (
                        <>
                            <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] text-center mb-8">
                                Account Details
                            </h1>
                            <div className="max-w-2xl mx-auto">
                                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-400 dark:border-gray-600 p-6">
                                    {!editingProfile ? (
                                        <>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0">
                                                    <span className="text-xl font-bold text-[#374151]">{initial}</span>
                                                </div>
                                                <span className="text-lg font-semibold text-[#2F3E4D]">{name || "—"}</span>
                                            </div>
                                            <div className="divide-y divide-gray-400 dark:divide-gray-600">
                                                <div className="flex justify-between items-center py-4">
                                                    <span className="text-[#2F3E4D]">Name</span>
                                                    <span className="text-[#2F3E4D]">{name || "—"}</span>
                                                </div>
                                                <div className="flex justify-between items-center py-4">
                                                    <span className="text-[#2F3E4D]">Email</span>
                                                    <a href={`mailto:${email}`} className="text-blue-600 underline">{email || "—"}</a>
                                                </div>
                                                <div className="flex justify-between items-center py-4">
                                                    <span className="text-[#2F3E4D]">Phone</span>
                                                    <span className="text-[#2F3E4D]">{phone || "—"}</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end mt-6">
                                                <button
                                                    type="button"
                                                    onClick={() => setEditingProfile(true)}
                                                    className="px-5 py-2.5 rounded-lg font-bold text-white transition-all duration-200 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3B664] cursor-pointer"
                                                    style={{ backgroundColor: ORANGE }}
                                                >
                                                    Edit Profile
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <form onSubmit={handleProfileUpdate}>
                                            {showMessage && (
                                                <div className="bg-green-100 border border-green-600 text-green-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                                    Profile updated successfully.
                                                </div>
                                            )}
                                            {showError && (
                                                <div className="bg-red-100 border border-red-600 text-red-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                                    Failed to update profile.
                                                </div>
                                            )}
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="w-14 h-14 rounded-full bg-[#E5E7EB] flex items-center justify-center shrink-0">
                                                    <span className="text-xl font-bold text-[#374151]">{initial}</span>
                                                </div>
                                                <div className="flex-1">
                                                    <label className="block text-sm text-[#6A7B8F] mb-1">Name</label>
                                                    <input
                                                        type="text"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                        className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-4 mb-6">
                                                <div>
                                                    <label className="block text-sm text-[#6A7B8F] mb-1">Email</label>
                                                    <input
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm text-[#6A7B8F] mb-1">Phone</label>
                                                    <input
                                                        type="tel"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                        className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex justify-end gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => setEditingProfile(false)}
                                                    className="px-4 py-2 rounded-lg border border-gray-400 dark:border-gray-600 text-[#2F3E4D] dark:text-gray-200 dark:bg-gray-700 hover:bg-[#F2F2F2] dark:hover:bg-gray-600"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="px-5 py-2.5 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3B664] cursor-pointer"
                                                    style={{ backgroundColor: ORANGE }}
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    {view === "settings" && (
                        <div className="max-w-2xl mx-auto">
                            <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] text-center mb-8">
                                User Settings
                            </h1>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-400 dark:border-gray-600 p-6">
                                <form onSubmit={handlePasswordChange}>
                                    {showMessage && (
                                        <div className="bg-green-100 border border-green-600 text-green-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                            Password updated successfully.
                                        </div>
                                    )}
                                    {showError && (
                                        <div className="bg-red-100 border border-red-600 text-red-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                            Failed to update password.
                                        </div>
                                    )}
                                    <h2 className="text-base font-bold text-[#2F3E4D] mb-4">Security preferences</h2>
                                    <h3 className="text-sm font-semibold text-[#2F3E4D] mb-3">Change password</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm text-[#6A7B8F] mb-1">Current password</label>
                                            <input
                                                type="password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#6A7B8F] mb-1">New password</label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-[#6A7B8F] mb-1">Confirm new password</label>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-5 py-2.5 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3B664] cursor-pointer"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {view === "system" && (
                        <div className="max-w-2xl mx-auto">
                            <h1 className="text-xl font-bold uppercase tracking-wide text-[#2F3E4D] text-center mb-8">
                                PV System
                            </h1>
                            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-400 dark:border-gray-600 p-6">
                                <form onSubmit={handleSystemUpdate}>
                                    {showMessage && (
                                        <div className="bg-green-100 border border-green-600 text-green-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                            System updated successfully.
                                        </div>
                                    )}
                                    {showError && (
                                        <div className="bg-red-100 border border-red-600 text-red-800 px-4 py-2 rounded-lg mb-4 text-sm">
                                            Failed to update system.
                                        </div>
                                    )}
                                    <div className="mb-6">
                                        <label className="block text-sm text-[#6A7B8F] mb-1">System Name</label>
                                        <input
                                            type="text"
                                            value={systemName}
                                            onChange={(e) => setSystemName(e.target.value)}
                                            className="w-full border border-gray-400 dark:border-gray-600 rounded-lg px-3 py-2 text-[#2F3E4D] dark:bg-gray-700 dark:text-gray-100 focus:ring-2 focus:ring-[#2A9D8F] focus:border-transparent"
                                        />
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            type="submit"
                                            className="px-5 py-2.5 rounded-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F3B664] cursor-pointer"
                                            style={{ backgroundColor: ORANGE }}
                                        >
                                            Save
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
