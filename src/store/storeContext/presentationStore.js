import React, { useContext, useCallback } from "react";
import get from "lodash.get";
import set from "lodash.set";
import deepClone from "lodash.clonedeep";
import isEquial from "lodash.isequal";

export const PresentationStoreContext = React.createContext({});

const usePresentationStoreContext = () => useContext(PresentationStoreContext);

function PresentationStoreReducer(state, action) {
  switch (action.type) {
    case "setParam": {
      const { path, value } = action.payload;
      const newState = deepClone(state);
      set(newState, path, value);
      if (!isEquial(newState, state)) {
        return newState;
      }
      return state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const usePresentationStoreSelector = (path) => {
  const { state } = usePresentationStoreContext();

  if (!path) {
    return;
  }
  return get(state, path);
};

const useSetParam = () => {
  const { dispatch } = usePresentationStoreContext();

  return useCallback(
    ({ path, value }) => {
      if (!path) {
        return;
      }
      dispatch({ type: "setParam", payload: { path, value } });
    },
    [dispatch]
  );
};

const PresentationStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(PresentationStoreReducer, {
    customParams: {
      radioGroupValue: null
    }
  });

  const value = { state, dispatch };
  return (
    <PresentationStoreContext.Provider value={value}>
      {children}
    </PresentationStoreContext.Provider>
  );
};

export {
  PresentationStoreProvider,
  usePresentationStoreContext,
  usePresentationStoreSelector,
  useSetParam
};
