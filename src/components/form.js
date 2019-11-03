import React from 'react';



const Filtre = ({ handleSubmit, value, search}) => (

    
    <>
    <form className="isolate" onSubmit={handleSubmit}>
        <label htmlFor="filter">Rechercher un Pokémon </label>
        <input
        placeholder= {search}
        id="filter"
        type="text"
        name="filter"
        />
       
        <input type="submit" value="Filtrer" />
      <a className="custom-a custom-a-bis" href={'/?search='+ value}>Rafraichir la recherche </a>
    </form>
    
    </>
);

export default Filtre;
