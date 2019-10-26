import React from 'react';

export class Menu extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(e){
    let text = e.target.value;
    this.props.chooseVideo(text);
  }
    
  
  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="eat" /> Lola-eat
        <input type="radio" name="src" value="play" /> Lola-play
        <input type="radio" name="src" value="run" /> Lola-run
        <input type="radio" name="src" value="swim" /> Lola-swim
      </form>
    );
  }
}