// src/lib/validators.js

export function isRequired(value) {
  return String(value ?? "").trim().length > 0;
}

// Simple, accessible validation (not overly strict)
export function isValidEmail(email) {
  const v = String(email ?? "").trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

// Accepts: (555) 555-5555, 555-555-5555, +1 555 555 5555, 5555555555
export function isValidPhone(phone) {
  const v = String(phone ?? "").trim();
  return /^[+]?[\d\s().-]{7,}$/.test(v);
}

/**
 * Baseline intake validation.
 * Used for consultation/contact style modes (NO scheduling).
 */
export function validateIntake(values) {
  const errors = {};

  if (!isRequired(values.name)) errors.name = "Enter your name.";
  if (!isRequired(values.company)) errors.company = "Enter your organization.";

  if (!isRequired(values.email)) errors.email = "Enter your email.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";

  if (!isRequired(values.phone)) errors.phone = "Enter your phone number.";
  else if (!isValidPhone(values.phone)) errors.phone = "Enter a valid phone number.";

  if (!isRequired(values.comment)) {
    errors.comment = "Provide a brief objective or context.";
  }

  return errors;
}

/**
 * Legacy export for compatibility if you still import validateContact anywhere.
 * You can remove this once you confirm nothing imports it.
 */
export function validateContact(values) {
  return validateIntake(values);
}
