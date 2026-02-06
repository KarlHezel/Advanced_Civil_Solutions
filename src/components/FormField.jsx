import React from "react";

export default function FormField({
  id,
  label,
  hint,
  error,
  children,
}) {
  const errId = error ? `${id}-error` : undefined;
  const hintId = hint ? `${id}-hint` : undefined;

  const describedBy = [hintId, errId].filter(Boolean).join(" ") || undefined;

  return (
    <div className="field">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            id,
            "aria-invalid": Boolean(error) || undefined,
            "aria-describedby": describedBy,
          })
        : children}
      {hint ? (
        <div className="hint" id={hintId}>
          {hint}
        </div>
      ) : null}
      {error ? (
        <div className="error" id={errId} role="alert">
          {error}
        </div>
      ) : null}
    </div>
  );
}
