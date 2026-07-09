const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export async function setActiveSession(sessionId: string) {
  const res = await fetch(`${API_URL}/sessions/active`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sessionId }),
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return await res.json();
}