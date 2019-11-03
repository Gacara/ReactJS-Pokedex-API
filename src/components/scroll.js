import React from 'react';
import { Events, animateScroll as scroll, scroller } from 'react-scroll'
import pokeball from '../assets/pokeball.png';
import scrollimg from '../assets/scroll.png';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

 
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="scrollicon">
           <a href="#" className="scrolldown"><img alt ="scroll" src={scrollimg} onClick={() => scroll.scrollTo(975)}/></a>

          <a className="scrolltop" onClick={this.scrollToTop}><img alt="pokeball" src={pokeball}/></a>
      </div>
    );
  }
};

export default Section;

