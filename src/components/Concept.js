import React from 'react';
import more from '../media/SVG/more.svg';
import lamp from '../media/illustration/lamp.svg';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
const Concept = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div ></div>
            <div className="container-concept">
                <div  data-aos="fade-right">
                <div id="concept" className="circle"></div>
                <div  className="concept-title">Notre concept</div>

                </div>
                <img data-aos="fade-left"  className="lamp" src={lamp}></img>
            </div>
        </>
    );
};

export default Concept;