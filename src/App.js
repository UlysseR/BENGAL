import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Page/Home';
import Evenements from './Page/Evenement';
import Video from'./Page/Video';
import Cg from './Page/Cg';
import Ressources from './Page/Ressources';
import Landing from './Page/Landing';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/evenements" exact component={Evenements} />
        <Route path="/video" exact component={Video} />
        <Route path="/ressources" exact component={Ressources}/>
        <Route path="/conditiongeneral" exact component={Cg}/>
        <Route path="/landing" exact component={Landing}/>

      </Switch>
    </BrowserRouter>
      
      
  );
}

export default App;
