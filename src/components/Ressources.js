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
        </div>
       <img  data-aos="fade-left" data-aos-delay="200"  className="img-top" src={Books}></img>
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
          <img className="send-mail" src={Search}></img>
        </div>
        <div className="filter" data-aos="fade" data-aos-delay="400">
          Trier par : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
          <img className="send-mail" src={Date}></img>{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Vues
        </div>
      </div>

      <div className="ressources-grid">
      <ReactFloaterJs>
        <div data-aos="fade-right" data-aos-delay="350" className="ressource-1">
          <div className="ress-title">Connais-toi toi même.</div>
          <div className="ressource-bottom">
          <img className="ress-img" src={Monkey} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
       </ReactFloaterJs>
       <ReactFloaterJs>
        <div data-aos="fade-right" data-aos-delay="200" className="ressource-2">
          <div className="ress-title">Covid et entrepreneuriat : Bilan.</div>
          <div className="ressource-bottom">
            <img className="ress-img" src={Virus} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
        <div data-aos="fade-right" className="ressource-3">
          <div className="ress-title">6 aides pour lancer sa micro-entreprise.</div>
          <div className="ressource-bottom">
            <img className="ress-img" src={Note} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
        <div data-aos="fade-left" className="ressource-4">
          <div className="ress-title">Mindset de l’entrepreneur.</div>
          <div className="ressource-bottom">
            <img className="ress-img" src={Brain} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
        <div data-aos="fade-left" data-aos-delay="200" className="ressource-5">
          <div className="ress-title">Statut juridique : Pour entreprendre seul et sans sous.</div>
          <div className="ressource-bottom">
            <img className="ress-img" src={Hammer} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
        </ReactFloaterJs>
        <ReactFloaterJs>
        <div data-aos="fade-left" data-aos-delay="350" className="ressource-6">
          <div className="ress-title">Les différents types d’entrepreneuriats</div>
          <div className="ressource-bottom">
            <img className="ress-img" src={People} />
            <div className="ress-txt">
              21 nov 2021 <span className="likes">260 <img className="ThumbUp" src={ThumbUp} alt="" /></span>
            </div>
          </div>
        </div>
        </ReactFloaterJs>
      </div>

      <div data-aos="fade" className="show-more">VOIR PLUS <img src={Lance} alt="" /></div>
    </>
  );
};

export default Ressources;
