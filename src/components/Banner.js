import React from 'react';
import headerimg from '../media/header.png';
import scrolldown from '../media/SVG/scroll-down.svg'
import scrolldown2 from '../media/SVG/scroll-down2.svg'

const Banner = () => {
    return (
        <>
            <div className="container">
                <img className="header-img" src={headerimg} alt="header-img"></img>
                <div className="header-text">
                    <p className="title-1">TU VEUX ENTREPRENDRE ?</p>
                    <p className="title-2">FONCE,</p>
                    <p className="title-3">ON VA T'AIDER.</p>
                </div>         
                <img className="scroll-down" src={scrolldown}></img>
            </div>


        </>
    );
};

export default Banner;