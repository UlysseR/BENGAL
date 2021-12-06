import React from "react";
import more from "../media/SVG/more.svg";
import lamp from "../media/illustration/lamp.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Concept = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container-concept">
        <div data-aos="fade-right">
          <div id="concept" className="circle"></div>
          <div className="concept-title">Notre concept</div>
        </div>
        <div className="concept-content">
         <div data-aos="fade" data-aos-delay="200" className="title-concept">Faciliter l’accessibilité à l’entrepreneuriat :</div> 
          <div data-aos="fade" data-aos-delay="250" className="p-concept"> 
          &#8226; Mettre à disposition des ressources et guides pour se lancer <br></br>
            &#8226; Créer une communauté <br></br>
            &#8226; d’entrepreneurs Motiver & inspirer <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default Concept;
