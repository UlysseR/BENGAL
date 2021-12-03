import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Evenement from '../components/Evenement';

const evenements = () => {
    return (
        <div>
            <Header/>
            <Evenement/>
            <Footer/>
        </div>
    );
};

export default evenements;