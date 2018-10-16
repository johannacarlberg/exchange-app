import React from 'react';
import PropTypes from 'prop-types';

const FromCurrency = ({currency, value}) => (
    <div>{`From ${currency} - ${value}`}</div>
);

FromCurrency.defaultProps = {
    currency: 'GBP',
    value: 0
  };
  
  FromCurrency.propTypes = {
    currency: PropTypes.string.isRequired,
    value: PropTypes.number,
  };

export default FromCurrency;