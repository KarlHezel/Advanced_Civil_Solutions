import React from "react";

export default function Card({ title, children }) {
  return (
    <div className="surface card">
      {title ? <div className="card-title">{title}</div> : null}
      <div className="card-body">{children}</div>
    </div>
  );
}
