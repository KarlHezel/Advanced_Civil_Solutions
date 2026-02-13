// src/components/DemoBookingForm.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormField from "./FormField.jsx";
import Button from "./Button.jsx";

import { validateIntake } from "../lib/validators.js";
import { saveSubmission } from "../lib/storage.js";
import { postBookDemo } from "../lib/api.js";

const initialValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  comment: "",
  website: "", // honeypot (bots often fill this)
};

// Client-side rate limit (per browser/device)
// Note: true per-IP limiting requires a backend endpoint.
const RL_KEY = "acs_contact_rate_v1";
function checkClientRateLimit({ max = 5, windowMs = 60_000 } = {}) {
  const now = Date.now();
  try {
    const raw = localStorage.getItem(RL_KEY);
    const arr = raw ? JSON.parse(raw) : [];
    const recent = Array.isArray(arr) ? arr.filter((t) => now - t < windowMs) : [];

    if (recent.length >= max) {
      const retryMs = windowMs - (now - recent[0]);
      return { limited: true, retryMs };
    }

    recent.push(now);
    localStorage.setItem(RL_KEY, JSON.stringify(recent));
    return { limited: false, retryMs: 0 };
  } catch {
    // If storage is blocked, don't block legitimate users.
    return { limited: false, retryMs: 0 };
  }
}

// IMPORTANT: Set this to true only if you explicitly want local demo storage.
// In production, keep false to avoid storing submissions in localStorage.
const ENABLE_LOCAL_DEMO_STORAGE = false;

export default function DemoBookingForm({ mode = "consultation" }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message, bookingId? }

  function setField(key, val) {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => {
      if (!e[key]) return e;
      const copy = { ...e };
      delete copy[key];
      return copy;
    });
  }

  function onClear() {
    setValues(initialValues);
    setErrors({});
    setStatus(null);
  }

  async function onSubmit(e) {
    e.preventDefault();
    setStatus(null);

    // 1) Honeypot: if filled, it's almost certainly a bot.
    // Pretend success so bots don't learn.
    if (values.website && values.website.trim() !== "") {
      setStatus({
        type: "success",
        message:
          "Request received. We’ll review your notes and follow up to confirm fit and next steps.",
        bookingId: null,
      });
      return;
    }

    // 2) Client-side rate limit (per browser/device)
    const rl = checkClientRateLimit({ max: 5, windowMs: 60_000 });
    if (rl.limited) {
      const seconds = Math.ceil(rl.retryMs / 1000);
      setStatus({
        type: "error",
        message: `Too many submissions. Please try again in ${seconds} seconds.`,
      });
      return;
    }

    // 3) Validate
    const nextErrors = validateIntake(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);

    try {
      const payload = {
        mode,
        submittedAt: new Date().toISOString(),
        name: values.name,
        company: values.company,
        email: values.email,
        phone: values.phone,
        comment: values.comment,
      };

      // Optional demo behavior: store locally (disabled by default)
      if (ENABLE_LOCAL_DEMO_STORAGE) {
        saveSubmission(payload);
      }

      // Mock API call (replace with real endpoint later)
      const res = await postBookDemo(payload);
      if (!res?.ok) throw new Error("Submit failed");

      setStatus({
        type: "success",
        message:
          "Request received. We’ll review your notes and follow up to confirm fit and next steps.",
        bookingId: res?.data?.bookingId || null,
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} onReset={onClear} noValidate>
      {/* Honeypot field (hidden from humans, visible to many bots) */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={values.website}
        onChange={(e) => setField("website", e.target.value)}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          height: 0,
          width: 0,
        }}
        aria-hidden="true"
      />

      {/* Left column: Name + Company | Right column: Email + Phone */}
      <div className="inline-row">
        <div className="form">
          <FormField label="Name" id="name" error={errors.name}>
            <input
              className="input"
              type="text"
              value={values.name}
              placeholder="Your name"
              onChange={(e) => setField("name", e.target.value)}
              autoComplete="name"
            />
          </FormField>

          <FormField label="Company" id="company" error={errors.company}>
            <input
              className="input"
              type="text"
              value={values.company}
              placeholder="Organization or team"
              onChange={(e) => setField("company", e.target.value)}
              autoComplete="organization"
            />
          </FormField>
        </div>

        <div className="form">
          <FormField label="Email" id="email" error={errors.email}>
            <input
              className="input"
              type="email"
              value={values.email}
              placeholder="name@company.com"
              onChange={(e) => setField("email", e.target.value)}
              autoComplete="email"
            />
          </FormField>

          <FormField label="Phone Number" id="phone" error={errors.phone}>
            <input
              className="input"
              type="tel"
              value={values.phone}
              placeholder="(555) 555-5555"
              onChange={(e) => setField("phone", e.target.value)}
              autoComplete="tel"
            />
          </FormField>
        </div>
      </div>

      {/* Objective */}
      <FormField label="What are you looking to accomplish?" id="comment" error={errors.comment}>
        <textarea
          className="textarea"
          value={values.comment}
          placeholder="Briefly describe your objective, timeline, and constraints."
          onChange={(e) => setField("comment", e.target.value)}
        />
      </FormField>

      {/* Actions */}
      <div className="form-actions">
        <Button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Contact Us"}
        </Button>

        <Button type="reset" className="btn btn-ghost" disabled={submitting}>
          Clear
        </Button>
      </div>

      {/* Consent line */}
      <div className="small" style={{ marginTop: 12, opacity: 0.85 }}>
        By submitting this form, you agree to our <Link to="/privacy">Privacy Policy</Link>.
      </div>

      {/* Status */}
      {status && (
        <div className={status.type === "error" ? "error" : "hint"}>
          <div style={{ fontWeight: 800, marginTop: 6 }}>
            {status.type === "error" ? "Submission failed." : "Request received."}
          </div>
          <div style={{ marginTop: 6 }}>{status.message}</div>
          {status.type !== "error" && status.bookingId ? (
            <div style={{ marginTop: 8 }}>
              Reference ID: <strong>{status.bookingId}</strong>
            </div>
          ) : null}
        </div>
      )}
    </form>
  );
}
