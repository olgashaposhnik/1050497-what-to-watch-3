import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./api.js";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {Operation as DataOperation} from "./reducer/data/data.js";
import {composeWithDevTools} from "redux-devtools-extension";
import {Operation as UserOperation, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";

const onUnauthorized = () => {
  store.dispatch(
      ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)
  );
};

const api = createAPI(onUnauthorized);

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

store.dispatch(DataOperation.getFilms());
store.dispatch(DataOperation.getMainFilm());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App getComments={(activeCard) => store.dispatch(DataOperation.getComments(activeCard))} />
    </Provider>,
    document.querySelector(`#root`)
);

