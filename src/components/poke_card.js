import React from 'react';
import Appel from './api_info';



const Pokemons = props => {
    const { name} = props;
    
    return(
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
            <div className="card-header">
            <a className="custom-a" href={'/'+ name}><Appel name = {name}/></a>
            </div>
            </div>
        </div>
        
    
    );
};

export default Pokemons;

