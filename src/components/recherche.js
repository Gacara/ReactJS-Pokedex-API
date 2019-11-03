import React from 'react';
import Loader from './loader';
import List from './list';
import Filtre from './form';



class Recherche extends React.Component {


    state = {
        value: this.props.recherche,
        isLoading: true,
        data: [],
        filteredPokemons: [],
        search: this.props.recherche
      };

      handleSubmit = this.handleSubmit.bind(this)
      
        handleSubmit(ev){
            ev.preventDefault();
            this.setState({
                value: new FormData(ev.currentTarget).get('filter'),

            });
          }
    
 
      

        
    async componentDidMount() {
        this.setState({isLoading:true})

        try {
          //802
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=802`);
            const json = await response.json();
            this.setState({data:json,isLoading:false})
          
            

        } catch (err){
            console.log(err.msg);
            this.setState({isLoading:false})
            throw err
        }
      }

   
  
    render() {

        const {isLoading,data} = this.state;
        let {filteredPokemons,search,value} = this.state;
        filteredPokemons=[];
        return (
          <>
           
          <h1 className="isolate d-flex justify-content-center">Liste pokemon</h1>
          <Filtre handleSubmit={this.handleSubmit} value={value} search={search} />
         
        {
            isLoading ? <Loader/> : (filteredPokemons = data.results.filter(results=>
                results.name.toLowerCase().includes(this.state.value.toLowerCase()),
                ),<List data={filteredPokemons}/>) 
          }

         
          </>
        );
      }
    }
  

export default Recherche




