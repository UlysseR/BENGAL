import React from 'react';
import logon from '../media/SVG/logo-n.svg';
import img1 from '../media/illustration/1.svg';
import img2 from '../media/illustration/2.svg';
import img3 from '../media/illustration/3.svg';
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import ReactFloaterJs from 'react-floaterjs';

const Valeurs = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <div data-aos="fade" data-aos-delay="50" className="container-valeurs" id="valeurs">
                <div><img className="logo-n" src={logon}></img></div>
                <div className="valeurs-title">Nos valeurs</div>
            </div>

            <div className="grid-valeurs">
                <ReactFloaterJs>
                <div data-aos="fade-right"className="engagement">
                    <img className="grid-img" src={img1}></img>
                    <div className="grid-title">Engagement :
                        <p className="grid-p">
                            Nous nous engageons à vous donner tout ce qu’il faut pour réussir et faire vivre vos idées.
                        </p>
                    </div>
                </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <div data-aos="fade-left" data-aos-delay="50" className="accessibilite">
                    <img className="grid-img" src={img2}></img>
                    <div className="grid-title">Accessibilité :
                        <p className="grid-p">
                            Rendre  accessible les aspects de l’entrepreneuriat qui peuvent vous parâitre insurmontables.

                        </p>
                    </div>
                </div>
                </ReactFloaterJs>
                <ReactFloaterJs>
                <div data-aos="fade-right" data-aos-delay="70" className="pragmatisme">
                    <img className="grid-img" src={img3}></img>
                    <div className="grid-title">Pragmatisme :
                        <p className="grid-p">
                            Garder un oeil neutre sur l’entrepreneuriat et ses difficultés, afin de ne pas vous guider dans des faux semblants.

                        </p>
                    </div>
                </div>
                </ReactFloaterJs>
            </div>


        </>
    );
};

export default Valeurs;