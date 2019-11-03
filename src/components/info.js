import React from 'react';

const Info = ({data}) => {
    
    return(
       <div>
            <p>{data.name}</p>
            <img className="pokemon" src={data.sprites.front_default} alt ={data.name}/> 
       </div>
           
        
    );
};

export default Info;

