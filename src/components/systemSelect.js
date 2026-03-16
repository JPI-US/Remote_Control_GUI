"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Moon } from "lucide-react";

const COLORS = {
    highlight: "#F3B664",
    accent: "#87a9c4",
    title: "#2F3E4D",
    backdrop: "#F2F2F2",
    surface: "#FFFFFF",
    text: "#6A7B8F",
    success: "#2A9D8F",
};

export default function SystemSelect() {
    const [systems, setSystems] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function fetchSystems() {
            try {
                const res = await fetch("/api/my-systems", { credentials: "include" });
                if (!res.ok) throw new Error("Failed to fetch systems");

                const data = await res.json();
                setSystems(data);

                if (data.length === 1) {
                    await selectSystem(data[0].id);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchSystems();
    }, []);

    async function selectSystem(systemId) {
        try {
            const res = await fetch("/api/select-system", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ systemId }),
            });

            if (!res.ok) throw new Error("Failed to select system");
            router.push("/dashboard");
        } catch (err) {
            console.error(err);
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
                <p className="text-[#6A7B8F]">Loading systems...</p>
            </div>
        );
    }

    if (systems.length === 0) {
        return (
            <div className="min-h-screen bg-[#F2F2F2] flex items-center justify-center">
                <p className="text-[#6A7B8F]">No systems available</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#F2F2F2]">
            {/* Header - Surface */}
            <header className="bg-[#FFFFFF] dark:bg-gray-800 shadow-sm border-b border-gray-400 dark:border-gray-600">
                <div className="flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
                    <img
                        src="/images/Janta%20Power%20Business%20Card%20Logo%202.svg"
                        alt="Janta Power"
                        className="h-16 w-auto min-w-[140px] min-h-[2.5rem] md:h-20 md:min-w-[180px] object-contain"
                    />
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            aria-label="Dark mode"
                            className="p-2 rounded-lg text-[#2F3E4D] dark:text-gray-200 hover:bg-[#F2F2F2] dark:hover:bg-gray-700 transition"
                        >
                            <Moon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Main content - Backdrop */}
            <main className="flex-1 p-4 md:p-6">
                <div className="flex flex-wrap gap-4">
                    {systems.map((system, index) => {
                        const capacityKw = system.max_pv_kw != null ? Number(system.max_pv_kw) : 0;
                        const currentOutputKw = 0; // Could be from telemetry API later
                        const percent = capacityKw > 0 ? Math.min(100, (currentOutputKw / capacityKw) * 100) : 0;

                        return (
                            <button
                                key={system.id}
                                type="button"
                                onClick={() => selectSystem(system.id)}
                                className="text-left w-full max-w-sm bg-[#FFFFFF] dark:bg-gray-800 rounded-xl shadow-md border border-gray-400 dark:border-gray-600 hover:shadow-lg transition-all duration-200 overflow-hidden flex p-0 cursor-pointer"
                            >
                                {/* Left accent bar - green */}
                                <span
                                    className="w-1.5 flex-shrink-0"
                                    style={{ backgroundColor: COLORS.success }}
                                />
                                <div className="flex-1 p-4 md:p-5">
                                    <h3 className="text-[#2F3E4D] font-bold text-lg mb-1">
                                        {system.system_name || "Unnamed System"}
                                    </h3>
                                    <div className="flex items-center gap-1.5 text-sm text-[#6A7B8F] mb-3">
                                        <MapPin className="w-4 h-4 flex-shrink-0" />
                                        <span>
                                            {system.latitude != null && system.longitude != null &&
                                             Number(system.latitude) !== 0 && Number(system.longitude) !== 0
                                                ? `${Number(system.latitude).toFixed(2)}°, ${Number(system.longitude).toFixed(2)}°`
                                                : "—"}
                                        </span>
                                    </div>
                                    <p className="text-xs text-[#6A7B8F] mb-1">Current Output</p>
                                    <p className="text-2xl font-bold text-[#2F3E4D] mb-3">
                                        {currentOutputKw.toFixed(1)} kW
                                    </p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex-1 h-2 bg-[#F2F2F2] rounded-full overflow-hidden">
                                            <div
                                                className="h-full rounded-full transition-all"
                                                style={{
                                                    width: `${percent}%`,
                                                    backgroundColor: percent > 0 ? COLORS.highlight : COLORS.text,
                                                }}
                                            />
                                        </div>
                                        <span className="text-xs text-[#6A7B8F] flex-shrink-0">
                                            {capacityKw.toFixed(1)} kW Capacity
                                        </span>
                                    </div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}
