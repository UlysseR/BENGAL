import React from "react";
import logoNews from "../media/logoNEWS.svg";
import send from "../media/SVG/send.svg";
import fichier15 from "../media/SVG/fichier15.svg";
import fichier18 from "../media/SVG/fichier18.svg";
import fichier19 from "../media/SVG/fichier19.svg";
import fichier16 from "../media/SVG/fichier16.svg";
import linkedin from "../media/SVG/linkedin.svg";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import DossierdePresse from "../media/DossierdePresse.pdf";

const Footer = () => {
  const [searchString, setSearchString] = useState("");

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="grid-footer">
        <div data-aos="fade-right" className="grid-logo">
          <img className="news-logo" src={logoNews} alt="Logo tremplin"></img>
        </div>
        <div data-aos="fade-right" className="grid-news">
          <div id="mc_embed_signup">
            <form
              action="https://mon-tremplin.us20.list-manage.com/subscribe/post?u=28daa91396f67293c072e28d0&amp;id=a1b9ec89ab"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
              noValidate
            >
              <div className="grid-footer">
                <div className="news-title" id="mc_embed_signup_scroll">
                  Inscrivez vous à la Newsletter
                </div>
                <div className="mail-footer">
                  {" "}
                  <input
                    type="mail"
                    name="EMAIL"
                    className="form-mail"
                    id="mce-EMAIL"
                    placeholder="E-mail"
                    value={searchString}
                    onChange={handleChange}
                    required
                  ></input>{" "}
                  <input
                    className="send-mail-footer"
                    value="→"
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div data-aos="fade-left" className="grid-nav">
          <div className="nav-title">Navigation</div>
          <div className="nav-links">
            <NavLink exact to="/video">
              <a>Nos vidéos</a>
              <br></br>
            </NavLink>
            <NavLink exact to="/ressources">
              <a>Nos ressources</a>
              <br></br>
            </NavLink>
            <NavLink exact to="/evenements">
              <a>Nos events </a>
              <br></br>
            </NavLink>
            <a href={DossierdePresse} download>
              Dossier presse <br></br>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" className="grid-medias">
          <div className="medias-title">Réseaux Sociaux</div>
          <div className="medias-links">
            <a
              target="_blank"
              href="https://twitter.com/Tremplin_/with_replies"
            >
              <img className="medias-img" src={fichier18} alt=""></img>
            </a>
            <a
              target="_blank"
              href="https://www.tiktok.com/@tremplindispositif?lang=fr"
            >
              <img className="medias-img" src={fichier19} alt=""></img>
            </a>
            <a target="_blank" href="https://www.instagram.com/_tremplin_/">
              <img className="medias-img" src={fichier15} alt=""></img>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCIFqLKg7NDzzrvWxuA37pAA/featured"
            >
              <img className="medias-img" src={fichier16} alt=""></img>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/tremplin-024a9a226/"
            >
              <img className="medias-img" src={linkedin} alt=""></img>
            </a>
          </div>
        </div>
      </div>
      <NavLink exact to="/conditiongeneral">
        {" "}
        <div className="text-footer">
          © Tremplin 2021·Confidentialité·Conditions générales·Plan du
          site·Fonctionnement du site·Infos sur l'entreprise
        </div>{" "}
      </NavLink>
    </>
  );
};

export default Footer;
