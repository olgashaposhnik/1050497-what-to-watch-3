import {extend} from "./utils/utils.js";
// import films from "./mocks/films.js";

const ALL_GENRES = `All genres`;

const FILMS_SHOWED_BY_START = 8;
const FILMS_SHOWED_BY_BUTTON = 8;

const initialState = {
  genre: ALL_GENRES,
  mainFilm: {},
  films: [],
  filmComments: [],
  filmsShowedByStart: FILMS_SHOWED_BY_START
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  GET_FILMS_BY_GENRE: `GET_FILMS_BY_GENRE`,
  SHOW_MORE_FILMS: `SHOW_MORE_FILMS`,
  RETURN_SHOWED_FILMS_TO_START: `RETURN_SHOWED_FILMS_TO_START`,
  GET_FILMS: `GET_FILMS`,
  GET_FILM_COMMENTS: `GET_FILM_COMMENTS`,
  GET_MAIN_FILM: `GET_MAIN_FILM`
};

const Operation = {
  getFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`).then((response) => {
      dispatch(ActionCreator.getFilms(response.data));
    });
  },
  getMainFilm: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`).then((response) => {
      dispatch(ActionCreator.getMainFilm(response.data));
    });
  },
  getComments: (activeCard) => (dispatch, getState, api) => {
    return api.get(`/comments/${activeCard}`).then((response) => {
      dispatch(ActionCreator.getComments(response.data));
    });
  }
};

const ActionCreator = {
  changeGenre: (genre = ALL_GENRES) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre
  }),
  getFilmsByGenre: () => ({
    type: ActionType.GET_FILMS_BY_GENRE
  }),
  showMoreFilms: () => ({
    type: ActionType.SHOW_MORE_FILMS,
    payload: null
  }),
  returnShowedFilmsToStart: () => ({
    type: ActionType.RETURN_SHOWED_FILMS_TO_START,
    payload: null
  }),
  getFilms: (films) => ({
    type: ActionType.GET_FILMS,
    payload: films
  }),
  getMainFilm: (film) => ({
    type: ActionType.GET_MAIN_FILM,
    payload: film
  }),
  getFilmComments: (comments) => ({
    type: ActionType.GET_FILM_COMMENTS,
    payload: comments
  })
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
        getFilmsByGenre = state.films; // проверить насчет state.films
      } else {
        getFilmsByGenre = state.films.filter((film) => film.genre === state.genre);
      }
      return extend(state, {
        filteredFilms: getFilmsByGenre(state.films, state.genre),
      });

    case ActionType.SHOW_MORE_FILMS:
      return extend(state, {
        filmsShowedByStart: state.filmsShowedByStart + FILMS_SHOWED_BY_BUTTON
      });

    case ActionType.RETURN_SHOWED_FILMS_TO_START:
      return extend(state, {
        filmsShowedByStart: FILMS_SHOWED_BY_START
      });

    case ActionType.GET_FILMS:
      return extend(state, {
        films: action.payload
      });

    case ActionType.GET_MAIN_FILM:
      return extend(state, {
        mainFilm: action.payload
      });

    case ActionType.GET_FILM_COMMENTS:
      return extend(state, {
        filmComments: action.payload
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator, Operation};

