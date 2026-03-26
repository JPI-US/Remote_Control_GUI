"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, User, Settings as SettingsIcon, Cpu, X, Menu } from "lucide-react";
import { useSession } from "@/hooks/useSession";
import { useSystem } from "@/hooks/useSystem";
import { useTheme } from "@/context/ThemeContext";

function getTheme(isDark) {
    if (isDark) return {
        pageBg:     "#14110f",
        cardBg:     "rgba(28,24,20,0.85)",
        cardBorder: "0.5px solid rgba(255,245,235,0.07)",
        cardShadow: "none",
        cardRadius: 12,
        text1:      "#f5f0ea",
        text2:      "rgba(245,240,234,0.6)",
        text3:      "rgba(245,240,234,0.38)",
        border:     "rgba(255,245,235,0.07)",
        border2:    "rgba(255,245,235,0.12)",
        amber:      "#e6b85c",
        amberDim:   "rgba(230,184,92,0.14)",
        green:      "rgba(74,222,128,0.75)",
        red:        "#ef4444",
        inputBg:    "rgba(255,255,255,0.05)",
        inputBorder:"rgba(255,245,235,0.12)",
    };
    return {
        pageBg:     "#F4F6F9",
        cardBg:     "#FFFFFF",
        cardBorder: "1px solid rgba(26,37,53,0.07)",
        cardShadow: "0 4px 6px rgba(26,37,53,0.04), 0 8px 24px rgba(26,37,53,0.08), 0 1px 2px rgba(26,37,53,0.06)",
        cardRadius: 20,
        text1:      "#1A2535",
        text2:      "#3D5068",
        text3:      "#7A90A8",
        border:     "rgba(26,37,53,0.08)",
        border2:    "rgba(26,37,53,0.14)",
        amber:      "#E8A020",
        amberDim:   "rgba(232,160,32,0.12)",
        green:      "#4A9E78",
        red:        "#e53e3e",
        inputBg:    "#FFFFFF",
        inputBorder:"rgba(26,37,53,0.20)",
    };
}

export default function Settings() {
    const { session, user, loading } = useSession();
    const { system } = useSystem();
    const userID = session?.sub ?? null;
    const { isDark, toggleDark } = useTheme();
    const T = getTheme(isDark);

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
    const [hoveredNav, setHoveredNav] = useState(null);

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

    const initial = (user?.name || "?").trim().charAt(0).toUpperCase();

    const handleProfileUpdate = async (e) => {
        e.preventDefault();
        if (!userID) { setShowError(true); setTimeout(() => setShowError(false), 4000); return; }
        const res = await fetch(`/api/user`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone }),
        });
        if (res.ok) { setShowMessage(true); setTimeout(() => setShowMessage(false), 4000); setEditingProfile(false); }
        else { setShowError(true); setTimeout(() => setShowError(false), 4000); }
    };

    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (!currentPassword || !newPassword || !confirmPassword || newPassword !== confirmPassword || currentPassword === newPassword) {
            setShowError(true); setTimeout(() => setShowError(false), 4000); return;
        }
        try {
            const res = await fetch("/api/user/change-password", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ currentPassword, newPassword }),
            });
            if (res.ok) {
                setShowMessage(true); setTimeout(() => setShowMessage(false), 4000);
                setCurrentPassword(""); setNewPassword(""); setConfirmPassword("");
            } else { setShowError(true); setTimeout(() => setShowError(false), 4000); }
        } catch { setShowError(true); setTimeout(() => setShowError(false), 4000); }
    };

    const handleSystemUpdate = async (e) => {
        e.preventDefault();
        if (!systemName) { setShowError(true); setTimeout(() => setShowError(false), 4000); return; }
        try {
            const res = await fetch("/api/system", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ system_name: systemName }),
                credentials: "include",
            });
            if (res.ok) { setShowMessage(true); setTimeout(() => setShowMessage(false), 4000); }
            else { setShowError(true); setTimeout(() => setShowError(false), 4000); }
        } catch { setShowError(true); setTimeout(() => setShowError(false), 4000); }
    };

    const inputStyle = {
        width: "100%", padding: "10px 14px", borderRadius: 8,
        border: `1px solid ${T.inputBorder}`, background: T.inputBg,
        color: T.text1, fontSize: 14, outline: "none", boxSizing: "border-box",
    };
    const labelStyle = {
        fontSize: 12, fontWeight: 700, letterSpacing: "0.10em",
        textTransform: "uppercase", color: T.text3, marginBottom: 6, display: "block",
    };
    const sectionHeader = {
        fontSize: 13, fontWeight: 700, letterSpacing: "0.15em",
        textTransform: "uppercase", color: T.text3, marginBottom: 20,
    };
    const saveBtn = {
        padding: "8px 24px", borderRadius: 8,
        background: T.amber, color: isDark ? "#000" : "#fff",
        fontWeight: 700, fontSize: 13, border: "none", cursor: "pointer",
    };
    const cancelBtn = {
        padding: "10px 20px", borderRadius: 8, background: "transparent",
        color: T.text2, fontWeight: 500, fontSize: 13,
        border: `1px solid ${T.border2}`, cursor: "pointer",
    };

    const navItems = [
        { id: "profile",  label: "Profile",  icon: User },
        { id: "settings", label: "Security", icon: SettingsIcon },
        { id: "system",   label: "System",   icon: Cpu },
    ];

    if (loading || !session) {
        return (
            <div style={{
                minHeight: "100vh", display: "flex", alignItems: "center",
                justifyContent: "center", background: T.pageBg, color: T.text2, fontSize: 16,
            }}>
                Loading...
            </div>
        );
    }

    return (
        // ── Outer shell: full screen, flex row ──────────────────────────────
        <div className="flex h-screen overflow-hidden w-full"
            style={{ background: T.pageBg, color: T.text1 }}>

            {/* ── FIXED SIDEBAR (matches dashboard Sidebar component) ── */}
            <aside
                style={{
                    position: "fixed", top: 0, left: 0, bottom: 0,
                    width: 256, zIndex: 30,
                    background: "#1A2535",
                    borderRight: "0.5px solid rgba(255,220,150,0.10)",
                    display: "flex", flexDirection: "column",
                    overflowY: "auto",
                }}
            >
                {/* Logo — same proportions as Sidebar.js */}
                <Link href="/dashboard" style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    padding: "18px 16px",
                    borderBottom: "0.5px solid rgba(255,220,150,0.12)",
                    textDecoration: "none",
                    transition: "background 0.2s ease",
                }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(230,184,92,0.04)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                >
                    <img
                        src="/images/Janta_Power_Business_Card_Logo.jpeg"
                        alt="Janta Power"
                        style={{ width: "100%", maxWidth: 180, height: "auto", objectFit: "contain" }}
                    />
                </Link>

                {/* Nav section */}
                <nav style={{ padding: "20px 12px", flex: 1 }}>
                    <p style={{
                        fontSize: 12, fontWeight: 700, letterSpacing: "0.15em",
                        textTransform: "uppercase", color: "rgba(230,184,92,0.5)",
                        marginBottom: 12, paddingLeft: 8,
                    }}>
                        Settings
                    </p>

                    {navItems.map(({ id, label, icon: Icon }) => {
                        const isActive  = view === id;
                        const isHovered = hoveredNav === id;
                        return (
                            <button
                                key={id}
                                onClick={() => setView(id)}
                                onMouseEnter={() => setHoveredNav(id)}
                                onMouseLeave={() => setHoveredNav(null)}
                                style={{
                                    display: "flex", alignItems: "center", gap: 10,
                                    width: "100%", textAlign: "left",
                                    padding: "10px 14px", borderRadius: 10,
                                    border: "none", cursor: "pointer",
                                    fontSize: 13,
                                    fontWeight: isActive ? 500 : 400,
                                    color: isActive
                                        ? "#f5f0ea"
                                        : isHovered ? "#f5f0ea" : "rgba(245,240,234,0.5)",
                                    background: isActive
                                        ? "rgba(230,184,92,0.12)"
                                        : isHovered ? "rgba(245,240,234,0.04)" : "transparent",
                                    boxShadow: isActive ? "0 0 16px rgba(230,184,92,0.08)" : "none",
                                    marginBottom: 2,
                                    transition: "all 0.2s ease",
                                    position: "relative",
                                }}
                            >
                                <Icon
                                    size={16}
                                    style={{
                                        color: isActive
                                            ? "#e6b85c"
                                            : isHovered ? "#f5f0ea" : "rgba(245,240,234,0.28)",
                                        flexShrink: 0,
                                        transform: isActive || isHovered ? "scale(1.05)" : "scale(1)",
                                        transition: "transform 0.2s ease, color 0.2s ease",
                                    }}
                                />
                                <span style={{ transition: "color 0.2s ease" }}>{label}</span>
                                {isActive && (
                                    <span style={{
                                        position: "absolute", right: 12,
                                        width: 5, height: 5, borderRadius: "50%",
                                        background: "#e6b85c",
                                        boxShadow: "0 0 6px #e6b85c",
                                        opacity: 0.85,
                                    }} />
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Footer — system name, same as Sidebar.js */}
                <div style={{
                    marginTop: "auto", padding: 16,
                    borderTop: "0.5px solid rgba(255,245,235,0.07)",
                }}>
                    <p style={{
                        fontSize: 11, fontWeight: 500,
                        color: "rgba(245,240,234,0.28)",
                        whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                        {system?.system_name || "System"}
                    </p>
                </div>
            </aside>

            {/* ── RIGHT SIDE: header + scrollable content ── */}
            <div
                className="flex flex-col flex-1 min-w-0 min-h-0"
                style={{ marginLeft: 256 }}
            >
                {/* ── HEADER — identical pattern to dashboard.js ── */}
                <header
                    style={{
                        position: "sticky", top: 0, zIndex: 40,
                        display: "flex", alignItems: "center", justifyContent: "space-between",
                        padding: "16px 24px",
                        background: isDark
                            ? "rgba(20,17,15,0.85)"
                            : "linear-gradient(to right, rgba(26,37,53,0.96) 0%, rgba(26,37,53,0.80) 25%, rgba(26,37,53,0.45) 55%, rgba(244,246,249,0.0) 100%)",
                        borderBottom: isDark
                            ? "0.5px solid rgba(255,245,235,0.07)"
                            : "1px solid rgba(26,37,53,0.15)",
                        backdropFilter: "blur(8px)",
                    }}
                >
                    {/* Left: current view label */}
                    <p style={{ fontSize: 13, fontWeight: 500, color: "rgba(245,235,220,0.9)" }}>
                        {navItems.find(n => n.id === view)?.label || "Settings"}
                    </p>

                    {/* Right: theme toggle + menu */}
                    <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                        <button
                            type="button"
                            onClick={toggleDark}
                            aria-label={isDark ? "Light mode" : "Dark mode"}
                            style={{
                                padding: 8, borderRadius: 8, border: "none",
                                background: "transparent",
                                color: isDark ? "rgba(245,240,234,0.6)" : "rgba(245,235,220,0.9)",
                                cursor: "pointer",
                            }}
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                            style={{
                                padding: 8, borderRadius: 8, border: "none",
                                background: "transparent",
                                color: isDark ? "rgba(245,240,234,0.6)" : "rgba(245,235,220,0.9)",
                                cursor: "pointer",
                            }}
                        >
                            {menuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </header>

                {/* ── DROPDOWN MENU — same as dashboard.js ── */}
                {menuOpen && (
                    <div style={{
                        position: "fixed", top: 64, right: 24, width: 224, zIndex: 50,
                        background: T.cardBg, border: T.cardBorder,
                        borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                        padding: "8px 0",
                    }}>
                        <p style={{ padding: "8px 16px", fontSize: 14, fontWeight: 600, color: T.text1 }}>
                            {user?.name || "Guest"}
                        </p>
                        <div style={{ borderTop: `0.5px solid ${T.border}` }} />
                        <Link
                            href="/dashboard"
                            style={{ display: "block", padding: "8px 16px", fontSize: 13, color: T.text2, textDecoration: "none" }}
                            onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                            onClick={() => setMenuOpen(false)}
                        >
                            Dashboard
                        </Link>
                        <Link
                            href="/contact"
                            style={{ display: "block", padding: "8px 16px", fontSize: 13, color: T.text2, textDecoration: "none" }}
                            onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact us
                        </Link>
                        <button
                            onClick={async () => {
                                try { await fetch("/api/logout", { method: "GET" }); window.location.href = "/?loggedout=true"; } catch {}
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = T.amberDim; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; }}
                            style={{
                                display: "block", width: "100%", textAlign: "left",
                                padding: "8px 16px", fontSize: 13, color: T.text2,
                                background: "transparent", border: "none", cursor: "pointer",
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                )}

                {/* ── SCROLLABLE MAIN CONTENT ── */}
                <main style={{
                    flex: 1, overflowY: "auto",
                    padding: "40px",
                    background: T.pageBg,
                }}>
                    <div style={{ maxWidth: 640, margin: "0 auto" }}>

                        {/* Toast notifications */}
                        {showMessage && (
                            <div style={{
                                background: "rgba(74,222,128,0.12)",
                                border: "1px solid rgba(74,222,128,0.3)",
                                color: T.green, padding: "10px 16px",
                                borderRadius: 8, marginBottom: 20, fontSize: 13,
                            }}>
                                ✓ Settings updated successfully.
                            </div>
                        )}
                        {showError && (
                            <div style={{
                                background: "rgba(239,68,68,0.10)",
                                border: "1px solid rgba(239,68,68,0.3)",
                                color: T.red, padding: "10px 16px",
                                borderRadius: 8, marginBottom: 20, fontSize: 13,
                            }}>
                                Failed to update. Please try again.
                            </div>
                        )}

                        {/* ── PROFILE VIEW ── */}
                        {view === "profile" && (
                            <div>
                                <p style={sectionHeader}>Profile</p>
                                <div style={{
                                    background: T.cardBg, border: T.cardBorder,
                                    boxShadow: T.cardShadow, borderRadius: T.cardRadius,
                                    padding: 24,
                                }}>
                                    {/* Avatar row */}
                                    <div style={{
                                        display: "flex", alignItems: "center", gap: 16,
                                        marginBottom: 24, paddingBottom: 20,
                                        borderBottom: `0.5px solid ${T.border}`,
                                    }}>
                                        <div style={{
                                            width: 56, height: 56, borderRadius: "50%",
                                            background: T.amberDim,
                                            border: `1px solid ${T.amber}`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            flexShrink: 0,
                                        }}>
                                            <span style={{ fontSize: 22, fontWeight: 300, color: T.amber }}>
                                                {initial}
                                            </span>
                                        </div>
                                        <div>
                                            <p style={{ fontSize: 16, fontWeight: 300, color: T.text1 }}>
                                                {user?.name || "—"}
                                            </p>
                                            <p style={{ fontSize: 13, color: T.text3, marginTop: 2 }}>
                                                {user?.email || "—"}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Read-only view */}
                                    {!editingProfile ? (
                                        <div>
                                            {[["Name", user?.name], ["Email", user?.email], ["Phone", user?.phone_number || "Not set"]].map(([lbl, val]) => (
                                                <div key={lbl} style={{
                                                    display: "flex", justifyContent: "space-between",
                                                    alignItems: "center", padding: "12px 0",
                                                    borderBottom: `0.5px solid ${T.border}`,
                                                }}>
                                                    <span style={{
                                                        fontSize: 13, color: T.text3,
                                                        textTransform: "uppercase", letterSpacing: "0.10em",
                                                    }}>
                                                        {lbl}
                                                    </span>
                                                    <span style={{ fontSize: 13, color: T.text1, fontWeight: 300 }}>
                                                        {val || "—"}
                                                    </span>
                                                </div>
                                            ))}
                                            <div style={{ marginTop: 20, display: "flex", justifyContent: "flex-end" }}>
                                                <button onClick={() => setEditingProfile(true)} style={saveBtn}>
                                                    Edit Profile
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        /* Edit form */
                                        <form onSubmit={handleProfileUpdate}>
                                            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
                                                {[
                                                    ["Name",  "text",  name,  setName],
                                                    ["Email", "email", email, setEmail],
                                                    ["Phone", "tel",   phone, setPhone],
                                                ].map(([lbl, type, val, setter]) => (
                                                    <div key={lbl}>
                                                        <label style={labelStyle}>{lbl}</label>
                                                        <input
                                                            type={type} value={val}
                                                            onChange={e => setter(e.target.value)}
                                                            style={inputStyle}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
                                                <button type="button" onClick={() => setEditingProfile(false)} style={cancelBtn}>
                                                    Cancel
                                                </button>
                                                <button type="submit" style={saveBtn}>Save</button>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* ── SECURITY VIEW ── */}
                        {view === "settings" && (
                            <div>
                                <p style={sectionHeader}>Security Preferences</p>
                                <div style={{
                                    background: T.cardBg, border: T.cardBorder,
                                    boxShadow: T.cardShadow, borderRadius: T.cardRadius,
                                    padding: 24,
                                }}>
                                    <p style={{ fontSize: 13, color: T.text3, marginBottom: 20 }}>
                                        Change your account password below.
                                    </p>
                                    <form onSubmit={handlePasswordChange}>
                                        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
                                            {[
                                                ["Current Password",     "password", currentPassword, setCurrentPassword],
                                                ["New Password",         "password", newPassword,     setNewPassword],
                                                ["Confirm New Password", "password", confirmPassword, setConfirmPassword],
                                            ].map(([lbl, type, val, setter]) => (
                                                <div key={lbl}>
                                                    <label style={labelStyle}>{lbl}</label>
                                                    <input
                                                        type={type} value={val}
                                                        onChange={e => setter(e.target.value)}
                                                        style={inputStyle}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <button type="submit" style={saveBtn}>Update Password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                        {/* ── SYSTEM VIEW ── */}
                        {view === "system" && (
                            <div>
                                <p style={sectionHeader}>PV System</p>
                                <div style={{
                                    background: T.cardBg, border: T.cardBorder,
                                    boxShadow: T.cardShadow, borderRadius: T.cardRadius,
                                    padding: 24,
                                }}>
                                    <p style={{ fontSize: 13, color: T.text3, marginBottom: 20 }}>
                                        Update your system configuration.
                                    </p>
                                    <form onSubmit={handleSystemUpdate}>
                                        <div style={{ marginBottom: 20 }}>
                                            <label style={labelStyle}>System Name</label>
                                            <input
                                                type="text" value={systemName}
                                                onChange={e => setSystemName(e.target.value)}
                                                style={inputStyle}
                                            />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <button type="submit" style={saveBtn}>Save</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}

                    </div>
                </main>
            </div>
        </div>
    );
}