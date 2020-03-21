import React, {PureComponent} from 'react';
import PropTypes from "prop-types";

const withActiveTab = (Component) => {
  class WithActiveTab extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeTab: 0
      };
      this._tabChangehandler = this._tabChangehandler.bind(this);
    }

    _tabChangehandler(tab) {
      this.setState({
        activeTab: tab
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          activeTab={this.state.activeTab}
          onTabChange={this._tabChangehandler}
        />
      );
    }
  }

  withActiveTab.propTypes = {
    activeTab: PropTypes.number,
    onTabChange: PropTypes.func
  };

  return WithActiveTab;
};

export default withActiveTab;
