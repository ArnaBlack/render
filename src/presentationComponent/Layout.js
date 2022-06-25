import React, { memo } from "react";

export const Layout = memo(({ children }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
});

Layout.displayName = 'Layout'
