import React from 'react';
import Loader from './loader';
import Details from './details';


class AppelRandom extends React.Component {

    state = {
        isLoading: true,
        data: [],
        ran: Math.floor(Math.random() * 802) + 1 
      };

        
    async componentDidMount() {
        this.setState({isLoading:true})
      
        try {
          
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/` + this.state.ran);
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
            isLoading ? <Loader/> : <Details data={data}/>
          }

          </>
        );
      }
    }
  

export default AppelRandom




