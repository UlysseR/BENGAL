import React from 'react';
import Logo from '../media/logoNEWS.svg';
import Line from '../media/illustration/line.svg';
import Jump from '../media/illustration/jump.svg';
import Phone from '../media/illustration/phone.svg';
import Books from '../media/illustration/books.svg';
import Lance from '../media/SVG/lance.svg';
import Baloon from '../media/illustration/baloon.svg';
import { NavLink } from 'react-router-dom';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Landing = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div data-aos="fade" className="header-landing"><img src={Logo}></img></div>
            <div className="container-landing">
                <div className="container-1" data-aos="fade" daya-aos-delay="150">
                    <div className="title-landing">
                        Tu veux <br></br>
                        devenir entrepreneur ?
                        <div className="sous-titre-landing">  Découvre nos 3 outils pour te lancer dans l’entrepreneuriat</div>
                    </div>
                    <img className="img-container" src={Jump}  data-aos="fade" daya-aos-delay="150"></img>
                </div>
                <div className="container-2">
                    <div className="title-landing">
                        Des videos pour <br></br>t’accompagner
                        <div className="sous-titre-landing">  Sous formats de podcasts, talks, tutos... tu trouveras tout ce qu’il te faut sur la chaine Tremplin.  </div>
                    </div>
                </div>
                <img className="img-phone" src={Phone}></img>
                <div className="container-3">
                    <div className="title-landing">
                        Des clefs pour t’y <br></br> retrouver
                        <div className="sous-titre-landing"> Une mise à disposition de ressources et de <br></br> guides pour t’aider dans tes démarches. </div>
                    </div>
                    <div data-aos="fade" className="all-ressources">TOUTES LES RESSOURCES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={Lance}></img></div>
                    <img className="img-container" src={Books}></img>
                </div>
                <div className="container-4">
                    <div className="title-landing">
                        Des évènements <br></br> pour vous rencontrer
                        <div className="sous-titre-landing">  Débattre et confronter vos idées, rencontrer vos pairs, et
                            peut-être découvrir vos futurs collaborateurs !   </div>
                    </div>
                    <div data-aos="fade" className="all-ressources">TOUS LES EVENEMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={Lance}></img></div>
                </div>
                <img className="img-baloon" src={Baloon}></img>
                <div className="container-5">
                    <div className="title-landing">
                     Rejoins-nous.<img className="lance" src={Lance}></img>
                    </div>
                </div>
                <div className="container-line" data-aos="fade" daya-aos-delay="250">
                    <img className="line" src={Line}></img>
                </div>
            </div>
        </>
    );
};

export default Landing;