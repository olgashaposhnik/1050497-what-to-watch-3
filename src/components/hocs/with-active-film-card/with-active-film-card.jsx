import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const VIDEO_PLAYER_DELAY = 1000;

const withActiveFilmCard = (Component) => {
  class WithActiveFilmCard extends PureComponent {
    constructor(props) {
      super(props);

      this.videoPlayerDelay = null;

      this.state = {
        activeFilmCard: props.activeFilmCard,
        isPlaying: false
      };

      this.filmCardHoverHandler = this.filmCardHoverHandler.bind(this);
      this.filmCardMouseLeaveHandler = this.filmCardMouseLeaveHandler.bind(this);
      this.filmCardPreviewPlayHandler = this.filmCardPreviewPlayHandler.bind(this);
    }

    filmCardPreviewPlayHandler(activeFilmCard) {
      this.videoPlayerDelay = setTimeout(() => {
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

    componentWillUnmount() {
      if (this.videoPlayerDelay) {
        clearTimeout(this.videoPlayerDelay);
      }
    }

    render() {
      const {activeFilmCard, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          activeFilmCard={activeFilmCard}
          isPlaying={isPlaying}
          onFilmCardMouseOver={this.filmCardHoverHandler}
          onFilmCardMouseLeave={this.filmCardMouseLeaveHandler}
        />
      );
    }
  }

  WithActiveFilmCard.propTypes = {
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
    onFilmCardClick: PropTypes.func.isRequired,
    activeFilmCard: PropTypes.number,
  };

  return WithActiveFilmCard;
};

export default withActiveFilmCard;

