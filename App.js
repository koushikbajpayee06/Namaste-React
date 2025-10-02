import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-logo-by-abhishek-choudhary-dribbble.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Conact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);