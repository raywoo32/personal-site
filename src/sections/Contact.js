// Art.js

// packages
import React from 'react';
import Collapsible from 'react-collapsible';
import axios from "axios";

// css
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Contact.css" 

function Contact() {
    return (
        <div >
            <Collapsible trigger="Contact" triggerOpenedClassName="mainCol" triggerClassName ="mainCol" >
                <div className="contact-margins">
                <form action="/action_page.php">
                <label className="contact-label">First Name</label>
                <input type="text"id="fname"name="firstname"placeholder="Your name.."/>
                <label className="contact-label">Last Name</label>
                <input type="text"id="lname" name="lastname" placeholder="Your last name.."/>
                
                <label className="contact-label">Email</label> 
                <input type="email"id="email"name="email"placeholder="Your email"/>
                
                <label className="contact-label">Subject</label>
                <textarea id="subject"name="subject"placeholder="Write something.."></textarea>
                <input type="submit"value="Submit"/>
                </form>
                </div>
            </Collapsible>
        </div>
    );
}

export default Contact;

//https://craftcode.design/contact-form-with-react-and-php