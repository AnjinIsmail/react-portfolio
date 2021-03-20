import React from 'react';
import profileImage from "../../assets/profile/profile-image.png";
import './about.css'




const About = () => {
    return (
        <div className="about-container">
            <img id="about-img" src={profileImage} alt="profile" />
        <div className="about-content">
            <header className="about-header">
              Recent Full-stack Web Developer
            </header>
            <p> I was always interested in learning coding and finally took the
            leap and joined the UC Berkeley BootCamp. <br />
            It challenged me to
              think outside the box and explore new skills.</p>
        </div>
        </div>


    );
}

export default About;

