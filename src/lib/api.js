// Backend-ready stub. Replace with real endpoint + auth later.
export async function postBookDemo(payload) {
  // Example:
  // return fetch("/api/book-demo", { method:"POST", headers:{...}, body: JSON.stringify(payload) })

  // Mock success response (simulate latency)
  await new Promise((r) => setTimeout(r, 450));

  return {
    ok: true,
    status: 200,
    data: {
      message: "Confirmation queued (mock).",
      bookingId: `ACS-${Math.random().toString(16).slice(2, 10).toUpperCase()}`,
    },
  };
}
