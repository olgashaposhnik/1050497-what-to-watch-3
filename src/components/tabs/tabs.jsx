import React from 'react';
import PropTypes from 'prop-types';
import withActiveTab from '../hocs/with-active-tab/with-active-tab.jsx';
import {connect} from "react-redux";
import {getComments} from "../../reducer/data/selectors.js";

const Tabs = (props) => {
  const {children, activeTab, onTabChange} = props;
  const tabs = children.map((tab, index) => {
    return (
      <li
        key={index}
        className={`movie-nav__item ${index === activeTab ? `movie-nav__item--active` : ``}`}
        onClick={(evt) => {
          evt.preventDefault();
          onTabChange(index);
        }}>
        <a href="#" className="movie-nav__link">{tab.props.name}</a>
      </li>
    );
  });

  return (
    <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs}
        </ul>
      </nav>
      {children[activeTab]}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node.isRequired
  ]).isRequired
};

const mapStateToProps = (state) => ({
  comments: getComments(state)
});

export default connect(mapStateToProps)(withActiveTab(Tabs));
