import { useEffect, useRef, useState } from "react";

export const useEditableText = (defaultValue, onChangeText) => {
  const hRef = useRef();
  const textRef = useRef();
  const [state, setState] = useState(defaultValue);

  const handleInput = (e) => {
    setState(e.target.innerText);
  };
  useEffect(() => {
    hRef.current.innerText = state;
    textRef.current = state;
  }, []);

  const handleBlur = () => {
    if (textRef.current !== state) {
      onChangeText(state);
      textRef.current = state;
    }
  };

  return {
    hRef,
    handleInput,
    handleBlur,
    state
  };
};
