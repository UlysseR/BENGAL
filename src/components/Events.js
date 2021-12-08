import React from 'react';
import lance from '../media/SVG/lance-toi.svg'
import Event1 from "../media/events/event1.webp"
import ReactFloaterJs from 'react-floaterjs';
import Event2 from "../media/events/event2.webp"
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
const Events = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div data-aos="fade-up" className="events-container">
                <div className="events-title">Rejoins nos évènements !</div>
                <div className="events-content">
                    <p>
                        Participe à nos évènements pour confronter tes idées, rencontrer tes pairs, et peut-être découvrir tes futurs collaborateurs !
                    </p>
                </div>
                <ReactFloaterJs>
                    <div className="event-card">
                        <img src={Event1}></img>
                    </div>
                    <div className="event-card2">
                        <img src={Event2}></img>
                    </div>
                </ReactFloaterJs>
            </div>

            <div className="container-all-events">
                <div data-aos="fade-up" className="all-events">TOUS LES EVENEMENTS <NavLink exact to="/evenements">
                    <img className="lance" src={lance}></img></NavLink>
                </div>

            </div>
        </>
    );
};

export default Events;