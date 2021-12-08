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
      <div  id="concept" className="container-concept-2"data-aos="fade-up" data-aos-delay="200">
        <div className="circle"></div>
        <div className="concept-title">Notre concept</div>
        <div className="lamp2">
          <img src={lamp2} alt="" />
        </div>
          <div  className="title-concept">Faciliter l’accessibilité à l’entrepreneuriat :</div>
          <div data-aos="fade-up" data-aos-delay="200" className="p-concept">
            &#8226; Mettre à disposition des ressources et guides pour se lancer <br></br>
            &#8226; Créer une communauté <br></br>
            &#8226; d’entrepreneurs Motiver & inspirer <br></br>
          </div>
      </div>
    </>
  );
};

export default Concept;
