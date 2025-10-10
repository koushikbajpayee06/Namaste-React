import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";


const Header = () =>{
    // let btnName = "Login";
    const [btnNameReact,setBtnNameReact] = useState("Login");
    console.log(("Header rendered"));
    // const btnName = "Login";
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Conact Us</li>
                    <li>Cart</li>
                    <button className="login-btn"
                     onClick={()=>{
                        btnNameReact==="Login"? setBtnNameReact("Logout"):setBtnNameReact("Login") ;
                     }} >{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;