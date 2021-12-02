import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Page/Home';
import Evenements from './Page/Evenement';
import Video from'./Page/Video';
import Cg from './Page/Cg';


function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/evenements" exact component={Evenements} />
        <Route path="/video" exact component={Video} />
        <Route path="/conditiongeneral" exact component={Cg}/>
      </Switch>
    </BrowserRouter>
      
      
  );
}

export default App;
