import React from "react";

export default function Card({ title, children, inset = false }) {
  const className = inset ? "card card-inset" : "surface card";

  return (
    <div className={className}>
      {title ? <div className="card-title">{title}</div> : null}
      <div className="card-body">{children}</div>
    </div>
  );
}
