import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Tab from '../tab/tab.jsx';
import Tabs from '../tabs/tabs.jsx';
import {getRatingTextValue} from "../../utils/utils.js";
// import FilmsList from '../films-list/films-list.jsx';
// import films from "../../mocks/films";
import SimilarFilms from '../similar-films/similar-films.jsx';
import VideoPlayer from "../video-player/video-player.jsx";

const MORE_LIKE_THIS_COUNT = 4;

const FilmPage = ({film, films, onFilmCardClick, isVideoPlaying, onExitButtonClick}) => {
  const getSimilarFilms = () => {
    return (films.filter((item) => item.genre === film.genre)).slice(0, MORE_LIKE_THIS_COUNT);
  };

  return isVideoPlaying ? (
    <VideoPlayer
      onExitButtonClick={onExitButtonClick}
      film={film}
      autoPlay={false}
      muted={true}
    />
  ) : (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.fullImage} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img
                  src="img/avatar.jpg"
                  alt="User avatar"
                  width="63"
                  height="63"
                />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  className="btn btn--play movie-card__button"
                  type="button" onClick={onExitButtonClick}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img
                src={film.image}
                alt={film.title}
                width="218"
                height="327"
              />
            </div>

            <Tabs>
              <Tab name="Overview">
                <div className="movie-rating">
                  <div className="movie-rating__score">{film.rating}</div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">{getRatingTextValue(film.rating)}</span>
                    <span className="movie-rating__count">{film.ratingCount} ratings</span>
                  </p>
                </div>
                <div className="movie-card__text">
                  <p>{film.description}</p>
                  <p className="movie-card__director"><strong>Director: {film.director}</strong></p>
                  <p className="movie-card__starring"><strong>Starring: {film.starring.join(`, `)} and other</strong></p>
                </div>
              </Tab>
              <Tab name="Details">
                <div className="movie-card__text movie-card__row">
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Director</strong>
                      <span className="movie-card__details-value">{film.director}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Starring</strong>
                      <span className="movie-card__details-value">
                        {film.starring.join(`, `)}
                      </span>
                    </p>
                  </div>
                  <div className="movie-card__text-col">
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Run Time</strong>
                      <span className="movie-card__details-value">{film.duration}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{film.genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{film.year}</span>
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab name="Reviews">
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    {film.reviews.map((review) => (
                      <div className="review" key={review.id}>
                        <blockquote className="review__quote">
                          <p className="review__text">{review.review}</p>
                          <footer className="review__details">
                            <cite className="review__author">{review.author}</cite>
                            <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                          </footer>
                        </blockquote>
                        <div className="review__rating">{review.rating}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <SimilarFilms
            film={film}
            films={getSimilarFilms(film, MORE_LIKE_THIS_COUNT)}
            onFilmCardClick={onFilmCardClick}
            onExitButtonClick={onExitButtonClick}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a href="main.html" className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

FilmPage.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fullImage: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number.isRequired,
          // date: PropTypes.instanceOf(Date).isRequired,
          date: PropTypes.string.isRequired,
          author: PropTypes.string.isRequired,
          review: PropTypes.string.isRequired
        })
    ).isRequired
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        fullImage: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.arrayOf(PropTypes.string).isRequired,
        duration: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              rating: PropTypes.number.isRequired,
              date: PropTypes.instanceOf(Date).isRequired,
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        ).isRequired
      }).isRequired
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
};

export default FilmPage;
