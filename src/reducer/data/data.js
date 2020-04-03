import {extend} from "../../utils/utils";

const initialState = {
  mainFilm: {},
  films: [],
  filmComments: [],
};

const ActionType = {
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
  getFilmComments: (activeCard) => (dispatch, getState, api) => {
    return api.get(`/comments/${activeCard}`).then((response) => {
      dispatch(ActionCreator.getFilmComments(response.data));
    });
  }
};

const ActionCreator = {
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

