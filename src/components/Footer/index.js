import React from 'react';
import {SiGithub} from 'react-icons/si';
import {FaLinkedin} from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai';



function Footer() {
    return (
        <div className="icons">   
             <a href ="https://github.com/AnjinIsmail">
                <SiGithub></SiGithub>  </a>
            <a href="https://www.linkedin.com/in/anjiismail/">
                <FaLinkedin></FaLinkedin> </a>
           <a href="https://twitter.com/injiengie">
             <AiFillTwitterCircle></AiFillTwitterCircle> </a>
        </div>
    )
}

export default Footer;

