import React, { useCallback, useState } from "react";
import {
  useBuilderStoreSelector,
  useSetComponentProps
} from "../store/builderStore";
import { RadioGroup } from "../lib/RadioGroup";
import { EditableRadio } from "./EditableRadio";
import { RadioWrapper } from "./styles";

const generateRadioOption = () => {
  return { label: "Введите текст", value: Date.now() };
};

export const EditableRadioGroup = ({ componentId }) => {
  const { options } = useBuilderStoreSelector(componentId);
  const setComponentProps = useSetComponentProps();

  const handleChangeOptionText = useCallback(
    (newOption) => {
      // const newOptions = JSON.parse(JSON.stringify(options));
      // console.log("options 1", JSON.stringify(options));
      // value это индекс опции
      const { value: index, label } = newOption;
      options[index].label = label;

      console.log("options 2", JSON.stringify(options));
      setComponentProps({ path: `${componentId}.options`, value: options });
    },
    [options, setComponentProps, componentId]
  );

  const handleClick = () => {
    const option = generateRadioOption();
    setComponentProps({
      path: `${componentId}.options`,
      value: [...options, option]
    });
  };

  const getComponent = useCallback(
    (props) => (
      <EditableRadio onChangeOptionText={handleChangeOptionText} {...props} />
    ),
    [handleChangeOptionText]
  );

  return (
    <RadioWrapper>
      <RadioGroup options={options} Component={getComponent} />
      <button style={{ marginLeft: "30px" }} onClick={handleClick}>
        add radio
      </button>
    </RadioWrapper>
  );
};
