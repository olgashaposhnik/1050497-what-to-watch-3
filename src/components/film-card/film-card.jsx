import React from "react";
// import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = ({film, onFilmCardClick, onFilmCardMouseOver, onFilmCardMouseLeave, isPlaying}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onFilmCardMouseOver}
      onMouseOut={onFilmCardMouseLeave}
      onClick={onFilmCardClick}
    >
      <div className="small-movie-card__image">
        {!isPlaying && (
          <img
            src={film.image}
            alt={film.title}
            width="280"
            height="175"
          />
        )}
        {isPlaying && (
          <VideoPlayer film={film} muted={true} autoPlay={true} />
        )}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">
          {film.title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
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
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired
};

export default FilmCard;
