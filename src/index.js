import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import films from "./mocks/films";
import {reducer} from "./reducer.js";

const FilmData = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        name={FilmData.NAME}
        genre={FilmData.GENRE}
        year={FilmData.YEAR}
        films={films}
      />
    </Provider>,
    document.querySelector(`#root`)
);

