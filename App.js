import React from "react";
import ReactDOM from "react-dom/client"

const elem = <span>React Element</span>

const Title= () => (
    <h1 className="head">
        {elem}
        Namaste React Using JSX
    </h1>
)

const HeadingComponent2 = ()=> (
    <div id="container">
        {Title()}
        {/* <Title/> */}
        <h1 className="heading">Namaste React</h1>    
    </div>
  
);  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2/>);