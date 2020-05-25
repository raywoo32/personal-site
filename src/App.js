// App.js

// packages
import React from 'react';

// image assets 
import logo from './assets/headerLogo.svg';
import linked from './assets/socials/linkedin.png';
import ig from './assets/socials/instagram.png';
import github from './assets/socials/github.png';


// css
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";

//Dummy components (section headres )
import Bioinformatics from './sections/Bioinformatics';
import Coding from './sections/Coding';
import Art from './sections/Art';
import HCI from './sections/Human Computer Interaction'
//import Contact from './sections/Contact';


function App() {
    return (
        <div >
            <header className="header">
                <img alt="" src={logo} className="logo" />
            </header>

            <body className="body">
                <p className="description">
                    Hello, and welcome to my website! I am Rachel Woo, in Fall 2020 I will be a masters student
                    at the University of Waterloo at the&nbsp;
                    <a rel="noopener noreferrer" target="_blank" href="https://uwaterloo.ca/human-computer-interaction-health-lab/">
                        Human Computer Interaction and Health Lab.
                    </a>
                      &nbsp; Thanks for visiting!
                </p>
                <Bioinformatics></Bioinformatics>
                <Coding></Coding>
                <Art></Art>
                <HCI></HCI>

            </body>

            <footer className="footer">
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/rachel-sam-woo/">
                    <img alt="" src={linked} className="social" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/rachelattemptstoart/">
                    <img alt="" src={ig} className="social" />
                </a>
                <a rel="noopener noreferrer" target="_blank" href="https://github.com/raywoo32">
                    <img alt="" src={github} href="https://github.com/raywoo32" className="social" />
                </a>
            </footer>
        </div>
    );
}

export default App;

// TODO make component for art, crop so they are all the same dimensions 

// citations: 
/*
https://craftcode.design/contact-form-with-react-and-php
https://craftcode.design/contact-form-with-react-and-php
*/


