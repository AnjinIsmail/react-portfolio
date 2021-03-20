import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons"


function Footer() {
    return (
        <footer className="footer"> 

        <div className="icons">   
             <a href ="https://github.com/AnjinIsmail" className="github">
                 <FontAwesomeIcon icon = {faGithub} size ="4x" />
             </a>
            <a href="https://www.linkedin.com/in/anjiismail/" className="linkedin">
            <FontAwesomeIcon icon = {faLinkedin} size ="4x" />
            </a>
            
           <a href="https://twitter.com/injiengie" className="twitter">
           <FontAwesomeIcon icon = {faTwitter} size ="4x" />

           </a>
            
        </div>
        
        </footer>
    )
}

export default Footer;

