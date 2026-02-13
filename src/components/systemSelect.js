"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function SystemSelect(){
    const [systems, setSystems] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    // Fetch user systems
    useEffect(() => {
        async function fetchSystems() {
            try {
                const res = await fetch("/api/my-systems", { credentials: "include" });
                if (!res.ok) throw new Error("Failed to fetch systems");

                const data = await res.json();
                setSystems(data);

                // Auto-select if only 1 system
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

    // Call select-system API
    async function selectSystem(systemId) {
        try {
            const res = await fetch("/api/select-system", {
                method: "POST",
                credentials: "include",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ systemId }),
            });

            console.log(`Select systems reponse: ${res}`);
            if (!res.ok) throw new Error("Failed to select system");

            // Redirect to dashboard after selection
            router.push("/dashboard");
        } catch (err) {
            console.error(err);
        }
    }

    if (loading) return <p>Loading systems...</p>;
    if (systems.length === 0) return <p>No systems available</p>;

    return(
        <div
            className="system-select-container"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
            {systems.map((system) => (
                <div
                    key={system.id}
                    className="system-card"
                    style={{
                        border: "1px solid #ccc",
                        borderRadius: "8px",
                        padding: "1rem",
                        width: "200px",
                        cursor: "pointer",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        transition: "transform 0.1s",
                    }}
                    onClick={() => selectSystem(system.id)}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <h3>{system.system_name}</h3>
                </div>
            ))}
        </div>
    );
}
