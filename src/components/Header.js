import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <img src="../media/logo.png" alt="" className="logo"/>
                <nav className="menu">
                    <a href="#concept">Concept</a>
                    <a href="#valeurs">Nos Valeurs</a>
                    <a href="#chaine">Notre Chaîne</a>
                    <a href="#ressources">Ressources</a>
                    <a href="#newsletter">Newsletter</a>
                </nav>
        </header>
    );
};

export default Header;