import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../../reducer.js";
import FilmsList from "../films-list/films-list.jsx";

const ALL_GENRES = `All genres`;

class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  getGenresList(films) {
    return [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  }

  getFilmsByGenre(genre, films) {
    return genre === ALL_GENRES
      ? films
      : films.filter((film) => film.genre === genre);
  }

  render() {
    const {films, genre, changeGenre, onFilmCardClick} = this.props;

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
                }}
              >
                {availableGenre}
              </a>
            </li>
          ))}
        </ul>

        <FilmsList
          films={this.getFilmsByGenre(genre, films)}
          onFilmCardClick={onFilmCardClick}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  }
});

GenresList.propTypes = {
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
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        ).isRequired
      }).isRequired
  ).isRequired,
  genre: PropTypes.string.isRequired,
  changeGenre: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};
export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
