import React from 'react';
import lance from '../media/SVG/lance-toi.svg'
import Video1 from '../media/SVG/video1.svg'
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Chaine = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
        <div  id="videos" ></div>
            <div className="video-container">
                <div  data-aos="fade-down" className="video-title">Une vidéo pour te guider</div>
                <div  data-aos="fade-up" className="video-content">
                    Ici tu peux retrouver toutes les ressouces, outils et état d’esprit à acquérir pour commencer dans l’entrepreneuriat.
                    Une aide personnalisé pas à pas qui s’applique à toute sorte d’entrepreneuriat pour tout type de futurs entrepreneurs.
                    Sous formats de podcasts, talks, tutos... tu trouveras tout ce qu’il te faut sur la chaine Tremplin.                                
                    <div className="video"><img src={Video1}></img></div>    
                </div>
            </div>
        </>
    );
};

export default Chaine;

// {/* <div data-aos="fade-right" className="tremplin-title">
//                     <p className="t1">Tremplin,</p>
//                     <p className="t2">la chaine Youtube qu'il vous faut</p>
//                 </div>
//                 <div data-aos="fade-left" className="tremplin-ytb">

//                 </div>
//                 <div data-aos="fade-right" className="tremplin-content">
//                     Tremplin est une plateforme, mais surtout une chaine Youtube ou l’on peut retrouver toutes les ressouces, outils et
//                     état d’esprit à acquérir pour commencer dans l’entrepreneuriat.
//                     Une aide personnalisé pas à pas qui s’applique à toute sorte d’entrepreneuriat pour tout type de futurs entrepreneurs.
//                     Sous formats de podcasts, talks, tutos... vous trouverez tout ce qu’il vous faut sur la chaine Tremplin.
//                 </div>
//                 <div data-aos="fade-right" className="container-lance-toi">
//                     <div className="lance-toi">Lance toi !</div>
//                     <div className="container-img"> <img className="lance-img" src={lance}></img></div>
//                 </div> */}