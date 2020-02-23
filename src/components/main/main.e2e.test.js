import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
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

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleLinkClick = jest.fn();

  const main = mount(
      <Main
        name={FilmData.NAME}
        genre={FilmData.GENRE}
        year={FilmData.YEAR}
        films={films}
        onTitleLinkClick={onTitleLinkClick}
      />
  );

  const titleLink = main.find(`h3.small-movie-card__title`).first();

  titleLink.props().onClick();

  expect(onTitleLinkClick.mock.calls.length).toBe(1);
});
