import React from 'react';
import Footer from '../components/Footer';
import Landing from '../components/Landing';

const Landings = () => {
    return (
        <>
            <div className="landing-container">
                <Landing />
                <div className="footer-landing">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Landings;