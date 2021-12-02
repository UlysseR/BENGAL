import React from 'react';
import headerimg from '../media/header.png';
import scrolldown from '../media/SVG/scroll-down.svg'
import styled, { keyframes } from "styled-components"; 
import { useEffect } from "react";
import Aos from 'aos';
import "aos/dist/aos.css";
import FadeInLeft from "react-animations/lib/fade-in-left";
const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
const FadeInLeftDiv = styled.div`

animation: 4s ${FadeInLeftAnimation};
`;

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <> <FadeInLeftDiv>
            <div className="container">
                <img className="header-img" src={headerimg} alt="header-img" id="img-head"></img>
                <div className="header-text" id="text">
                    <p className="title-1">TU VEUX ENTREPRENDRE ?</p>
                    <p className="title-2">FONCE,</p>
                    <p className="title-3">ON VA T'AIDER.</p>
                </div>
            </div></FadeInLeftDiv>
            <div data-aos="fade" data-aos-delay="600" className="container-scroll">
              <a href="#concept"><img className="scroll-down" src={scrolldown}></img></a>  
            </div>


        </>

    );
};

export default Banner;