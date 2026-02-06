import React from "react";

export default function Button({
  as: As = "button",
  variant = "default",
  className = "",
  ...props
}) {
  const variantClass =
    variant === "primary"
      ? "btn btn-primary"
      : variant === "ghost"
      ? "btn btn-ghost"
      : "btn";

  return <As className={`${variantClass} ${className}`} {...props} />;
}
