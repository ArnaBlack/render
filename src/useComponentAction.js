import { useCallback } from "react";
import {
  useSetParam,
  usePresentationStoreSelector
} from "./store/presentationStore";

export const useComponentAction = (actions) => {
  const valuePath =
    actions && actions.writeValue && actions.writeValue.path
      ? actions.writeValue.path
      : "";
  const setParam = useSetParam();

  const valueFromStore = usePresentationStoreSelector(valuePath);

  const handleWriteToStore = useCallback(
    (value) => {
      setParam({ path: valuePath, value });
    },
    [valuePath, setParam]
  );

  return {
    handleWriteToStore,
    valueFromStore
  };
};
