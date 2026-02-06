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

export function validateContact(values) {
  const errors = {};
  if (!isRequired(values.name)) errors.name = "Name is required.";
  if (!isRequired(values.company)) errors.company = "Company is required.";
  if (!isRequired(values.email)) errors.email = "Email is required.";
  else if (!isValidEmail(values.email)) errors.email = "Enter a valid email address.";
  if (!isRequired(values.phone)) errors.phone = "Phone number is required.";
  else if (!isValidPhone(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!isRequired(values.comment)) errors.comment = "Comment is required.";
  return errors;
}

export function validateBooking(values) {
  const errors = validateContact(values);
  if (!isRequired(values.date)) errors.date = "Select a date.";
  if (!isRequired(values.time)) errors.time = "Select a time.";
  return errors;
}
