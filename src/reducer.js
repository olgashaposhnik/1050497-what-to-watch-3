import {extend} from "./utils/utils.js";
import films from "./mocks/films.js";

const ALL_GENRES = `All genres`;

const initialState = {
  genre: ALL_GENRES,
  films,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
};

const ActionCreator = {
  changeGenre: (genre = ALL_GENRES) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload,
      });

    case ActionType.GET_FILMS_BY_GENRE:
      let getFilmsByGenre = [];
      if (state.genre === ALL_GENRES) {
        getFilmsByGenre = films;
      } else {
        getFilmsByGenre = films.filter((film) => film.genre === state.genre);
      }
      return extend(state, {
        filteredFilms: getFilmsByGenre(state.films, state.genre),
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

