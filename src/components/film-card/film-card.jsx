import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const VIDEO_PLAYER_DELAY = 1000;

class FilmCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };

    this._isHovered = false;
  }

  render() {
    const {film, onTitleLinkClick, onFilmCardHover} = this.props;
    const {title, image, video} = film;
    const {isPlaying} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseOver={() => onFilmCardHover(film)}
        onClick={() => onTitleLinkClick(film)}
        onMouseEnter={() => this._handleMouseEnter()}
        onMouseLeave={() => this._handleMouseLeave()}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            video={video}
            image={image}
            isPlaying={isPlaying}
          />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html" onClick={(evt) => evt.preventDefault()}>
            {title}
          </a>
        </h3>
      </article>
    );
  }

  _handleMouseEnter() {
    this._isHovered = true;

    setTimeout(() => {
      if (this._isHovered) {
        this.setState({isPlaying: true});
      }
    }, VIDEO_PLAYER_DELAY);
  }

  _handleMouseLeave() {
    this._isHovered = false;
    this.setState({isPlaying: false});
  }
}

FilmCard.propTypes = {
  film: PropTypes.shape({
    video: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired
};

export default FilmCard;
