import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer.js";
import FilmPage from "../film-page/film-page.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this.onFilmCardClickHandler = this.onFilmCardClickHandler.bind(this);
  }

  onFilmCardClickHandler(activeCard) {
    this.setState({activeCard});
  }

  _renderApp() {
    const {name, genre, year, films} = this.props;
    const {activeCard} = this.state;

    if (activeCard !== null) {
      return <FilmPage
        film={this.props.films.find((film) => film.id === activeCard.id)}
        films={films}
        onFilmCardClick={this.onFilmCardClickHandler}
      />;
    }

    return (
      <Main
        name={name}
        genre={genre}
        year={year}
        films={films}
        onFilmCardClick={this.onFilmCardClickHandler}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="//dev-film-page">
            {/* <FilmPage
              film={this.props.films[this.state.activeCard || 0]}
              onFilmCardClick={this.onFilmCardClickHandler}
            /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCard: state.activeCard
});

// const mapDispatchToProps = (dispatch) => ({
// });

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
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
};

export {App};
export default connect(mapStateToProps)(App);
