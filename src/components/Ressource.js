import React from 'react';
import soleil from '../media/SVG/soleil.svg';
import main from '../media/illustration/main.png'
import marteau from '../media/illustration/marteau.png'
import kichta from '../media/illustration/kichta.png'
import lance from '../media/SVG/lance-toi.svg'
import { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import ReactFloaterJs from 'react-floaterjs';

const Ressource = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section id="ressources" className="ressource">
                <div data-aos="fade" className="container-ressources">
                    <div ><img className="soleil" src={soleil}></img></div>
                    <div className="ressources-titre">Toutes les clefs pour entreprendre</div>
                </div>
                <article data-aos="fade-up" className="developper">
                    <h2>Développer son réseau</h2>
                    <p>
                        <i>“Seul on va plus vite, à plusieurs on va plus loin”.</i>&nbsp;
                        Ce dicton est particulièrement vrai quand on parle d’entrepreneuriat.
                        Le réseau est une clé de la ...
                    </p>
                    <img className="main" src={main} alt="Illustration développer son réseau"></img>
                </article>
                <article data-aos="fade-up" data-aos-delay="50" className="connaitre">
                    <h2>Connaître les outils légaux</h2>
                    <p>
                        Pour se lancer, il faut passer par étapes indispensables, mais ce n’est pas parce qu’elles sont
                        indispensables qu’elles sont compliqué. On vous guide à travers <br></br>...
                    </p>
                    <img className="marteau" src={marteau} alt="Illutsration connaître les outils légaux"></img>
                </article>
                <article data-aos="fade-up" data-aos-delay="15" className="aide">
                    <h2>Des aides pour moi ?</h2>
                    <p>
                        Il est souvent difficile de savoir quelles aides sont disponibles pour monter une entreprise.
                        On vous fait un méga résumé de tout ce qui pourrait vous faciliter ...
                    </p>
                    <img className="kichta" src={kichta} alt="Illustration des aides pour moi ?"></img>
                </article>


            </section>
            <NavLink exact to="/ressources">
                <div data-aos="fade" className="all-ressources">TOUTES LES RESSOURCES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <img className="lance" src={lance} alt="Boutton vers toutes les ressources"></img></div>
            </NavLink>
        </>
    );
};

export default Ressource;