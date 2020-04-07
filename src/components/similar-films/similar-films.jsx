import React from "react";
import FilmsList from "../films-list/films-list.jsx";
import PropTypes from "prop-types";
import withActiveFilmCard from "../hocs/with-active-film-card/with-active-film-card.jsx";

const FilmsListWrapped = withActiveFilmCard(FilmsList);

const getSimilarFilms = (films, film) => {
  return films.filter(
      (similarFilm) =>
        similarFilm.genre === film.genre && similarFilm.title !== film.name
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
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              rating: PropTypes.number,
              date: PropTypes.instanceOf(Date),
              // date: PropTypes.string.isRequired,
              author: PropTypes.string,
              review: PropTypes.string
            })
        )
      })
  ),
  onFilmCardClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default SimilarFilms;
