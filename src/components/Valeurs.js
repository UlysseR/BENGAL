import React from 'react';
import logon from '../media/SVG/logo-n.svg'

const Valeurs = () => {
    return (
        <>
        <div className="container-valeurs">
            <div ><img className="logo-n" src={logon}></img></div>
            <div className="valeurs-title">Nos valeurs</div>
        </div>      
                <div className="container-1">
                    <span className="span1">1.</span>
                    <div className="text-1">
                    Partir de rien pour créer quelque chose vous 
                    permet d’être libre. Libre de commencer avec ce que vous voulez et 
                    d’imaginer toutes les possibilités créatives pour marquer votre 
                    identité.
                </div>
                </div>
                <div className="container-2">
                    <span className="span2">2.</span>
                    <div className="text-2">
                    Bâtir une société demande du temps, 
                    des sacrifices mais surtout de ne jamais 
                    laisser tomber quelque soit les obstacles. 
                    Nous souhaitons offrir le meilleur pour que 
                    notre communauté sache qu’il ne faut jamais 
                    abandonner.

                </div>
                </div>


            </>
    );
};

export default Valeurs;