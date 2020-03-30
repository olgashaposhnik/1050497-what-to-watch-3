import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {formatTime} from "../../utils/utils.js";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false,
      // // isFullscreen: false, // меняла
      // duration: 0, // меняла
      // currentTime: 0 // меняла
    };

    this.videoPlayerHandler = this.videoPlayerHandler.bind(this);
    this.fullscreenHandler = this.fullscreenHandler.bind(this); // меняла
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

  fullscreenHandler() { // меняла
    const video = this._videoRef.current; // меняла

    video.requestFullscreen(); // меняла
    // this.setState({isFullscreen: true}); // меняла
  } // меняла

  // calculateCurrentTime() { // меняла
  //   const video = this._videoRef.current;

  // this.setState({currentTime: video.currentTime});
  // }

  getVideoProgress() {
    return this._videoRef.current
      ? (this._videoRef.current.currentTime / this._videoRef.current.duration) * 100
      : 0;
  }

  getFormattedTime() {
    return this._videoRef.current
      ? formatTime(this._videoRef.current.duration - this._videoRef.current.currentTime)
      : 0;
  }

  componentDidMount() {
    // this.setState({isPlaying: this.props.autoPlay});
    this._videoRef.current.onloadedmetadata = () => { // событие Событие loadedmetadata происходит при загрузке мета-данных для указанного аудио/видео. Мета-данные для аудио/видео состоят из: длительность, размеры (только видео) и текстовые дорожки.
      this.setState({
        isPlaying: this.props.autoPlay,
        duration: this._videoRef.current.duration
      });
    };

    this._videoRef.current.ontimeupdate = () => { // Событие ontimeupdate наступает, когда позиция воспроизведения аудио / видео изменилась.
      if (this._videoRef.current) {
        this.setState({
          currentTime: this._videoRef.current ? this._videoRef.current.currentTime : 0
        });
      }
    };
  }

  render() {
    const {film, muted, autoPlay, onExitButtonClick} = this.props;

    return (
      <div className="player">
        <video
          ref={this._videoRef}
          muted={muted}
          poster={film.image}
          width="100%"
          autoPlay={autoPlay}
          onClick={this.videoPlayerHandler}
          className="player__video"
        >
          <source src={film.preview} />
        </video>

        <button type="button" className="player__exit" onClick={onExitButtonClick}>
          Exit
        </button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              {/* <progress className="player__progress" value="30" max="100" />
              <div className="player__toggler" style={{left: `30%`}}> */}
              <progress className="player__progress" value={this.getVideoProgress()} max="100"/>
              <div className="player__toggler" style={{left: `${this.getVideoProgress()}%`}}>
                Toggler
              </div>
            </div>
            <div className="player__time-value">{this.getFormattedTime()}</div>
          </div>

          <div className="player__controls-row">
            {/* <button type="button" className="player__play"> */}
            <button type="button" className="player__play" onClick={this.videoPlayerHandler}>
              {this.state.isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
              ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </>
              )}
            </button>
            <div className="player__name">{film.title}</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={this.fullscreenHandler}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen" />
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {
  muted: PropTypes.bool.isRequired,
  autoPlay: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
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
    preview: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          date: PropTypes.instanceOf(Date).isRequired,
          author: PropTypes.string.isRequired,
          review: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired
};
