import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer/state/state.js";
import FilmsList from "../films-list/films-list.jsx";
import withActiveFilmCard from "../hocs/with-active-film-card/with-active-film-card.jsx";
import {getGenre, getFilmsShowedByStart} from "../../reducer/state/selectors.js";
import {getFilms, getFilmsByGenre} from "../../reducer/data/selectors.js";

const FilmsListWrapped = withActiveFilmCard(FilmsList);

const ALL_GENRES = `All genres`;

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getGenresList(films) {
    return [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  }

  // getFilmsByGenre(genre, films) {
  //   const {filmsShowedByStart} = this.props;

  //   return genre === ALL_GENRES
  //     ? films.slice(0, filmsShowedByStart)
  //     : films.filter((film) => film.genre === genre).slice(0, filmsShowedByStart);
  // }

  render() {
    const {films, genre, changeGenre, onFilmCardClick, returnShowedFilmsToStart, filteredFilms} = this.props;

    return (
      <>
        <ul className="catalog__genres-list">
          {this.getGenresList(films).map((availableGenre, index) => (
            <li
              className={`catalog__genres-item ${
                genre === availableGenre ? `catalog__genres-item--active` : ``
              }`}
              key={availableGenre + index}
            >
              <a
                className="catalog__genres-link"
                onClick={() => {
                  changeGenre(availableGenre);
                  returnShowedFilmsToStart();
                }}
              >
                {availableGenre}
              </a>
            </li>
          ))}
        </ul>

        <FilmsListWrapped
          // films={this.getFilmsByGenre(genre, films)}
          films={filteredFilms}
          onFilmCardClick={onFilmCardClick}
          activeFilmCard={this.props.activeFilmCard}
          onExitButtonClick={this.props.onExitButtonClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  genre: getGenre(state),
  films: getFilms(state),
  filteredFilms: getFilmsByGenre(state),
  filmsShowedByStart: getFilmsShowedByStart(state)
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
  returnShowedFilmsToStart() {
    dispatch(ActionCreator.returnShowedFilmsToStart());
  }
});

GenresList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        fullImage: PropTypes.string,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.number,
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
  filteredFilms: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        image: PropTypes.string,
        fullImage: PropTypes.string,
        director: PropTypes.string,
        starring: PropTypes.arrayOf(PropTypes.string),
        duration: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.number,
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
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  filmsShowedByStart: PropTypes.number.isRequired,
  returnShowedFilmsToStart: PropTypes.func.isRequired,
  activeFilmCard: PropTypes.number,
  onExitButtonClick: PropTypes.func.isRequired,
};

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
