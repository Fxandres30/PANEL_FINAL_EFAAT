const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function setActiveSession(sessionId: string) {

    console.log("API_URL:", API_URL);

    const res = await fetch(`${API_URL}/sessions/active`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
    });

    return await res.json();
}