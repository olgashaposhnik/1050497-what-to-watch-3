import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const FilmData = {
  NAME: `The Grand Budapest Hotel`,
  GENRE: `Drama`,
  YEAR: 2014,
  TITLES: [`The Grand Budapest Hotel`,
    `Fantastic Beasts: The Crimes of Grindelwald`,
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
    `Johnny English`,
    `Shutter Island`,
    `Pulp Fiction`,
    `No Country for Old Men`,
    `Snatch`,
    `Moonrise Kingdom`,
    `Seven Years in Tibet`,
    `Midnight Special`,
    `War of the Worlds`,
    `Dardjeeling Limited`,
    `Orlando`,
    `Mindhunter`,
    `Midnight Special`
  ],
};

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
