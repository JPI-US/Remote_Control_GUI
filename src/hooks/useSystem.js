import { useEffect, useState } from "react";

export function useSystem() {
    const [system, setSystem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSystem() {
            try {
                const res = await fetch("/api/system", {
                    credentials: "include",
                    cache: "no-store",
                });

                if (!res.ok) {
                    setSystem(null);
                    return;
                }

                const data = await res.json();
                setSystem(data);
            } catch (err) {
                console.error("Failed to fetch system", err);
                setSystem(null);
            } finally {
                setLoading(false);
            }
        }

        fetchSystem();
    }, []);
    return { system, loading };
}