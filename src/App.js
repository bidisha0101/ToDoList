import React from "react";
import TodolistForm from "./components/TodolistForm";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
const App = () => {
  return (
    <div className="App">
      <div className="main">
        <div className="center"></div>
        <br />
        <TodolistForm />
      </div>
    </div>
  );
};

export default App;
