import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const titleLinkClickHandler = () => {};

const App = (props) => {
  const {name, genre, year, titles} = props;
  return (
    <Main name={name} genre={genre} year={year} titles={titles}
      onTitleLinkClick={titleLinkClickHandler}
    />
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default App;
