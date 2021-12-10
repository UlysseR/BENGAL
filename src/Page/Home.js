import Header from '../components/Header';
import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Chaine from '../components/Chaine';
import Ressource from '../components/Ressource';
import Footer from '../components/Footer';
import Valeurs from '../components/Valeurs';
import Events from '../components/Events';
import { render } from '@testing-library/react';



const Home = () => {
    return (
        <>
            <div className="bengal">
                <Header />
                <Banner />
                <Concept />
                <Valeurs />
                <Chaine />
                <Ressource />
                <Events />
                <Footer />
            </div>
        </>
    );
};


export default Home;

  
