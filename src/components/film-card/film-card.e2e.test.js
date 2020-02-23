import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmCard from "./film-card";
// import {FilmData} from "../tests-mock/tests-mock.js";

Enzyme.configure({
  adapter: new Adapter(),
});

const film = {
  image: `img/what-we-do-in-the-shadows.jpg`,
  title: `What We Do in the Shadows`,
};

it(`Should film card be hovered`, () => {
  const onTitleLinkClick = jest.fn();
  const onFilmCardHover = jest.fn();

  const filmCard = shallow(
      <FilmCard
        film = {film}
        onTitleLinkClick = {onTitleLinkClick}
        onFilmCardHover = {onFilmCardHover(film)}
      />
  );

  filmCard.simulate(`mouseover`);

  expect(onFilmCardHover.mock.calls.length).toBe(1);
});
