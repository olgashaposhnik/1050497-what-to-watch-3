import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

const film = {
  image: `img/johnny-english.jpg`,
  title: `Back to the Future`,
  genre: `comedy`,
  fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
  director: `Samuel Goldwyn`,
  starring: [
    `River Alexander`,
    `Ross Alexander`,
    `Terry Alexander`,
    `Phillip Alford`,
    `Baba Ali`,
    `Mahershala Ali`,
    `Jed Allan`
  ],
  duration: `1h 54m`,
  year: 2011,
  preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  rating: 9.7,
  ratingCount: 134,
  description: `Director Autumn de Wilde’s dramedy is an adaptation of Jane Austen’s beloved 1815 novel of manners of the same name. Starring Anya Taylor-Joy, Johnny Flynn, Josh O'Connor, and Bill Nighy, it's about a headstrong, high-spirited, and privileged young woman who severely overestimates her matchmaking abilities as she meddles in the romantic lives of those around her. Hard-won knowledge about the intricacies of love compels her to reconsider her vow to never marry.`,
  reviews: [
    {
      id: `1`,
      review: `An intriguing litmus test for audiences, The Hunt amuses with its provocatively ambiguous political stance, even if the genre film underneath is relatively boilerplate thriller fare.`,
      author: `Shaun Munro`,
      date: `01.02.2009`,
      rating: 8.8,
    },
    {
      id: `2`,
      review: `Having your characters self-consciously point out every cliché doesn't magically erase the fact your film is full of clichés.`,
      author: `Richard Trenholm`,
      date: `07.06.14`,
      rating: 6.5,
    },
    {
      id: `3`,
      review: `You can almost smell the garbage in the street!`,
      author: `Dennis Schwartz`,
      date: `07.08.2015`,
      rating: 3.6,
    },
  ]
};

it(`Should render MovieCard component`, () => {
  const tree = renderer
    .create(
        <FilmCard
          film={film}
          onFilmCardClick = {() => {}}
          onFilmCardMouseOver = {() => {}}
          onFilmCardMouseLeave = {() => {}}
          onExitButtonClick = {() => {}}
          isPlaying={true}
        >
        </FilmCard>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
