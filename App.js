/**
 *  <div id="parent">
 *      <div id='child'>
 *          <h1></h1>
 *      </div>
 *      <div id='child2'>
 *          <h2></h2>
 *      </div>
 *  </div>
 */
import React from "react";
import ReactDOM from "react-dom/client"

 const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hi I am h1 Tag"),
        React.createElement("h2",{},"Hi I am h2 Tag")]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h1",{},"Hi I am h1 Tag"),
        React.createElement("h2",{},"Hi I am h2 Tag")]
    ),
    ]
);
 




// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React!" )
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);