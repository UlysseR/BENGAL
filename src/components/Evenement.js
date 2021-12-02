import React from 'react';

const Evenement = () => {
    return (
        <div className="events">
            <div className="event1">
                <h3 className="event-title">En Ligne</h3>
                <div className="event-bottom">
                    <span className="event-desc">Webinar : “Quoi de neuf pour cette nouvelle année ?”</span>
                    <span className="event-date">
                        5 <br></br>
                        JAN
                    </span>
                </div>
            </div>
            <div className="event2">
                <h3 className="event-title">Paris</h3>
                <div className="event-bottom">
                <span className="event-desc">Café-débat : “Quel chef d’entreprise dois-je être ?”</span>
                    <span className="event-date">
                        13 <br></br>
                        JAN
                    </span>
                </div>
            </div>
            <div className="event3">
                <h3 className="event-title">PARIS</h3>
                <div className="event-bottom">
                <span className="event-desc">Exposition : “Les grands hommes de l’entrepreneuriat”</span>
                    <div className="event-date">
                        5 <br></br>
                        MAR
                    </div>
                </div>
            </div>
            <div className="event4">
                <h3 className="event-title">En Ligne</h3>
                <div className="event-bottom">
                <span className="event-desc">Webinar : “Pourquoi je n’ai pas écouté les autres ?”</span>
                    <div className="event-date">
                        5 <br></br>
                        MAR
                    </div>
                </div>
            </div>
            <div className="event5">
                <h3 className="event-title">AIX-EN-PROVENCE</h3>
                <div className="event-bottom">
                <span className="event-desc">Soirée : “Rencontre Tremplin annuelle”</span>
                    <div className="event-date">
                        12 <br></br>
                        AVR
                    </div>
                </div>
            </div>
            <div className="event6">
                <h3 className="event-title">En Ligne</h3>
                <div className="event-bottom">
                <span className="event-desc">Webinar : “Intégrer l’écologie dans mes projets.”</span>
                    <div className="event-date">
                        25 <br></br>
                        MAI
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Evenement;