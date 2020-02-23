import React from "react";
import PropTypes from "prop-types";

const FilmCard = ({film, onTitleLinkClick, onFilmCardHover}) => {
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={onFilmCardHover}
    >
      <div className="small-movie-card__image">
        <img src={film.image} alt={film.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onTitleLinkClick}>
        <a className="small-movie-card__link" href="movie-page.html">
          {film.title}
        </a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  onTitleLinkClick: PropTypes.func.isRequired,
  onFilmCardHover: PropTypes.func.isRequired
};

export default FilmCard;
