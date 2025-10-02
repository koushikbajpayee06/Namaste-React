import React from "react";
import ReactDOM from "react-dom/client"

const styleCard={
    backgroundColor:"#f0f0f0"
}
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

const RestaurantCard = ({resName, cuisine, deliveryTime, imgUrl, stars})=>{
    // console.log(props);
    return(
        <div className="res-card" style={styleCard}>
            <img 
            className="res-logo"
             alt="res-logo"
            src={imgUrl}/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{stars} stars</h4>
            <h4>{deliveryTime} minutes</h4>
            
        </div>
    )
}
const Body = () =>{
    return(
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Koshe Kosha" cuisine="Bengali,North Indian" stars="4.7" deliveryTime="38" imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/u3cvjhtaopd4akomga4v"/>
                <RestaurantCard resName="KFC" cuisine="Burgers, Fast Food, Wraps" stars="4.3" deliveryTime="24" imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/f96d6223-b318-4a20-b108-82a5de31556e_39309.JPG"/>

            </div>
        </div>
    )
}

const Footer = () => {
    <p> 2025 Koushik. All rights reserved.</p>
}
const AppLayout = () =>{
    return (
        <div className="app">
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);