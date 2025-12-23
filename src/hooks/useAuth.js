import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';

export function useAuth(){
    const router = useRouter(); 
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUser() {
            try {
                // Call backend endpoint that reads HttpOnly cookie
                const res = await fetch("/api/session", {
                    method: "GET",
                    credentials: "include", // send HttpOnly cookie
                });

                if (!res.ok) {
                    setUser(null);
                    setLoading(false);
                    router.push('/');// Invalid session, redirect to login
                    return;
                }

                const data = await res.json();

                if (!data?.id) {
                    setUser(null);
                    setLoading(false);
                    router.push('/'); // cookie missing or JWT invalid
                    return;
                }

                setUserId(data.id); 

                // Fetch full user data if needed
                const userRes = await fetch(`/api/user/${data.id}`, {
                    method: "GET",
                    credentials: "include",
                });

                const userJson = await userRes.json();

                setUser(userJson); // user is defined
            } catch (err) {
                console.error("Failed to fetch user", err);
                setUser(null);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, []);

    return { user, userId, loading };
}