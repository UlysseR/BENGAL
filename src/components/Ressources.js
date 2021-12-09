import React from "react";
import Books from "../media/illustration/books.svg";
import Search from "../media/SVG/search.svg";
import Date from "../media/SVG/date.svg";
import Monkey from "../media/SVG/monkey.svg";
import Virus from "../media/SVG/virus.svg";
import Note from "../media/SVG/note.svg";
import Brain from "../media/SVG/brain.svg";
import Hammer from "../media/SVG/hammer.svg";
import People from "../media/SVG/people.svg";
import ThumbUp from "../media/SVG/thumb-up.svg";
import ReactFloaterJs from "react-floaterjs";
import Lance from "../media/SVG/lance.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Ressources = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-top">
        <ReactFloaterJs>
          <div data-aos="fade-right" data-aos-delay="200" className="title-top">
            Nos Ressources
            <div className="sous-titre-video">
              Nos articles sont des outils qui vont vous permettre de mieux
              appréhender votre future vie d’entrepreneur.
            </div>
          </div>
          <img
            data-aos="fade-left"
            data-aos-delay="200"
            className="img-top"
            src={Books}
            alt="Pile de livre illustrant nos ressources"
          ></img>
        </ReactFloaterJs>
        <div className="mail" data-aos="fade" data-aos-delay="400">
          <input
            className="form-mail"
            type="mail"
            placeholder="Rechercher "
            id="email"
            size="37"
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <img className="send-mail" src={Search} alt="Rechercher une ressources"></img>
        </div>
        <div className="filter" data-aos="fade" data-aos-delay="400">
          Trier par : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <img className="send-mail" src={Date}></img>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vues
        </div>
      </div>

      <div className="ressources-grid">
        <ReactFloaterJs>
          <div
            data-aos="fade-right"
            data-aos-delay="350"
            className="ressource-1"
          >
            <div className="ress-title">
              Connais-toi toi même.{" "}
              <p className="grid-p">
                Avant d’entreprendre il faut savoir qui on est, qu’elle genre de
                personne on est. Comment les autres nous perçoivent et comment
                on se voit nous-même.
              </p>
            </div>

            <div className="ressource-bottom">
              <img className="ress-img" src={Monkey} alt="Connais-toi toi même." />
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            className="ressource-2"
          >
            <div className="ress-title">
              Covid et entrepreneuriat : Bilan.
              <p className="grid-p">
                L’état de l’entrepreneuriat après la crise du Covid-19, qu'en
                conclure ? Un plan d’envergure pour aider les entreprises après
                le Coronavirus ?
              </p>
            </div>
            <div className="ressource-bottom">
              <img className="ress-img" src={Virus} alt=" Covid et entrepreneuriat : Bilan."/>
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="Pouce en l'air" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <div data-aos="fade-right" className="ressource-3">
            <div className="ress-title">
              6 aides pour lancer sa micro-entreprise.{" "}
              <p className="grid-p">
                Retrouvez des astuces et aides financières que vous pouvez avoir
                pour vous lancer sans soucis.
              </p>
            </div>
            <div className="ressource-bottom">
              <img className="ress-img" src={Note} alt="6 aides pour lancer sa micro-entreprise."/>
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="Pouce en l'air" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <div data-aos="fade-left" className="ressource-4">
            <div className="ress-title">
              Mindset de l’entrepreneur.
              <p className="grid-p">
                Les qualités et l’état d’esprit qu’il faut avoir pour réussir en
                entreprise.
              </p>
            </div>
            <div className="ressource-bottom">
              <img className="ress-img" src={Brain} alt="Mindset de l’entrepreneur."/>
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="Pouce en l'air" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="ressource-5"
          >
            <div className="ress-title">
              Statut juridique : Pour entreprendre seul et sans sous.{" "}
              <p className="grid-p">
                Qu’est-ce que le statut juridique d’une entreprise ? Quel statut
                juridique choisir pour mon entreprise ?
              </p>
            </div>
            <div className="ressource-bottom">
              <img className="ress-img" src={Hammer} alt=" Statut juridique : Pour entreprendre seul et sans sous."/>
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="Pouce en l'air" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
          <div
            data-aos="fade-left"
            data-aos-delay="350"
            className="ressource-6"
          >
            <div className="ress-title">
              Les différents types d’entrepreneuriats{" "}
              <p className="grid-p">
                Il existe plusieurs formes d’entrepreneuriat dans lesquelles tu
                peux te lancer. Chacune d’entre elles possède ses avantages et
                ses inconvénients.
              </p>
            </div>
            <div className="ressource-bottom">
              <img className="ress-img" src={People} alt="Les différents types d’entrepreneuriats"/>
              <div className="ress-txt">
                21 nov 2021{" "}
                <span className="likes">
                  260 <img className="ThumbUp" src={ThumbUp} alt="Pouce en l'air" />
                </span>
              </div>
            </div>
          </div>
        </ReactFloaterJs>
      </div>
    </>
  );
};

export default Ressources;
