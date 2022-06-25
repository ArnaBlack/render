import React, { memo, forwardRef } from "react";
import { Label } from "./styles";

export const Radio = memo(
  forwardRef(
    ({ label, disabled, value, name, onChange, editableProps }, ref) => (
      <Label>
        <input
          name={name}
          onChange={onChange}
          value={value}
          type="radio"
          disabled={disabled}
        />
        <span ref={ref} {...editableProps}>
          {label}
        </span>
      </Label>
    )
  )
);

Radio.displayName = "Radio";
