import React from 'react';
import fichier29 from '../media/SVG/fichier29.svg'
import fichier25 from '../media/SVG/fichier25.svg'

const Newsletter = () => {
    return (
        <>
        <div className="container-newsletter">
            <img className="n-icon" src={fichier25} alt=""></img>
            <div className="newsletter-title">Newsletter</div>
            <div className="newsletter-content">
                <p>Abonnez vous à notre newsletter pour rester informer sur nos activités
                et nos ouvelles vidéos pour devenir un entrepeneur exemplaire</p>
            </div>
        </div>
        <div className="mail">
            <img className="send" src={fichier29} alt=""></img>
            <input className="form-email" type="email" placeholder="E-mail" id="email"  size="37"></input>
        </div>

        </>
    );
};

export default Newsletter;