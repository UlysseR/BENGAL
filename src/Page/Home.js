import Header from '../components/Header';
import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Chaine from '../components/Chaine';
import Ressource from '../components/Ressource';
import Motive from '../components/Motive';
import Footer from '../components/Footer';


const Home = () => {
    return (
        <div className="bengal">
            <Header/>
            <Banner/>
            <Concept/>
            <Chaine/>
            <Ressource/>
            <Motive/>
            <Footer/>
        </div>
    );
};

export default Home;