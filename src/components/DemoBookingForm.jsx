import React, { useMemo, useState } from "react";
import FormField from "./FormField.jsx";
import Button from "./Button.jsx";
import Card from "./Card.jsx";
import FadeIn from "./FadeIn.jsx";
import { validateBooking } from "../lib/validators.js";
import { saveSubmission } from "../lib/storage.js";
import { getLocalTimeZone, formatLocalDateTime } from "../lib/time.js";
import { buildDemoInviteICS, downloadICS } from "../lib/ics.js";
import { postBookDemo } from "../lib/api.js";

const DURATION_MINUTES = 30;

// Simple time list (enterprise-friendly; can swap for a real scheduler later)
function buildTimes() {
  const times = [];
  for (let h = 9; h <= 17; h++) {
    for (const m of [0, 30]) {
      const hh = String(h).padStart(2, "0");
      const mm = String(m).padStart(2, "0");
      times.push(`${hh}:${mm}`);
    }
  }
  return times;
}

function combineLocalDateTime(dateStr, timeStr) {
  // dateStr: YYYY-MM-DD, timeStr: HH:MM
  const [y, mo, d] = dateStr.split("-").map(Number);
  const [hh, mm] = timeStr.split(":").map(Number);
  return new Date(y, mo - 1, d, hh, mm, 0, 0);
}

export default function DemoBookingForm({ mode = "book-demo" }) {
  const tz = useMemo(() => getLocalTimeZone(), []);
  const times = useMemo(() => buildTimes(), []);

  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    comment: "",
    date: "",
    time: "",
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState("form"); // form | confirm
  const [apiState, setApiState] = useState({ status: "idle", message: "" }); // idle|sending|sent|error
  const [bookingMeta, setBookingMeta] = useState({ bookingId: "" });

  function onChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function onBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  function validateNow(next = values) {
    const v = mode === "contact" ? { ...next, date: "x", time: "x" } : next;
    const errs = mode === "contact" ? validateBooking(v) : validateBooking(v);
    if (mode === "contact") {
      // ignore date/time for contact page (we set placeholders above)
      delete errs.date;
      delete errs.time;
    }
    setErrors(errs);
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errs = validateNow(values);
    setTouched({
      name: true, company: true, email: true, phone: true, comment: true,
      ...(mode === "contact" ? {} : { date: true, time: true }),
    });

    if (Object.keys(errs).length > 0) return;

    if (mode === "contact") {
      const submission = {
        type: "contact",
        ...values,
        createdAt: new Date().toISOString(),
      };
      saveSubmission(submission);
      setStep("confirm");
      return;
    }

    const start = combineLocalDateTime(values.date, values.time);
    const submission = {
      type: "book-demo",
      ...values,
      durationMinutes: DURATION_MINUTES,
      timeZone: tz,
      startsAtLocalISO: start.toISOString(),
      createdAt: new Date().toISOString(),
    };

    saveSubmission(submission);
    setStep("confirm");
  }

  const startDateObj =
    mode === "book-demo" && values.date && values.time
      ? combineLocalDateTime(values.date, values.time)
      : null;

  async function sendConfirmationEmail() {
    if (!startDateObj) return;

    setApiState({ status: "sending", message: "Sending confirmation (mock)..." });
    try {
      const payload = {
        ...values,
        durationMinutes: DURATION_MINUTES,
        timeZone: tz,
        startsAt: startDateObj.toISOString(),
      };
      const res = await postBookDemo(payload);
      if (!res.ok) throw new Error("Request failed");
      setBookingMeta({ bookingId: res.data.bookingId });
      setApiState({ status: "sent", message: res.data.message });
    } catch {
      setApiState({ status: "error", message: "Could not send (mock). Please try again." });
    }
  }

  function addToCalendar() {
    if (!startDateObj) return;
    const ics = buildDemoInviteICS({
      startDate: startDateObj,
      durationMinutes: DURATION_MINUTES,
      name: values.name,
      company: values.company,
      email: values.email,
      phone: values.phone,
    });
    const safeCompany = (values.company || "client").replace(/[^a-z0-9-_]+/gi, "-");
    downloadICS(`ACS-Demo-${safeCompany}.ics`, ics);
  }

  if (step === "confirm") {
    const when =
      mode === "book-demo" && startDateObj
        ? formatLocalDateTime(startDateObj)
        : null;

    return (
      <FadeIn>
        <Card title={mode === "contact" ? "Message received" : "Demo request confirmed"}>
          <p className="p" style={{ marginBottom: 14 }}>
            {mode === "contact"
              ? "Thanks — your message is recorded for this demo build. In production, this would route to your CRM/helpdesk."
              : "Thanks — your demo request is recorded. Next, you can add it to your calendar and send a confirmation email."}
          </p>

          <div className="summary" aria-label="Submission summary">
            <div className="kv"><b>Name</b><span>{values.name}</span></div>
            <div className="kv"><b>Company</b><span>{values.company}</span></div>
            <div className="kv"><b>Email</b><span>{values.email}</span></div>
            <div className="kv"><b>Phone</b><span>{values.phone}</span></div>
            {mode === "book-demo" ? (
              <>
                <div className="kv"><b>When</b><span>{when}</span></div>
                <div className="kv"><b>Time zone</b><span>{tz}</span></div>
                <div className="kv"><b>Duration</b><span>{DURATION_MINUTES} minutes</span></div>
              </>
            ) : null}
          </div>

          {mode === "book-demo" ? (
            <>
              <div className="hero-actions" style={{ marginTop: 16 }}>
                <Button variant="primary" type="button" onClick={addToCalendar}>
                  Add to Calendar (.ics)
                </Button>
                <Button
                  variant="ghost"
                  type="button"
                  onClick={sendConfirmationEmail}
                  disabled={apiState.status === "sending"}
                >
                  Send Confirmation Email
                </Button>
              </div>

              <div className="small" style={{ marginTop: 10 }}>
                {apiState.status === "idle" ? (
                  <>Email + calendar sync are scaffolded for production integration.</>
                ) : (
                  <>
                    <span
                      role="status"
                      aria-live="polite"
                      style={{
                        color: apiState.status === "error" ? "#9b1c1c" : "inherit",
                        fontWeight: 600,
                      }}
                    >
                      {apiState.message}
                    </span>
                    {bookingMeta.bookingId ? (
                      <span> &nbsp;Booking ID: {bookingMeta.bookingId}</span>
                    ) : null}
                  </>
                )}
              </div>
            </>
          ) : null}

          <div style={{ marginTop: 16 }}>
            <Button
              type="button"
              onClick={() => {
                setStep("form");
                setApiState({ status: "idle", message: "" });
                setBookingMeta({ bookingId: "" });
              }}
            >
              {mode === "contact" ? "Send another message" : "Book another demo"}
            </Button>
          </div>
        </Card>
      </FadeIn>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <div className="inline-row">
        <FormField id="name" label="Name" error={touched.name ? errors.name : ""}>
          <input
            className="input"
            name="name"
            value={values.name}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="name"
            required
          />
        </FormField>

        <FormField id="company" label="Company" error={touched.company ? errors.company : ""}>
          <input
            className="input"
            name="company"
            value={values.company}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="organization"
            required
          />
        </FormField>
      </div>

      <div className="inline-row">
        <FormField id="email" label="Email" error={touched.email ? errors.email : ""}>
          <input
            className="input"
            name="email"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="email"
            inputMode="email"
            required
          />
        </FormField>

        <FormField
          id="phone"
          label="Phone number"
          hint="Formats accepted: (555) 555-5555, 555-555-5555, +1 555 555 5555"
          error={touched.phone ? errors.phone : ""}
        >
          <input
            className="input"
            name="phone"
            value={values.phone}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="tel"
            inputMode="tel"
            required
          />
        </FormField>
      </div>

      {mode === "book-demo" ? (
        <div className="inline-row">
          <FormField id="date" label="Select date" error={touched.date ? errors.date : ""}>
            <input
              className="input"
              type="date"
              name="date"
              value={values.date}
              onChange={onChange}
              onBlur={onBlur}
              required
            />
          </FormField>

          <FormField
            id="time"
            label="Select time"
            hint={`Duration: ${DURATION_MINUTES} minutes • Time zone: ${tz}`}
            error={touched.time ? errors.time : ""}
          >
            <select
              className="select"
              name="time"
              value={values.time}
              onChange={onChange}
              onBlur={onBlur}
              required
            >
              <option value="">Select a time</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </FormField>
        </div>
      ) : null}

      <FormField id="comment" label={mode === "contact" ? "Comment" : "What are you looking to accomplish?"} error={touched.comment ? errors.comment : ""}>
        <textarea
          className="textarea"
          name="comment"
          value={values.comment}
          onChange={onChange}
          onBlur={onBlur}
          required
        />
      </FormField>

      <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
        <Button variant="primary" type="submit">
          {mode === "contact" ? "Send message" : "Book a demo"}
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => {
            setValues({
              name: "",
              company: "",
              email: "",
              phone: "",
              comment: "",
              date: "",
              time: "",
            });
            setTouched({});
            setErrors({});
          }}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
