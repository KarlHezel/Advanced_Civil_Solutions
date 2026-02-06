function pad2(n) {
  return String(n).padStart(2, "0");
}

function toICSDateUTC(date) {
  // YYYYMMDDTHHMMSSZ (UTC)
  const y = date.getUTCFullYear();
  const m = pad2(date.getUTCMonth() + 1);
  const d = pad2(date.getUTCDate());
  const hh = pad2(date.getUTCHours());
  const mm = pad2(date.getUTCMinutes());
  const ss = pad2(date.getUTCSeconds());
  return `${y}${m}${d}T${hh}${mm}${ss}Z`;
}

function escapeICS(text) {
  return String(text ?? "")
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function buildDemoInviteICS({
  startDate, // JS Date
  durationMinutes = 30,
  name,
  company,
  email,
  phone,
}) {
  const endDate = new Date(startDate.getTime() + durationMinutes * 60 * 1000);

  const uid = `acs-${Date.now()}-${Math.random().toString(16).slice(2)}@advancedcivilsolutions.local`;
  const dtstamp = toICSDateUTC(new Date());
  const dtstart = toICSDateUTC(startDate);
  const dtend = toICSDateUTC(endDate);

  const summary = `Advanced Civil Solutions Demo — ${company || "Client"}`;
  const description =
    `Demo requested via website.\n\n` +
    `Name: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\n` +
    `This invite is generated for scheduling convenience.`;

  const ics =
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Advanced Civil Solutions//Demo Booking//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
UID:${escapeICS(uid)}
DTSTAMP:${dtstamp}
DTSTART:${dtstart}
DTEND:${dtend}
SUMMARY:${escapeICS(summary)}
DESCRIPTION:${escapeICS(description)}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

  return ics.replace(/\r?\n/g, "\r\n"); // CRLF for compatibility
}

export function downloadICS(filename, icsText) {
  const blob = new Blob([icsText], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
