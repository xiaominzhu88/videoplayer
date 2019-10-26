import React from "react";
import PropTypes from 'prop-types';

class Video extends React.Component {
  render() {
    console.log("In video: ", this.props.src);
    return (
      <div>
        <video controls autostart autoPlay muted src={this.props.src} />
      </div>
    );
  }
}

Video.propTypes = {
  src: PropTypes.string.isRequired
};
export default Video;
