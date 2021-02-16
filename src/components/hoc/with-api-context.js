import React from 'react';
import {ApiConsumer} from '../api-context';


const withApiContext = (Wrapped) => (props) => (
    <ApiConsumer>
      {
        (api) => <Wrapped {...props} api={api} />
      }
    </ApiConsumer>
);

export default withApiContext;
