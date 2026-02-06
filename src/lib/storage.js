const KEY = "acs_demo_submissions_v1";

export function loadSubmissions() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveSubmission(submission) {
  const all = loadSubmissions();
  const next = [submission, ...all].slice(0, 50);
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
