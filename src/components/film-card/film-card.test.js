import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  image: `img/what-we-do-in-the-shadows.jpg`,
  title: `What We Do in the Shadows`,
};

it(`Should render MovieCard component`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onTitleLinkClick = {() => {}}
          onFilmCardHover = {() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
