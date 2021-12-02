import React from 'react';
import lance from '../media/SVG/lance-toi.svg'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
const Events = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div id="events"></div>
            <div  data-aos="fade-up"  className="events-container">
                <div className="events-title">Rejoins nos évènements !</div>
                <div className="events-content">
                    <p>
                    Participe à nos évènements pour confronter tes idées, rencontrer tes pairs, et peut-être découvrir tes futurs collaborateurs !  
                    </p>
                </div>
            </div>
                <div data-aos="fade-up" className="all-events">TOUS LES EVENEMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={lance}></img></div>
        </>
    );
};

export default Events;