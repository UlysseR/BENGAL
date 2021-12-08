import React from 'react';
import Logo from '../media/logoNEWS.svg';
import Line from '../media/illustration/line.svg';
import Jump from '../media/illustration/jump.svg';
import Line2 from '../media/SVG/line2.svg';
import Phone from '../media/illustration/phone.svg';
import Books from '../media/illustration/books.svg';
import Lance from '../media/SVG/lance.svg';
import ReactFloaterJs from "react-floaterjs";
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
            <div data-aos="fade" className="header-landing"><img src={Logo} alt="Logo tremplin"></img></div>
            <div className="container-landing" data-aos="fade" daya-aos-delay="250">
                <img className="line" src={Line}  ></img>
                <img className="line2" src={Line2} ></img>

                <div className="container-1">
                    <div className="title-landing">
                        Tu veux <br></br>
                        devenir entrepreneur ?
                        <div className="sous-titre-landing">  Découvre nos 3 outils pour te lancer dans l’entrepreneuriat</div>
                    </div>
                             <img className="img-container" src={Jump} data-aos="fade" daya-aos-delay="150" alt="Homme sautant"></img> 
                </div>
                <div className="container-2">
                    <div className="title-landing" data-aos="fade-up" data-aos-delay="250">
                        Des videos pour <br></br>t’accompagner
                        <div className="sous-titre-landing">  Sous formats de podcasts, talks, tutos... tu trouveras tout ce qu’il te faut sur la chaine Tremplin.  </div>
                       <NavLink exact to="/video"> <div data-aos="fade-up" daya-aos-delay="150" className="all-ressources">VOIR LES VIDEOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={Lance} alt="Vers nos ressources"></img></div> </NavLink>
                    </div>
                    <img className="img-phone" src={Phone} data-aos="fade-up" data-aos-delay="250" alt="Iphone"></img>
                </div>

                <div className="container-3">
                    <div className="title-landing" data-aos="fade-up" data-aos-delay="150">
                        Des clefs pour t’y <br></br> retrouver
                        <div className="sous-titre-landing"> Une mise à disposition de ressources et de <br></br> guides pour t’aider dans tes démarches. </div>
                    </div>
             <NavLink exact to="/ressources">       <div data-aos="fade-up" daya-aos-delay="150" className="all-ressources">TOUTES LES RESSOURCES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={Lance} alt="Voirs toutes nos ressources"></img></div> </NavLink>
                    <img className="img-container" src={Books} data-aos="fade-up" data-aos-delay="250" alt="Pile de livre"></img>
                </div>

                <div className="container-4" >
                    <div className="title-landing" data-aos="fade-up" data-aos-delay="150">
                        Des évènements <br></br> pour vous rencontrer
                        <div className="sous-titre-landing">  Débattre et confronter vos idées, rencontrer vos pairs, et
                            peut-être découvrir vos futurs collaborateurs !   </div>
                    </div>
              <NavLink exact to="/evenements">      <div data-aos="fade-up" daya-aos-delay="150" className="all-ressources">TOUS LES EVENEMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={Lance} alt="Voir tous nos evenements"></img></div></NavLink>
                    <img className="img-baloon" src={Baloon} data-aos="fade-up" data-aos-delay="250" alt="Ballons"></img>
                </div>
                <div className="container-5" data-aos="fade-up" data-aos-delay="150">
                    <NavLink exact to="/home">
                        <div className="title-landing">

                            Rejoins-nous.<img className="lance" src={Lance} alt="Vers la page d'acceuil"></img>

                        </div>
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Landing;