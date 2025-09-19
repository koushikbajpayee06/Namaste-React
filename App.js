import React from "react";
import ReactDOM from "react-dom/client"

const Title= () => (
    <h1 className="head">
        Namaste React Using JSX
    </h1>
)

const HeadingComponent2 = ()=> (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React</h1>    
    </div>
  
);  
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2/>);