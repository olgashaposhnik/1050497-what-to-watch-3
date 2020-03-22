import {reducer, ActionType, ActionCreator} from "./reducer.js";
import films from "./mocks/films";

const ALL_GENRES = `All genres`;

const FILMS_SHOWED_BY_START = 8;

const initialState = {
  genre: ALL_GENRES,
  films,
  filmsShowedByStart: FILMS_SHOWED_BY_START
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it(`Reducer should change genre`, () => {
  expect(
      reducer(
          {genre: ALL_GENRES},
          {
            type: ActionType.CHANGE_GENRE,
            payload: `Comedy`
          }
      )
  ).toEqual({
    genre: `Comedy`
  });
});

it(`Reducer should increase showed films`, () => {
  expect(
      reducer(
          {filmsShowedByStart: FILMS_SHOWED_BY_START},
          {
            type: ActionType.SHOW_MORE_FILMS
          }
      )
  ).toEqual({
    filmsShowedByStart: 16
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for genre changing returns correct action`, () => {
    expect(ActionCreator.changeGenre(`Comedy`)).toEqual({
      type: ActionType.CHANGE_GENRE,
      payload: `Comedy`
    });
  });
});
