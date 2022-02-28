import React from "react";
import "../styles/TodolistForm.css";
const ListDetails = (props) => {
  return (
    <li key={props.index}>
      <h4>{props.data} </h4>
      <>
        {props.inputList !== "" ? (
          <button
            className="btn-supreme "
            onClick={() => {
              props.onSelect(props.id);
            }}
          >
            x
          </button>
        ) : (
          ""
        )}
      </>
    </li>
  );
};
export default ListDetails;
