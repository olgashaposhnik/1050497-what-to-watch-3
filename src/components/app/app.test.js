import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import {FilmData} from "../tests-mock/tests-mock.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      name={FilmData.NAME}
      genre={FilmData.GENRE}
      year={FilmData.YEAR}
      titles={FilmData.TITLES}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

