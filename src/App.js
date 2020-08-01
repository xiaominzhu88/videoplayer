import React from 'react';
import './App.css';
import { Button } from './Button.js';
import { Menu } from './Menu.js';
import Video from './Video';
import eatVideo from './Lola-eat.MP4';
import playVideo from './Lola-play.MOV';
import runVideo from './Lola-run.MOV';
import swimVideo from './Lola-swim.MP4';
import driveVideo from './Lola-drive.MP4';

const VIDEOS = {
  eat: eatVideo,
  play: playVideo,
  run: runVideo,
  swim: swimVideo,
  drive: driveVideo,
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.drive };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  handleClick() {
    const talk = "Hey, I'm Lola, a french bulldog, welcome to my videos";
    alert(talk);
  }

  chooseVideo(newVideo) {
    console.log({ newVideo, myVideo: VIDEOS[newVideo] });
    this.setState({ src: VIDEOS[newVideo] });
  }
  render() {
    console.log('-->', this.state);
    return (
      <div className="App">
        <h1>Welcome to my Lola-Videoplayer</h1>
        <p>
          Hello! I will try something here!
          <span role="img" aria-label="emoji zucker">
            🍡
          </span>
        </p>
        <Button onClick={this.handleClick} />
        <br />
        <br />
        <Menu chooseVideo={this.chooseVideo} />
        <br />
        <Video src={this.state.src} />
      </div>
    );
  }
}

export default VideoPlayer;
