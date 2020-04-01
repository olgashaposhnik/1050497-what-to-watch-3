import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer.js";
import FilmPage from "../film-page/film-page.jsx";
// import VideoPlayer from "../video-player/video-player.jsx"; // пока убрала

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
      isVideoPlaying: false
    };

    this.onFilmCardClickHandler = this.onFilmCardClickHandler.bind(this);
    this.videoPlayerHandler = this.videoPlayerHandler.bind(this);
  }

  onFilmCardClickHandler(activeCard) {
    this.setState({activeCard});
  }

  videoPlayerHandler() {
    this.setState({
      isVideoPlaying: !this.state.isVideoPlaying
    });
  }

  _renderApp() {
    const {name, genre, year, films} = this.props;
    const {activeCard, isVideoPlaying} = this.state;

    if (activeCard !== null) {
      return <FilmPage
        film={this.props.films.find((film) => film.id === activeCard.id)}
        films={films}
        onFilmCardClick={this.onFilmCardClickHandler}
        isVideoPlaying={isVideoPlaying}
        onExitButtonClick={this.videoPlayerHandler}
      />;
    }

    return (
      <Main
        name={name}
        genre={genre}
        year={year}
        films={films}
        activeFilmCard={activeCard && activeCard.id || -1}
        film={activeCard || films[0]}
        onFilmCardClick={this.onFilmCardClickHandler}
        isVideoPlaying={isVideoPlaying}
        onExitButtonClick={this.videoPlayerHandler}
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
          {/* <Route exact path="/dev-video-player">
            <VideoPlayer
              autoPlay={false}
              muted={true}
              // film={this.state.activeCard} // проверить
              // film={this.props.films.find((film) => film.id === this.state.activeCard.id)}
            />
          </Route> */}
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
              // date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              review: PropTypes.string.isRequired
            })
        ).isRequired
      }).isRequired
  ).isRequired,
};

export {App};
export default connect(mapStateToProps)(App);
