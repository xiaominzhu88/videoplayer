import React from 'react';

export class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.chooseVideo(e.target.value);
  }

  render() {
    return (
      <form onClick={this.handleClick}>
        <input type="radio" name="src" value="drive" /> Lola driving
        <input type="radio" name="src" value="eat" /> Lola chewing
        <input type="radio" name="src" value="play" /> Play around
        <input type="radio" name="src" value="run" /> Rubber Duck
        <input type="radio" name="src" value="swim" /> Love water
      </form>
    );
  }
}
