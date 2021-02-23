import React from 'react';
import profileImage from "../../assets/profile/profile-image.png";




const About = () => {
    return (

        <section className="my-5">
            <h1 id="about">About me</h1>
            <img src={profileImage} className="my-2" style={{ width: "10%" }} alt="profile" />
            <br/>   
            <div className= "me">
            <p> I was always interested in learning coding and finally took the
            leap and joined the UC Berkeley BootCamp. <br />
            It challenged me to
              think outside the box and explore new skills.</p>
              </div>
        </section>

    );
}

export default About;


