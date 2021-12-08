import React from 'react';
import Event1 from "../media/events/event1.webp";
import Event2 from "../media/events/event2.webp";
import Event3 from "../media/events/event3.webp";
import Event4 from "../media/events/event4.webp";
import Event5 from "../media/events/event5.webp";
import Event6 from "../media/events/event6.webp";
import Baloon from "../media/illustration/baloon.svg";
import Search from "../media/SVG/search.svg";
import Date from "../media/SVG/date.svg";
import ReactFloaterJs from "react-floaterjs";
import Lance from "../media/SVG/lance.svg";

const Evenement = () => {
    return (
        <>
            <div className="container-top">
                <ReactFloaterJs>
                    <div data-aos="fade-right" data-aos-delay="200" className="title-top">
                        Nos Evenements
                        <div className="sous-titre-video">
                            Retrouvez tous nos évènement pour commencer à vous créer un réseau, parler de vos projets et échanger avec d’autres futurs entrepreneurs.
                        </div>
                    </div>
                    <img
                        data-aos="fade-left"
                        data-aos-delay="200"
                        className="img-top"
                        src={Baloon}
                    ></img>
                </ReactFloaterJs>
                <div className="mail" data-aos="fade" data-aos-delay="400">
                    <input
                        className="form-mail"
                        type="mail"
                        placeholder="Rechercher "
                        id="email"
                        size="37"
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img className="send-mail" src={Search}></img>
                </div>
                <div className="filter" data-aos="fade" data-aos-delay="400">
                    Trier par : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                    <img className="send-mail" src={Date}></img>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vues
                </div>
            </div>

            <div className="event-grid">
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="350"
                        className="event-1"
                    >
                        <img src={Event1} alt="" />
                    </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="event-2" >
                        <img src={Event2} alt="" />
                    </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="event-3" >
                        <img src={Event3} alt="" />
                    </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="event-4" >
                        <img src={Event4} alt="" />
                    </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="event-5" >
                        <img src={Event5} alt="" />
                    </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="200"
                        className="event-6" >
                        <img src={Event6} alt="" />
                    </div>
                </ReactFloaterJs>
            </div>
            <div data-aos="fade" className="show-more-events">
                VOIR PLUS <img src={Lance} alt="" />
            </div>

        </>
    );
};

export default Evenement;