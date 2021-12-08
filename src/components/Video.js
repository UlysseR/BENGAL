import React from "react";
import chat from "../media/illustration/chat.svg";
import lance from "../media/illustration/lance.svg";
import ReactFloaterJs from "react-floaterjs";
import LastVid from "../media/SVG/last-vid.svg";
import Search from "../media/SVG/search.svg";
import Date from "../media/SVG/date.svg";
import Vid1 from "../media/illustration/vid1.svg";
import Vid2 from "../media/illustration/vid2.svg";
import Vid3 from "../media/illustration/vid3.svg";
import Vid4 from "../media/illustration/vid4.svg";
import Vid5 from "../media/illustration/vid5.svg";
import Vid6 from "../media/illustration/vid6.svg";
import Lance from "../media/SVG/lance.svg";
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";

const Video = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
  return (
    <>
      <div className="container-top-video">
        <ReactFloaterJs>
          <div data-aos="fade-right" data-aos-delay="200" className="title-top">
            Nos Vidéos
            <div className="sous-titre-video1">
              Retrouvez toutes nos dernières vidéos <br></br>  sur notre chaîne YouTube ici
              :
            </div>
            <div data-aos="fade" className="show-more-video">
              VOIR LA CHAINE <img src={lance} alt="Voir la chaine youtube" />
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            className="img-top-video"
            src={chat}
            alt="Chat surfant sur le web"
          ></img>
        </ReactFloaterJs>
      </div>

      <div className="container-video1">
        <div className="last-vid" data-aos="fade-right">Dernière vidéo</div>
        <img className="last-vid-img" src={LastVid} data-aos="fade-right" alt="La dernière video"></img>
        <div className="sous-titre-last-vid" data-aos="fade-up">Entreprendre en partant de rien, est ce possible ?</div>
        {/* search bar */}
        <div className="search-vid" data-aos="fade" data-aos-delay="400">
          <input
            className="form-mail"
            type="mail"
            placeholder="Rechercher "
            id="email"
            size="37"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="send-mail" src={Search} alt="Rechercher une video"></img>
        </div>
        <div className="filter" data-aos="fade">
          Trier par : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <img className="send-mail" src={Date}></img>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vues
        </div>
      </div>

      <div className="videos-grid">
        <div className="video1"  data-aos="fade-right">
          <img src={Vid1} alt="Entreprendre en partant de rien..."></img>
          <div className="titre-vid">Entreprendre en partant de rien...</div>
        </div>
        <div className="video2"  data-aos="fade-right" data-aos-delay="150">
          <img src={Vid2} alt="Comment trouver des fonds pour..."></img>
          <div className="titre-vid">Comment trouver des fonds pour...</div>
        </div>
        <div className="video3" data-aos="fade-right" data-aos-delay="300">
          <img src={Vid3} alt="5 choses à savoir avant de vous lancer"></img>
          <div className="titre-vid">5 choses à savoir avant de vous lancer</div>
        </div>
        <div className="video4" data-aos="fade-left">
          <img src={Vid4} alt="Histoire d’entrepreneur : Terry LTAM nous raconte"></img>
          <div className="titre-vid">Histoire d’entrepreneur : Terry LTAM nous raconte</div>
        </div>
        <div className="video5" data-aos="fade-left" data-aos-delay="150">
          <img src={Vid5} alt="Comment être un bon
            patron ?"></img>
          <div className="titre-vid">Comment être un bon
            patron ?
          </div>
        </div>
        <div className="video6" data-aos="fade-left"  data-aos-delay="300">
          <img src={Vid6} alt="Besoin d’aides ? 6 aides pour commencer"></img>
          <div className="titre-vid">Besoin d’aides ? 6 aides pour commencer</div>
        </div>
      </div>
      <div data-aos="fade" className="show-more-vid">
        VOIR PLUS <img src={Lance} alt="Vers la chaine youtube" />
      </div>
    </>
  );
};

export default Video;
