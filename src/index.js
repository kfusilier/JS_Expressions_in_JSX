// old
//const React = require("react");
// new way to do the same as above
import React from "react";
// old
// const ReactDOM = require("react-dom");
// new way to do the same as above
import ReactDOM from "react-dom";

//
const fName = "Kristin";
const lName = "Fusilier";
const num = 7;

// can render expressions not statements
ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}.</p>
  </div>,
  document.getElementById("root")
);
