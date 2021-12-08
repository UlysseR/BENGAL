import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Page/Home';
import Evenements from './Page/Evenement';
import Video from'./Page/Video';
import Cg from './Page/Cg';
import Ressources from './Page/Ressources';
import Landing from './Page/Landing';
import ScrollToTop from './ScrollToTop';


function App() {
  return (

    <BrowserRouter>
    <ScrollToTop />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/evenements" exact component={Evenements} />
        <Route path="/video" exact component={Video} />
        <Route path="/ressources" exact component={Ressources}/>
        <Route path="/conditiongeneral" exact component={Cg}/>
        <Route path="/" exact component={Landing}/>

      </Switch>
    </BrowserRouter>
      
      
  );
}

export default App;
