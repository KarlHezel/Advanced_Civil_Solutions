import React from "react";

export default function HeadshotPlaceholder() {
  return (
    <div
      className="surface"
      style={{
        padding: 16,
        borderRadius: 16,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        minHeight: 260,
      }}
      aria-label="Headshot placeholder"
    >
      <svg width="100%" height="260" viewBox="0 0 640 360" role="img" aria-label="Profile placeholder">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0" stopColor="rgba(184,154,61,0.25)" />
            <stop offset="1" stopColor="rgba(17,19,21,0.08)" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="640" height="360" fill="url(#g1)" />
        <circle cx="320" cy="150" r="70" fill="rgba(255,255,255,0.72)" />
        <rect x="190" y="230" width="260" height="95" rx="48" fill="rgba(255,255,255,0.66)" />
        <path
          d="M0 310 C140 260, 220 340, 360 305 C480 275, 540 330, 640 290 L640 360 L0 360 Z"
          fill="rgba(184,154,61,0.18)"
        />
      </svg>
    </div>
  );
}
