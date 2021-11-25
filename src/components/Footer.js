import React from 'react';
import logo_tremplin from '../media/logo_tremplin.png';
import fichier15 from '../media/SVG/fichier15.svg';
import fichier18 from '../media/SVG/fichier18.svg';
import fichier19 from '../media/SVG/fichier19.svg';
import fichier17 from '../media/SVG/fichier17.svg';

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer-left">
                <img src={logo_tremplin} alt="" className="logo-text"/>
            </div>
            <div className="footer-center">
                <p>
                    <a className="text-mail" href="mailto:bengal.dcp@gmail.com" className="fa fa-envelope">bengal.dcp@gmail.com</a>
                </p>
                <p className="footer-company-name">© Tremplin 2021·Confidentialité·Conditions générales·Plan du site·Fonctionnement du site·Infos sur l'entreprise</p>             
            </div>
            <div className="footer-right">
                <div className="ligne1">
                    <a target="_blank" href="https://www.instagram.com/_tremplin_/"><img src={fichier15} alt=""></img></a>
                    <a target="_blank" href="https://twitter.com/Tremplin_/with_replies"><img src={fichier18} alt=""></img></a>
                    <a target="_blank" href="https://www.tiktok.com/@tremplindispositif?lang=fr"><img src={fichier19} alt=""></img></a>
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100075059184328"><img src={fichier17} alt=""></img></a>
                </div>
            </div>
        
        </footer>
    );
};

export default Footer;