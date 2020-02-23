import React from "react";
import renderer from "react-test-renderer";
import FilmsList from "./films-list.jsx";

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

it(`Should render MoviesList component`, () => {
  const tree = renderer
    .create(<FilmsList
      films={films}
      onTitleLinkClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
