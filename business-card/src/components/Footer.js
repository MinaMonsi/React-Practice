import React from "react";
import Facebook from "../images/Facebook.png";
import Twitter from "../images/Twitter.png";
import Instagram from "../images/Instagram.png";
import GitHub from "../images/GitHub.png";

function Footer(){
    return(
        <footer>
            <a href="https://twitter.com/minamonsi">
            <img className="logos" src={Twitter} alt="Twitter logo" />
            </a>
            <a href=" https://www.facebook.com/marina.perez.9028">
            <img className="logos" src={Facebook} alt="Facebook logo" />
            </a>
            <a href="https://www.instagram.com/minamonsi/">
            <img className="logos" src={Instagram} alt="Instagram logo" />
            </a>
            <a href="https://github.com/MinaMonsi">
            <img className="logos" src={GitHub} alt="GitHub logo" />
            </a>    
        </footer>
    )
}

export default Footer;