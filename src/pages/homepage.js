import React from 'react';
import logo from '../logo.png';
import Clock from '../container/clock';
import Recherche from '../components/recherche';
import Section from '../components/scroll';

class Home extends React.Component{
 
   
      render(){
        
        return (
          
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p className="custom-p">
              Pour tout savoir sur vos Pokémons favoris !
              </p>
              <Clock/>
              <Section/>
              </header>
            <div className="container">
              <Recherche recherche= {this.props.location.search.replace("?search=","")} />
            <div className="bot d-flex justify-content-center">

            <a
                className="App-link"
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
               API : pokeapi.co !
              </a>
            </div>
            </div>
          </div>
      
        );
      }
     

}

export default Home;
