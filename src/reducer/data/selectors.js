import {createSelector} from "reselect";

const ALL_GENRES = `All genres`;

const getFilms = (state) => {
  return state.DATA.films;
};

const getMainFilm = (state) => {
  return state.DATA.mainFilm;
};

const getComments = (state) => {
  return state.DATA.filmComments;
};

const filterFilmsByGenre = (state) => {
  const films = state.DATA.films;
  const filmsShowedByStart = state.STATE.filmsShowedByStart;
  const genre = state.STATE.genre;

  return genre === ALL_GENRES
    ? films.slice(0, filmsShowedByStart)
    : films.filter((film) => film.genre === genre).slice(0, filmsShowedByStart);
};

const getFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);

export {getFilms, getMainFilm, getComments, getFilmsByGenre};
