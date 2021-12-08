import React from "react";
import Logo from "../media/logoNEWS.svg";
import Line from "../media/illustration/line.svg";
import Jump from "../media/illustration/jump.svg";
import Line2 from "../media/SVG/line2.svg";
import Phone from "../media/illustration/phone.svg";
import Books from "../media/illustration/books.svg";
import Lance from "../media/SVG/lance.svg";
import ReactFloaterJs from "react-floaterjs";
import Baloon from "../media/illustration/baloon.svg";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div data-aos="fade" className="other header-landing">
        <img src={Logo} alt="Logo tremplin"></img>
      </div>
      <div className="other container-landing" data-aos="fade" daya-aos-delay="250">
        <img className="other line" src={Line}></img>
        <img className="other line2" src={Line2}></img>

        <div className="other container-1">
          <div className="other title-landing">
            Tu veux <br></br>
            devenir entrepreneur ?
            <div className="other sous-titre-landing">
              {" "}
              Découvre nos 3 outils pour te lancer dans l’entrepreneuriat
            </div>
          </div>
          <img
            className="other img-container"
            src={Jump}
            data-aos="fade"
            daya-aos-delay="150"
            alt="Homme sautant"
          ></img>
        </div>
        <div className="other container-2">
          <div
            className="other title-landing"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Des videos pour <br></br>t’accompagner
            <div className="other sous-titre-landing">
              {" "}
              Sous formats de podcasts, talks, tutos... tu trouveras tout ce
              qu’il te faut sur la chaine Tremplin.{" "}
            </div>
            <NavLink exact to="/video">
              {" "}
              <div
                data-aos="fade-up"
                daya-aos-delay="150"
                className="other all-ressources"
              >
                VOIR LES VIDEOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <img
                  className="other lance"
                  src={Lance}
                  alt="Vers nos ressources"
                ></img>
              </div>{" "}
            </NavLink>
          </div>
          <img
            className="other img-phone"
            src={Phone}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Iphone"
          ></img>
        </div>

        <div className="other container-3">
          <div
            className="other title-landing"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Des clefs pour t’y <br></br> retrouver
            <div className="other sous-titre-landing">
              {" "}
              Une mise à disposition de ressources et de <br></br> guides pour
              t’aider dans tes démarches.{" "}
            </div>
          </div>
          <NavLink exact to="/ressources">
            {" "}
            <div
              data-aos="fade-up"
              daya-aos-delay="150"
              className="other all-ressources"
            >
              TOUTES LES RESSOURCES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <img
                className="other lance"
                src={Lance}
                alt="Voirs toutes nos ressources"
              ></img>
            </div>{" "}
          </NavLink>
          <img
            className="other img-container"
            src={Books}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Pile de livre"
          ></img>
        </div>

        <div className="other container-4">
          <div
            className="other title-landing"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Des évènements <br></br> pour vous rencontrer
            <div className="other sous-titre-landing">
              {" "}
              Débattre et confronter vos idées, rencontrer vos pairs, et
              peut-être découvrir vos futurs collaborateurs !{" "}
            </div>
          </div>
          <NavLink exact to="/evenements">
            {" "}
            <div
              data-aos="fade-up"
              daya-aos-delay="150"
              className="other all-ressources"
            >
              TOUS LES EVENEMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <img
                className="other lance"
                src={Lance}
                alt="Voir tous nos evenements"
              ></img>
            </div>
          </NavLink>
          <img
            className="other img-baloon"
            src={Baloon}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Ballons"
          ></img>
        </div>
        <div className="other container-5" data-aos="fade-up" data-aos-delay="150">
          <NavLink exact to="/home">
            <div className="other title-landing">
              Rejoins-nous.
              <img
                className="other lance"
                src={Lance}
                alt="Vers la page d'acceuil"
              ></img>
            </div>
          </NavLink>
        </div>
      </div>
      <div data-aos="fade" className="safari header-landing">
        <img src={Logo} alt="Logo tremplin"></img>
      </div>
      <div
        className="safari container-landing"
        data-aos="fade"
        daya-aos-delay="250"
      >
        <img className="safari line" src={Line}></img>
        <img className="safari line2" src={Line2}></img>

        <div className="safari container-1">
          <div className="safari title-landing">
            Tu veux <br></br>
            devenir entrepreneur ?
            <div className="safari sous-titre-landing">
              {" "}
              Découvre nos 3 outils pour te lancer dans l’entrepreneuriat
            </div>
          </div>
          <img
            className="safari img-container"
            src={Jump}
            data-aos="fade"
            daya-aos-delay="150"
            alt="Homme sautant"
          ></img>
        </div>
        <div className="safari container-2">
          <div
            className="safari title-landing"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            Des videos pour <br></br>t’accompagner
            <div className="safari sous-titre-landing">
              {" "}
              Sous formats de podcasts, talks, tutos... tu trouveras tout ce
              qu’il te faut sur la chaine Tremplin.{" "}
            </div>
            <NavLink exact to="/video">
              {" "}
              <div
                data-aos="fade-up"
                daya-aos-delay="150"
                className="safari all-ressources"
              >
                VOIR LES VIDEOS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <img
                  className="lance"
                  src={Lance}
                  alt="Vers nos ressources"
                ></img>
              </div>{" "}
            </NavLink>
          </div>
          <img
            className="safari img-phone"
            src={Phone}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Iphone"
          ></img>
        </div>

        <div className="safari container-3">
          <div
            className="safari title-landing"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Des clefs pour t’y <br></br> retrouver
            <div className="safari sous-titre-landing">
              {" "}
              Une mise à disposition de ressources et de <br></br> guides pour
              t’aider dans tes démarches.{" "}
            </div>
          </div>
          <NavLink exact to="/ressources">
            {" "}
            <div
              data-aos="fade-up"
              daya-aos-delay="150"
              className="safari all-ressources"
            >
              TOUTES LES RESSOURCES &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <img
                className="safari lance"
                src={Lance}
                alt="Voirs toutes nos ressources"
              ></img>
            </div>{" "}
          </NavLink>
          <img
            className="safari img-container"
            src={Books}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Pile de livre"
          ></img>
        </div>

        <div className="safari container-4">
          <div
            className="safari title-landing"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Des évènements <br></br> pour vous rencontrer
            <div className="safari sous-titre-landing">
              {" "}
              Débattre et confronter vos idées, rencontrer vos pairs, et
              peut-être découvrir vos futurs collaborateurs !{" "}
            </div>
          </div>
          <NavLink exact to="/evenements">
            {" "}
            <div
              data-aos="fade-up"
              daya-aos-delay="150"
              className="safari all-ressources"
            >
              TOUS LES EVENEMENTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <img
                className="safari lance"
                src={Lance}
                alt="Voir tous nos evenements"
              ></img>
            </div>
          </NavLink>
          <img
            className="safari img-baloon"
            src={Baloon}
            data-aos="fade-up"
            data-aos-delay="250"
            alt="Ballons"
          ></img>
        </div>
        <div className="safari container-5" data-aos="fade-up" data-aos-delay="150">
          <NavLink exact to="/home">
            <div className="safari title-landing">
              Rejoins-nous.
              <img
                className="safari lance"
                src={Lance}
                alt="Vers la page d'acceuil"
              ></img>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Landing;
