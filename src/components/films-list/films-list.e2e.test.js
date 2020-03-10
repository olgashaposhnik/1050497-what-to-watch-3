import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmsList from "./films-list.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const films = [
  {
    image: `img/no-country-for-old-men.jpg`,
    title: `The Lord of the Rings: The Return of the King`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `Charles Brackett`,
    starring: [
      `Haskell V. Anderson III`,
      `Herbert Anderson`,
      `James Anderson`,
      `Jeff Anderson`
    ],
    duration: `1h 17m`,
    year: 2018,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 4.8,
    ratingCount: 287,
    description: `Director/co-writer Dan Scanlon’s animated adventure comedy features characters voiced by Tom Holland, Chris Pratt, Julia Louis-Dreyfus, and Octavia Spencer. It's about two teenage elf brothers living in a post-magic world who stumble upon a spell that can bring their father back to life. They embark on an epic and heartwarming adventure to see the spell through when it only brings back the lower half of their father’s body.`,
  },
  {
    image: `img/what-we-do-in-the-shadows.jpg`,
    title: `Terminator 2: Judgment Day`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `Tim Burton`,
    starring: [
      `Jon Abrahams`,
      `Omid Abtahi`,
      `Yousef Abu-Taleb`,
      `Kirk Acevedo`
    ],
    duration: `1h 49m`,
    year: 2017,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 6.3,
    ratingCount: 528,
    description: `Director Jay Roach’s biographical drama film stars Charlize Theron, Nicole Kidman, Margot Robbie, and John Lithgow. It fictionalizes the combined efforts of Fox News anchors Gretchen Carlson and Megyn Kelly to successfully sue Fox News CEO and founder Roger Ailes for sexual harassment in 2016. They resist intimidation and self-censorship to address pervasive sexism in the Fox newsroom.`,
  },
  {
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `The Shawshank Redemption`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `Lorenzo di Bonaventura`,
    starring: [
      `Keegan Allen`,
      `Lester Allen`,
      `Phillip R. Allen`,
      `Rex Allen`,
      `Robert Allen (actor)`,
      `Tim Allen`
    ],
    duration: `1h 12m`,
    year: 2002,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 4.9,
    ratingCount: 854,
    description: `On his 85th birthday, acclaimed crime novelist Harlan Thrombey (Christopher Plummer) is found dead in his room with his throat slit. Just as authorities are about to dismiss the tragedy as suicide due to the lack of evidence to prove otherwise, Detective Benoit Blanc (Daniel Craig) arrives at the scene to conduct his own investigation. Soon, it is revealed that all of Thrombey’s family have a reason to murder the family’s patriarch. Will Marta (Ana de Armas), the dead man’s caregiver and most trusted confidante, be able to help identify who the killer is? Written and directed by Rian Johnson.`,
  },
  {
    image: `img/pulp-fiction.jpg`,
    title: `Forrest Gump`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `J. J. Abrams`,
    starring: [
      `Lee Aaker`,
      `Willie Aames`,
      `Quinton Aaron`,
      `Victor Aaron`,
      `Abbott and Costello`
    ],
    duration: `1h 49m`,
    year: 2011,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 1.4,
    ratingCount: 245,
    description: `Writer-director Leigh Whannell’s science fiction horror film is a contemporary female-centric adaptation of H. G. Wells' 1897 novel of the same name. It stars Elisabeth Moss as a domestic abuse survivor who is convinced that her abusive scientist ex-boyfriend has discovered a way to make himself invisible, and that he's stalking her after faking his own death and leaving her a sizable part of his fortune. Oliver Jackson-Cohen and Aldis Hodge co-star.`,
  },
  {
    image: `img/we-need-to-talk-about-kevin.jpg`,
    title: `Schindlers List`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `Alfred Hitchcock`,
    starring: [
      `Ben Affleck`,
      `Casey Affleck`,
      `John Agar`
    ],
    duration: `1h 43m`,
    year: 2009,
    preview: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
    rating: 8.4,
    ratingCount: 576,
    description: `Elena (Naomi Scott), a young engineer, unwittingly stumbles upon new government technology that could hold significant and dangerous ramifications for society. However, her discovery garners attention from the wrong sort of people, so it is up to two special operatives (Kristen Stewart and Ella Balinska) to mobilize, protecting Elena and the future of the planet in the process. Written and directed by Elizabeth Banks.`,
  },
  {
    image: `img/shutter-island.jpg`,
    title: `Titanic`,
    genre: `comedy`,
    fullImage: `https://www.google.com/url?sa=i&url=https%3A%2F%2Ftsn.ua%2Fru%2Fbooks%2Fv-seti-poyavilsya-tizer-k-filmu-zahar-berkut-video-1358730.html&psig=AOvVaw0KWyl2zdo6yLT0CN3BJlnw&ust=1583063472147000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDB2JfZ9ucCFQAAAAAdAAAAABAD`,
    director: `Gary Kurtz`,
    starring: [
      `Alan Aisenberg`,
      `Spottiswoode Aitken`,
      `Franklyn Ajaye`
    ],
    duration: `2h 23m`,
    year: 2015,
    preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
    rating: 6.9,
    ratingCount: 548,
    description: `Rob Bilott (Mark Ruffalo) is a Cincinnati lawyer whose specialization is defending corporate entities. One day, a farmer from West Virginia named Wilbur Tennant (Bill Camp) barges into his office and blackmails him into helping him sue the Dupont company for poisoning the Dry Run Creek. Rob decides to check out the situation himself, and what he sees convinces him to take on the case. His boss, Tom Terp (Tim Robbins), is supportive of his endeavor to stop the company from causing any more harm to the environment, but his wife Sarah (Anne Hathaway) isn’t as receptive. Directed by Todd Haynes.`,
  },
  {
    image: `img/revenant.jpg`,
    title: `The Green Mile`,
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
  },
  {
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
  },
];

it(`Should pass data to handler on click`, () => {
  const onFilmCardClick = jest.fn();

  const filmsList = mount(
      <FilmsList films={films} onFilmCardClick={onFilmCardClick} />
  );

  const filmCard = filmsList.find(`article.small-movie-card.catalog__movies-card`).first();

  filmCard.simulate(`click`);

  expect(onFilmCardClick.mock.calls.length).toBe(1);
  expect(onFilmCardClick.mock.calls[0][0]).toBe(0); // Первый аргумент первого вызова функции был 0
});
