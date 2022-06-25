import "./styles.css";
import React, { useState } from "react";
import { Render } from "./Render/Render";

export default function App() {
  const [isEdit, setIsEdit] = useState(true);

  const handleClick = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="App">
      <Render id={"rootComponentId_0"} isEdit={isEdit} />
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
  )
}
