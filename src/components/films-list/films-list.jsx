import React, {PureComponent} from "react";
import FilmCard from "../film-card/film-card.jsx";
import PropTypes from "prop-types";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedFilm: null
    };

    this.filmCardHoverHandler = this.filmCardHoverHandler.bind(this);
  }

  filmCardHoverHandler(selectedFilm) {
    this.setState({selectedFilm});
  }

  render() {
    const {films, onTitleLinkClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, index) => (
          <FilmCard
            key={film + index}
            film={film}
            onTitleLinkClick={onTitleLinkClick}
            onFilmCardHover={() => this.filmCardHoverHandler(index)}
          />
        ))}
      </div>
    );
  }
}

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired
};

export default FilmsList;
