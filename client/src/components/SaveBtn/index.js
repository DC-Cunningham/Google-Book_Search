import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <button value={props.value} id="saveBtn" onClick={props.onClick}>
      Save
    </button>
  );
}
export default SaveBtn;
