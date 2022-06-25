import React, { memo } from "react";

export const Block = memo(({ text }) => {
  return <i>{text}</i>;
});


Block.displayName = "Block"
