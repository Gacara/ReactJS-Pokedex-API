import React from 'react';
import { useParams } from 'react-router-dom';
import Detailsapi from '../components/api_details';
import Clock from '../container/clock';


const Pokemon = () =>{
let { name } = useParams();


return(



  <div className="App">
  <header className="Random-background">

 
    <div>
    <Detailsapi name={name}/>

    </div>
    <Clock/>
  </header>
</div>

);
}

export default Pokemon