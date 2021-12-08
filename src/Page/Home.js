import Header from '../components/Header';
import Banner from '../components/Banner';
import Concept from '../components/Concept';
import Chaine from '../components/Chaine';
import Ressource from '../components/Ressource';
import Footer from '../components/Footer';
import Valeurs from '../components/Valeurs';
import Events from '../components/Events';
import { render } from '@testing-library/react';
// let burger = document.getElementById('burger'),
//       nav = document.getElementById('main-nav');

//     burger.addEventListener('click', function (e) {
//       this.classList.toggle('is-open');
//       nav.classList.toggle('is-open');
//     });

const Home = () => {
    return (
        <>
            <div className="bengal">
                <div class="container-burger">
                    <button id="burger" class="open-main-nav">
                        <span class="burger"></span>
                    </button>
                    <nav class="main-nav" id="main-nav">
                        <ul>
                            <li>
                                <a href="#">Nos vidéos</a>
                            </li>
                            <li>
                                <a href="#">Nos ressources</a>
                            </li>
                            <li>
                                <a href="#">Nos évenements</a>
                            </li>
                        </ul>
                    </nav>
                </div>
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

  
