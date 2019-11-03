import React from 'react';
import Pokemons from './poke_card';

const List =({data}) =>{
    
    return(
    
    <div className="row">
       {data.map((results, index)=>(
        <Pokemons key={`pokemon`+ index}{...results} />
        ))}
    </div>
    );
}

export default List

