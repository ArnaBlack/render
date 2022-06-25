import React, { useCallback, useContext } from "react";
import { componentsConfig } from "../config";
import set from "lodash.set";
import deepClone from "lodash.clonedeep";
import isEquial from "lodash.isequal";

export const BuilderStoreContext = React.createContext({});

const useBuilderStoreContext = () => useContext(BuilderStoreContext);

function BuilderStoreReducer(state, action) {
  switch (action.type) {
    case "setProps": {
      console.log();
      const { path, value } = action.payload;
      const newState = deepClone(state);

      console.log("newState b", JSON.stringify(newState));
      console.log("state b", JSON.stringify(state));

      set(state, path, value);
      console.log("newState a", JSON.stringify(newState));
      console.log("state a", JSON.stringify(state));

      if (!isEquial(newState, state)) {
        return newState;
      }
      return { ...state };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const BuilderStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(
    BuilderStoreReducer,
    componentsConfig
  );

  const value = { state, dispatch };
  return (
    <BuilderStoreContext.Provider value={value}>
      {children}
    </BuilderStoreContext.Provider>
  );
};

const useBuilderStoreSelector = (id) => {
  const { state } = useBuilderStoreContext();
  return state[id];
};

const useGetComponent = () => {
  const { state } = useBuilderStoreContext();

  return useCallback((id) => state[id], [state]);
};

const useSetComponentProps = () => {
  const { dispatch } = useBuilderStoreContext();

  return useCallback(
    ({ path, value }) => {
      console.log("useSetComponentProps", path);
      dispatch({ type: "setProps", payload: { path, value } });
    },
    [dispatch]
  );
};

export {
  BuilderStoreProvider,
  useBuilderStoreContext,
  useBuilderStoreSelector,
  useSetComponentProps,
  useGetComponent
};
