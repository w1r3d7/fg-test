import React, {Component} from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../error-indicator';

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      error: false
    };
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  render() {
    const {error} = this.state;
    const {children} = this.props;

    if (error) {
      return <ErrorIndicator />;
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};
