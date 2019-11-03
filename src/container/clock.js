import React from 'react';
import clock from '../assets/clock.png';
import './clock.css';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date(),};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date(),
      });
    }
  
    render() {
      return (
        <div className="clockdiv">
          <img className="clock" alt ="clock" src={clock}/>
          <h3 className="bckgrd">{this.state.date.toLocaleTimeString()}</h3>
        </div>
      );
    }
  }

  export default Clock;