import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
// import films from "./mocks/films";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {composeWithDevTools} from "redux-devtools-extension";

// const FilmData = {
//   NAME: `The Grand Budapest Hotel`,
//   GENRE: `Drama`,
//   YEAR: 2014,
// };

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(DataOperation.getFilms());
store.dispatch(DataOperation.getMainFilm());

ReactDOM.render(
    <Provider store={store}>
      {/* <App
        name={FilmData.NAME}
        genre={FilmData.GENRE}
        year={FilmData.YEAR}
        films={store.getState().films}
      /> */}
      <App getComments={(activeCard) => store.dispatch(DataOperation.getComments(activeCard))} />
    </Provider>,
    document.querySelector(`#root`)
);

