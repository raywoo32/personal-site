// Art.js

// packages
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Collapsible from 'react-collapsible';

import a1 from '../assets/acrylicPainting/a.jpg'
import a2 from '../assets/acrylicPainting/b.jpg'
import a3 from '../assets/acrylicPainting/c.jpg'
import a4 from '../assets/acrylicPainting/d.jpg'
import a5 from '../assets/acrylicPainting/e.jpg'

import d1 from '../assets/digitalPortraits/1.png'
import d2 from '../assets/digitalPortraits/2.jpg'
import d3 from '../assets/digitalPortraits/3.jpg'
import d4 from '../assets/digitalPortraits/4.jpg'


// css
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Art() {
    return (
        <div >
            <Collapsible trigger="Art" triggerOpenedClassName="mainCol" triggerClassName ="mainCol" >
                <p className="description"> 
                    Art has always been my one of my passions! In the past I have focused on traditional mediums like 
                    acrylic painting and watercolour but recently I have been trying to develop my digital and graphic design skills. 
                    These are all projects  that have been completed in the last 4 years. For more of my work please check out my
                    <a href="https://www.instagram.com/rachelattemptstoart/"> Instagram</a>!
                </p>
       
                    <Collapsible trigger="Digital Portraits"  triggerOpenedClassName="subCol" triggerClassName ="subCol" >
                    <div className="margins-inner">
                    <p className="description-inner"> 
                    The following are all part of my "Digital Portraits" series
                    where I use photoshop drawings
                    to explore surrealism through the female form. 
                    </p>
                    <Carousel autoPlay className="carousel">
                    <div>
                        <img src={d1} alt="" />
                    </div>
                    <div>
                        <img src={d2} alt="" />
                    </div>
                    <div>
                        <img src={d3} alt="" />
                    </div>
                    <div>
                        <img src={d4} alt="" />
                    </div>
                    </Carousel>
                    </div> 
                    </Collapsible>   

                    <Collapsible trigger="Acrylic Painting"  triggerOpenedClassName="subCol" triggerClassName ="subCol" >
                    <div className="margins-inner">
                    <p className="description-inner"> 
                    I love to paint scenes that I find peaceful. I am currently working 
                    on a series involving various animals wearing funny accessories. I have a very 
                    painterly style and love to make works with lots of movement and colour. 
                    </p>
                    <Carousel autoPlay className="carousel">
                    <div>
                        <img src={a1} alt="" />
                    </div>
                    <div>
                        <img src={a2} alt="" />
                    </div>
                    <div>
                        <img src={a3} alt="" />
                    </div>
                    <div>
                        <img src={a4} alt="" />
                    </div>
                    <div>
                        <img src={a5} alt="" />
                    </div>
                    </Carousel>
                    </div> 
                    </Collapsible>   
                   

            </Collapsible>
        </div>
    );
}

export default Art;
//<Link to="/files/myfile.pdf" target="_blank" download>Download</Link>
