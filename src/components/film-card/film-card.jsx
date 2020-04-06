import React from "react";
// import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";

const FilmCard = ({film, onFilmCardClick, onFilmCardMouseOver, onFilmCardMouseLeave, isPlaying, onExitButtonClick}) => {
  console.log(film)
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
            src={film.poster_image}
            alt={film.name}
            width="280"
            height="175"
          />
        )}
        {isPlaying && (
          <VideoPlayer film={film} muted={true} autoPlay={true} onExitButtonClick={onExitButtonClick}/>
        )}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="#">
          {film.name}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    fullImage: PropTypes.string,
    director: PropTypes.string,
    starring: PropTypes.arrayOf(PropTypes.string),
    duration: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.number,
    rating: PropTypes.number,
    ratingCount: PropTypes.number,
    description: PropTypes.string,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number,
          date: PropTypes.instanceOf(Date),
          // date: PropTypes.string.isRequired,
          author: PropTypes.string,
          review: PropTypes.string
        })
    )
  }),
  isPlaying: PropTypes.bool.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default FilmCard;
