import {getRandomInteger} from "../utils/utils.js";

export default [
  {
    id: `1`,
    image: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Writer-director Leigh Whannell’s science fiction horror film is a contemporary female-centric adaptation of H. G. Wells' 1897 novel of the same name. It stars Elisabeth Moss as a domestic abuse survivor who is convinced that her abusive scientist ex-boyfriend has discovered a way to make himself invisible, and that he's stalking her after faking his own death and leaving her a sizable part of his fortune. Oliver Jackson-Cohen and Aldis Hodge co-star.`,
    reviews: [
      {
        id: `1`,
        review: `An intriguing litmus test for audiences, The Hunt amuses with its provocatively ambiguous political stance, even if the genre film underneath is relatively boilerplate thriller fare.`,
        author: `Shaun Munro`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `2`,
        review: `Having your characters self-consciously point out every cliché doesn't magically erase the fact your film is full of clichés.`,
        author: `Richard Trenholm`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `3`,
        review: `You can almost smell the garbage in the street!`,
        author: `Dennis Schwartz`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `2`,
    image: `img/what-we-do-in-the-shadows.jpg`,
    title: `What We Do in the Shadows`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Director Autumn de Wilde’s dramedy is an adaptation of Jane Austen’s beloved 1815 novel of manners of the same name. Starring Anya Taylor-Joy, Johnny Flynn, Josh O'Connor, and Bill Nighy, it's about a headstrong, high-spirited, and privileged young woman who severely overestimates her matchmaking abilities as she meddles in the romantic lives of those around her. Hard-won knowledge about the intricacies of love compels her to reconsider her vow to never marry.`,
    reviews: [
      {
        id: `4`,
        review: `The Hunt is an entertaining, sign-of-the-times satire that pokes fun at both parties. Maybe the movie should instead be called Betty Gilpin because she makes it her own.`,
        author: `Lauren Bradshaw`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `5`,
        review: `When "The Mummy" ran Universal's Dark Universe plans right off the rails and people said, wow we've never seen anything sideline a franchise so quickly? Well here's Columbia Pictures with "Bloodshot" saying, "hold my beer".`,
        author: `Bill Watters`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `3`,
    image: `img/johnny-english.jpg`,
    title: `Johnny English`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Director/co-writer Dan Scanlon’s animated adventure comedy features characters voiced by Tom Holland, Chris Pratt, Julia Louis-Dreyfus, and Octavia Spencer. It's about two teenage elf brothers living in a post-magic world who stumble upon a spell that can bring their father back to life. They embark on an epic and heartwarming adventure to see the spell through when it only brings back the lower half of their father’s body.`,
    reviews: [
      {
        id: `6`,
        review: `A surreal look at a man whose best conversational friend is his deerskin jacket`,
        author: `Harvey S. Karten`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `7`,
        review: `Like last year's Academy Award-winning Parasite, Bacurau manages to turn the class struggle into inventive entertainment without its overall message losing any of its potency.`,
        author: `Lee Jutton`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `8`,
        review: `The only thing worth discussing about "The Hunt" is the genius of Betty Gilpin. The story is too pat, and flat, to invite any real discussion with, or about it, but Gilpin offers up a performance that you won't be able to shake.`,
        author: `Katie Walsh`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `9`,
        review: `The conflicts at the heart of Synonyms will resonate deeply, thanks to Lapid's deeply personal storytelling and Mercier's fiery performance.`,
        author: `C.H. Newell`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `4`,
    image: `img/no-country-for-old-men.jpg`,
    title: `No Country for Old Men`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Elena (Naomi Scott), a young engineer, unwittingly stumbles upon new government technology that could hold significant and dangerous ramifications for society. However, her discovery garners attention from the wrong sort of people, so it is up to two special operatives (Kristen Stewart and Ella Balinska) to mobilize, protecting Elena and the future of the planet in the process. Written and directed by Elizabeth Banks.`,
    reviews: [
      {
        id: `10`,
        review: `Stargirl tells you the importance of staying true to yourself, but it shies away from telling you the consequences if you don't. This is the biggest irony of all considering the source material. Despite its flaws, Stargirl is still a worthy watch.`,
        author: `Adriana Gomez-Weston`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `11`,
        review: `A blistering sore of a production and a political party pooper.`,
        author: `Luke Parker`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `5`,
    image: `img/pulp-fiction.jpg`,
    title: `Pulp Fiction`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Directed by Jennifer Lee and Chris Buck, this sequel to the family animated adventure Frozen carries on the adventures of the Snow Queen Elsa (Idina Menzel), Elsa’s kind-hearted and optimistic sister Anna (Kristen Bell), the comedic snowman Olaf (Josh Gad) and mountain guru Kristoff (Jonathan Groff) as they venture deep into the forest to discover the truth about an ancient and legendary mystery of the kingdom they call home. Produced by Peter Del Vecho.`,
    reviews: [
      {
        id: `12`,
        review: `Despite the violence, in the end it's just a feel-good movie, comedic in nature, as one bad guy after another gets what everyone in the audience thinks is deserved.`,
        author: `Tony Medley`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `13`,
        review: `"I see and hear Onward without disgust, but there is nothing that I am passionate about it.`,
        author: `Carlos Boyero`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `6`,
    image: `img/revenant.jpg`,
    title: `Revenant`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Director Jay Roach’s biographical drama film stars Charlize Theron, Nicole Kidman, Margot Robbie, and John Lithgow. It fictionalizes the combined efforts of Fox News anchors Gretchen Carlson and Megyn Kelly to successfully sue Fox News CEO and founder Roger Ailes for sexual harassment in 2016. They resist intimidation and self-censorship to address pervasive sexism in the Fox newsroom.`,
    reviews: [
      {
        id: `14`,
        review: `"The actress and director Kasi Lemmons turns this brutal story into a series of implausible adventures, crudely developed, and with characters that are too flat.`,
        author: `Elsa Fernández-Santos`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `15`,
        review: `Boreshot`,
        author: `Jeff Mitchell`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `7`,
    image: `img/shutter-island.jpg`,
    title: `Shutter Island`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `Rob Bilott (Mark Ruffalo) is a Cincinnati lawyer whose specialization is defending corporate entities. One day, a farmer from West Virginia named Wilbur Tennant (Bill Camp) barges into his office and blackmails him into helping him sue the Dupont company for poisoning the Dry Run Creek. Rob decides to check out the situation himself, and what he sees convinces him to take on the case. His boss, Tom Terp (Tim Robbins), is supportive of his endeavor to stop the company from causing any more harm to the environment, but his wife Sarah (Anne Hathaway) isn’t as receptive. Directed by Todd Haynes.`,
    reviews: [
      {
        id: `16`,
        review: `Although the performances are solid and the period atmosphere is richly textured, the well-intentioned film feels disjointed and muddled in weaving together its overlapping narrative segments.`,
        author: `Todd Jorgenson`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `17`,
        review: `It ends up being a valuable document on the need to connect.`,
        author: `Javier Ocaña`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `18`,
        review: `An unclassified fusion between the romantic youth thriller, the black comedy, the yakuza cinema, the martial arts cinema and the gore, which finds in the (punctual) gush of creative insolence its best ally.`,
        author: `El Pais`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
  {
    id: `8`,
    image: `img/we-need-to-talk-about-kevin.jpg`,
    title: `We need to talk about Kevin`,
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
    rating: getRandomInteger(0, 100) / 10,
    ratingCount: getRandomInteger(1, 300),
    description: `On his 85th birthday, acclaimed crime novelist Harlan Thrombey (Christopher Plummer) is found dead in his room with his throat slit. Just as authorities are about to dismiss the tragedy as suicide due to the lack of evidence to prove otherwise, Detective Benoit Blanc (Daniel Craig) arrives at the scene to conduct his own investigation. Soon, it is revealed that all of Thrombey’s family have a reason to murder the family’s patriarch. Will Marta (Ana de Armas), the dead man’s caregiver and most trusted confidante, be able to help identify who the killer is? Written and directed by Rian Johnson.`,
    reviews: [
      {
        id: `19`,
        review: `The movie can be entertaining for those looking for nothing more than a quick leisure time.`,
        author: `Spenser Confidential`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
      {
        id: `20`,
        review: `The Song of Names adds to a musical vocation, but unfortunately it is out of tune.`,
        author: `Sarah Gopaul`,
        date: new Date(),
        rating: getRandomInteger(0, 100) / 10,
      },
    ]
  },
];

