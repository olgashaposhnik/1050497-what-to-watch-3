import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import {FilmData} from "../tests-mock/tests-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title link be pressed`, () => {
  const onTitleLinkClick = jest.fn();

  const main = shallow(
      <Main
        name={FilmData.NAME}
        genre={FilmData.GENRE}
        year={FilmData.YEAR}
        titles={FilmData.TITLES}
        onTitleLinkClick={onTitleLinkClick}
      />
  );

  const titleLink = main.find(`.small-movie-card__link`).first();

  titleLink.props().onClick();

  expect(onTitleLinkClick.mock.calls.length).toBe(1);
});
