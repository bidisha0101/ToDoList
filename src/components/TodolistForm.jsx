import React, { useState } from "react";
import ListDetails from "./ListDetails";
import "../styles/TodolistForm.css";

const TodolistForm = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvents = (e) => {
    setInputList(e.target.value);
  };
  const listOfItems = () => {
    setItems((olditem) => {
      return [...olditem, inputList];
    });
  };

  const removeItem = (id) => {
    setItems((olditem) => {
      return olditem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div>
        <div className="col d-flex justify-content-lg-center">
          <div className="card ">
            <div className="card-body">
              <h1 className="card-text text-secondary font-face-kt typewriter ">
                Hi User! Please Enter your Goals for the day
              </h1>
              <form method="POST">
                <div className="input-group input-group-lg">
                  <div className="input-group-prepend"></div>
                  <input
                    type="text"
                    className="form-control   text-secondary "
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                    placeholder="add items "
                    onChange={itemEvents}
                    value={inputList}
                  />
                </div>
              </form>

              <a onClick={listOfItems} className="btn btn-secondary mt-10">
                {" "}
                Add
              </a>
              <ul>
                {items.map((data, index) => {
                  return (
                    <ListDetails
                      data={data}
                      index={index}
                      inputList={inputList}
                      id={index}
                      onSelect={removeItem}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodolistForm;
