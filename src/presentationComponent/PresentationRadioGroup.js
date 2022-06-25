import React, { useCallback } from "react";
import { RadioGroup } from "../lib/RadioGroup";
import { useComponentAction } from "../useComponentAction";

export const PresentationRadioGroup = ({ options, actions }) => {
  const { handleWriteToStore, valueFromStore } = useComponentAction(actions);

  const handleChangeValue = useCallback(
    (newValue) => {
      handleWriteToStore(newValue);
    },
    [handleWriteToStore]
  );

  return (
    <RadioGroup
      options={options}
      value={valueFromStore}
      onChangeValue={handleChangeValue}
    />
  );
};
