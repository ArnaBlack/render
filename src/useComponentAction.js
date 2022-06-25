import { useCallback } from "react";
import {
  useSetParam,
  usePresentationStoreSelector
} from "./store/storeContext/presentationStore";
import { useDispatch, useSelector } from 'react-redux'
import {
  configActions,
  presentationParamsActions,
  presentationParamsSelectors
} from './store/storeReduxToolkit/reducer'

export const useComponentAction = (actions) => {
  const dispatch = useDispatch()
  const valuePath =
    actions && actions.writeValue && actions.writeValue.path
      ? actions.writeValue.path
      : "";
  // const setParam = useSetParam();

  // const valueFromStore = usePresentationStoreSelector(valuePath);

  const valueFromStore = useSelector(presentationParamsSelectors.selectCustomParam(valuePath))

  const handleWriteToStore = useCallback(
    (value) => {
      dispatch(presentationParamsActions.setParam({ path: valuePath, value }))
    },
    [valuePath]
  );

  return {
    handleWriteToStore,
    valueFromStore
  };
};
