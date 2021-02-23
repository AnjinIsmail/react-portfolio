import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About ';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import MyPdf from './components/Resume';
import Footer from './components/Footer';



function App() {
  const [currentPage, setCurrentPage] = useState("About");

  const showComponent = () => {
    let component;
    switch (currentPage) {
      case ("About"):
        component = <About />;
        break;
      case ("ContactForm"):
        component = <ContactForm />;
        break;
      case ('Portfolio'):
        component = <Portfolio />;
        break;
      case ("MyPdf"):
        component = <MyPdf />;
        break;
        case ("Footer"):
          component = <Footer/>;
    }
    return component;
  }

  const setComponent = (e) => {
    e.preventDefault(e);
  }

  const [contactSelected, setContactSelected] = useState();
  const [projectSelected, setProjectSelected] = useState();
  const [aboutSelected, setAboutSelected] = useState();




  return (

    <div>
      <Nav
        setCurrentPage={setCurrentPage}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            {showComponent()}
          </>
        ) : (
            <ContactForm>
            </ContactForm>
          )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
