import React, { memo, useEffect } from "react";
import { Radio } from "../lib/Radio";
import { useEditableText } from "./useEditableText";
import { useDidMount } from "../hooks";

export const EditableRadio = memo(({ label, onChangeOptionText, value }) => {
  const handleChangeText = (newText) => {
    onChangeOptionText({ label: newText, value });
  };

  const { hRef, handleInput, handleBlur } = useEditableText(
    label,
    handleChangeText
  );

  useEffect(() => {
    return () => {
      console.log("unmount useEffect");
    };
  }, []);

  // useDidMount(() => {
  //   return () => {
  //     console.log("unmount useDidMount");
  //   };
  // });

  return (
    <Radio
      ref={hRef}
      disabled
      editableProps={{
        onBlur: handleBlur,
        contentEditable: true,
        suppressContentEditableWarning: true,
        onInput: handleInput
      }}
    />
  );
});

EditableRadio.displayName = "EditableRadio";
