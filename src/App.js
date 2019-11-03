import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Pokemon from './pages/pokemon';
import Home from './pages/homepage';
import Random from './pages/random';

class App extends React.Component{

      render(){

        return (
          
          <BrowserRouter>
        <Switch>
         <Route path="/random" children={<Random/>} />
          <Route path="/:name" children={<Pokemon/>} />
          <Route pathname="/?search=:pokemon" component={Home}/>
          <Route path="/">
          <Home/>
          </Route>
          </Switch>
      </BrowserRouter>
      
        );
      }
}

export default App;
