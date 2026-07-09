export async function setActiveSession(sessionId: string) {

    const res = await fetch("/api/sessions/active", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            sessionId,
        }),

    });

    if (!res.ok) {

        throw new Error(await res.text());

    }

    return await res.json();

}