import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const FilmData = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
};

ReactDOM.render(
    <App
      name={FilmData.NAME}
      genre={FilmData.GENRE}
      year={FilmData.YEAR}
    />,
    document.querySelector(`#root`)
);