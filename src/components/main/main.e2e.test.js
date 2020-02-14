import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";
import FilmData from "../tests-mock/tests-mock.js";

// const FilmData = {
//   NAME: `The Grand Budapest Hotel`,
//   GENRE: `Drama`,
//   YEAR: 2014,
//   TITLES: [`The Grand Budapest Hotel`,
//     `Fantastic Beasts: The Crimes of Grindelwald`,
//     `Bohemian Rhapsody`,
//     `Macbeth`,
//     `Aviator`,
//     `We need to talk about Kevin`,
//     `What We Do in the Shadows`,
//     `Revenant`,
//     `Johnny English`,
//     `Shutter Island`,
//     `Pulp Fiction`,
//     `No Country for Old Men`,
//     `Snatch`,
//     `Moonrise Kingdom`,
//     `Seven Years in Tibet`,
//     `Midnight Special`,
//     `War of the Worlds`,
//     `Dardjeeling Limited`,
//     `Orlando`,
//     `Mindhunter`,
//     `Midnight Special`
//   ],
// };

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

  const titleLink = main.find(`small-movie-card__link`);

  titleLink.props().onClick();

  expect(onTitleLinkClick.mock.calls.length).toBe(1);
});
