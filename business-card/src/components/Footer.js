import React from "react";
import Facebook from "../images/Facebook.png";
import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import GitHub from "../images/GitHub.png";

function Footer(){
    return(
        <footer>
            <img className="logos" src={Twitter} alt="Twitter logo" />
            <img className="logos" src={Facebook} alt="Facebook logo" />
            <img className="logos" src={Instagram} alt="Instagram logo" />
            <img className="logos" src={GitHub} alt="GitHub logo" />
        </footer>
    )
}

export default Footer;