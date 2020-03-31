import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

const ShowMoreButton = ({films, filmsShowedByStart, showMoreFilms}) => {
  return filmsShowedByStart < films.length ? (
    <button
      className="catalog__button"
      type="button"
      onClick={showMoreFilms}
    >
      Show more
    </button>
  ) : null;
};

const mapStateToProps = (state) => ({
  films: state.films,
  filmsShowedByStart: state.filmsShowedByStart
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

ShowMoreButton.propTypes = {
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
              // date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        ).isRequired
      }).isRequired
  ).isRequired,
  filmsShowedByStart: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
