import React from 'react';
import Clock from '../container/clock';
import AppelRandom from '../components/api_random';
const Random = () =>{


return(

<div className="App">
  <header className="Random-background">

    <Clock/>
    <AppelRandom/>
    </header>
</div>

);
}

export default Random

