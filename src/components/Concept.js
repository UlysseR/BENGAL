import React from 'react';
import more from '../media/SVG/more.svg';

const Concept = () => {
    return (
        <>
            <div className="container-concept">
                <div className="circle"></div>
                <div className="concept-title">Notre concept</div>
            </div>
            <div className="concept-p">
                <p>
                    Nous avons créé une plateforme qui facilite l’accessibilité à l’entrepreneuriat,
                    menée principalement par une chaîne Youtube avec plein de tutos qui donnerait des
                    clés simples et claires pour pousser à se lancer. Nous croyons en un entrepreneuriat
                    accessible à tous. Notre but est de vous prouver qu’avec les bonnes ressources et les
                    bons outils en mains, rien ne peut vous arrêter.
                </p>
               <a><img className="more" src={more}></img></a> 
                
              
            </div>  
            <div className="quote">
                <i class="fas fa-quote-left">&nbsp;&nbsp;</i>Vous avez tout ce qu’il faut, alors lancez vous&nbsp;&nbsp;<i class="fas fa-quote-right"></i>
            </div>
        </>
    );
};

export default Concept;