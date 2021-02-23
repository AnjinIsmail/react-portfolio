import myResume from "../../assets/profile/Resume_AnjiIsmail.pdf";
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


// function MyPdf() {
//     return (

//         <a href={myResume} download="Resume_AnjiIsmail">Download Resume</a>
//     )

// }


function MyPdf() {
    return (
        <div className="App">
            <a href={myResume}>My Resume</a>
        </div>
    );

}




// class MyPdf extends Component {

//     render() {

//         return (
//             <div className="App">
//                 <a href={myResume} target="_blank">as Pdf</a>
//             </div>
//         );

//     }
// }

// function MyPdf() {

//     const [numPages, setNumPages] = useState();
//     const [pageNumber, setPageNumber] = useState(1);



//     function onDocumentLoadSuccess({ numPages }) {
//         setNumPages(numPages);
//     }
//     return (
//         <div>
//             <Document
//                 file={myResume}
//                 onLoadSuccess={onDocumentLoadSuccess}
//             >
//                 <Page pageNumber={pageNumber} />

//             </Document>
//             <p>
//                 Page {pageNumber} of {numPages}
//             </p>
//         </div>
//     );

// }


export default MyPdf;