import React, { memo } from "react";

export const Cell = memo(({ index, children }) => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <strong>{index}</strong>
      {children}
    </div>
  );
});

Cell.displayName = 'Cell'
