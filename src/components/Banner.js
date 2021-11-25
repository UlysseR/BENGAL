import React from 'react';
import ban from '../media/ban.png';

const Banner = () => {
    return (
    <section className="banner">
        <div className="ban-img">
            <img src={ban}alt="Sportif de haut niveau qui démarre une course"/>
        </div>
        <div className="inner-banner">
            <p>TU VEUX ENTREPRENDRE ?</p>
            <p>FONCE</p> 
            <p>ON VA T’AIDER.</p>   
        </div>
    </section>
    );
};

export default Banner;