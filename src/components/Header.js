import React from 'react';
import logo from '../media/logo.png'
import hamburger from '../media/SVG/hamburger.svg'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <header data-aos="fade" data-aos-delay="1200" className="header">
            <img src={logo} alt="Logo de Tremplin" className="logo" />
            <img className="hamburger" src={hamburger} ></img>
            <nav className="menu">
                <a href="#videos">Nos vidéos</a>
                <a href="#ressources">Nos ressources</a>
                <a href="#events">Nos évenements</a>
            </nav>
        </header>
    );
};

export default Header;