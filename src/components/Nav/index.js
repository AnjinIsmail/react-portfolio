import React from 'react';
import myResume from "../../assets/profile/Resume_AnjiIsmail.pdf";
import  "../../../src/index.css";
import 'semantic-ui-css/semantic.min.css'


function Nav(props) {
    const {
        setCurrentPage,
        aboutSelected,
        contactSelected,
        projectSelected,
 
    } = props;

    return (

        <div className="ui inverted segment">
            <div class="ui inverted secondary pointing menu">
                <a class="item active">
                Anji(Inji) Ismail 
                </a>
                <a class="item" href="#about" onClick={() => setCurrentPage("About")}>
                    About Me
                </a>
                <a class="item" onClick={() => setCurrentPage("ContactForm")}>
                    Contact
                </a>
                <a class="item" onClick={() => setCurrentPage("Portfolio")}>
                    Portfolio
                </a>
                <a class="item" href={myResume}>
                    My Resume
                </a>
            </div>
        </div>
        
    );

}

export default Nav;