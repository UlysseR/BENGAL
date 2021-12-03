import React from "react";
import chat from "../media/illustration/chat.svg";
import lance from "../media/illustration/lance.svg";
import ReactFloaterJs from "react-floaterjs";

const Video = () => {
  return (
    <>
      <div className="container-top-video">
        <ReactFloaterJs>
          <div data-aos="fade-right" data-aos-delay="200" className="title-top">
            Nos Vidéos
            <div className="sous-titre-video">
              Retrouvez toutes nos dernières vidéos sur notre chaîne YouTube ici
              :
            </div>
            <div data-aos="fade" className="show-more-video">
              VOIR PLUS <img src={lance} alt="" />
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            className="img-top-video"
            src={chat}
          ></img>
        </ReactFloaterJs>
      </div>
      {/* </div>
            <article className="vid">
                <h2>Dernière vidéo</h2>
                <iframe></iframe>
                <h3>Titre de la vidéo</h3>
            </article>
            <article className="lesvids">
                <div className="recherchebientot">RECHERCHE BIENTOT !!</div>
                <div className="gridvid">
                    <div className="vid1"><h3>Titre de la vidéo</h3></div>
                    <div className="vid2"><h3>Titre de la vidéo</h3></div>
                    <div className="vid3"><h3>Titre de la vidéo</h3></div>
                    <div className="vid4"><h3>Titre de la vidéo</h3></div>
                    <div className="vid5"><h3>Titre de la vidéo</h3></div>
                    <div className="vid6"><h3>Titre de la vidéo</h3></div>
                </div>
                <div className="voir">voir plus<img classname="plus" src={lance} alt=""></img></div>
            </article> */}
    </>
  );
};

export default Video;
