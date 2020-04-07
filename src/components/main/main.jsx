import React from "react";
import PropTypes from "prop-types";
// import FilmsList from "../films-list/films-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import VideoPlayer from "../video-player/video-player.jsx";
import {connect} from "react-redux";
import {getMainFilm} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const Main = (props) => {
  const {onFilmCardClick, isVideoPlaying, onExitButtonClick, mainFilm, authorizationStatus} = props;
  return isVideoPlaying ? (
    <VideoPlayer
      onExitButtonClick={onExitButtonClick}
      film={mainFilm}
      autoPlay={false}
      muted={true}
    />
  ) : (
    <div>
      <div className="visually-hidden">
        {/* inject:svg */}<svg xmlns="http://www.w3.org/2000/svg" xmlnsxlinkhref="http://www.w3.org/1999/xlink"><symbol id="add" viewBox="0 0 19 20">
          {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
          <title>+</title>
          <desc>Created with Sketch.</desc>
          <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <polygon id="+" fill="#EEE5B5" points="10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" />
          </g>
        </symbol><symbol id="full-screen" viewBox="0 0 27 27">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
          <path fillRule="evenodd" clipRule="evenodd" d="M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z" fill="#FFF9D9" fillOpacity="0.7" />
        </symbol><symbol id="in-list" viewBox="0 0 18 14">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z" fill="#EEE5B5" />
        </symbol><symbol id="pause" viewBox="0 0 14 21">
          {/* Generator: Sketch 52.2 (67145) - http://www.bohemiancoding.com/sketch */}
          <title>Artboard</title>
          <desc>Created with Sketch.</desc>
          <g id="Artboard" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" />
            <polygon id="Line" fill="#EEE5B5" fillRule="nonzero" points="10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" />
          </g>
        </symbol></svg>{/* endinject */}
      </div>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={mainFilm.background_image} alt={mainFilm.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="user-block">
            {authorizationStatus === AuthorizationStatus.AUTH ? (
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            ) : (
              <a href="#" className="user-block__link">
                Sign in
              </a>
            )}
          </div>
        </header>
        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={mainFilm.poster_image} alt={mainFilm.name} width={218} height={327} />
            </div>
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{mainFilm.released}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{mainFilm.genre}</span>
                <span className="movie-card__year">{mainFilm.released}</span>
              </p>
              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onExitButtonClick}>
                  <svg viewBox="0 0 19 19" width={19} height={19}>
                    <use xlinkHref="#play-s" />
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width={19} height={20}>
                    <use xlinkHref="#add" />
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList onFilmCardClick={onFilmCardClick} activeFilmCard={props.activeFilmCard} onExitButtonClick={onExitButtonClick}/>
          <div className="catalog__more">
            <ShowMoreButton />
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
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
    </div>
  );
};

Main.propTypes = {
  // name: PropTypes.string.isRequired,
  // genre: PropTypes.string.isRequired,
  // year: PropTypes.number.isRequired,
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
      })
  ),
  onFilmCardClick: PropTypes.func.isRequired,
  isVideoPlaying: PropTypes.bool.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.number,
  mainFilm: PropTypes.shape({
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
  authorizationStatus: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  mainFilm: getMainFilm(state),
  authorizationStatus: getAuthorizationStatus(state)
});

export default connect(mapStateToProps)(Main);
