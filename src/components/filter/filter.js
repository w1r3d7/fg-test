import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, Form} from 'react-bootstrap';

const formStyle = {
  width: '40%',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto 30px auto'
};

class Filter extends Component {
  constructor() {
    super();

    this.state = {
      searchValue: ''
    };
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    const {onFilterSearch} = this.props;
    const {searchValue} = this.state;
    onFilterSearch(searchValue.trim().toLowerCase());
  };

  handleResetButtonClick = () => {
    const {onFilterSearch} = this.props;
    this.setState({searchValue: ''});
    onFilterSearch();
  };

  handleSearchInputChange = ({target: {value}}) => {
    this.setState({searchValue: value});
  }

  render() {
    const {searchValue} = this.state;
    return (
        <Form style={formStyle} onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="filter">
            <Form.Label>Write here who you are looking for</Form.Label>
            <Form.Control
                value={searchValue}
                onChange={this.handleSearchInputChange}
                type="text"
                placeholder="First name, last name or maybe a phone? "
            />
          </Form.Group>
          <ButtonGroup>
            <Button type="submit" variant="primary">Search</Button>
            <Button
                onClick={this.handleResetButtonClick}
                type="button"
                variant="secondary">
              Reset</Button>
          </ButtonGroup>
        </Form>
    );
  }
}

Filter.propTypes = {
  onFilterSearch: PropTypes.func.isRequired
};

export default Filter;
