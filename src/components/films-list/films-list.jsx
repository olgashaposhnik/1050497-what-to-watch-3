import React from "react";
import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";

const FilmsList = ({films, onFilmCardClick, onFilmCardMouseOver, onFilmCardMouseLeave, activeFilmCard, isPlaying, onExitButtonClick}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <FilmCard
          key={film.title + index}
          film={film}
          onFilmCardClick={() => onFilmCardClick(film)}
          onFilmCardMouseOver={() => onFilmCardMouseOver(index)}
          onFilmCardMouseLeave={onFilmCardMouseLeave}
          isPlaying={activeFilmCard === index && isPlaying}
          onExitButtonClick={onExitButtonClick}
        />
      ))}
    </div>
  );
};

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired
};

export default FilmsList;
