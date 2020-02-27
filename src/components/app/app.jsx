import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import FilmDetails from "../film-details/film-details.jsx";

const filmCardHoverHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null
    };

    this._onFilmCardClickHandler = this._onFilmCardClickHandler.bind(this);
  }

  _onFilmCardClickHandler(card) {
    this.setState({activeCard: card});
  }

  _renderMain() {
    const {name, genre, year, films, filmDetails} = this.props;
    const {activeCard} = this.state;

    if (!activeCard) {
      return (
        <Main
          name={name}
          genre={genre}
          year={year}
          films={films}
          onFilmCardClick={this._onFilmCardClickHandler}
          onFilmCardHover={filmCardHoverHandler}/>
      );
    }

    if (activeCard) {
      return (
        <FilmDetails
          filmDetails={filmDetails}
        />
      );
    }
    return null;
  }

  render() {
    const {filmDetails} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderMain()}
          </Route>
          <Route exact path="//dev-film"> // проверить это!!!
            <FilmDetails
              filmDetails={filmDetails}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  filmDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    fullImage: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired
};

export default App;
