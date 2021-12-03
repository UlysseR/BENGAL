import React from 'react';
import logo from '../media/logo.png'
import hamburger from '../media/SVG/hamburger.svg'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import { NavLink } from 'react-router-dom';
const Header = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <header data-aos="fade" data-aos-delay="600" className="header">
        <NavLink exact to="/"> 
          <img src={logo} alt="Logo de Tremplin" className="logo" />
          </NavLink>
            <img className="hamburger" src={hamburger} ></img>
            <nav className="menu">
                <NavLink exact to="/video">
                    <a href="#videos">Nos vidéos</a>
                </NavLink>

                <NavLink exact to="/ressources">
                    <a href="#ressources">Nos ressources</a>
                </NavLink>

                <NavLink exact to="/evenements">
                    <a href="#events">Nos évenements</a>
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;