import React from "react";

function Panel({ children }) {
  return (
    <div
      style={{
        height: 300,
        clear: "both",
        paddingTop: 120,
        textAlign: "center",
      }}
    >
      {children}
    </div>
  );
}

export default Panel;
