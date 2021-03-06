import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Tab from '../tab/tab.jsx';
import Tabs from '../tabs/tabs.jsx';
import {getRatingTextValue} from "../../utils/utils.js";
// import FilmsList from '../films-list/films-list.jsx';
// import films from "../../mocks/films";
import SimilarFilms from '../similar-films/similar-films.jsx';
import VideoPlayer from "../video-player/video-player.jsx";
import {connect} from "react-redux";
import {getFilms} from "../../reducer/data/selectors.js";
import {getComments} from "../../reducer/data/selectors.js";

const MORE_LIKE_THIS_COUNT = 4;

const FilmPage = ({film, films, comments, onFilmCardClick, isVideoPlaying, onExitButtonClick}) => {
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
            <img src={film.background_image} alt={film.name} />
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
              <h2 className="movie-card__title">{film.name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.released}</span>
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
                src={film.preview_image}
                alt={film.name}
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
                    <span className="movie-rating__count">{film.scores_count} ratings</span>
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
                      <span className="movie-card__details-value">{film.run_time}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Genre</strong>
                      <span className="movie-card__details-value">{film.genre}</span>
                    </p>
                    <p className="movie-card__details-item">
                      <strong className="movie-card__details-name">Released</strong>
                      <span className="movie-card__details-value">{film.released}</span>
                    </p>
                  </div>
                </div>
              </Tab>
              <Tab name="Reviews">
                <div className="movie-card__reviews movie-card__row">
                  <div className="movie-card__reviews-col">
                    {comments.map((review) => (
                      <div className="review" key={review.id}>
                        <blockquote className="review__quote">
                          <p className="review__text">{review.comment}</p>
                          <footer className="review__details">
                            <cite className="review__author">{review.user.name}</cite>
                            <time className="review__date" dateTime={review.date}>{review.date}</time>
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
    'name': PropTypes.string,
    'image': PropTypes.string,
    'poster_image': PropTypes.string,
    'preview_image': PropTypes.string,
    'background_image': PropTypes.string,
    'director': PropTypes.string,
    'starring': PropTypes.arrayOf(PropTypes.string),
    'run_time': PropTypes.number,
    'genre': PropTypes.string,
    'released': PropTypes.number,
    'rating': PropTypes.number,
    'scores_count': PropTypes.number,
    'description': PropTypes.string,
    'reviews': PropTypes.arrayOf(
        PropTypes.shape({
          rating: PropTypes.number,
          date: PropTypes.instanceOf(Date),
          // date: PropTypes.string.isRequired,
          author: PropTypes.string,
          review: PropTypes.string
        })
    )
  }),
  films: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        fullImage: PropTypes.string,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.string,
        genre: PropTypes.string,
        released: PropTypes.number,
        rating: PropTypes.number,
        ratingCount: PropTypes.number,
        description: PropTypes.string,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              rating: PropTypes.number,
              date: PropTypes.instanceOf(Date),
              // date: PropTypes.string.isRequired,
              author: PropTypes.string,
              review: PropTypes.string
            })
        )
      })
  ),
  onFilmCardClick: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(
      PropTypes.shape({
        comment: PropTypes.string,
        date: PropTypes.string,
        id: PropTypes.number,
        rating: PropTypes.number,
        user: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string
        })
      })
  )
};

const mapStateToProps = (state) => ({
  films: getFilms(state),
  comments: getComments(state)
});

export default connect(mapStateToProps)(FilmPage);
