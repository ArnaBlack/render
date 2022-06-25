import React, { useCallback, memo } from "react";
import { RadioGroup } from "../lib/RadioGroup";
import { useComponentAction } from "../useComponentAction";

export const PresentationRadioGroup = memo(({ options, actions }) => {
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
});

PresentationRadioGroup.displayName = 'PresentationRadioGroup'
