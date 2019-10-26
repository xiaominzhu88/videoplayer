import React from "react";
import "./App.css";
import { Button } from "./Button.js";
import { Menu } from "./Menu.js";
import Video from "./Video";
import eatVideo from "./Lola-eat.MP4";
import playVideo from "./Lola-play.MOV";
import runVideo from "./Lola-run.MOV";
import swimVideo from "./Lola-excite.MOV";

const VIDEOS = {
  eat: eatVideo,
  play: playVideo,
  run: runVideo,
  swim: swimVideo
};

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { src: VIDEOS.run };
    this.chooseVideo = this.chooseVideo.bind(this);
  }
  handleClick() {
    let talk =
      "Hey, i am Lola, a french bulldog, here you will see my videos how i play with my papa";
    alert(talk);
  }

  chooseVideo(newVideo) {
    console.log({ newVideo, myVideo: VIDEOS[newVideo] });
    this.setState({ src: VIDEOS[newVideo] });
  }
  render() {
    console.log("-->", this.state);
    return (
      <div className="App">
        <h1>Welcome to my Lola-Videoplayer</h1>
        <p>Hello! I will try something here!</p>
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

/*ReactDOM.render(<VideoPlayer />,
  document.getElementById('App'));*/
