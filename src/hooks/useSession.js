import { useState, useEffect } from "react";

export function useSession() {
    const [session, setSession] = useState(null); // contains userId, role, planTier, activeSystemId
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchSession() {
            try {
                // Get session from JWT
                const sessionRes = await fetch("/api/session", { credentials: "include" });
                if (!sessionRes.ok) {
                    setSession(null);
                    setUser(null);
                    return;
                }

                const session = await sessionRes.json();
                setSession(session); // Fetched session

                //Fetch user info from your existing API
                const userRes = await fetch(`/api/user`, { credentials: "include" });
                if (!userRes.ok) {
                    setUser(null);
                    return;
                }

                const userData = await userRes.json();
                setUser(userData);
            } catch (err) {
                console.error("Failed to fetch user or session: ", err);
                setSession(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        fetchSession();
    }, []);

    return { session, user, loading };
}
