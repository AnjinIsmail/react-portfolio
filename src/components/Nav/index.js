import React from 'react';
import myResume from "../../assets/profile/Resume_AnjiIsmail.pdf";


function Nav(props) {
    const {
        setCurrentPage,
        aboutSelected,
        contactSelected,
        projectSelected,
 
    } = props;

    return (

        <header className="flex-row px-1" >

            < h1 >
                <span role="img" aria-label="camera"> Anji(Inji) Ismail  </span>
            
            </h1>

            <nav>
                <ul className="flex-row">

                    <li className={`mx-2 ${aboutSelected && 'navActive'}`}>

                        <a href="#about" onClick={() => setCurrentPage("About")}>
                            About me
            </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setCurrentPage("ContactForm")}>Contact</span>

                    </li>


                    <li className={`mx-2 ${projectSelected && 'navActive'}`}>
                        <span onClick={() => setCurrentPage("Portfolio")}> Portfolio</span>
                    </li>


                    <li className={`mx-2 ${projectSelected && 'navActive'}`}>
                        <div className="App">
                            <a href={myResume}>My Resume</a>
                        </div>
                    </li>
                </ul >
            </nav >
        </header >

    );

}

export default Nav;