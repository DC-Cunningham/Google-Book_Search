import React from "react";

export function Container({ id, children }) {
  return (
    <div className="pure-g" id={id}>
      {children}
    </div>
  );
}

export function Row({ size, id, blah, children }) {
  return <div className={`${blah || ""} pure-u-${size}`}>{children}</div>;
}

export function Col({ size, blah, children }) {
  return <div className={`${blah || ""} pure-u-${size}-24`}>{children}</div>;
}
