import React, { useState, useEffect, memo } from "react";
import { Radio } from "../Radio";
import { Container } from "./styles";

const rndName = Date.now();

export const RadioGroup = memo(({
  options = [],
  value,
  onChange,
  onChangeValue,
  renderComponent,
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

  return (
    <Container className={className}>
      {options.map(({ label, value }, index) =>
        renderComponent ? (
          renderComponent({
            key: value,
            label,
            name: rName,
            value: index,
            onChange: handleChange,
            checked: (checkedValue === index),
            ...props
          }))
        : (
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
      )}
    </Container>
  );
});

RadioGroup.displayName = 'RadioGroup'
