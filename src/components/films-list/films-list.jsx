import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";

const VIDEO_PLAYER_DELAY = 1000;

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null,
      isPlaying: false
    };

    this.filmCardHoverHandler = this.filmCardHoverHandler.bind(this);
    this.filmCardMouseLeaveHandler = this.filmCardMouseLeaveHandler.bind(this);
    this.filmCardPreviewPlayHandler = this.filmCardPreviewPlayHandler.bind(this);
  }

  filmCardPreviewPlayHandler(activeFilmCard) {
    setTimeout(() => {
      if (this.state.activeFilmCard === activeFilmCard) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, VIDEO_PLAYER_DELAY);
  }

  filmCardHoverHandler(activeFilmCard) {
    this.setState(
        () => ({
          activeFilmCard
        }),
        () => this.filmCardPreviewPlayHandler(activeFilmCard)
    );
  }

  filmCardMouseLeaveHandler() {
    this.setState(() => ({
      activeFilmCard: null,
      isPlaying: false
    }));
  }

  render() {
    const {films, onFilmCardClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => (
          <FilmCard
            key={film.title + index}
            film={film}
            onFilmCardClick={() => onFilmCardClick(film)}
            onFilmCardMouseOver={() => this.filmCardHoverHandler(index)}
            onFilmCardMouseLeave={this.filmCardMouseLeaveHandler}
            isPlaying={
              this.state.activeFilmCard === index && this.state.isPlaying
            }
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
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
      }).isRequired
  ).isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default FilmsList;
