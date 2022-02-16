import React from "react";
import Mina from "../images/Mina.JPG";

function Header() {
    return (
       
        <header className="header" > 
            <img className="main-img" src={Mina} alt="bio pic" />
            <h1>Marina Monsivais</h1>
           
        </header>
    )
}

export default Header;