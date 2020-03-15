import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
    };

    this.videoPlayerHandler = this.videoPlayerHandler.bind(this);
  }

  videoPlayerHandler() {
    const video = this._videoRef.current;

    if (video.paused) {
      video.play();
      this.setState({isPlaying: true});
    } else {
      video.pause();
      this.setState({isPlaying: false});
    }
  }

  componentDidMount() {
    this.setState({isPlaying: this.props.autoPlay});
  }

  render() {
    const {film, muted, autoPlay} = this.props;

    return (
      <video
        ref={this._videoRef}
        muted={muted}
        controls
        poster={film.image}
        width="100%"
        autoPlay={autoPlay}
        onClick={this.videoPlayerHandler}
      >
        <source src={film.preview} />
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  muted: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fullImage: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    preview: PropTypes.string.isRequired,
  }).isRequired,
};
