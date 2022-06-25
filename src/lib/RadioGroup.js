import React, { useState, useEffect } from "react";
import { Radio } from "./Radio";

const rndName = Date.now();

export const RadioGroup = ({
  options,
  value,
  onChange,
  onChangeValue,
  Component,
  className,
  ...props
}) => {
  const [rName] = useState(rndName);
  const [checkedValue, setCheckedValue] = useState(
    options.findIndex((option) => option.value === value)
  );

  const handleChange = (e) => {
    const optionIndex = +e.target.value;
    setCheckedValue(optionIndex);
    const newValue = options[optionIndex].value;
    if (onChange) {
      onChange(e);
    }

    if (onChangeValue) {
      onChangeValue(newValue);
    }
  };

  useEffect(() => {
    const newValueIndex = options.findIndex((option) => option.value === value);
    setCheckedValue(newValueIndex);
  }, [options, value]);

  return options.map(({ label, value }, index) =>
    Component ? (
      <Component
        key={value}
        label={label}
        name={rName}
        value={index}
        onChange={handleChange}
        checked={checkedValue === index}
        {...props}
      />
    ) : (
      <Radio
        key={value}
        label={label}
        name={rName}
        value={index}
        onChange={handleChange}
        checked={checkedValue === index}
        {...props}
      />
    )
  );
};
