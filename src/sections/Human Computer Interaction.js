// Human Computer Interaction.js 

// packages
import React from 'react';
import Collapsible from 'react-collapsible';

// css
import "react-responsive-carousel/lib/styles/carousel.min.css";

function HCI() {
    return (
        <div >
            <Collapsible trigger="HCI" triggerOpenedClassName="mainCol" triggerClassName="mainCol" >
                <p className="description">
                    As I have yet to start my masters this section is rather sparse. Thus far, the only relevant work I have
                    done is user testing and acting as a session chair for the Waterloo virtual CHI 2020 conference.
                    I am excited to dive deeper into this interesting field!
                </p>
            </Collapsible>
        </div>
    );
}

export default HCI;
