import React from "react";
import more from "../media/SVG/more.svg";
import lamp2 from "../media/SVG/lampdeBZ.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Concept = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-concept-2"data-aos="fade-up" data-aos-delay="200">
        <div id="concept" className="circle"></div>
        <div className="concept-title">Notre concept</div>
        <div className="lamp2">
          <img src={lamp2} alt="Ampoule scintillante" />
        </div>
          <div  className="title-concept">Faciliter l’accessibilité à l’entrepreneuriat :</div>
          <div data-aos="fade-up" data-aos-delay="200" className="p-concept">
            &#8226; Mettre à disposition des ressources et guides pour se lancer <br></br>
            &#8226; Créer une communauté d’entrepreneurs<br></br>
            &#8226; Motiver & inspirer <br></br>
          </div>
      </div>
    </>
  );
};

export default Concept;
