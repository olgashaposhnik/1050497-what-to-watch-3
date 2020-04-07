import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
// import {ActionCreator} from "../../reducer.js";
import FilmPage from "../film-page/film-page.jsx";
// import VideoPlayer from "../video-player/video-player.jsx"; // пока убрала
import SignIn from "../sign-in/sign-in.jsx";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";

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
    this.props.getComments(activeCard.id);
  }

  videoPlayerHandler() {
    this.setState({
      isVideoPlaying: !this.state.isVideoPlaying
    });
  }

  _renderApp() {
    // const {name, genre, year, films} = this.props;
    const {activeCard, isVideoPlaying} = this.state;

    if (activeCard !== null) {
      return <FilmPage
        film={activeCard}
        // film={this.props.films.find((film) => film.id === activeCard.id)}
        // films={films}
        onFilmCardClick={this.onFilmCardClickHandler}
        isVideoPlaying={isVideoPlaying}
        onExitButtonClick={this.videoPlayerHandler}
        comments={this.comments}
      />;
    }

    return (
      <Main
        // name={name}
        // genre={genre}
        // year={year}
        // films={films}
        activeFilmCard={activeCard && activeCard.id || -1}
        // film={activeCard || films[0]}
        // film={activeCard || films[0]}
        onFilmCardClick={this.onFilmCardClickHandler}
        isVideoPlaying={isVideoPlaying}
        onExitButtonClick={this.videoPlayerHandler}
      />
    );
  }

  render() {
    const {login, authorizationStatus} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/sign-in">
            {authorizationStatus === AuthorizationStatus.NO_AUTH ? (
              <SignIn onSubmit={login} />
            ) : (
              this._renderApp()
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  }
});

App.propTypes = {
  getComments: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
