// Coding.js

// packages
import React from 'react';
import Collapsible from 'react-collapsible';

// css
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Coding() {
    return (
        <div >
            <Collapsible trigger="Other Projects" triggerOpenedClassName="mainCol" triggerClassName="mainCol" >
                <p className="description">
                    These are extracurricular coding projects that don't easily fall into other categories.
                    </p>
                <Collapsible trigger="Brain-Tag" triggerOpenedClassName="subCol" triggerClassName="subCol" >
                    <div className="margins-inner">
                        <h3 className="subheading"> <a href="https://neurotechuoft.com/" rel="noopener noreferrer" target="_blank" >Neurotech UofT</a>  </h3>
                        <h3 className="date"> 2019-present </h3>
                        <p className="description-inner">
                            This project is a part of my work in Neurotech UofT's Front-end development team. The goal of Brain-tag is to create a ReactJS app to
                            aid in the tagging of EEG data for future machine learning. My role involves visualizing the data taken from the EEG headset
                            as a PSD graph to more easily identify a positive signal. For this project I attended regular group
                            coding sessions where we worked as part of a larger team and used the agile development cycle.
                    </p>
                        <div className="button-container">
                            <a rel="noopener noreferrer" target="_blank" href="https://github.com/neurotechuoft/BrainTag">
                                <button className="inner-button"> GitHub Repo </button>
                            </a>
                        </div>
                    </div>
                </Collapsible>
            </Collapsible>
        </div>
    );
}

export default Coding;

// TODO make component for art, crop so they are all the same dimensions 

// citations: 
/*
https://craftcode.design/contact-form-with-react-and-php
*/