// src/lib/api.js

export async function postBookDemo(payload) {
  const res = await fetch("/api/book-demo", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    // ignore
  }

  return {
    ok: res.ok && data?.ok !== false,
    status: res.status,
    data: data?.data || data,
    error: data?.error,
  };
}
