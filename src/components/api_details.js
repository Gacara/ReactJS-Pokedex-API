import React from 'react';
import Loader from './loader';
import Details from './details';



class Detailsapi extends React.Component {

    state = {
        isLoading: true,
        data: [],
        erreur: false
      };

        
    async componentDidMount() {
        this.setState({isLoading:true})
      
        try {
          
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + this.props.name);
            const json = await response.json();
            this.setState({data:json,isLoading:false})
            

        } catch (err){
            this.setState({erreur:true,isLoading:false})
            throw err
        }
    }

  
  
    render() {
      
        const {isLoading,data,erreur} = this.state;
        return (
          <>
      
        
        {
            isLoading ? <Loader/> : (erreur ? 
            (
              <div className="col-12 justify-content-center align-items-center">
               <h2 className="erreur">CE POKEMON N'EXISTE PAS !</h2>
              
                <div className="carddetailsbis aleatoire1 d-flex justify-content-center">
                  <a href="/random">Pokémon Aléatoire</a>
                </div>
                <div className=" d-flex justify-content-center"> 
                  <div className="rond"></div>
                </div>
                <div className="carddetailsbis aleatoire2 align-items-center d-flex justify-content-center">
                  <a href={`/?search=${this.props.name}`}>Retour</a>
                </div>
              
              </div>
            )
            : 
            
            <Details data={data}/>)
        }

          </>
        );
      }
    }
  

export default Detailsapi




