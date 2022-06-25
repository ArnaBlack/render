import React, { useCallback, memo, useState, useEffect } from 'react'
import { RadioGroup } from "../lib/RadioGroup";
import { EditableRadio } from "./EditableRadio";
import { RadioWrapper } from "./styles";
import { useDispatch, useSelector } from 'react-redux'
import { configSelectors, configActions } from '../store/storeReduxToolkit/reducer'

const generateRadioOption = () => {
  return { label: "Введите текст", value: Date.now() };
};

export const EditableRadioGroup = memo(({ componentId }) => {
  const dispatch = useDispatch()
  const component = useSelector(configSelectors.selectComponent)(componentId)

  const [stateOptions, setStateOptions] = useState([])

  useEffect(() => {
    setStateOptions(component.options)
  }, [component])

  const handleChangeOptionText = useCallback(
    (newOption) => {
      const { index, label } = newOption;
      dispatch(configActions.setProps({ path: `${componentId}.options[${index}].label`, value: label }))
    },
    [stateOptions, componentId]
  );

  const handleClick = () => {
    const option = generateRadioOption();
    dispatch(configActions.setProps({
      path: `${componentId}.options`,
      value: [...stateOptions, option]
    }))
  };

  const renderComponent = useCallback(
    (props) => (
      <EditableRadio onChangeOptionText={handleChangeOptionText} {...props} />
    ),
    [handleChangeOptionText]
  );

  return (
    <RadioWrapper>
      <RadioGroup options={stateOptions} renderComponent={renderComponent} />
      <button style={{ marginLeft: "30px" }} onClick={handleClick}>
        add radio
      </button>
    </RadioWrapper>
  );
});

EditableRadioGroup.displayName = 'EditableRadioGroup'
