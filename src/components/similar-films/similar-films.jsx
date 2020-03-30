import React from "react";
import FilmsList from "../films-list/films-list.jsx";
import PropTypes from "prop-types";
import withActiveFilmCard from "../hocs/with-active-film-card/with-active-film-card.jsx";

const FilmsListWrapped = withActiveFilmCard(FilmsList);

const getSimilarFilms = (films, film) => {
  return films.filter(
      (similarFilm) =>
        similarFilm.genre === film.genre && similarFilm.title !== film.title
  );
};

const SimilarFilms = ({films, film, onFilmCardClick, onExitButtonClick}) => {
  return (
    <FilmsListWrapped
      films={getSimilarFilms(films, film)}
      onFilmCardClick={onFilmCardClick}
      onExitButtonClick={onExitButtonClick}
    />
  );
};

SimilarFilms.propTypes = {
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
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          date: PropTypes.instanceOf(Date).isRequired,
          author: PropTypes.string.isRequired,
          review: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
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
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              rating: PropTypes.number.isRequired,
              date: PropTypes.instanceOf(Date).isRequired,
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        ).isRequired
      }).isRequired
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default SimilarFilms;
