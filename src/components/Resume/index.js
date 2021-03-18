import myResume from "../../assets/profile/Resume_AnjiIsmail.pdf";
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';



function MyPdf() {
    return (
        <div className="App">
            <a href={myResume}>My Resume</a>
        </div>
    );

}




export default MyPdf;