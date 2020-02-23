import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleLinkClickHandler = (evt) => {
  evt.preventDefault();
};

const App = (props) => {
  const {name, genre, year, films} = props;
  return (
    <Main name={name} genre={genre} year={year} films={films}
      onTitleLinkClick={titleLinkClickHandler}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
};

export default App;
