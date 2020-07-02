import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button value={props.value} id="saveBtn" onClick={props.onClick}>
      {props.name}
    </button>
  );
}
export default Button;
