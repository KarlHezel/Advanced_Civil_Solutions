// src/components/DemoBookingForm.jsx
import React, { useState } from "react";
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
};

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

    const nextErrors = validateIntake(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);

    try {
      const payload = {
        mode,
        submittedAt: new Date().toISOString(),
        ...values,
      };

      // demo behavior
      saveSubmission(payload);

      // mock API call
      const res = await postBookDemo(payload);
      if (!res?.ok) throw new Error("Submit failed");

      setStatus({
        type: "success",
        message:
          "Request received. We’ll review your notes and follow up to confirm fit and schedule next steps.",
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
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button type="submit" className="btn btn-primary" disabled={submitting}>
          {submitting ? "Submitting..." : "Request a Consultation"}
        </Button>

        <Button type="reset" className="btn btn-ghost" disabled={submitting}>
          Clear
        </Button>
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
