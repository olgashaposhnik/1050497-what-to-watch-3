import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/state/state.js";
import {getFilms} from "../../reducer/data/selectors.js";
import {getFilmsShowedByStart} from "../../reducer/state/selectors.js";

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
  films: getFilms(state),
  filmsShowedByStart: getFilmsShowedByStart(state)
});

const mapDispatchToProps = (dispatch) => ({
  showMoreFilms() {
    dispatch(ActionCreator.showMoreFilms());
  }
});

ShowMoreButton.propTypes = {
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
  filmsShowedByStart: PropTypes.number.isRequired,
  showMoreFilms: PropTypes.func.isRequired,
};

export {ShowMoreButton};
export default connect(mapStateToProps, mapDispatchToProps)(ShowMoreButton);
