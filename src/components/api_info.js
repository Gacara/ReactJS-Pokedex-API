import React from 'react';
import Loader from './loader';
import Info from './info';



class Appel extends React.Component {

    state = {
        isLoading: true,
        data: []
      };

        
    async componentDidMount() {
        this.setState({isLoading:true})
      
        try {
          
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + this.props.name);
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
        return (
          <>
      
        
        {
            isLoading ? <Loader/> : <Info data={data}/>
          }

          </>
        );
      }
    }
  

export default Appel




