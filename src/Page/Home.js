import Header from '../components/Header';
import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Chaine from '../components/Chaine';
import Ressource from '../components/Ressource';
import Footer from '../components/Footer';
import Valeurs from '../components/Valeurs';
import Events from '../components/Events';



const Home = () => {
    return (
        <div className="bengal">
            <Header/>
            <Banner/>
            <Concept/>
            <Valeurs/>
            <Chaine/>
            <Ressource/>
            <Events/>
            <Footer/>
            <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
        </div>
    );
};

export default Home;