import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveFilmCard from "./with-active-film-card.jsx";

configure({adapter: new Adapter()});

const Component = () => <div />;
const ComponentWrapped = withActiveFilmCard(Component);

const films = [
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
  {
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
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: 9.6,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: 3.6,
      },
    ]
  },
];

it(`Should change active film card on mouseover or mouseleave`, () => {
  const wrapper = shallow(
      <ComponentWrapped films={films} onFilmCardClick={() => {}} />
  );

  // expect(wrapper.props().activeFilmCard).toEqual(null);

  wrapper.props().onFilmCardMouseOver(0);
  expect(wrapper.props().activeFilmCard).toEqual(0);

  wrapper.props().onFilmCardMouseLeave();
  expect(wrapper.props().activeFilmCard).toEqual(null);
});


