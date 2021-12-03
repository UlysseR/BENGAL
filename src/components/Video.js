import React from 'react';
import chat from '../media/illustration/chat.svg';
import lance from '../media/illustration/lance.svg';

const Video = () => {
    return (
        <>
            <article className="nosvid">
                <div className="letexte">
                    <h1>Nos Vidéos</h1>
                    <p>Retrouvez toutes nos dernières vidéos sur notre chaîne <br></br>YouTube ici :</p>
                    <a className="button" href="https://www.youtube.com/" target="_blank"><p>voir la chaîne</p><img className="diago" src={lance}></img></a>
                </div>
                <img className="chat" src={chat} alt=""></img>
            </article>
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
            </article>
        </>
    );
};

export default Video;