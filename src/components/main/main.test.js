import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {FilmData} from "../tests-mock/tests-mock.js";

const films = [
  {
    image: `img/no-country-for-old-men.jpg`,
    title: `The Lord of the Rings: The Return of the King`,
  },
  {
    image: `img/what-we-do-in-the-shadows.jpg`,
    title: `Terminator 2: Judgment Day`,
  },
  {
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `The Shawshank Redemption`,
  },
  {
    image: `img/pulp-fiction.jpg`,
    title: `Forrest Gump`,
  },
  {
    image: `img/we-need-to-talk-about-kevin.jpg`,
    title: `Schindlers List`,
  },
  {
    image: `img/shutter-island.jpg`,
    title: `Titanic`,
  },
  {
    image: `img/revenant.jpg`,
    title: `The Green Mile`,
  },
  {
    image: `img/johnny-english.jpg`,
    title: `Back to the Future`,
  },
];

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      name={FilmData.NAME}
      genre={FilmData.GENRE}
      year={FilmData.YEAR}
      films={films}
      onTitleLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
