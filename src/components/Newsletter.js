import React from 'react';
import logoNews from '../media/logoNEWS.svg';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Newsletter = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>

        <div className="news-container">
                <img className="news-logo" src={logoNews}></img>
            <div className="news-content">
                <div className="news-title">Inscrivez vous à la Newsletter</div>
                <input className="news-mail" type="email" placeholder="E-mail" id="email" size="37"></input>
            </div>
        </div>



            {/* <div data-aos="fade" className="container-newsletter">
                <img className="n-icon" src={fichier25} alt=""></img>
                <div className="newsletter-title">Newsletter</div>
            </div>
            <div data-aos="fade" className="newsletter-content">
                <p>Abonnez vous à notre newsletter pour rester informer sur nos activités
                    et nos ouvelles vidéos pour devenir un entrepeneur exemplaire</p>
            </div>
            <div className="mail">
                <img data-aos="fade" className="send-btn" src={fichier29} alt=""></img>
                <input data-aos="fade" className="form-email" type="email" placeholder="E-mail" id="email" size="37"></input>
            </div> */}

        </>
    );
};

export default Newsletter;