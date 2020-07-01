import React from "react";

export function Container({ children }) {
  return <div className="pure-g">{children}</div>;
}

export function Row({ children }) {
  return <div className="pure-u-1">{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map((size) => "pure-u-" + size + "-24")
        .join(" ")}
    >
      {children}
    </div>
  );
}
