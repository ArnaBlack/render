import React from "react";

export const Cell = ({ index, children }) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <strong>{index}</strong>
      {children}
    </div>
  );
};
