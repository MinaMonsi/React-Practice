import React from "react";
import Mina from "../images/Mina.png";
import Buttons from "./Buttons";


function Header() {
    return (
        <header className="header" > 
            <img className="header-img" src={Mina} alt="bio pic" />
            <h1>Marina Monsivais</h1>
            <h3 className="jobTitle">Frontend Developer</h3>
            <p>minamonsi.com</p>

        <Buttons />
        </header>
    )
}

export default Header;