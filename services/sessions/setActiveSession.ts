export async function setActiveSession(sessionId: string) {

    const res = await fetch("http://localhost:4000/sessions/active", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify({

            sessionId

        })

    });

    return await res.json();

}