import "./styles.css";
import React, { useState } from "react";
import { Render } from "./Render/Render";
import { BuilderStoreProvider } from "./store/builderStore";
import { PresentationStoreProvider } from "./store/presentationStore";

export default function App() {
  const [isEdit, setIsEdit] = useState(true);

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <BuilderStoreProvider>
      <PresentationStoreProvider>
        <div className="App">
          <Render id={"radioGroupId_0"} isEdit={isEdit} />
          <button
            style={{
              position: "absolute",
              right: "0",
              background: "purple",
              color: "#fff"
            }}
            onClick={handleClick}
          >
            toggle
            <br />
            to {isEdit ? "view" : "edit"}
            <br />
            mode
          </button>
        </div>
      </PresentationStoreProvider>
    </BuilderStoreProvider>
  );
}
