import React from "react";
import ReactDOM from "react-dom/client"

// React.createElement ==> Object

const heading = <h1 id="heading">Namaste React Using JSX</h1>
console.log(heading);

// const heading = React.createElement("h1",{id:"heading"},"Namaste Heading");
//React Component
const HeadingComponent= ()=>{
    return <h1>Namaste react</h1>
}

const HeadingComponent2 = ()=> (<h1>Namaste React</h1>);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);