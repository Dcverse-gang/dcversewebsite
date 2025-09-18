import { API_BASE } from "@/sanity/env";

export async function sendFeedback(
  jobId: string,
  feedback: "like" | "dislike" | "star",
  token?: string,
) {
  const headers: HeadersInit = { "Content-Type": "application/json" };
  if (token) headers.Authorization = `Bearer ${token}`;

  const payload =
    feedback === "star"
      ? { job_id: jobId, feedback: "star", stars: 1, tags: [] }
      : { job_id: jobId, feedback, stars: 0, tags: [] };

  const res = await fetch(`${API_BASE}/feedback`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`Feedback failed: ${res.statusText}`);
  return res.json();
}
