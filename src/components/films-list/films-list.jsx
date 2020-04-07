import React from "react";
import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";

const FilmsList = ({films, onFilmCardClick, onFilmCardMouseOver, onFilmCardMouseLeave, activeFilmCard, isPlaying, onExitButtonClick}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, index) => (
        <FilmCard
          key={film.id + index}
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
      })
  ),
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmCardMouseOver: PropTypes.func.isRequired,
  onFilmCardMouseLeave: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.number,
  isPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired
};

export default FilmsList;
