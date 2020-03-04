import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      progress: 0,
      isLoading: true,
      isPlaying: props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, image} = this.props;
    const video = this._videoRef.current;
    video.src = src;
    video.image = image;
    video.muted = true;

    video.oncanplaythrough = () => this.setState({
      isLoading: false,
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false,
    });

    video.onload = () => this.setState({
      isPlaying: false
    });

    video.ontimeupdate = () => this.setState({
      progress: video.currentTime
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.onload = null;
    video.src = ``;
    video.image = ``;
  }

  render() {
    return (
      <video
        width="100%"
        ref={this._videoRef} />
    );
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    video[isPlaying ? `play` : `load`]();
  }
}

VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

