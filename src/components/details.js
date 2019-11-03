import React from 'react';

const Details = ({data}) => {
    
    return(
        <>
        <div className="container">
        <div className="row details justify-content-around"> 
            <div className="card carddetails ">
                <div className="card-header ">
                <h1 className={`${data.types[0].type.name}`}>{data.name}</h1>
                    <img className="card-img-top" src={data.sprites.front_default} alt ={data.name}/> 
            {data.types[1] ? 
             (<div className="centered">
                <div className={`type ${data.types[0].type.name}`}><span>{data.types[0].type.name}</span></div>
                <div className={`type ${data.types[1].type.name}`}><span>{data.types[1].type.name}</span></div>
              </div>) : 

            (<div className="centered">
                <div className={`type ${data.types[0].type.name}`}><span>{data.types[0].type.name}</span></div>
             </div>) }

            <div className="centered">
                <p>Taille : {(data.height/10).toFixed(2)} m</p>
                <p>Poids : {(data.weight/10).toFixed(2)} kg</p>
            </div>
                <span>Attaques :</span>
                <ul>
                    <li> {data.moves[0].move.name}</li>
                    <li> {data.moves[1].move.name}</li>
                    <li> {data.moves[2].move.name}</li>
                </ul>
                </div>
            </div> 
                
            <div>
            <div className="card carddetails">
                <div className="card-header ">
                    <h2>Caractéristiques :</h2>
                   
                   
                    <div className="row col-12 align-items-center">
                        <p className="col-4 info">
                        HP :
                        </p>
                        <div className="col-8">
                        <div className="progress">
                        <div className={`progress-bar ${data.types[0].type.name}`} role="progressbar" style={{width: `${data.stats[5].base_stat}%`}} aria-valuemin="0" aria-valuemax="100">{data.stats[5].base_stat}%</div>
                        </div>
                        </div>
                    </div>


                    <div className="row col-12 align-items-center">
                    <p className="col-4 info">
                        Attaque :
                        </p>
                        <div className="col-8">
                        <div className="progress">
                        <div className={`progress-bar ${data.types[0].type.name}`} role="progressbar" style={{width: `${data.stats[4].base_stat}%`}} aria-valuemin="0" aria-valuemax="100">{data.stats[4].base_stat}%</div>
                        </div>  
                        </div>
                    </div>

                    <div className="row col-12 align-items-center">
                    <p className="col-4 info">
                        Défense :
                        </p>
                        <div className="col-8">
                        <div className="progress">
                        <div className={`progress-bar ${data.types[0].type.name}`} role="progressbar" style={{width: `${data.stats[3].base_stat}%`}} aria-valuemin="0" aria-valuemax="100">{data.stats[3].base_stat}%</div>
                        </div>  
                        </div>
                    </div>

                    <div className="row col-12 align-items-center">
                    <p className="col-4 info">
                        Vitesse :
                        </p>
                        <div className="col-8">
                        <div className="progress">
                        <div className={`progress-bar ${data.types[0].type.name}`} role="progressbar" style={{width: `${data.stats[0].base_stat}%`}} aria-valuemin="0" aria-valuemax="100">{data.stats[0].base_stat}%</div>
                        </div>  
                        </div>
                    </div>

                </div>
            </div> 


            <div className="carddetails aleatoire1 d-flex justify-content-center">
                <a href="/random">Pokémon Aléatoire</a>
            </div>
            <div className=" d-flex justify-content-center"> 
            <div className="rond"></div>
            </div>
            <div className="carddetails aleatoire2 d-flex justify-content-center">
               <a href={`/?search=${data.name}`}>Retour</a>
            </div>

            </div>
           

            

        </div>
        </div>
        
        </>
    );
};

export default Details;

/*

                   
*/