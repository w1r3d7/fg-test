import PropTypes from 'prop-types';

const personType = PropTypes.shape({
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.shape({
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    streetAddress: PropTypes.string.isRequired,
    zip: PropTypes.string.isRequired,
  })
});

export {
  personType
};
