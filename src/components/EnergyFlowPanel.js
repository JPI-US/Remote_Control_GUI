"use client";
import React, { useState, useEffect, useRef } from "react";
import { Power, RotateCcw, X, Home } from "lucide-react";
import TowerModelViewer from "@/components/TowerModelViewer";
import { DateTime } from "luxon";

// ── Compute firefly count based on local time ─────────────────────────────────
// Sunset hardcoded at 19:30. Ramps 25→52 from 19:30→00:00,
// then divides by 4 every 30 min after midnight until 0.
function getFireflyCount(timezone) {
    const now = DateTime.now().setZone(timezone || "America/Chicago");
    const h = now.hour;
    const m = now.minute;
    const totalMinutes = h * 60 + m;
    const SUNSET = 19 * 60 + 30; // 19:30

    // Post-midnight (0:00–~1:30 AM) — decrease from 52 by 4 every 30 min
    if (h < 12) {
        const decreaseIntervals = Math.floor(totalMinutes / 30);
        return Math.max(0, 52 - decreaseIntervals * 4);
    }

    // Daytime before sunset — no fireflies
    if (totalMinutes < SUNSET) return 0;

    // Sunset → midnight — ramp up 25→52
    const minutesSinceSunset = totalMinutes - SUNSET;
    const intervals = Math.floor(minutesSinceSunset / 30);
    return Math.min(52, 25 + intervals * 3);
}

// ── Full-panel 2D firefly canvas ──────────────────────────────────────────────
function FireflyCanvas({ count = 0 }) {
    const canvasRef  = useRef(null);
    const countRef   = useRef(count);
    countRef.current = count;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animId;
        let t = 0;

        function resize() {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        // Spawn a single firefly — 75% in outer thirds, 25% in middle third
        function spawnFly(w, h) {
            const inSides = Math.random() < 0.75;
            let x;
            if (inSides) {
                // Left third (0–33%) or right third (67–100%)
                x = Math.random() < 0.5
                    ? Math.random() * w * 0.33
                    : w * 0.67 + Math.random() * w * 0.33;
            } else {
                // Middle third (33–67%)
                x = w * 0.33 + Math.random() * w * 0.34;
            }
            return {
                x,
                y:          Math.random() * (h + 20) - 10,
                baseX:      x,
                vy:         -(Math.random() * 0.35 + 0.08),
                sineFreq:   Math.random() * 0.012 + 0.004,
                sineAmp:    Math.random() * 18 + 6,
                sineOffset: Math.random() * Math.PI * 2,
                pulseFreq:  Math.random() * 0.04 + 0.01,
                pulseOff:   Math.random() * Math.PI * 2,
                radius:     Math.random() * 1.8 + 0.5,
                baseAlpha:  Math.random() * 0.55 + 0.2,
            };
        }

        // Start with current count
        const flies = [];
        const w = canvas.width  || 800;
        const h = canvas.height || 420;
        for (let i = 0; i < countRef.current; i++) {
            flies.push(spawnFly(w, h));
        }

        function draw() {
            animId = requestAnimationFrame(draw);
            t += 0.016;

            const cw = canvas.width;
            const ch = canvas.height;

            // Gradually add/remove flies to match countRef
            if (flies.length < countRef.current) {
                flies.push(spawnFly(cw, ch));
            } else if (flies.length > countRef.current) {
                flies.pop();
            }

            ctx.clearRect(0, 0, cw, ch);

            for (const f of flies) {
                f.y += f.vy;
                f.x = f.baseX + Math.sin(t * f.sineFreq + f.sineOffset) * f.sineAmp;

                // Wrap at top
                if (f.y < -10) {
                    f.y     = ch + 5;
                    const newFly = spawnFly(cw, ch);
                    f.baseX = newFly.baseX;
                    f.x     = f.baseX;
                }

                const alpha = f.baseAlpha *
                    (0.5 + 0.5 * Math.sin(t * f.pulseFreq + f.pulseOff));

                // Soft glow halo
                const glow = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 7);
                glow.addColorStop(0,   `rgba(255,215,80,${alpha})`);
                glow.addColorStop(0.3, `rgba(212,168,83,${alpha * 0.7})`);
                glow.addColorStop(0.7, `rgba(212,168,83,${alpha * 0.15})`);
                glow.addColorStop(1,   "rgba(0,0,0,0)");
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.radius * 7, 0, Math.PI * 2);
                ctx.fillStyle = glow;
                ctx.fill();

                // Bright core dot
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,230,120,${Math.min(1, alpha * 1.4)})`;
                ctx.fill();
            }
        }
        draw();

        return () => {
            cancelAnimationFrame(animId);
            ro.disconnect();
        };
    }, []);

    if (count === 0) return null;

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                pointerEvents: "none", zIndex: 1,
            }}
        />
    );
}

const DK = {
    bg:       "#14110f",
    surface:  "#1c1814",
    surface2: "#221e19",
    border:   "rgba(255,245,235,0.07)",
    border2:  "rgba(255,245,235,0.12)",
    text1:    "#f5f0ea",
    text2:    "rgba(245,240,234,0.5)",
    text3:    "rgba(245,240,234,0.28)",
    amber:    "#e6b85c",
    amberDim: "rgba(230,184,92,0.14)",
    green:    "rgba(74,222,128,0.75)",
    red:      "#ef4444",
    warmGray: "#a8a29e",
    earth:    "#8b7355",
};

// ── Shared viewBox dimensions ─────────────────────────────────────────────────
// All SVG lines AND HTML node positions are derived from these.
// HTML: left = (nodeX / VW) * 100%,  top = (nodeY / VH) * 100%
// SVG:  preserveAspectRatio="none" so SVG stretches to fill container exactly
const VW = 520;
const VH = 400;

// Node CENTER positions in the shared coordinate space
const NODES = {
    sun:     { x: 260, y: 48  },
    tower:   { x: 260, y: 200 },
    grid:    { x: 448, y: 128 },
    house:   { x: 418, y: 336 },
    battery: { x: 68,  y: 300 },
};

// Convert VW/VH coords to CSS percentage strings
const px = (x) => `${(x / VW) * 100}%`;
const py = (y) => `${(y / VH) * 100}%`;

// ── Node icon SVGs ────────────────────────────────────────────────────────────

function SunIcon({ active, size = 56 }) {
    const c = active ? DK.amber : "rgba(255,255,255,0.18)";
    const cx = size / 2, cy = size / 2;
    const rc = size * 0.21, r1 = size * 0.33, r2 = size * 0.45;
    return (
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            <circle cx={cx} cy={cy} r={rc} fill={c} opacity={active ? 0.92 : 0.35} />
            {[0, 45, 90, 135, 180, 225, 270, 315].map(a => {
                const r = (a * Math.PI) / 180;
                return <line key={a}
                    x1={cx + Math.cos(r) * r1} y1={cy + Math.sin(r) * r1}
                    x2={cx + Math.cos(r) * r2} y2={cy + Math.sin(r) * r2}
                    stroke={c} strokeWidth={size * 0.055} strokeLinecap="round"
                    opacity={active ? 0.72 : 0.28} />;
            })}
        </svg>
    );
}

function GridIcon({ active, importing, size = 52 }) {
    const c = active ? (importing ? DK.orange : DK.teal) : "rgba(255,255,255,0.18)";
    return (
        <svg width={size} height={size * 1.15} viewBox="0 0 52 60">
            <line x1="26" y1="2"  x2="26" y2="50" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
            <line x1="6"  y1="14" x2="46" y2="14" stroke={c} strokeWidth="2.2" />
            <line x1="11" y1="26" x2="41" y2="26" stroke={c} strokeWidth="1.6" opacity="0.7" />
            <line x1="6"  y1="14" x2="26" y2="2"  stroke={c} strokeWidth="1.4" opacity="0.55" />
            <line x1="46" y1="14" x2="26" y2="2"  stroke={c} strokeWidth="1.4" opacity="0.55" />
            <path d="M2 14 Q0 22 2 32"  fill="none" stroke={c} strokeWidth="1.1" opacity="0.45" />
            <path d="M50 14 Q52 22 50 32" fill="none" stroke={c} strokeWidth="1.1" opacity="0.45" />
            <rect x="21" y="50" width="10" height="7" rx="2" fill={c} opacity="0.45" />
        </svg>
    );
}

function HouseIcon({ active, size = 58 }) {
    const c = active ? DK.purple : "rgba(255,255,255,0.18)";
    return (
        <svg width={size} height={size} viewBox="0 0 58 58">
            <polygon points="29,2 56,23 49,23 49,54 9,54 9,23 2,23"
                fill={active ? "rgba(167,139,250,0.07)" : "rgba(255,255,255,0.03)"}
                stroke={c} strokeWidth="1.8" strokeLinejoin="round" />
            <rect x="23" y="38" width="12" height="16" rx="2"
                fill={active ? "rgba(167,139,250,0.14)" : "rgba(255,255,255,0.04)"} />
            <rect x="12" y="29" width="11" height="9" rx="2"
                fill={active ? "rgba(167,139,250,0.18)" : "rgba(255,255,255,0.05)"} />
            <rect x="35" y="29" width="11" height="9" rx="2"
                fill={active ? "rgba(167,139,250,0.18)" : "rgba(255,255,255,0.05)"} />
            <polygon points="34,20 27,32 31,32 24,44 33,29 28,29"
                fill={c} opacity={active ? 0.88 : 0.38} />
        </svg>
    );
}

function BatteryIcon({ soc, active, size = 52 }) {
    const c = active ? DK.green : "rgba(255,255,255,0.18)";
    const pct = Math.max(0, Math.min(100, soc ?? 0));
    const maxH = 34, fillH = Math.max(3, (pct / 100) * maxH);
    return (
        <svg width={size * 0.62} height={size} viewBox="0 0 36 60">
            <rect x="11" y="0" width="14" height="6" rx="3" fill={c} opacity="0.5" />
            <rect x="1" y="6" width="34" height="50" rx="6"
                fill={active ? "rgba(74,222,128,0.06)" : "rgba(255,255,255,0.03)"}
                stroke={c} strokeWidth="1.4" />
            <rect x="5" y={6 + 5 + (maxH - fillH)} width="26" height={fillH}
                rx="3" fill={c} opacity="0.5" />
            <text x="18" y="46" textAnchor="middle" fontSize="9.5"
                fontFamily="monospace" fill={c} fontWeight="700">{pct}%</text>
        </svg>
    );
}

function TowerSVGFallback() {
    return (
        <svg width="96" height="96" viewBox="0 0 96 96">
            <rect x="13" y="12" width="70" height="44" rx="6"
                fill="#1e3a5f" stroke={DK.amber} strokeWidth="1.4" opacity="0.85" />
            <line x1="13" y1="26" x2="83" y2="26" stroke={DK.amber} strokeWidth="0.7" opacity="0.4" />
            <line x1="13" y1="40" x2="83" y2="40" stroke={DK.amber} strokeWidth="0.7" opacity="0.4" />
            <line x1="36" y1="12" x2="36" y2="56" stroke={DK.amber} strokeWidth="0.7" opacity="0.4" />
            <line x1="60" y1="12" x2="60" y2="56" stroke={DK.amber} strokeWidth="0.7" opacity="0.4" />
            <rect x="44" y="56" width="8" height="26" rx="2" fill={DK.text3} />
            <rect x="32" y="80" width="32" height="6" rx="3" fill={DK.text3} opacity="0.6" />
        </svg>
    );
}

// ── Node wrapper: centered at (x,y) in the VW×VH space ───────────────────────
function Node({ x, y, children }) {
    return (
        <div style={{
            position: "absolute",
            left: px(x), top: py(y),
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5,
            pointerEvents: "none",
        }}>
            {children}
        </div>
    );
}

// ── Small stat label under each node ─────────────────────────────────────────
function NodeLabel({ value, unit, label, sub, color }) {
    return (
        <div style={{ textAlign: "center", lineHeight: 1 }}>
            <div style={{ display: "flex", alignItems: "baseline",
                justifyContent: "center", gap: 3 }}>
                <span style={{ fontSize: 22, fontWeight: 200, color,
                    letterSpacing: "-0.02em" }}>{value}</span>
                <span style={{ fontSize: 11, color: DK.text2 }}>{unit}</span>
            </div>
            {sub && <p style={{ fontSize: 10, color: DK.text3, marginTop: 3,
                letterSpacing: "0.05em" }}>{sub}</p>}
            {label && <p style={{ fontSize: 10, color: DK.text3, marginTop: 2,
                letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</p>}
        </div>
    );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function EnergyFlowPanel({
    pvPower = 0, gridPower = 0, gridImport = false, loadPower = 0,
    battSoc = null, hasBattery = false, battChargePower = null,
    todaysProduction = null, maxHourlyPower = 0,
    towerCount = 1, selectedTowerIndex = 0, onTowerSelect,
    towerRotationDeg = 0, orientationAngleNum = "—",
    canAccessControlPanel = false,
    autonomousMode, setAutonomousMode, maintenanceMode, setMaintenanceMode,
    controlActions = [],
    isDark = true,
    systemTimezone = "America/Chicago",
    isCommercial = false,
}) {
    const [towerError, setTowerError] = useState(false);

    // Firefly count — recalculated every minute based on time of day
    const [fireflyCount, setFireflyCount] = useState(() => getFireflyCount(systemTimezone));
    useEffect(() => {
        if (!isDark) return;
        const tick = () => setFireflyCount(getFireflyCount(systemTimezone));
        tick();
        const id = setInterval(tick, 60_000); // recheck every minute
        return () => clearInterval(id);
    }, [isDark, systemTimezone]);

    // ── Tower personality message (commercial users only) ─────────────────────
    const towerMessage = (() => {
        if (!isCommercial) return null;
        const angle    = parseFloat(orientationAngleNum);
        const atHome   = !isNaN(angle) && Math.abs(angle - 90) < 3;
        const h        = new Date().getHours();
        const isNight  = h >= 20 || h < 6;
        const isMorning = h >= 6 && h < 9;
        const isPeak   = h >= 10 && h < 15;

        if (maintenanceMode)              return "Taking a little break 🔧";
        if (atHome && isNight)            return "Sleeping soundly... enjoy the fireflies ✨";
        if (atHome && !isNight)           return "Resting at home position 🏠";
        if (isMorning && pvPower > 50)    return "Good morning! Time to work 🌅";
        if (isPeak && pvPower > 500)      return "Working hard today! ⚡";
        if (pvPower > 50 && pvPower <= 500) return "Chasing every ray I can ☁️";
        if (pvPower > 0)                  return "Chasing the sun ☀️";
        if (isNight && !atHome)           return "Almost home... 🌙";
        if (!isNight && pvPower === 0)    return "Waiting for the sun to come out 🌤️";
        return "Here and ready ✨";
    })();

    const pvKw   = (pvPower   / 1000).toFixed(2);
    const gridKw = (gridPower / 1000).toFixed(2);
    const loadKw = (loadPower / 1000).toFixed(2);

    const solarActive  = pvPower   > 50;
    const gridActive   = gridPower > 50;
    const loadActive   = loadPower > 50;
    const battActive   = hasBattery && battChargePower !== null && Math.abs(battChargePower) > 50;
    const battCharging = (battChargePower ?? 0) > 0;
    const gridColor    = gridImport ? DK.orange : DK.teal;

    // Grid/house icon offset from node center (icon is top, label is bottom)
    const TOWER_HALF = 100; // SVG coord units — approx (290px / ~750px container) * 520

    const statsRows = [
        { label: "Solar",  value: pvKw,   unit: "kW",
          sub: `${(todaysProduction ?? 0).toFixed(1)} kWh today`,
          color: solarActive ? DK.amber  : DK.text3 },
        { label: gridImport ? "Importing" : "Exporting",
          value: gridKw, unit: "kW", sub: "Grid",
          color: gridActive ? gridColor : DK.text3 },
        { label: "Load",   value: loadKw, unit: "kW", sub: "Consumption",
          color: loadActive ? DK.purple : DK.text3 },
        { label: "Peak",   value: `${maxHourlyPower}`, unit: "kW",
          sub: "Today's max", color: DK.text2 },
        ...(hasBattery ? [{
            label: "Battery", value: `${battSoc ?? 0}`, unit: "%",
            sub: battActive ? (battCharging ? "Charging" : "Discharging") : "Standby",
            color: DK.green,
        }] : []),
    ];

    return (
        <div className="rounded-xl overflow-hidden mb-6"
            style={{ background: DK.surface, border: `0.5px solid ${DK.border}` }}>

            {/* ── Header ─────────────────────────────────────────────────── */}
            <div className="flex items-center justify-between px-5 py-3"
                style={{ borderBottom: `0.5px solid ${DK.border}` }}>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em",
                    textTransform: "uppercase", color: DK.text3 }}>
                    Energy Flow
                </span>
                <div className="flex items-center gap-4">
                    {towerCount > 1 && (
                        <div className="flex items-center gap-1">
                            {Array.from({ length: towerCount }, (_, i) => (
                                <button key={i} type="button"
                                    onClick={() => onTowerSelect?.(i)}
                                    style={{
                                        fontSize: 11, fontWeight: 500,
                                        padding: "3px 10px", borderRadius: 4,
                                        cursor: "pointer", transition: "all 0.15s",
                                        background: selectedTowerIndex === i
                                            ? DK.amber : "transparent",
                                        color: selectedTowerIndex === i ? "#000" : DK.text2,
                                        borderTop: `0.5px solid ${selectedTowerIndex === i ? DK.amber : DK.border}`,
                                        borderRight: `0.5px solid ${selectedTowerIndex === i ? DK.amber : DK.border}`,
                                        borderBottom: `0.5px solid ${selectedTowerIndex === i ? DK.amber : DK.border}`,
                                        borderLeft: `0.5px solid ${selectedTowerIndex === i ? DK.amber : DK.border}`,
                                    }}>
                                    Tower {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                    <span style={{ fontSize: 22, fontWeight: 200, color: DK.text1,
                        letterSpacing: "-0.02em" }}>
                        {orientationAngleNum}
                        <span style={{ fontSize: 13, fontWeight: 300, color: DK.text2 }}>°</span>
                    </span>
                </div>
            </div>

            {/* ── Body ───────────────────────────────────────────────────── */}
            <div style={{ display: "flex" }}>

                {/* LEFT: Diagram — fixed aspect ratio so nodes always align */}
                <div style={{
                    flex: "0 0 65%",
                    position: "relative",
                    aspectRatio: `${VW} / ${VH}`,
                    background: DK.bg,
                    overflow: "hidden",
                }}>
                    {/* Fireflies — full panel background, dark mode only */}
                    {isDark && <FireflyCanvas count={fireflyCount} />}
                    {/* ── SVG lines overlay ──────────────────────────────── */}
                    {/* preserveAspectRatio="none" makes SVG stretch to fill
                        the container exactly, so VW/VH coords match HTML % positions */}
                    <svg
                        viewBox={`0 0 ${VW} ${VH}`}
                        preserveAspectRatio="none"
                        style={{ position: "absolute", inset: 0,
                            width: "100%", height: "100%",
                            pointerEvents: "none", zIndex: 2 }}>
                        <defs>
                            {[
                                ["amb", DK.amber ],
                                ["org", DK.orange],
                                ["tel", DK.teal  ],
                                ["pur", DK.purple],
                                ["grn", DK.green ],
                            ].map(([id, color]) => (
                                <marker key={id} id={`ef-${id}`}
                                    viewBox="0 0 10 10" refX="8" refY="5"
                                    markerWidth="5" markerHeight="5" orient="auto">
                                    <path d="M2 1L8 5L2 9" fill="none"
                                        stroke={color} strokeWidth="2.2"
                                        strokeLinecap="round" />
                                </marker>
                            ))}
                        </defs>

                        {/* Ghost traces — always present, faint */}
                        <line x1={NODES.sun.x}     y1={NODES.sun.y + 28}
                              x2={NODES.tower.x}   y2={NODES.tower.y - TOWER_HALF}
                              stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" strokeDasharray="5 5" />
                        <line x1={NODES.tower.x + TOWER_HALF} y1={NODES.tower.y - 14}
                              x2={NODES.grid.x - 28}           y2={NODES.grid.y + 10}
                              stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" strokeDasharray="5 5" />
                        <line x1={NODES.tower.x + TOWER_HALF} y1={NODES.tower.y + 20}
                              x2={NODES.house.x - 30}          y2={NODES.house.y - 22}
                              stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" strokeDasharray="5 5" />
                        {hasBattery && (
                            <line x1={NODES.battery.x + 22} y1={NODES.battery.y - 14}
                                  x2={NODES.tower.x - TOWER_HALF} y2={NODES.tower.y + 22}
                                  stroke="rgba(255,255,255,0.05)" strokeWidth="1.2" strokeDasharray="5 5" />
                        )}

                        {/* Active: Sun → Tower */}
                        {solarActive && (
                            <line x1={NODES.sun.x}   y1={NODES.sun.y + 26}
                                  x2={NODES.tower.x} y2={NODES.tower.y - TOWER_HALF + 2}
                                  stroke={DK.amber} strokeWidth="2.2"
                                  strokeDasharray="9 5" strokeLinecap="round"
                                  markerEnd="url(#ef-amb)" />
                        )}

                        {/* Active: Tower ↔ Grid */}
                        {gridActive && gridImport && (
                            <line x1={NODES.grid.x - 26}          y1={NODES.grid.y + 8}
                                  x2={NODES.tower.x + TOWER_HALF} y2={NODES.tower.y - 12}
                                  stroke={DK.orange} strokeWidth="2.2"
                                  strokeDasharray="9 5" strokeLinecap="round"
                                  markerEnd="url(#ef-org)" />
                        )}
                        {gridActive && !gridImport && (
                            <line x1={NODES.tower.x + TOWER_HALF} y1={NODES.tower.y - 12}
                                  x2={NODES.grid.x - 26}          y2={NODES.grid.y + 8}
                                  stroke={DK.teal} strokeWidth="2.2"
                                  strokeDasharray="9 5" strokeLinecap="round"
                                  markerEnd="url(#ef-tel)" />
                        )}

                        {/* Active: Tower → House */}
                        {loadActive && (
                            <line x1={NODES.tower.x + TOWER_HALF} y1={NODES.tower.y + 18}
                                  x2={NODES.house.x - 28}         y2={NODES.house.y - 20}
                                  stroke={DK.purple} strokeWidth="2.2"
                                  strokeDasharray="9 5" strokeLinecap="round"
                                  markerEnd="url(#ef-pur)" />
                        )}

                        {/* Active: Battery ↔ Tower */}
                        {battActive && battCharging && (
                            <line x1={NODES.battery.x + 20} y1={NODES.battery.y - 12}
                                  x2={NODES.tower.x - TOWER_HALF} y2={NODES.tower.y + 20}
                                  stroke={DK.green} strokeWidth="2"
                                  strokeDasharray="7 5" strokeLinecap="round"
                                  markerEnd="url(#ef-grn)" />
                        )}
                        {battActive && !battCharging && (
                            <line x1={NODES.tower.x - TOWER_HALF} y1={NODES.tower.y + 20}
                                  x2={NODES.battery.x + 20}      y2={NODES.battery.y - 12}
                                  stroke={DK.green} strokeWidth="2"
                                  strokeDasharray="7 5" strokeLinecap="round"
                                  markerEnd="url(#ef-grn)" />
                        )}
                    </svg>

                    {/* ── HTML Nodes — positioned as % of VW×VH ────────── */}

                    {/* Sun */}
                    <Node x={NODES.sun.x} y={NODES.sun.y}>
                        <SunIcon active={solarActive} size={72} />
                        <NodeLabel value={pvKw} unit="kW" label="Solar"
                            sub={`Today ${(todaysProduction ?? 0).toFixed(1)} kWh`}
                            color={solarActive ? DK.amber : DK.text3} />
                    </Node>

                    {/* Tower halo — soft ambient glow behind the 3D model */}
                    <div style={{
                        position: "absolute",
                        left: px(NODES.tower.x),
                        top:  py(NODES.tower.y),
                        transform: "translate(-50%, -50%)",
                        width: 320, height: 320,
                        borderRadius: "50%",
                        background: "radial-gradient(circle, rgba(212,168,83,0.12) 0%, rgba(212,168,83,0.05) 40%, transparent 70%)",
                        pointerEvents: "none",
                        zIndex: 2,
                    }} />

                    {/* Tower — 3D or SVG fallback */}
                    <Node x={NODES.tower.x} y={NODES.tower.y}>
                        {!towerError ? (
                            <TowerModelViewer
                                angleDeg={towerRotationDeg}
                                bgColor={DK.bg}
                                width={290} height={290}
                                onError={() => setTowerError(true)}
                                style={{ borderRadius: 8,
                                    boxShadow: `0 0 0 0.5px ${DK.border}` }} />
                        ) : (
                            <div style={{
                                width: 290, height: 290,
                                display: "flex", alignItems: "center",
                                justifyContent: "center",
                                background: DK.bg, borderRadius: 8,
                                boxShadow: `0 0 0 0.5px ${DK.border}`,
                            }}>
                                <TowerSVGFallback />
                            </div>
                        )}
                        {/* Tower personality whisper — commercial only */}
                        {towerMessage && (
                            <p style={{
                                fontFamily: "'Caveat', cursive",
                                fontSize: 15,
                                fontStyle: "italic",
                                fontWeight: 400,
                                color: DK.text1,
                                opacity: 0.62,
                                letterSpacing: "0.01em",
                                textAlign: "center",
                                marginTop: 6,
                                pointerEvents: "none",
                                whiteSpace: "nowrap",
                                textShadow: "0 1px 8px rgba(0,0,0,0.4)",
                            }}>
                                {towerMessage}
                            </p>
                        )}
                    </Node>

                    {/* Grid */}
                    <Node x={NODES.grid.x} y={NODES.grid.y}>
                        <GridIcon active={gridActive} importing={gridImport} size={66} />
                        <NodeLabel value={gridKw} unit="kW"
                            label={gridImport ? "Importing" : "Exporting"}
                            color={gridActive ? gridColor : DK.text3} />
                    </Node>

                    {/* House */}
                    <Node x={NODES.house.x} y={NODES.house.y}>
                        <HouseIcon active={loadActive} size={72} />
                        <NodeLabel value={loadKw} unit="kW" label="Consumption"
                            color={loadActive ? DK.purple : DK.text3} />
                    </Node>

                    {/* Battery */}
                    {hasBattery && (
                        <Node x={NODES.battery.x} y={NODES.battery.y}>
                            <BatteryIcon soc={battSoc} active={battActive} size={64} />
                            <NodeLabel
                                value={`${battSoc ?? 0}`} unit="%"
                                label={battActive
                                    ? (battCharging ? "Charging" : "Discharging")
                                    : "Standby"}
                                color={DK.green} />
                        </Node>
                    )}
                </div>

                {/* RIGHT: Controls or Stats ──────────────────────────────── */}
                <div style={{
                    flex: "0 0 35%",
                    borderLeft: `0.5px solid ${DK.border}`,
                    display: "flex", flexDirection: "column",
                    background: DK.surface,
                }}>
                    {isCommercial ? (
                        /* Commercial: status timeline with active state highlighted */
                        <>
                            <div style={{ padding: "14px 20px",
                                borderBottom: `0.5px solid ${DK.border}` }}>
                                <p style={{ fontSize: 11, fontWeight: 500,
                                    color: DK.text1 }}>Tower Status</p>
                            </div>
                            <div style={{ padding: "8px 0", overflowY: "auto" }}>
                                {[
                                    { msg: "Sleeping soundly... enjoy the fireflies ✨",
                                      active: (() => { const h = new Date().getHours(); const a = parseFloat(orientationAngleNum); return (h >= 20 || h < 6) && !isNaN(a) && Math.abs(a - 90) < 3; })() },
                                    { msg: "Almost home... 🌙",
                                      active: (() => { const h = new Date().getHours(); const a = parseFloat(orientationAngleNum); return (h >= 20 || h < 6) && !isNaN(a) && Math.abs(a - 90) >= 3; })() },
                                    { msg: "Waiting for the sun to come out 🌤️",
                                      active: (() => { const h = new Date().getHours(); return h >= 6 && h < 10 && pvPower <= 50; })() },
                                    { msg: "Good morning! Time to work 🌅",
                                      active: (() => { const h = new Date().getHours(); return h >= 6 && h < 9 && pvPower > 50; })() },
                                    { msg: "Chasing the sun ☀️",
                                      active: pvPower > 50 && pvPower <= 500 && (() => { const h = new Date().getHours(); return h >= 9 && h < 10; })() },
                                    { msg: "Working hard today! ⚡",
                                      active: (() => { const h = new Date().getHours(); return h >= 10 && h < 15 && pvPower > 500; })() },
                                    { msg: "Chasing every ray I can ☁️",
                                      active: pvPower > 50 && pvPower <= 500 && (() => { const h = new Date().getHours(); return h >= 10 && h < 15; })() },
                                    { msg: "Resting at home position 🏠",
                                      active: (() => { const h = new Date().getHours(); const a = parseFloat(orientationAngleNum); return h >= 6 && h < 20 && !isNaN(a) && Math.abs(a - 90) < 3 && pvPower <= 50; })() },
                                    { msg: "Taking a little break 🔧",
                                      active: !!maintenanceMode },
                                ].map(({ msg, active }, i) => (
                                    <div key={i} style={{
                                        padding: "11px 20px",
                                        borderBottom: `0.5px solid ${DK.border}`,
                                        display: "flex", alignItems: "center", gap: 10,
                                        background: active ? DK.amberDim : "transparent",
                                        transition: "background 0.3s",
                                    }}>
                                        {/* Active indicator */}
                                        <span style={{
                                            width: 5, height: 5,
                                            borderRadius: "50%", flexShrink: 0,
                                            background: active ? DK.amber : "transparent",
                                            boxShadow: active ? `0 0 6px ${DK.amber}` : "none",
                                            border: active ? "none" : `1px solid ${DK.border2}`,
                                            transition: "all 0.3s",
                                        }} />
                                        <p style={{
                                            fontFamily: "'Caveat', cursive",
                                            fontSize: 15,
                                            fontStyle: "italic",
                                            color: active ? DK.amber : DK.text3,
                                            fontWeight: active ? 500 : 400,
                                            transition: "color 0.3s",
                                            lineHeight: 1.3,
                                        }}>{msg}</p>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : canAccessControlPanel ? (
                        /* Admin: control panel buttons */
                        <>
                            <div style={{ padding: "14px 20px",
                                borderBottom: `0.5px solid ${DK.border}` }}>
                                <p style={{ fontSize: 11, fontWeight: 500,
                                    color: DK.text1 }}>Control Panel</p>
                            </div>
                            {controlActions.map((action, i) => (
                                <button key={action.id} type="button"
                                    className="w-full text-left flex items-center cursor-pointer"
                                    style={{
                                        padding: "15px 20px",
                                        background: "transparent",
                                        borderTop: i > 0
                                            ? `0.5px solid ${DK.border}` : "none",
                                        borderRight: "none",
                                        borderBottom: "none",
                                        borderLeft: "none",
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.background =
                                            "rgba(255,255,255,0.025)";
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.background = "transparent";
                                    }}>
                                    <action.Icon style={{
                                        width: 15, height: 15,
                                        marginRight: 14, flexShrink: 0,
                                        color: action.id === "stop"
                                            ? DK.red : DK.text3,
                                    }} />
                                    <div>
                                        <p style={{ fontSize: 13, color: DK.text1,
                                            lineHeight: 1.3 }}>{action.label}</p>
                                        <p style={{ fontSize: 10, color: DK.text3,
                                            marginTop: 2 }}>{action.description}</p>
                                    </div>
                                </button>
                            ))}
                        </>
                    ) : (
                        /* Neither commercial nor admin: system status stats */
                        <>
                            <div style={{ padding: "14px 20px",
                                borderBottom: `0.5px solid ${DK.border}` }}>
                                <p style={{ fontSize: 11, fontWeight: 500,
                                    color: DK.text1 }}>System Status</p>
                            </div>
                            {statsRows.map((row, i) => (
                                <div key={row.label} style={{
                                    padding: "14px 20px",
                                    borderBottom: i < statsRows.length - 1
                                        ? `0.5px solid ${DK.border}` : "none",
                                }}>
                                    <p style={{ fontSize: 10, color: DK.text3,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.10em", marginBottom: 5 }}>
                                        {row.label}
                                    </p>
                                    <div style={{ display: "flex",
                                        alignItems: "baseline", gap: 4 }}>
                                        <span style={{ fontSize: 20,
                                            fontWeight: 200, color: row.color,
                                            lineHeight: 1,
                                            letterSpacing: "-0.01em" }}>
                                            {row.value}
                                        </span>
                                        <span style={{ fontSize: 10,
                                            color: DK.text2 }}>{row.unit}</span>
                                    </div>
                                    <p style={{ fontSize: 10, color: DK.text3,
                                        marginTop: 3 }}>{row.sub}</p>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>

            {/* ── Bottom bar ─────────────────────────────────────────────── */}
            <div className="flex items-center gap-8 flex-wrap"
                style={{
                    padding: "12px 20px",
                    borderTop: `0.5px solid ${DK.border}`,
                    background: DK.surface,
                }}>
                {[
                    { label: "Autonomous",  sub: "Default",
                      active: autonomousMode,
                      onClick: () => { setAutonomousMode(true); setMaintenanceMode(false); },
                      activeColor: DK.green },
                    { label: "Maintenance", sub: "Requires confirmation",
                      active: maintenanceMode,
                      onClick: () => setMaintenanceMode(prev => !prev),
                      activeColor: DK.red },
                ].map(({ label, sub, active, onClick, activeColor }) => (
                    <div key={label} className="flex items-center gap-3">
                        <button type="button" onClick={onClick}
                            style={{
                                position: "relative",
                                width: 40, height: 22, borderRadius: 11,
                                background: active
                                    ? activeColor : "rgba(255,255,255,0.10)",
                                transition: "background 0.2s",
                                border: "none", cursor: "pointer", flexShrink: 0,
                            }}>
                            <span style={{
                                position: "absolute", top: 2,
                                left: active ? 20 : 2,
                                width: 18, height: 18, borderRadius: "50%",
                                background: "#fff",
                                transition: "left 0.2s",
                                boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                            }} />
                        </button>
                        <div>
                            <p style={{ fontSize: 12, fontWeight: 500,
                                color: DK.text1 }}>{label}</p>
                            <p style={{ fontSize: 10, color: DK.text3 }}>{sub}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}