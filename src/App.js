import React from 'react';
import PropTypes from 'prop-types';
import {Container} from 'react-bootstrap';
import {connect} from 'react-redux';

import Header from './components/header';
import SelectDataType from './components/select-data-type';
import {MainPage} from './components/pages';


const App = ({dataType}) => (
  <Container>
    <Header />
    {dataType ?
        <MainPage />
        :
        <SelectDataType />
    }
  </Container>
);

App.propTypes = {
  dataType: PropTypes.bool.isRequired,
};

const mapStateToProps = ({dataType}) => ({dataType});

export default connect(mapStateToProps)(App);
