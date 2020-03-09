import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  image: `img/what-we-do-in-the-shadows.jpg`,
  title: `What We Do in the Shadows`,
  genre: `comedy`,
  fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
  director: `Peter Jackson`,
  starring: [
    `Alan Alda`,
    `Antony Alda`,
    `Robert Alda`,
    `Norman Alden`,
    `Tom Aldredge`
  ],
  duration: `1h 04m`,
  year: 2011,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  rating: 3.8,
  ratingCount: 854,
  description: `Directed by Jennifer Lee and Chris Buck, this sequel to the family animated adventure Frozen carries on the adventures of the Snow Queen Elsa (Idina Menzel), Elsa’s kind-hearted and optimistic sister Anna (Kristen Bell), the comedic snowman Olaf (Josh Gad) and mountain guru Kristoff (Jonathan Groff) as they venture deep into the forest to discover the truth about an ancient and legendary mystery of the kingdom they call home. Produced by Peter Del Vecho.`,
};

it(`Should render MovieCard component`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onFilmCardClick = {() => {}}
          onFilmCardMouseOver = {() => {}}
          onFilmCardMouseLeave = {() => {}}
          isPlaying={true}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
